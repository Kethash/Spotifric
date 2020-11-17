<template>
    <div class="container">
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Praesentium, tempore! Odit, laborum. 
            Ab asperiores ad quod corrupti necessitatibus libero natus fugit soluta,
            incidunt deserunt ratione reprehenderit sequi ex accusamus quia.
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Perspiciatis officiis illo recusandae repudiandae tempora omnis nulla 
            iure nobis autem repellat vitae amet beatae laudantium quia suscipit 
            quidem, quasi ut at?
        </p>
        </p>
        <div class="parallax">
        </div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Perspiciatis officiis illo recusandae repudiandae tempora omnis nulla 
            iure nobis autem repellat vitae amet beatae laudantium quia suscipit 
            quidem, quasi ut at?
        </p>
        <div class="new">
        </div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Perspiciatis officiis illo recusandae repudiandae tempora omnis nulla 
            iure nobis autem repellat vitae amet beatae laudantium quia suscipit 
            quidem, quasi ut at?
        </p>
        <div class="second">
        </div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Perspiciatis officiis illo recusandae repudiandae tempora omnis nulla 
            iure nobis autem repellat vitae amet beatae laudantium quia suscipit 
            quidem, quasi ut at?
        </p>
    </div>

</template>

<script>
module.exports = {

    props: {
        islogged: { type: Boolean }
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

.container{
    width: auto;
    margin: 0 auto;
    background: #f9f9f9;
    font-size: 24px;
    padding: 25px;
}

.parallax{
    background: url('../../ressources/images/fricspotify.jpg') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    height: 300px;

}

.new{
    background: url('../../ressources/images/jeton.png') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    height: 300px;

}


.second{
    background: url('../../ressources/images/derniereamettre.png') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    height: 300px;

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