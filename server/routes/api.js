const express = require('express')
const router = express.Router()

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
      text: "SELECT email FROM users WHERE id=$1 LIMIT 1",
      values: [userId],
    })

    if (!userId) {
      res.status(401).json({ message: 'Vous n\'êtes pas connecté' });
      return
    }
    else {
      const Username = checkUser.rows[0].email;
      req.session.username = Username;
      res.status(200).json(Username);
      return
    }

  }

  whoAmI(userId);
})


module.exports = router
