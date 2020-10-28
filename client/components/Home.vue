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
      this.$router.push('/register');
    }
  }
};
</script>

<style>

.main{
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
  color: #0C783A;
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
}

.venez {
  /*position: absolute;*/
  top: 455px;
  left: 40px;
  text-decoration: none;
  padding: 15px 30px;
  font-weight: 600;
  font-size: 20px;
  border: 5px solid #09D86F;
  border-radius: 25px;
  transition: 0.5s;
  transition-property: background;
  color: #000000;
  width: 135px;
  text-align: center;
  background: #59EB8B;
  margin-top: 8%;
}

.venez:hover {
  background: #2FDE86;
  color: #E7E410;
}
</style>
