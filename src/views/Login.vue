<script setup></script>
<template>




    <div class="flex items-center justify-center align-middle">
        <form class="flex flex-col self-center items-center bg-blue-500 w-64 h-32">

            <label for="nombre">Nombre de usuario:</label>
            <input type="text" name="nombre" id="nombre">
            <label for="password">Contraseña</label>
            <input type="password" id="password">
            <router-link to="/main" class="bg-blue-500 px-2 py-1 rounded-md font-bold text-white">Log in</router-link>

        </form>
    </div>



</template>
<style></style>