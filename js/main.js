// **Descrizione:**
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// **MILESTONE 1**
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// **MILESTONE 2**
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// **MILESTONE 3**
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

/********************************
 *           VUE JS             *
 ********************************/

const settVue = Vue.createApp({
    data() {
        return {
            // ogni todo sarà un oggetto, formato da due proprietà:
            todo: {
                tasks: [
                    "sono la task 1",
                    "sono la task 2",
                    "sono la task 3",
                    "sono la task 4",
                    "sono la task 5",
                ],

                done: [
                    false,
                    false,
                    false,
                    false,
                    false,
                ],
            },



        }

    },

    methods: {
        checkTask(i) {
            this.todo.done = true;
            console.log("task completa" + (i + 1))

        },
        removeTask(i) {
            this.todo.tasks.splice(i, 1);
            console.log("cliccato la task" + (i + 1))
        }

    }
})
settVue.mount("#root")