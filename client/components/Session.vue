<template>
  <div>
      <div class="sidebar">
          <div class="sidebar-wrapper">

              <div class="sidebar__logo">
              
              </div>

              <div class="sidebar__menu">
                  <a href="#"><i class="fas fa-home"> </i> Acceuil </a>
                  <a href="#"><i class="fas fa-search"> </i> Rechercher </a>
                  <a href="#"><i class="fas fa-database"> </i>  Bibliotheque </a>
              </div>

          </div>
      </div>
        



      </aside>
  </div>
</template>

<script>
module.exports = {
    data : function() {
        return {
            
        }
    },

    methods: {

    },
}
</script>

<style scoped>

@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
}

html, body{
    height: 100%;

}

.sidebar{
    float: left;
    width: 250px;
    padding: 10px 10px;
    height: 100%;
    overflow-y: auto;
    background-color: black;
    overflow-x: hidden;

}

</style>