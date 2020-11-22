<template>
  <div class="container">
    <div class="parallax">
      <h1 class="etape">Découvrir $Spotifric$</h1>
    </div>
    <article class="para10">
      Ce site est l'alter-égo du site officiel Spotify. Cependant, chez nous,
      vous entrez dans un monde reservé aux riches. <br />
      <br />Sur cette page de présentation, vous retrouverez un
      <strong> TUTO </strong> pour comprendre comment fonctionne notre site
      reservé uniquement aux plus riches ! <br />
      <br />
      Vous tardez d'écouter de la vraie musique, et de tout contrôler ? Alors
      n'attendez plus, et suivez nos instructions ainsi que nos recommendations
      pour bien débuter !
    </article>

    <div class="new"><h1 class="etape">Création d'un compte</h1></div>
    <article class="para20">
      Pour commencer à vous familiariser avec Spotifric, il faut savoir que
      notre site est basé sur un système de partage de musique, mais de plus,
      vous avez le choix de pouvoir personnaliser comme bon vous semble votre
      application. Notre site fonctionne avec un abonnement, 3 choix s'offrent à
      vous :
      <ul class="para2">
        <li>Standart = <strong> 250 € </strong> mois</li>
        <li>Premium = <strong> 500 € </strong> mois</li>
        <li>Deluxe = <strong> 1000 € </strong> par mois</li>
      </ul>
      Pour chaque <strong> pack d'abonnement </strong>, vous avez la
      possibilitée d'accéder à divers
      <strong> fonctionnalitées avancées </strong>. Afin de gérer vos
      personnalisations (changement de couleur, suppression ou ajout de musique)
      , vous disposerez d'une <strong> monnaie virtuelle </strong>. Suivant
      l'abonnement que vous prennez, vous disposerez de :
      <ul class="para3">
        <li>pack standard = <strong> 500 </strong> crédits</li>
        <li>pack premium = <strong> 800 </strong> crédits</li>
        <li>pack deluxe = <strong> 1500 </strong> crédits</li>
      </ul>
    </article>

    <div class="second"><h1 class="etape">Enjoy !</h1></div>
    <article class="para30">
      Vous voilà maintenant prêt à découvrir notre nouvelle application de
      streaming révolutionnaire ! Vous pouvez dès à présent vous connecter,
      accéder à votre session via n'importe quel appareil, et écouter 24H/7j
      votre musique à fond ! A vous de jouer !
      <br />
      <br />
      <br />
      <h2>!! Remarque aux utilisateurs !!</h2>
      Si avez la moindre question concernant l'application, ou si un bug
      parvient, nous vous prions de bien vouloir contacter le service client en
      remplissant votre email, et un texte explicant votre probleme, dans le
      formulaire ci-dessous. Nous vous remercions pour votre confiance, ENJOY !
      <br />
      <br />
      <fieldset class="formulaire">
        <legend>Un problème rencontré ?</legend>
        <form>
          <div>
            <label for="Pseudo"> Pseudo </label>
            <input
              type="text"
              placeholder="efrei94"
              maxlenght="15"
              autocomplete="off"
              required
            />
          </div>
          <div>
            <label for="Note"> email </label>
            <input type="email" placeholder="email@spotifric.com" required />
          </div>
          <div>
            <label for="commentaire">
              Veuillez nous indiquer le problème en question :
            </label>
            <select name="spotifric" id="spotifric">
              <option value="choisir">séléctionner</option>
              <optgroup label="Problème de musique">
                <option value="Ne se lance pas">
                  La musique ne se lance pas
                </option>
                <option value="arret intempestif">
                  La musique s'arrête brusquement
                </option>
              </optgroup>
              <optgroup label="Problème d'abonnement">
                <option value="Mauvais abonnement pris">
                  Je souhaite changer d'abonnement
                </option>
                <option value="problème pack">
                  Je ne parviens pas à payer de pack
                </option>
                <option value="trop cher">
                  Je veux résilier mon abonnement
                </option>
              </optgroup>
              <optgroup label="Problème de fonctionnalitées">
                <option value="La couleur ne change pas">
                  Je n'arrive pas à changer de nom/image
                </option>
                <option value="Mes crédits ne se mettent pas à jour">
                  Mes crédits ne sont pas à jour
                </option>
              </optgroup>
            </select>
            <br />
            <textarea
              type="text"
              required
              rows="4"
              cols="70"
              autofocus
            ></textarea>
          </div>
          <div>
            <input type="submit" value="envoyer" />
          </div>
        </form>
      </fieldset>
    </article>
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
  font-size: 24px;
  background: black;
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

  color: #0c7639;
  background: white;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  font-style: normal;
  font-weight: bold;
  font-family: arial;
}

.titre {
  font-size: xlarge;
  font-style: unset;
  text-align: center;
  font-family: arial, serif;
  color: #0c7639;
}

.para10 {
  color: black;
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
}

.para20 {
  color: black;
  background-color: #f5f5f5;
  padding: 10px;
}

.para30 {
  color: black;
  background-color: #f5f5f5;
  padding: 10px;
}

.para2 {
  background-color: lightblue;
  color: rgb(27, 82, 155);
  width: 350px;
  margin-left: 40px;
  border-radius: 30px;
}

.para3 {
  background-color: lightblue;
  border: 1px solid black;
  color: rgb(27, 82, 155);
  width: 350px;
  margin-left: 350px;
  border-radius: 30px;
}

.formulaire {
  color: white;
  background-color: lightblue;
}

legend {
  background: rgb(27, 82, 155);
  font-weight: bold;
  border-radius: 10px;
  color: white;
}

.surlignement {
  background: cyan;
}

h2 {
  color: white;
  background: red;
  width: 500px;
  justify-content: center;
}
</style>
