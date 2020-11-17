<template>
    <div class="container">
        <h1 class="titre"> $ spotifric $ ou le monde <strong> riche </strong> en <strong> musique </strong> !</h1>
        <div class="parallax">
            <h1 class="etape"> Etape 0 - Introduction </h1>
        </div>

        <p>
            Ce site est le pur alter-égo du site officel Spotify, mondialement connu. Cependant, chez nous, vous entrez dans 
            un monde reservé aux riches. Sur cette page de présentation, vous retrouverez un un TUTO 
            pour comprendre comment fonctionne notre site reservé à l"élite ! Vous tardez d'ecouter de la musique, 
            et de tout savoir controler ? alors n'attendez plus, et devouvrez notre guide complet pour bien débuter !
        </p>

        <div class="new"> <h1 class="etape"> Etape 1 - Compte </h1> </div>
        <p>
            Pour commencer a vous familiarise avec spotirifr, il est impératif de savoir que notre site est basé sur un systeme de partagfe de musique classqiue comme spotirfy, mais de plus, 
            vous avez le choix de pouvoir perosnnaliser comme bon vous semble votre application. Notre site fonctionne en effet par un systeme d'aonnemment, allant de 500 a 10000 par mois, 
            et pour chaque pack d'abonnement disponible, vous avez la possibilite d'accéder a des fonctionanltes avancées. Vous commencez avec au minim <strong> 500 Jetons </strong>, qui 
            sont une monnaie virtuelle. Ces jetons vous pêrmettrons de pouvoir ajouter des clips musicaux, (20 jetons par clip), de changer le fond de votre session spotrifric (200 Jetons), etde 
            personnamliser les fond d'ecran de vos musiques (150 Jetons).  
        </p>
        <div class="second"> <h1 class="etape"> Etape 2 - Enjoy </h1>
        </div>
        <p>
            Vous voila maintenant près à découvrir notre nouvelle appli de streaming 
            révolutionnaire ! Vous pouvez des que vous vous etes creer un compte, acceder a votre session musicale
            via n'importe quel apparail, et ecouter 24H/7j votre musique a fond comme bon vous le semble !
            vous etes desormais maitre de l'application, et pouvez en profiter pleinement. A vous de jouer !

            Si vous avez la moindre question concernant l'application, ou si un bug parvient, 
            nous vous prions de bien vouloir contacter le service client disponible a l'acceuil du site. 
            Nous vous remercions pour votre confiance, ENJOY !!
        </p>
    </div>
</template>

<script>
module.exports = {
  props: {
    islogged: { type: Boolean },
  },

  data() {
    return {};
  },

  methods: {},
};
</script>


<style scoped>
.container {
  width: auto;
  margin: 0 auto;
  background: linear-gradient(to right, #55c92d, #a3ef35);
  font-size: 24px;
  padding: 25px;
}

.parallax {
  background: url("../../ressources/images/spotifricjust.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.new {
  background: url("../../ressources/images/jeton.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.second {
  background: url("../../ressources/images/derniereamettre.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.etape{
    position: absolute;

    color:green;
    background: lightgreen;
    border-radius : 20px solid black;
    font-style: oblique;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}

.titre{
    font-size: xlarge;
    font-style: unset;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: white;
    background-color: black;
    border: 1px solid white;
    border-radius: 40px;
}
</style>



<!-- <style scoped>

.main{
    background-color: white;
    width: 100%;
    height: 100%;
    display : flex;
    flex-direction: column;
    align-items: center;
}

.bloc{
    background-color: aquamarine;
    width: 85%;
    height: 200px;
    margin-bottom: 20px;
}

.bloc h2, .bloc h1 {
    margin-left: 10px;
}

.bloc p {
    margin-left: 10px;
} 



</style> -->



<!-- <article class="main">
        <h1>Bienvenue dans un monde riche en musique</h1>

        <article class="bloc">
            <h2>Ce site est l'alter-égo de Spotify mais par les riches pour les riches</h2>
            <h1>Qu'es-ce que Spotify ?</h1>
            <p>Spotify est un service de musique en streaming, il fonctionne sous abonnement mensuel avce différents tarifs selon le type d'abonnement</p>
        </article>
        <article class="bloc">

        </article>
        <article class="bloc">

        </article>


  </article>

  -->