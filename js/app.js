new Vue({
    el: '#app',
    data: {
        msg: 'Hello World',
        auth: true,
        envoiAFaire: false,
        responseAPI: [],
         //Option de filtrage et order de l'api Airtable
         option: {
            ordering(fields) {
                return  'sort%5B0%5D%5Bfield%5D='+fields + '&' +'sort%5B0%5D%5Bdirection%5D=desc'
            }
        },
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
        api_demande: function (id, table, option) {
            return new Promise((resolve) => {
                let request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                        let response = JSON.parse(this.responseText);
                        resolve(response.records);
                    }
                };
                request.open("GET", this.param_API()[0] + table + "/" + id + this.param_API()[1] + '&' + option);
                request.send();
            });
        },
        detailId: async function () {
            //Collecter l'URL après le ?id= pour le récupérer uniquement sur l'API
            id = location.search.substring(4);
            const list = await this.api_demande(id, sessionStorage.getItem("table"));
            console.log("Adminsitration : La fiche id " + id + " est affichée");
        },

        formatedDate() {

        }

    },
    mounted: async function () {
        let blockContent = document.getElementById('block-content').getAttribute('class').split(' ')[0];
        switch (blockContent) {
            case 'tournois':
                this.responseAPI = await this.api_demande("", 'tournois',this.option.ordering('Date'))
                break;
            case 'players':
                this.responseAPI = await this.api_demande("", 'joueurs', this.option.ordering('Nom'))
                break;
            case 'contacts':
                this.responseAPI = await this.api_demande("", 'contact', this.option.ordering('Nom'))
                break;
                default:
                    break;
        };
    }
});