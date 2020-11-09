<template>
  <div>
    <div class="main">
      <div class="navigation">
        <nav class="sidebar">
          <h1>Playlists</h1>
          <div v-for="playlist in this.playlists" :key="playlist.titre">
            <div class="list">{{ playlist.titre }}</div>
          </div>
        </nav>

        <nav class="display_list">
            <div class="musicbox" v-for="box in this.current_list" :key="box">
                <div>
                    {{ box.title }}
                </div>
                
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
              width="3em"
              height="3em"
              viewBox="0 0 16 16"
              class="bi bi-play-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style="color: white"
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
  data() {
    return {
      playlists: [
        { titre: "Playlist 1", contenu: null },
        { titre: "Playlist 2", contenu: null },
      ],

      current_list : [
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},
          {title: "Titre"},

    ],

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

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(49, 49, 49); 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(112, 112, 112); 
}

/* Handle on hover */
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
}


.footer {
  background-color: rgb(80, 80, 80);
  height: 20%;
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
  display:flex;
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