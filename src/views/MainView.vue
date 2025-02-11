<script setup>
import { inject, ref } from 'vue';
import CountryCard from '../components/CountryCard.vue';
import axios from 'axios';
import CountriesList from '../components/CountriesList.vue';
import { useStateStore } from '../store/UseStateStore';
const estadoStore=useStateStore();
const countryName = ref('')
const countryInfo = ref([])
const continent = ref('')
const url = 'https://restcountries.com/v3.1/name/'
async function getCountryByName() {
    try {
        const respuesta = await axios.get(url + countryName.value)
       
        estadoStore.llenarLista(respuesta.data)
        console.log(countryInfo.value)
    } catch (error) {

        console.log("error: " + error)

    }

}
async function countryByContinent() {
    const url = 'https://restcountries.com/v3.1/region/' + continent.value;
    try {
        const respuesta = await axios.get(url)
       estadoStore.llenarLista( respuesta.data);
    } catch (error) {
        console.log("error " + error)
    }
}



async function mostrar() {

    const url = 'https://restcountries.com/v3.1/region/europe';
    try {
        const respuesta = await axios.get(url)
        console.log(respuesta.data)
    } catch (error) {
        console.log("error " + error)
    }
}


const country = inject('countryData')


</script>
<template>

    <div class="w-full flex flex-row items-center space-x-4">
        <div class="space-x-2">
            <label for="countryName" class="font-medium">Search country by name:</label>
            <input type="text" name="countryName" id="countryName" v-model="countryName" class="bg-gray-100 border py-1 w-48 border-gray-300 text-gray-900 text-sm rounded-lg">
            <input type="button" @click="getCountryByName" class="bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded-md text-white font-semibold"
                value="Search by name">
        </div>
        <div>
            <label for="continent" class="font-medium me-2">Display by continent</label>
            <select name="continent" id="continent" v-model="continent" @change="countryByContinent" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2">
                <option value="">--Select a continent--</option>
                <option value="europe">Europe</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
        <div>

            <input type="button" @click="estadoStore.odenarHabitantes" class="bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded-md text-white font-semibold"
            value="Sort by population">
        </div>
    </div>



<CountriesList></CountriesList>



    

</template>
<style></style>