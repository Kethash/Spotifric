<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 88vh;">
      <!-- coté navigation du site -->
      <div class="w-56 bg-black h-full flex-none">
        <div class="p-6">
          <img src="spotifyLogo.png" class="h-10" style="filter: brightness(0) invert(1);"/>
        </div>
        <div class="mx-2 ">
          <button class="w-full rounded px-3 py-2 flex items-center justify-start"> </button>
          <button> </button>
          <button> </button>
      </div>
      <!-- contenu principal du site -->
      <div class="w-full h-full relative"> 
        <!-- header -->
        <div class="w-full sticky top-0 p-2">
        </div>
      </div>
    </div>
    <!-- barre de lecture ou pause -->
    <div class="w-full bg-light" style="height: 12vh;"> 
    </div>
  </div>
</template>

<script>

export default {
  name:'App',
  data: function() {
    return {
      pages: [
        {id:'home', name:'Home', icon:'home'},
        {id:'', name:'', icon:''},
        {id:'', name:'', icon:''}
      ]

      };
    },
  methods: {

  }
};
</script>

<style>

</style>