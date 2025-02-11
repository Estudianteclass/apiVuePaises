import { defineStore } from "pinia";

export const useStateStore = defineStore('informacion', {


    state: () => ({
        paisesContinente: [],
      
    }),
    actions: {
        llenarLista(elemento) {
            this.paisesContinente = elemento;
        },
        odenarHabitantes(){
            this.paisesContinente.sort((a,b)=>a.population-b.population);
        }
    }
})