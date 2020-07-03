new Vue({
    el: '#app',
    data: {
        msg: 'Hello World',
        auth: true,
        envoiAFaire: false
    },
    methods: {
        //Prérequis et paramétrage pour communication avec l'API
        param_API: function () {

            //Lien et clé API
            let APIURL = "https://api.airtable.com/v0/appUZdvox0Zvhc3ZD/";
            const KeyAPI = "?api_key=keygHycxBbIn4H0c6";

            //Tableau des parametres pour le retour
            const paramAPI = [APIURL, KeyAPI]

            return paramAPI
        },

        /*Appel vers l'API
          @param id : string*/
        api_demande: function (id, table) {
            return new Promise((resolve) => {
                let request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                        let response = JSON.parse(this.responseText);
                        resolve(response);
                        console.log(response)
                    }
                };
                request.open("GET", this.param_API()[0] + table + "/" + id + this.param_API()[1]);
                request.send();
            });
        },
        detailId: async function () {
            //Collecter l'URL après le ?id= pour le récupérer uniquement sur l'API
            id = location.search.substring(4);
            const list = await this.api_demande(id, sessionStorage.getItem("table"));
            console.log("Adminsitration : La fiche id " + id + " est affichée");
        }

    },
    mounted: function () {
        
        this.api_demande("", 'tournois')
    }
})