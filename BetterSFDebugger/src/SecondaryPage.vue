<template>
  <div class="dark:bg-gray-900 py-2">
    <div class="p-5 w-11/12 antialiased mx-auto">
      <ToggleLightDarkMode />
      <Main />
    </div>
  </div>
</template>

<script>
import Main from './components/partial/Main.vue';
import ToggleLightDarkMode from './components/elements/ToggleLightDarkMode.vue'
import './assets/index.css';

export default {
  name: 'App',
  components: {
    Main,
    ToggleLightDarkMode
  }
}
</script>

<style>
body {
  font-family: "Figtree", sans-serif;
}
</style>
