<script setup>
import CountryCard from './CountryCard.vue';

import { useStateStore } from '../store/UseStateStore';
const estadoStore = useStateStore();
</script>
<template>



    <div class="w-full h-full grid grid-cols-1  gap-2 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       

            <div v-for="element in estadoStore.paisesContinente">
                <CountryCard :foto="element.flags.svg" :name="element.name.common" :capital="element.capital[0]"
                    :region="element.region" :area="element.area" :population="element.population"
                    :subregion="element.subregion"></CountryCard>
            </div>
    
      

    </div>




</template>
<style scoped></style>