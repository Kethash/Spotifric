<template>
  <div>
    <div class="main">
      <div class="navigation">
        <nav class="sidebar">
          <h1>Playlists</h1>
          <div v-for="playlist in this.playlists" :key="playlist.titre">
            <div class="list" @click="change_list(playlist)">
              {{ playlist.titre }}
            </div>
          </div>

          <button id="ajout" @click="show = !show" >Ajouter Musique </button>

          <form @submit.prevent="addmusique" id="addForm" v-if="show">

            <input 
              type="text"
              placeholder="titre"
              v-model="add.title"
              required
            />
            <input 
              type="text"
              placeholder="Lien de la musique (YouTube ou autre)"
              v-model="add.music"
              required
            />

            <input 
              type="text"
              placeholder="Lien de l'image (optionnel)"
              v-model="add.image"
            />

            <button type="submit">Ajouter</button>
            

          </form>
        </nav>

        <nav class="display_list">
          <div
            @click="play(box)"
            class="musicbox"
            v-for="box in this.current_list"
            :key="box.title"
          >
            <div>
              {{ box.title }}
            </div>
            <img :src="box.image" />
          </div>
        </nav>
      </div>
      <div class="footer">
        <div class="play_bar">
          <div>
            <svg
              width="3em"
              height="3em"
              viewBox="0 0 16 16"
              class="bi bi-skip-backward-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style="color: white"
            >
              <path
                fill-rule="evenodd"
                d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"
              />
              <path
                d="M.904 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.692-1.01-1.233-.696L.904 7.304a.802.802 0 0 0 0 1.393z"
              />
              <path
                d="M8.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L8.404 7.304a.802.802 0 0 0 0 1.393z"
              />
            </svg>

            <svg
              v-if="playing"
              width="3em"
              height="3em"
              viewBox="0 0 16 16"
              class="bi bi-pause-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style="color: white"
              @click.prevent="pause()"
            >
              <path
                d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
              />
            </svg>

            <svg
              v-if="!playing"
              width="3em"
              height="3em"
              viewBox="0 0 16 16"
              class="bi bi-play-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style="color: white"
              @click.prevent="resume()"
            >
              <path
                d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
              />
            </svg>

            <svg
              width="3em"
              height="3em"
              viewBox="0 0 16 16"
              class="bi bi-skip-forward-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style="color: white"
            >
              <path
                fill-rule="evenodd"
                d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
              />
              <path
                d="M7.596 8.697l-6.363 3.692C.693 12.702 0 12.322 0 11.692V4.308c0-.63.693-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
              />
              <path
                d="M15.096 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.693-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
              />
            </svg>
          </div>
        </div>
        <div class="progress_bar">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

module.exports = {
  props: {
    islogged: { type: Boolean },
    user: { type: Object },
    playlists: { type: Array },
    nowplaying: { type: Object },
    playing: { type: Boolean },
  },

  data() {
    return {
      play_list: [],

      current_list: [],

      //nowPlaying: null,
      //playing: false,

      file: "",

      show : false,

      add : {
        title: "",
        music: "",
        image: "",
      }
    };
  },

  async mounted() {
    this.play_list = this.playlist;
  },

  methods: {
    play(audio) {
      this.$emit('play', audio);
    },

    pause() {
      this.$emit('pause');
    },

    resume() {
      this.$emit('resume');
    },

    change_list(playlist) {
      this.current_list = playlist.contenu;
    },

    ajouterMusique() {
      this.file = this.$refs.file.files[0];
    },

    addmusique() {
      this.$emit('addmusique', this.add);
    },

  },
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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(49, 49, 49);
}

::-webkit-scrollbar-thumb {
  background: rgb(112, 112, 112);
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(88, 88, 88);
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
  min-width: 270px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.sidebar h1 {
  font-size: 40px;
  user-select: none; /* Permet de ne pas sélectionner le texte */
  -moz-user-select: none;
  -webkit-user-select: none;
}

.sidebar h1:hover {
  cursor: default;
}

.sidebar div {
  font-size: 20px;
  margin-bottom: 5px;
  user-select: none; /* Permet de ne pas sélectionner le texte */
  -moz-user-select: none;
  -webkit-user-select: none;
}

#ajout {

  background-color: rgb(77, 77, 77);
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 20px;
  border: none;

}

#addForm{

  margin-top: 20px;
  height: 200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: solid white;
  border-radius: 10px;

}

#addForm input {
  margin-top: 20px;
  border: none;
  border-bottom: solid white 1px;
  background-color: black;
  color: white;
  outline: none;
  width: 80%;
}

#addForm button {

  background-color: white;
  border: none;
  border-radius: 7px;
  outline: none;
  margin-bottom: 20px;
}
.ajout:hover {
  color: lightgreen;
}

.list:hover {
  color: lightgreen;
  cursor: pointer;
}

.display_list {
  background-color: rgb(49, 49, 49);
  height: 100%;
  width: 80%;
  overflow: auto;
}

.musicbox {
  width: 200px;
  height: 200px;
  background-color: rgb(37, 37, 37);
  font-size: 30px;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  border-radius: 20px;
}

.musicbox img {
  max-width: 100px;
  max-height: 100px;
  margin-top: 10%;
}

.musicbox:hover {
  border: 1px solid lightgreen;
}

.footer {
  background-color: rgb(80, 80, 80);
  height: 20%;
  min-height: 174.8px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.play_bar {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
}

.play_bar div {
  width: 277px;
  display: flex;
  justify-content: space-around;
}

.progress_bar {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress_bar div {
  height: 7px;
  width: 277px;
  background-color: white;
  border-radius: 7px;
}
</style>