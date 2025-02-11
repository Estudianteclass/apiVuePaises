<script setup>
import axios from 'axios';
import { provide, ref } from 'vue';
const url = 'https://restcountries.com/v3.1/name/';
let country = "france"
const countryData = ref([]);
async function getDatos() {

  try {
    const respuesta = await axios.get(url + country)
    countryData.value = respuesta.data;
    console.log(respuesta.data)
    console.log("country retrieved")
    console.log(countryData.value)
  } catch (error) {

    console.log(error)
  }


}
provide('countryData', countryData)
getDatos();
const abrirMenu = ref(false)
//https://restcountries.com/#api-endpoints-using-this-project
</script>

<template>

  <nav class="bg-blue-800 border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="./assets/earth.png" alt="" class="w-16">
        <p class="self-center text-2xl font-semibold whitespace-nowrap text-white">Country Data Encyclopedia</p>

      </div>


      <button @click="abrirMenu = !abrirMenu" data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        aria-controls="navbar-default" aria-expanded=abrirMenu>
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div :class="abrirMenu ? 'block' : 'hidden'" class=" w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
          <li>
            <router-link to="/" class="bg-white hover:bg-gray-100 px-2 py-2 rounded-md font-bold text-blue-800">Home</router-link>
          </li>


        </ul>
      </div>
    </div>
  </nav>
  <div class="min-h-screen flex flex-col">




    <main class="w-full flex-grow p-4 bg-gray-100">

      <router-view></router-view>


    </main>


    <footer class="bg-blue-800 shadow-sm text-white mt-8  w-full">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-white sm:text-center ">This is a school assignment to show the creation of a project
          in Vue with components
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>

  </div>









</template>

<style scoped></style>
