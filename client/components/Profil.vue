<template>
  <div class="main">
    <article class="left_panel">
      <div>Informations</div>
    </article>
    <article class="right_panel">

        <div> <h2>Vos informations personnels </h2> </div>
        <div class="rp_content">
            
            <article>
                <div><h2> Nom d'utilisateur </h2> </div> <div> <input class="case" v-model="userData.username" value="46"></div>
            </article>
            <article>
                <div> <h2> E-mail </h2> </div> <div> <input class="case" v-model="userData.email"> </div>
            </article>
            <article>
                <div> <h2> Mot de passe </h2> </div> <div> <button class="changer_mdp">Changer</button> </div>
            </article>

        </div>
        <button @click="logout">Déconnexion</button>
    </article>
  </div>
</template>

<script>
module.exports = {
  props: {
    islogged: { type: Boolean },
    user: { type: Object }
  },

  data() {
    return {
        userData : {
            username : this.user.username,
            email : this.user.email,
        },
    };
  },

  async mounted() {
      this.userData = this.user;
  },

  methods: {
    logout() {
      this.$emit("logout");
      this.userData.username = null;
      this.userData.email = null;
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 800px;
  background-color: rgb(187, 187, 187);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

button {
  width: 200px;
  height: 30px;
  border: 0.5px solid;
  border-color: rgb(255, 139, 139);
  border-radius: 20px;
  transition: 0.3s;
  color: rgb(255, 49, 49);
}

button:focus {
  outline: none;
}

button:hover {
  background-color: rgb(255, 97, 97);
  transition: 0.3s;
}

.changer_mdp{
    background-color: gray;
    color: rgb(0, 0, 0);
    border-color: rgb(92, 92, 92);
}

.changer_mdp:hover{
    background-color: rgb(80, 80, 80);
    transition: 0.3s;
}

article {
  height: 85%;
  display: flex;
}

.left_panel {
    width: 25%;
    background-color: black;
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right_panel {
    width: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.left_panel div {
    font-size: 45px;
    text-align: center;
}

.left_panel div:hover {
    color: rgb(103, 238, 103);
}

.rp_content {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;

    
}

.rp_content article {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.rp_content article div {
    width: 100%;
    display: flex;
}

.rp_content article div h2 {
    margin-left: 50px;
}

.case {
    height: 15px;
    border: none;
    border-bottom: 0.2px solid rgb(172, 172, 172);
    transition: 0.2s;
}

input:focus {
  outline: none;
  border-bottom: 0.2px solid rgb(99, 255, 99);
  transition: 0.2s;
}
</style>