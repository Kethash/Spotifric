const express = require('express')
const router = express.Router()

const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');

const bcrypt = require('bcrypt')
const { Client } = require('pg');
const { defaultMaxListeners } = require('stream');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: 'lolipop1',
  database: 'projet'
})

client.connect();


let playlists = {
  "musiques": []
}



router.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  async function register(username, password) {
    const alreadyname = await client.query({
      text: "SELECT username FROM users WHERE username=$1 LIMIT 1",
      values: [username]
    })

    const alreadyemail = await client.query({
      text: "SELECT email FROM users WHERE email=$1 LIMIT 1",
      values: [email]
    })

    if (alreadyname.rowCount === 1) {
      res.status(401).json({ message: 'Utilisateur déjà enregistré' })
      return
    }

    if (alreadyemail.rowCount === 1) {
      res.status(401).json({ message: 'L\'adresse email est déjà utilisée' })
      return
    }

    else {
      const hash = await bcrypt.hash(password, 10);

      let playlists = {
        "musiques": []
      }

      client.query({
        text: "INSERT INTO users(username, email, password, money, playlists) VALUES ($1,$2,$3,$4,$5);",
        values: [username, email, hash, 1500, playlists]
      })

      res.status(200).json({ message: 'SUCCESS !' })
      return
    }

  }

  register(username, password);
})

//Login
router.post('/login', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  async function checkValidity(username, password) {
    const checkUser = await client.query({
      text: "SELECT * from users WHERE username=$1 LIMIT 1",
      values: [username],
    });

    //console.log(checkUser);

    if (checkUser.rowCount === 0) {
      res.status(404).json({ message: 'L\'utilisateur n\'existe pas' });
      return
    }
    else if (req.session.userId === checkUser.rows[0].id) {
      res.status(401).json({ message: 'Vous êtes déjà connecté !' })
      return
    }
    else {
      const hashed_password = checkUser.rows[0].password;

      if (await bcrypt.compare(password, hashed_password)) {
        req.session.userId = checkUser.rows[0].id;
        res.status(200).json({ message: 'User logged successfully' })
        return true;
      } else {
        res.status(401).json({ message: 'go out !' })
        return
      }
    }
  }

  checkValidity(username, password);
})

router.get('/me', (req, res) => {

  const userId = req.session.userId;

  async function whoAmI(userId) {
    const checkUser = await client.query({
      text: "SELECT username, email, money FROM users WHERE id=$1 LIMIT 1",
      values: [userId],
    })

    if (!userId) {
      res.status(401).json({ message: 'Vous n\'êtes pas connecté' });
      return
    }
    else {
      const Username = checkUser.rows[0].username;
      req.session.username = Username;
      req.session.email = checkUser.rows[0].email;
      req.session.money = checkUser.rows[0].money;
      res.status(200).json({ message: `Vous êtes : ${Username}`, username: Username, email: req.session.email, money: req.session.money });
      return
    }

  }

  whoAmI(userId);
})

router.delete('/logout', (req, res) => {

  if (req.session.userId) {
    req.session.destroy();

    res.status(200).json({ message: 'User logged out successfully !' });
  } else {
    res.status(404).json({ message: 'Vous n\'êtes pas connecté ! ' });
  }


  return;

})

router.post('/ytdownload', (req, res) => {

  const file = './client/components/mp3/' + req.body.audio.title + '.mp3';

  if (fs.existsSync(file)) {
    res.status(200).json({ message: 'File already exists !' });
    return
  } else {

    const write = fs.createWriteStream(file, {
      flags: 'w'
    });

    ffmpeg().input(ytdl(req.body.audio.music)).toFormat('mp3').noVideo().pipe(write);

    write.on('finish', () => {
      res.status(200).json({ message: 'Sucess !' });
      req.session.write = write;
    })
  }

  if (req.session.write) {
    req.session.write.close();
  }

  return;
})


router.post('/upload', async (req, res) => {

  const UserId = req.session.userId;



  let new_music = {
    title: req.body.title,
    music: req.body.music,
    image: req.body.image
  }

  //console.log(req.body.list);

  //console.log(req.session.userId);

  if (!UserId) {
    res.status(404).json({ message: "User not found !" });
  } else {

    try {

      console.log(req.session.playlists);

      let playlist = req.session.playlists;

      req.session.playlists.musiques.push(new_music)
      const sql = "UPDATE users SET playlists=$1 WHERE id=$2 RETURNING *";
      const new_playlist = await client.query({
        text: sql,
        values: [playlist, UserId]
      })

      //console.log(new_playlist.rows[0]);
      console.log(req.session.playlists);

      req.session.playlists = new_playlist.rows[0].playlists;

      res.status(200).json({ message: 'La playlist a bien été ajoutée', data: new_playlist })
    } catch (err) {
      res.status(502).json({ err })
    }

  }
})

