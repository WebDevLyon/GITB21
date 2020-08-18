const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keygHycxBbIn4H0c6" }).base(
    "appkrZ6ieFbIoxBfW"
);

module.exports = {
    liste: function(table, tableau) {
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
    IdDetail: function (TableType, base) {
        switch (TableType) {
            case 'Joueurs':
                break;
            case 'Tournois':
                break;
            case 'Contact':
                break;
            default:
                ;
        }
    }
};