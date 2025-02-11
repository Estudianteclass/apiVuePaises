<script setup>
import CountryCard from './CountryCard.vue';

import { useStateStore } from '../store/UseStateStore';
const estadoStore = useStateStore();
</script>
<template>



    <div class="w-full h-full grid grid-cols-1 justify-center gap-2 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       

            <div v-for="element in estadoStore.paisesContinente">
                <CountryCard :foto="element.flags.svg" :name="element.name.common" :capital="(element.capital && element.capital.length > 0) ? element.capital[0] : 'No capital'"
                    :region="element.region" :area="element.area" :population="element.population"
                    :subregion="element.subregion"></CountryCard>
            </div>
    
      

    </div>




</template>
<style scoped></style>