router.get('/user/playlists', (req, res) => {

  const userID = req.session.userId;

  async function getPlaylists(userID) {

    const sql = "SELECT playlists FROM users WHERE id=$1"

    const data = await client.query({
      text: sql,
      values: [userID],
    })

    playlists = data.rows[0].playlists;

    req.session.playlists = playlists;

    //console.log(req.session.playlists);




    res.status(200).json({ message: 'Playlist gathered !', data: data.rows[0].playlists });


  }

  if (userID) {

    getPlaylists(userID);

  } else {
    res.status(401).json({ message: 'User not found' });
  }

})


router.get('/user/playlists/:nom', async (req, res) => {

  const titre = req.params.nom;
  const userID = req.session.userId;

  //console.log(req.session.playlists);

  if (!userID) {
    res.status(404).json({ message: 'Utilisateur introuvable !' })
  } else {

    try {
      const table = await client.query({
        text: `SELECT value
      FROM users u, json_array_elements(u.playlists->'musiques') obj 
      WHERE (obj->>'title' = $1 AND id=$2);`,
        values: [titre, userID]
      })

      const recup = table.rows[0].value;

      res.status(200).json({ recup });
    } catch (err) {
      res.status(401).json({ message: 'Erreur, titre introuvable !' })
    }

  }



})

router.delete('/user/playlists/:nom', async (req, res) => {

  const titre = req.params.nom;
  const userID = req.session.userId;
  if (userID) {
    let initial_playlist = await client.query({
      text: `SELECT playlists
      FROM users where id=$1;`,
      values: [userID]
    })

    playlists = initial_playlist.rows[0].playlists;

    req.session.playlists = playlists;

    //On récupère ce que l'utilisateur veut supprimer
    const table = await client.query({
      text: `SELECT value
      FROM users u, json_array_elements(u.playlists->'musiques') obj 
      WHERE (obj->>'title' = $1 AND id=$2);`,
      values: [titre, userID]
    })

    const recup = table.rows[0].value;

    index = playlists.musiques.findIndex(x => (x.title == recup.title && x.music == recup.music));

    playlists.musiques.splice(index, 1)
    //console.log(index);

    req.session.playlists = playlists;

    //console.log(req.session.playlists);

    const t_updated = await client.query({
      text: `UPDATE users SET playlists=$1 WHERE id=$2 RETURNING *`,
      values: [playlists, userID]
    })

    console.log(t_updated.rows[0].playlists);

    req.session.playlists = t_updated.rows[0].playlists;

    res.status(200).json({ message: 'Trouvé !', data: { recup, playlists } });
  } else {
    res.status(404).json({ message: 'User not found !' });
  }



})

router.put('/user/playlists', (req, res) => {
  const userID = req.session.userId;

  const playlists = req.body.playlist;

  try {

    client.query({
      text: `UPDATE users SET playlists=$1 WHERE id=$2`,
      values: [playlists, userID]
    })

    res.status(200).json({ message: 'YES !' })

  } catch (err) {
    res.status(404).json({ message: 'FAIL !' });
  }


})

router.put('/pay', async (req, res) => {
  const userID = req.session.userId;
  const money = req.body.money;

  try {
    const argent = await client.query({
      text: "UPDATE users SET money=$1 WHERE id=$2 RETURNING money",
      values: [money, userID]
    })

    console.log(argent.rows[0]);

    res.status(200).json({ message: 'Votre argent a bien été débité', data: argent.rows[0] });
  } catch (err) {
    res.status(502).json({ err });
  }
})

router.put('/user/setbox/:id', async (req,res) => {
  let title = req.body.title;
  let music = req.body.music;
  let image = req.body.image;

  var index = req.params.id;

  console.log(music);

  const userID = req.session.userId;

  if (userID) {
    let initial_playlist = await client.query({
      text: `SELECT playlists
      FROM users where id=$1;`,
      values: [userID]
    })

    playlists = initial_playlist.rows[0].playlists;

    req.session.playlists = playlists;

    let box = {
      title : title,
      music : music,
      image : image,
    };
    

    playlists.musiques[index] = box;
    //console.log(index);

    req.session.playlists = playlists;

    //console.log(req.session.playlists);

    const t_updated = await client.query({
      text: `UPDATE users SET playlists=$1 WHERE id=$2 RETURNING *`,
      values: [playlists, userID]
    })

    console.log(t_updated.rows[0].playlists);

    req.session.playlists = t_updated.rows[0].playlists;

    res.status(200).json({ message: 'Trouvé !', data: { playlists } });
  } else {
    res.status(404).json({ message: 'User not found !' });
  }

})

module.exports = router
