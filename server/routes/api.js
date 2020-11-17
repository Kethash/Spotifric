const express = require('express')
const router = express.Router()

const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');

const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: 'lolipop',
 database: 'Projet'
})

client.connect();

router.post('/register', (req,res) => {
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

      client.query({
        text:"INSERT INTO users(username, email, password, money) VALUES ($1,$2,$3,$4);",
        values: [username, email, hash, 1500]
      })

      res.status(200).json({ message: 'SUCCESS !'})
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

    if(checkUser.rowCount === 0) {
      res.status(404).json({message: 'L\'utilisateur n\'existe pas'});
      return
    }
    else if (req.session.userId === checkUser.rows[0].id) {
      res.status(401).json({ message: 'Vous êtes déjà connecté !' })
      return
    }
    else {
      const hashed_password = checkUser.rows[0].password;

      if (await bcrypt.compare(password, hashed_password))
      {
        req.session.userId  = checkUser.rows[0].id;
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
      text: "SELECT username, email FROM users WHERE id=$1 LIMIT 1",
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
      res.status(200).json({ message : `Vous êtes : ${Username}`, username: Username , email: req.session.email});
      return
    }

  }

  whoAmI(userId);
})

router.delete('/logout', (req, res) => {

  if(req.session.userId) {
    req.session.destroy();

    res.status(200).json({ message: 'User logged out successfully !'});
  } else {
    res.status(404).json({ message: 'Vous n\'êtes pas connecté ! '});
  }
  

  return;

})

router.post('/ytdownload', (req, res) => {

  const file = './client/components/mp3/' + req.body.audio.title + '.mp3';

  if(fs.existsSync(file)) {
    res.status(200).json({message: 'File already exists !'});
    return
  } else {
    
    const write = fs.createWriteStream(file, { 
      flags : 'w'});

    ffmpeg().input(ytdl(req.body.audio.music)).toFormat('mp3').noVideo().pipe(write);

    write.on('finish', () => {
      res.status(200).json({message: 'Sucess !'});
      req.session.write = write;
    })
  }

  if(req.session.write) {
    req.session.write.close();
  }
  
  return;
})


router.post('/upload', (req, res) => {
  
  const UserId = req.session.userId;

  console.log(req.body.list);

  console.log(req.session.userId);

  if(!req.session.userId){
    res.status(404).json({message: "User not found !"});
  } else {

    async function add (list, UserId) {
      const sql = "UPDATE users SET playlists=$1 WHERE id=$2";
      await client.query({
        text: sql,
        values: [list, UserId]
      })

      res.status(200).json({ message: 'La playlist a bien été ajoutée' })
    }
    
    add(req.body.list, UserId);
  }

  

})

module.exports = router
