const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keygHycxBbIn4H0c6" }).base(
    "appkrZ6ieFbIoxBfW"
);

module.exports = {
    liste: function (table, tableau) {
        base(table)
            .select({
                view: "Main",
            })
            .firstPage(function (err, records) {
                if (err) {
                    console.error(err);
                    return;
                }
                records.forEach((record => {
                    tableau.push(record);
                }));
            })
    },
    IdDetail: function (TableType, IdData) {
        switch (TableType) {
            case 'Joueurs':
                console.log("Id appartenant à la table: ", TableType);
                base(TableType).find(IdData.id, function (err, record) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    IdData.data = record.fields;
                    //Recherche des informations tournoi depuis leur id que l'on stock dans une variable temporaire
                    let InfoTournois = [];
                    IdData.data.Tournois.forEach(Tournoi => {
                        base(TableType).find(Tournoi, function (err, record) {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            InfoTournois.push(record)
                        });
                    });
                    //complétion des infos des attachment tournois en injectant la variable temp. dans le retour de la fonction
                    IdData.data.Tournois = InfoTournois
                });
                break;
            case 'Tournois':
                console.log("Fiche d'un tournoi");
                base(TableType).find(IdData.id, function (err, record) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    IdData.data = record.fields;
                    /**Recherche des informations tournoi depuis leur id que l'on stock dans une variable temporaire
                    let InfoTournois = [];
                    IdData.data.Tournois.forEach(Tournoi => {
                        base(TableType).find(Tournoi, function (err, record) {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            InfoTournois.push(record)
                        });
                    });
                    //complétion des infos des attachment tournois en injectant la variable temp. dans le retour de la fonction
                    IdData.data.Tournois = InfoTournois*/
                });
                break;
            case 'Contact':
                console.log("pas un joueur")
                break;
            default:
                console.log("pas un joueur")
        }
    }
};