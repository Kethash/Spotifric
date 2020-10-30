<template>
  <div class="hero">
    <div class="form-box">
      <div class="button-box">
        <div id="btn"></div>
        <button type="button" class="toggle-btn" @click="login">
          connecter
        </button>
        <button type="button" class="toggle-btn" @click="register">
          s'enregister
        </button>
      </div>

      <form id="login" class="input-group">
        <input
          type="text"
          class="input-field"
          placeholder="Utilisateur"
          required
        />
        <input
          type="password"
          class="input-field"
          placeholder="Mot de passe"
          required
        />
        <input type="checkbox" class="chech-box" />
        <span> se souvenir du mot de passe </span>
        <button type="continuer" class="continuer-btn">connecter</button>
      </form>

      <form id="register" class="input-group">
        <input
          type="text"
          class="input-field"
          placeholder="Utilisateur"
          required
        />
        <input
          type="email"
          class="input-field"
          placeholder="user@gmail.com"
          required
        />
        <input
          type="password"
          class="input-field"
          placeholder="Mot de passe"
          required
        />
        <input type="checkbox" class="chech-box" required />
        <span> j'accèpte les termes et conditions </span>
        <button type="continuer" class="continuer-btn">créer un compte</button>
      </form>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      newUser: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    register() {
      var x = document.getElementById("login");
      var y = document.getElementById("register");
      var z = document.getElementById("btn");
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "110px";
    },
    login() {
      var x = document.getElementById("login");
      var y = document.getElementById("register");
      var z = document.getElementById("btn");
      x.style.left = "50px";
      y.style.left = "450px";
      z.style.left = "0px";
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.hero {
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
}

.form-box {
  width: 380px;
  height: 480px;
  position: relative;
  margin: 6% auto;
  background: #75DEAA;
  padding: 5px;
  overflow: hidden;
}

.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px lightgreen;
  border-radius: 30px;
}

.toggle-btn {
  padding: 10px 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}

#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 110px;
  height: 100%;
  background: linear-gradient(to right, #74A515, #9FEB0A);
  border-radius: 30px;
  transition: 0.5s;
}

.input-group {
  top: 180px;
  position: absolute;
  width: 280px;
}

.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
}

.continuer-btn {
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: linear-gradient(to right, #74A515, #9FEB0A);
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
