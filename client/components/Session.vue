<template>
  <div>
    <div class="sidebar">
      <div class="sidebar-wrapper">
        <div class="sidebar__logo">
          <img src="spotify.jpg" />
        </div>

        <div class="sidebar__menu">
          <a class="sidebar__menu__selectione" href="#"
            ><i class="fa fa-home"> </i> Acceuil
          </a>
          <a href="#"><i class="fa fa-search"> </i> Rechercher </a>
          <a href="#"><i class="fa fa-database"> </i> Bibliotheque </a>
        </div>

        <div class="sidebar__menu">
          <p class="sidebar__menu__title">Playlists</p>

          <div class="sidebar__menu__item">
            <div class="sidebar__menu__item__components">+</div>
            <span> Créer une playlist </span>
          </div>

          <div class="sidebar__menu__item">
            <a href="#">
              <i class="fa fa-music"> <span> Music aimées </span> </i>
            </a>
          </div>
        </div>

        <div class="sidebar__playlists">
          <a href=""> Playlists </a>
          <a href=""> Playlists </a>
          <a href=""> Playlists </a>
          <a href=""> Playlists </a>
          <a href=""> Playlists </a>
        </div>

        <div class="sidebar__playlists">
          <a href=""> Playlists </a>
          <a href=""> Playlists </a>
          <a href=""> Playlists </a>
          <a href=""> Playlists </a>
          <a href=""> Playlists </a>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="main-wrapper">
        <div class="main__row">
          <div class="main__row__title"><h2>Paradise</h2></div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>
        </div>

        <div class="main__row">
          <div class="main__row__title"><h2>Secret's</h2></div>

          <div
            class="main__col"
            data-image="rick.jpg"
            data-artist="Rick Astley"
            data-song="Never Gonna give you up"
            data-file="audio/astley.mp3"
          >
            <img src="rick.jpg" />
            <h3>Rick Astley</h3>
            <p>Never Gonna Give You Up</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>

          <div class="main__col">
            <img src="test.png" />
            <h3>musiques dans le top 50</h3>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>

    <div class="player">
      <div class="player__artist"></div>

      <div class="player__control">
        <div class="player__control__buttons">
          <a href=""> <i class="fa fa-backward"> </i> </a>
          <a style="display: none" id="pauseBtn" href="#">
            <i class="fa fa-pause-circle"> </i>
          </a>
          <a id="playBtn" href="#"> <i class="fa fa-play-circle"> </i></a>
          <a href=""> <i class="fa fa-forward"> </i> </a>
        </div>

        <div class="player__control__progress">
          <div style="width: 0%" class="player__control__progress_2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

module.exports = {
  data () {
    return {};
  },
  methods: {

  }
}
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

html,
body {
  height: 1000px;
}

.sidebar {
  float: left;
  width: 250px;
  padding: 10px 10px;
  height: 100%;
  overflow-y: auto;
  background-color: black;
  overflow-x: hidden;
}

.sidebar-wrapper {
  padding-bottom: 200px;
}

.sidebar__menu {
  margin: 20px 0;
  color: rgb(190, 190, 190);
}

.sidebar__logo img {
  max-width: 250px;
  width: 100%;
}

.sidebar__menu a {
  color: rgb(190, 190, 190);
  text-decoration: none;
  display: block;
  padding: 10px 0;
}

.sidebar__menu svg {
  margin: 0 20px;
}

.sidebar__menu a.sidebar__menu__selectione {
  color: white;
  background-color: rgb(80, 80, 80);
  border-radius: 5px;
}

.sidebar__menu__item {
  margin-top: 12px;
  cursor: pointer;
  vertical-align: middle;
}

.sidebar__menu p.sidebar__menu__title {
  color: white;
  text-transform: uppercase;
  font-size: 14px;
}

.sidebar__menu__item__components {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  display: inline-block;
  color: black;
  font-weight: bold;
  background-color: white;
}

.sidebar__menu__item span {
  font-weight: bold;
  font-size: 14px;
  padding: 0 10px;
}

.sidebar__playlists {
  padding: 20px 0;
  border-top: 1px solid rgb(40, 40, 40);
}

.sidebar__playlists a {
  margin: 10px 0;
  display: block;
  color: rgb(190, 190, 190);
  text-decoration: none;
}

.sidebar__playlists a:hover {
  color: white;
}

.main {
  width: 100%;
  background-color: rgb(30, 30, 30);
  height: 100%;
  float: left;
  padding: 15px 50px;
  overflow-y: auto;
}

.main__row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
}

.main-wrapper {
  padding-bottom: 200px;
}

.main__row__title {
  width: 100%;
}

.main__row__title h2 {
  color: white;
}

.main__col {
  cursor: pointer;
  width: 10%;
  margin-right: 1%;
  margin-top: 20px;
  background-color: #282828;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

div .main__col img {
  width: 50px;
  height: 50px;
}

.main__col h3 {
  color: white;
  margin: 8px 0;
}

.main__col p {
  color: rgb(100, 100, 100);
  margin: 8px 0;
  font-size: 13px;
  text-align: left;
}

.player {
  width: 100%;
  padding: 20px;
  height: 130px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  background-color: rgb(60, 60, 60);
}

.player__artist {
  width: 20%;
}

.player__artist img {
  max-width: 70px;
  display: inline-block;
  vertical-align: middle;
}

.player__artist h3 > span {
  color: rgb(200, 200, 200);
  font-size: 13px;
}

.player__artist h3 {
  display: inline-block;
  color: white;
  font-weight: normal;
  font-size: 20px;
  vertical-align: middle;
  margin-left: 10px;
}

.player__control {
  width: 70%;
  text-align: center;
}

.player__contol__buttons a {
  color: white;
  margin: 8px 15px;
  font-size: 18px;
}

.player__control__progress {
  width: 100%;
  max-width: 600px;
  height: 7px;
  margin-top: 20px;
  position: relative;
  border-radius: 8px;
  display: inline-block;
  background: rgb(130, 130, 130);
}

.player__control__progress_2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 7px;
  border-radius: 8px;
  background-color: white;
}

@media screen and (max-width: 1700px) {
  .main {
    width: 100%;
  }
  .sidebar {
    display: none;
  }
  .main__col {
    width: 20%;
    margin-right: 2%;
  }
}

i {
  color: white;
}
</style>