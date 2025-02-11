<script setup>

const props = defineProps(

    {
        foto: String,
        name: String,
        capital: String,
        region: String,
        area: Number,
        population: Number,
        subregion: String
    }
)

</script>
<template>


    <div
        class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img class="h-48 w-full object-cover object-center border-b-2" :src=props.foto alt="country flag" />
        <div class="p-4">
            <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Name: {{ props.name }}</h2>
            <p class="mb-2 text-base  text-gray-700"><span class="font-bold">Capital:</span> {{ props.capital }}</p>
            <p class="mb-2 text-base  text-gray-700"><span class="font-bold">Area:</span> {{ props.area }} km2</p>
            <p class="mb-2 text-base  text-gray-700"><span class="font-bold">Continent:</span>{{ props.region }}</p>
            <p class="mb-2 text-base  text-gray-700"><span class="font-bold">Region:</span> {{ props.subregion }}</p>
            <p class="mb-2 text-base  text-gray-700"><span class="font-bold">Population: </span>{{ props.population }}
                inhabitants</p>

        </div>
    </div>


</template>
<style scoped></style>