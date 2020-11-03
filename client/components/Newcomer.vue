<template>
  <article class="main">
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
</template>

<script>
module.exports = {

    props: {
        isLogged: { type: Boolean }
    },

    data() {
        return {

        }
    },

    methods: {

    },
}
</script>

<style scoped>
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

</style>