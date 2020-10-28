<template>
  <div class="main">
    <!--
    <div class="Astronomia">
      <img src="coffin_dance.jpg" alt="" />
    </div>
    -->

    <div class="hd">Ressentez la musique <i class="fas fa-music"></i></div>

    <div class="content">
      <em>
        Le seul et unique endroit ou vous pouvez <br />
        vous plonger dans un monde rempli de musiques <br />
        venez decouvrir plus de 10000 titres pour tous les gouts...
      </em>
    </div>
    <div class="venez" @click="rejoindre">Rejoignez Nous</div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },

  methods : {
    rejoindre() {
      this.$emit("rejoindre");
      this.$router.push('/rejoindre');
    }
  }
};
</script>

<style>

.main{
  margin-left: 5%;
}

.Astronomia {
  position: absolute;
  top: 160px;
  left: 38%;
}

.hd {
  /*position: absolute;*/
  color: #00d4ff;
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
}

.venez {
  /*position: absolute;*/
  top: 455px;
  left: 40px;
  text-decoration: none;
  padding: 15px 30px;
  font-weight: 600;
  font-size: 20px;
  border: 1px solid lightgreen;
  border-radius: 25px;
  transition: 0.5s;
  transition-property: background;
  color: #00d4ff;
}

.venez:hover {
  background: #00d4ff;
  color: #fff;
}
</style>
