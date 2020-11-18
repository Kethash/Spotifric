<template>
    <div class="container">
        <h1 class="titre"> $ spotifric $ ou le monde <strong> riche </strong> en <strong> musique </strong> !</h1>
        <div class="parallax">
            <h1 class="etape"> Etape 0 - Introduction </h1>
        </div>

        <p class="para1">
            Ce site est le pur alter-égo du site officel Spotify. Cependant, chez nous, vous entrez dans 
            un monde reservé aux riches. Sur cette page de présentation, vous retrouverez un <strong> TUTO </strong> 
            pour comprendre comment fonctionne notre site reservé à l'élite ! Vous tardez d'ecouter de la musique, 
            et de tout controler ? alors n'attendez plus, et découvrez notre guide complet pour bien débuter !
        </p>

        <div class="new"> <h1 class="etape"> Etape 1 - Activer son Compte </h1> </div>
        <p class="para1">
          Pour commencer a vous familiarise avec Spotifric, il faut savoir que notre site est basé sur un système de partage de musique, mais de plus, 
          vous avez le choix de pouvoir <strong> personnaliser </strong> bon vous semble votre application. Notre site fonctionne avec un abonnemment, 3 chois s'offrent : <ul>
            <li> Standart --> 250 € par mois </li>
            <li> Premium --> 500 € par mois </li>
            <li> Deluxe --> 1000 € par mois </li>
          </ul>
          Pour chaque <strong> pack d'abonnement </strong>, vous avez la possibilite d'accéder à divers <strong> fonctionnalitées avancées </strong>.
          Afin de gerer vos personnalisations, vous disposerez d'une <strong> monnaie virtuelle </strong>. Suivant l'abonnement que vous prennez, vous disposerez de :
          <ul>
            <li> 500 Crédits </li>
            <li> 800 Crédits </li>
            <li> 1500 Crédits </li>
          </ul>
          Avec ce crédits, vous pourrez changer de couleur, supprimer ou ajouter une musique.  
        </p>
        <div class="second"> <h1 class="etape"> Etape 2 - Enjoy </h1>
        </div>
        <p class="para1">
            Vous voila maintenant près à découvrir notre nouvelle appli de streaming 
            révolutionnaire ! Vous pouvez dès a present vous connecter, accéder a votre session
            via n'importe quel appareil, et <strong> ecouter 24H/7j </strong> la musique a fond !
            A vous de jouer !

            Si vous avez la moindre question concernant l'application, ou si un bug parvient, 
            nous vous prions de bien vouloir contacter le service client en remplissant votre email. 
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
  width: 100%;
  margin: 0;
  background: linear-gradient(to right, #55c92d, #a3ef35);
  font-size: 24px;
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
  background: url("../../ressources/images/derniereamettre.png") no-repeat
    center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.etape {
  position: absolute;

  color: green;
  background: lightgreen;
  border-radius: 20px solid black;
  font-style: oblique;
  font-weight: bold;
  font-family: arial, "Times New Roman", serif;
}

.titre {
  font-size: xlarge;
  font-style: unset;
  text-align: center;
  font-family: arial, Times, serif;
  color: white;
  background-color: black;
  border: 1px groove white;
}

.para1 {
  border: 1px solid black;
  background-color: white;
  padding: 5px;
}
</style>
