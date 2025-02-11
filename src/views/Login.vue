<script setup>
import axios from 'axios';
import { useStateStore } from '../store/UseStateStore';
const estadoStore=useStateStore();

async function countryByContinent() {
    const url = 'https://restcountries.com/v3.1/region/europe';
    try {
        const respuesta = await axios.get(url)
       estadoStore.llenarLista( respuesta.data);
    } catch (error) {
        console.log("error " + error)
    }
}



</script>
<template>




  
    <div
        class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="relative py-3 sm:w-96 mx-auto text-center">
            <span class="text-2xl font-medium ">Login to your account</span>
            <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                <div class="h-2 bg-blue-600 rounded-t-md"></div>
                <div class="px-8 py-6 ">
                    <label class="block font-semibold"> Username or Email </label>
                    <input type="text" placeholder="Email"
                        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md">
                    <label class="block mt-3 font-semibold"> Username or Email </label>
                    <input type="password" placeholder="Password"
                        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md">
                    <div class="flex justify-between items-baseline">
                        <router-link to="/main"  class="mt-4 bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-900 " @click="countryByContinent">Login</router-link>
                     
                        <a href="#" class="text-sm hover:underline">Forgot password?</a>
                    </div>
                </div>

            </div>
        </div>
</div>
</template>
<style></style>