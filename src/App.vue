<script setup>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
const url = 'https://restcountries.com/v3.1/name/';
let country = "france"
async function getDatos() {

  try {
    const respuesta = await axios.get(url + country)
    console.log(respuesta.data)
  } catch (error) {

    console.log(error)
  }


}

//getDatos();
//https://restcountries.com/#api-endpoints-using-this-project
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
    <h1 class="text-2xl font-bold text-white">Tailwind is working!</h1>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
