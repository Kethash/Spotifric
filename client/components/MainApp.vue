<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 88vh;">
      <!-- coté navigation du site -->
      <div class="w-56 bg-black h-full flex-none">
        <div class="p-6">
          <img src="" class="h-10" style="filter: brightness(0) invert(1);"/>
        </div>
        <div class="mx-2 ">
          <button class="w-full rounded px-3 py-2 flex items-center justify-start"> music
            <i class="material-icons mr-3"> {{ page.icon }} </i>
            <p> {{ page.name }} </p>
          </button>
      </div>
      <div class="mx-5">
        <h1 class="text-xs text-lightest tracking-widest uppercase"> playlists </h1>
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
module.exports = {
  theme: {
    fontfamily: "proxima Nova",
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: "#108954",
        dark: "#121212",
        light: "#282828",
        lightest: "#B3B3B3",
        darkest: "#191414",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
</script>

<style>
</style>