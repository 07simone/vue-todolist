const app = new Vue({
    el: "#app",
    data:{
       /*  commissionMade : "", */
        commissionList : [
            {
                text: "comprare il pane",
            },
            {
                text: "comprare il latte",
            },
            {
                text: "comprare l'acqua",
            },
            {
                text: "comprare la pasta",
            },
            {
                text: "comprare lo yogurt",
            },
            
        ],
        contenuto: "",
        
    },
    // 2 funzioni una che li aggiunge e una che li rimuova
    methods:{
        aggiungiElemento(content){
        
            this.commissionList.push(content)
// con questa riga di codice li vado a dire una volta che ho riempito il contenuto, svuotami la barra in alto
            this.contenuto= "";  
            
        },
        rimuoviElemento(indice){
            
            this.commissionList.splice(indice, 1)
        }
    }
})


// se la commissione è stata fatta allora rimuovimi la commissione dalla lista altrimenti aggiungimela alla lista