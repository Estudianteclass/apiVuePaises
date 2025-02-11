import { defineStore } from "pinia";

export const useStateStore = defineStore('informacion', {


    state: () => ({
        paisesContinente: [],
      
    }),
    actions: {
        llenarLista(elemento) {
            this.paisesContinente = elemento;
        },
        odenarHabitantesAsc(){
            this.paisesContinente.sort((a,b)=>a.population-b.population);
        },
        odenarHabitantesDesc(){
            this.paisesContinente.sort((a,b)=>b.population-a.population);
        }
    }
})