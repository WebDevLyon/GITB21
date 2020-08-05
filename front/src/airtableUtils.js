const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keygHycxBbIn4H0c6" }).base(
    "appkrZ6ieFbIoxBfW"
);


//Chargement de la liste des joueurs
function liste(table, tableau) {
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
                console.log("Retrieved", record);
            }));
        })
}
export { liste }