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

  async function register(username, password) {
    const already = await client.query({
      text: "SELECT username FROM users WHERE username=$1 LIMIT 1",
      values: [username]
    })

    if (already.rowCount === 1) {
      res.status(401).json({ message: 'User already registered' })
      return
    }
    else {
      const hash = await bcrypt.hash(password, 10);

      client.query({
        text:"INSERT INTO users(username, password) VALUES ($1,$2);",
        values: [username,hash]
      })

      res.status(200).json({ message: 'SUCCESS !'})
      return
    }


  }

})

//Login
router.post('/login', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  async function checkValidity(username, password) {
    const CheckUser = await client.query({
      text: "SELECT * WHERE username=$1 LIMIT 1",
      values: [username],
    });

    if(CheckUser.rowCount === 0) {
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
        return
      } else {
        res.status(401).json({ message: 'go out !' })
        return
      }
    }
  }

})

module.exports = router
