<template>
  <div>
    <div class="main">
      <div class="navigation">
        <nav class="sidebar">
          <h1>Playlists</h1>
          <div v-for="playlist in this.playlists" :key="playlist.titre">
              <div class="list">{{  playlist.titre  }}</div>
          </div>
        </nav>

        <nav class="display_list"></nav>
      </div>
      <div class="footer">
          <div class="play_bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
        playlists: [
            { titre : "Playlist 1", contenu : null},
            { titre : "Playlist 2", contenu : null},
        ]
    };
  },

  methods: {},
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  position: fixed;
}

.navigation {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
}

.sidebar {
  height: 100%;
  width: 20%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.sidebar h1 {
    font-size: 40px;
    user-select:none; /* Permet de ne pas sélectionner le texte */
    -moz-user-select:none;
    -webkit-user-select:none;
}

.sidebar h1:hover {
    cursor: default;
}

.sidebar div {
    font-size: 20px;
    margin-bottom: 5px;
    user-select:none; /* Permet de ne pas sélectionner le texte */
    -moz-user-select:none;
    -webkit-user-select:none;
}

.list:hover{
    color: lightgreen;
    cursor: pointer;
}

.display_list {
  background-color: rgb(49, 49, 49);
  height: 100%;
  width: 80%;
}

.footer {
  background-color: rgb(80, 80, 80);
  height: 20%;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  

}
</style>