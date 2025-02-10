import { defineStore } from "pinia";

export const useStateStore = defineStore('informacion', {


    state: () => ({
        listaElementos: [],
        otraLista: [],
        listaProductos: [],
    }),
    actions: {
        inicializarLista(elemento) {
            this.listaElementos = elemento;
        }
    }
})