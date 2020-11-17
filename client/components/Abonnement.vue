<template>
  <div class="pricing__plan__container">
    <section class="pricing__plan">
      <div class="pricing__plan__special__text">
        Pour les gens pas trop riche
      </div>
      <div class="pricing__plan__header">
        <h1 class="pricing__plan__title">Standart</h1>
        <h2 class="pricing__plan__summary">
          Pour ceux qui souhaite les fonctionanlites de base
        </h2>
      </div>

      <div class="pricing__plan__description">
        <ul class="princing__plan__list">
          <li class="pricing__plan__feature">Telecharger max 1000 musiques</li>
          <li class="pricing__plan__feature">partez avec 500 credits</li>
          <li class="pricing__plan__feature">ecouter la musique selectionnnée par l'aplication </li>
        </ul>
      </div>

      <div class="pricing__plan__actions">
        <p class="pricing__plan__cost">250 €</p>
        <p class="pricing__plan__text">Par mois</p>
        <router-link to='/pay' class="pricing__plan__button"> Acheter ce pack </router-link>
        <p class="princing__plan__text">Soit 3000€ par ans au minimum</p>
      </div>
    </section>

    <section class="pricing__plan pricing__plan__highlighted">
      <div class="pricing__plan__special__text">
        Pour les gens extrement riche
      </div>
      <div class="pricing__plan__header">
        <h1 class="pricing__plan__title">Deluxe</h1>
        <h2 class="pricing__plan__summary">
          Pour ceux qui souhaite les fonctionanlites très avancées
        </h2>
      </div>

      <div class="pricing__plan__description">
        <ul class="princing__plan__list">
          <li class="pricing__plan__feature">Telecharger max 10000 musiques</li>
          <li class="pricing__plan__feature">partez avec 1500 credits</li>
          <li class="pricing__plan__feature">ajouter vos musiques ou supprimez les</li>
          <li class="pricing__plan__feature">changer votre fond d'ecran sur votre session SPOTIFRIC</li>
        </ul>
      </div>

      <div class="pricing__plan__actions">
        <p class="pricing__plan__cost">1000 €</p>
        <p class="pricing__plan__text">Par mois</p>
        <router-link to='/pay' class="pricing__plan__button"> Acheter ce pack </router-link>
        <p class="princing__plan__text">Soit 12000€ par ans au minimum</p>
      </div>
    </section>

    <section class="pricing__plan">
      <div class="pricing__plan__special__text">
        Pour les gens de classe moyenne
      </div>
      <div class="pricing__plan__header">
        <h1 class="pricing__plan__title">Premium</h1>
        <h2 class="pricing__plan__summary">
          Pour ceux qui souhaite quelques fonctionnalitées avancées 
        </h2>
      </div>

      <div class="pricing__plan__description">
        <ul class="princing__plan__list">
          <li class="pricing__plan__feature">Telecharger max 5000 musiques</li>
          <li class="pricing__plan__feature">partez avec 800 credits</li>
          <li class="pricing__plan__feature"> ecouter votre propre musique </li>
        </ul>
      </div>

      <div class="pricing__plan__actions">
        <p class="pricing__plan__cost">500 €</p>
        <p class="pricing__plan__text">Par mois</p>
        <router-link to="/pay" class="pricing__plan__button"> Acheter ce pack </router-link>
        <p class="princing__plan__text">Soit 6000€ par ans au minimum</p>
      </div>
    </section>
  </div>
</template>

<script>
module.exports = {
  props: {
        islogged: { type: Boolean }
    },
    
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.pricing__plan {
  width: 300px;
  border-radius: 25px;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.2);
  overflow: hidden;
  font-family: "Arial", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #555555;
  margin: 15px;
}

.pricing__plan__header {
  padding: 25px;
  background: #009578;
  color: white;
}

.pricing__plan__title,
.pricing__plan__summary {
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
}

.pricing__plan__summary {
  font-size: 1em;
  font-weight: 300;
}

.pricing__plan__description {
  padding: 25px;
}

.pricing__plan__list {
  padding: 0;
  margin: 0;
}

.pricing__plan__feature {
  list-style: none;
  margin: 0;
  padding-left: 25px;
  position: relative;
  font-size: 0.9em;
}

.pricing__plan__feature:not(:last-child) {
  margin-bottom: 0.5em;
}

.pricing__plan__feature::before {
  color: #009578;
  position: absolute;
  left: 0;
}

.pricing__plan__actions {
  padding: 25px;
  border-top: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
}

.pricing__plan__button {
  display: inline-block;
  margin: 15px auto;
  padding: 8px 20px;
  text-decoration: none;
  color: #009578;
  background: white;
  border-radius: 5px;
  border: 1px solid #009578;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.pricing__plan__button:hover {
  background: #009578;
  color: white;
}

.pricing__plan__cost {
  margin: 0;
  text-align: center;
  font-size: 2em;
  color: black;
}

.pricing__plan__text {
  font-size: 0.9em;
  text-align: center;
  margin: 0 0 10px 0;
}

.pricing__plan__highlighted {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  transform: scale(1.1);
}

.pricing__plan__special__text {
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: white;
  background: #007c64;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) inset;
}

.pricing__plan__container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 80px;
}
</style>

