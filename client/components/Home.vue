<template>
  <div class="main">
    <!--
    <div class="Astronomia">
      <img src="coffin_dance.jpg" alt="" />
    </div>
    -->

    <div class="hd">Ressentez la musique</div>

    <div class="content">
      <em>
        Le seul et unique endroit ou vous pouvez <br />
        vous plonger dans un monde rempli de musiques <br />
        venez decouvrir plus de 10000 titres pour tous les gouts...
      </em>
    </div>
    <div class="venez" @click="rejoindre">Rejoignez Nous</div>

    <div class="hero" v-if="registering">
      <div class="form-box">
        <div class="button-box">
          <div id="btn"></div>
          <button type="button" class="toggle-btn" @click="login_btn">
            connecter
          </button>
          <button type="button" class="toggle-btn" @click="register_btn">
            s'enregister
          </button>
        </div>

        <form id="login" class="input-group" @submit.prevent="try_login">
          <input
            type="text"
            class="input-field"
            placeholder="Utilisateur"
            v-model="logs.username"
            required
          />
          <input
            type="password"
            class="input-field"
            placeholder="Mot de passe"
            v-model="logs.password"
            required
          />
          <input type="checkbox" class="chech-box" />
          <span> se souvenir du mot de passe </span>
          <button type="submit" class="continuer-btn">connecter</button>
        </form>

        <form id="register" class="input-group" @submit.prevent="try_register">
          <input
            type="text"
            class="input-field"
            placeholder="Utilisateur"
            v-model="newUser.username"
            required
          />
          <input
            type="email"
            class="input-field"
            placeholder="user@gmail.com"
            v-model="newUser.email"
            required
          />
          <input
            type="password"
            class="input-field"
            placeholder="Mot de passe"
            v-model="newUser.password"
            required
          />
          <input type="checkbox" class="chech-box" required />
          <span> j'accèpte les termes et conditions </span>
          <button type="submit" class="continuer-btn">créer un compte</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
        islogged: { type: Boolean }
  },

  data() {
    return {
      registering: false,

      newUser: {
        username: "",
        password: "",
        email:"",
      },

      logs: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    rejoindre() {
      this.registering = !this.registering;
    },

    register_btn() {
      var x = document.getElementById("login");
      var y = document.getElementById("register");
      var z = document.getElementById("btn");
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "110px";
    },
    login_btn() {
      var x = document.getElementById("login");
      var y = document.getElementById("register");
      var z = document.getElementById("btn");
      x.style.left = "50px";
      y.style.left = "450px";
      z.style.left = "0px";
    },

    try_login() {
      this.$emit("login-user", this.logs);
    },

    try_register() {
      this.$emit("register-user", this.newUser);
    },

  },
};
</script>

<style scoped>



.main {
  margin-left: 5%;
  margin-right: 25%;
  margin-top: 5%;
}

.Astronomia {
  position: absolute;
  top: 160px;
  left: 38%;
}

.hd {
  /*position: absolute;*/
  color: #0c783a;
  top: 240px;
  left: 40px;
  font-size: 45px;
  font-family: fantasy;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

img {
  height: 550px;
}

.content {
  /*position: absolute;*/
  top: 320px;
  left: 40px;
  color: #ececec;
  font-size: 25px;
  letter-spacing: 0.03em;
  margin-top: 5%;
  font-family: sans-serif;
}

.venez {
  /*position: absolute;*/
  top: 455px;
  left: 40px;
  text-decoration: none;
  padding: 15px 30px;
  font-weight: 600;
  font-size: 20px;
  border: 5px solid #09d86f;
  border-radius: 25px;
  transition: 0.5s;
  transition-property: background;
  color: #000000;
  width: 140px;
  text-align: center;
  background: #59eb8b;
  margin-top: 8%;
  font-family: sans-serif;
}

.venez:hover {
  background: #2fde86;
  color: #e7e410;
}

* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.hero {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-position: center;
  background-size: cover;
  position: absolute;
}

.form-box {
  width: 430px;
  height: 665px;
  position: relative;
  margin: 15% auto;
  background: white;
  padding: 5px;
  border-radius: 50px;
  overflow: hidden;
}

.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 5px #f1c215;
  border-radius: 30px;
}

.toggle-btn {
  padding: 20px 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  text-align: center;
}

#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 110px;
  height: 100%;
  background: linear-gradient(to right, #bfbd09, #eeec1a);
  border-radius: 30px;
  transition: 0.15s;
}

.input-group {
  top: 180px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
}

.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 30px 0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 1px ridge #f3d050;
  outline: none;
  background: transparent;
}

.continuer-btn {
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: linear-gradient(to right, #bfbd09, #eeec1a);
  border: 0;
  outline: none;
  border-radius: 30px;
}

.chech-box {
  margin: 30px 10px 30px 0;
}

span {
  color: #777;
  font-size: 12px;
  bottom: 68px;
  position: absolute;
}

#login {
  left: 50px;
}

#register {
  left: 450px;
}

</style>
