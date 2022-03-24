const app = new Vue({
    el: "#app",
    data:{
        sbarramento:"text-decoration-line-through",
        commissionList : [

            {
                text: "comprare il pane",
                done: true,
            },
            {
                text: "comprare il latte",
                done: true,
            },
            {
                text: "comprare l'acqua",
                done: false,
            },
            {
                text: "comprare la pasta",
                done: true,
            },
            {
                text: "comprare lo yogurt",
                done: true,
            },
            
        ],
        contenuto: "",
        
    },
    // 2 funzioni una che li aggiunge e una che li rimuova
    methods:{
        aggiungiElemento(content,TodoDone){

                const newElement = {                    // mi creo una nuova variabile, all'interno del quali li vado a pushare nuovi elementi creati
                text : content,                             
                done : TodoDone
            } 
            this.commissionList.push(newElement)                                                    // con questa riga di codice li vado a dire una volta che ho riempito il contenuto, svuotami la barra in alto
            this.contenuto= "";  
            
        },
        rimuoviElemento(indice){
            
            this.commissionList.splice(indice, 1)
        },

        toggleDone(todoIndex){
            if (this.commissionList[todoIndex] != undefined){
                this.commissionList[todoIndex].done = !this.commissionList[todoIndex].done;
            } 
        }
    }
})


// all'interno della lista deve essere presente un click che mi faccia apparire la classe sbarrata al singolo index