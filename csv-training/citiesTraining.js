/* Do not touch lines 2 - ~103 */
const d3 = require('d3-dsv');
const util = require('util');
const fs = require('fs');
/*var csvData = `Name,Population,State,Country
Jenkers,1994123,Stelkhs,Wheley
Feigerry,1950774,Derlbowl,Ligeandictoria
Emincigass,1792805,Chantated,Ligeandictoria
Aveleticizes,1182001,Delformen,Imatentingles
Meteness,1305696,Chantated,Ligeandictoria
Circeparand,852883,Markmates,Westuming
Norterer,1656951,Delformen,Imatentingles
Siantor,223072,Lispectrih,Westuming
Smemal,1826462,Stelkhs,Wheley
Panipograds,1530398,Stelkhs,Wheley
Raction,1479997,Resivelent,Recontinkeying
Kicklegard,1166009,Peepised,Imatentingles
Expliffnire,951696,Perogaing,Wheley
Ablemon,1338252,Ortherationer,Wheley
Flicined,1231288,Derlbowl,Ligeandictoria
Ormetrional,1176052,Compled,Wheley
Actuterian,1122922,Resivelent,Recontinkeying
Compled,1918540,Voreit,Recontinkeying
Monamed,29478,Peepised,Imatentingles
Recurevacs,94299,Compled,Wheley
Stinbring,432524,Precing,Imatentingles
Feelgical,1096895,Chizered,Westuming
Humouse,822889,Perogaing,Wheley
Navers,635110,Objeer,Westuming
Variething,679241,Tradmisey,Recontinkeying
Cranytize,962260,Peepised,Imatentingles
Slopent,598410,Henser,Ligeandictoria
Entist,405453,Clinsonic,Ligeandictoria
Sembigating,1472795,Objeer,Westuming
Unctimosure,198276,Markmates,Westuming
Compot,170553,Delformen,Imatentingles
Dinamerming,1160071,Markmates,Westuming
Photrunninath,556915,Lispectrih,Westuming
Oblevil,1576955,Compled,Wheley
Brazing,550537,Perogaing,Wheley
Shebronizen,199812,Lumetend,Wheley
Diances,513048,Recognizings,Recontinkeying
Comped,1567358,Ortherationer,Wheley
Hoserse,330729,Volthy,Westuming
Climates,1208691,Precing,Imatentingles
Diatane,72417,Clinsonic,Ligeandictoria
Hearres,933855,Voreit,Recontinkeying
Boosperhoduce,1292437,Keonsinstor,Imatentingles
Schonduction,548110,Slationally,Imatentingles
Welcon,21534,Delformen,Imatentingles
Judiffy,419934,Phusurally,Ligeandictoria
Univia,1384845,Volthy,Westuming
Phorizing,424258,Compled,Wheley
Dairwing,35982,Henser,Ligeandictoria
Scrial,744760,Recognizings,Recontinkeying
Warmintion,849955,Phusurally,Ligeandictoria
Foamate,286930,Clinsonic,Ligeandictoria
Bersecters,729125,Lispectrih,Westuming
Refring,240497,Volthy,Westuming
Camplantamalle,1422562,Slationally,Imatentingles
Doubronaggiss,404996,Objeer,Westuming
Undealgang,1526469,Resivelent,Recontinkeying
Extria,1898954,Peepised,Imatentingles
Custaldefely,1405705,Tradmisey,Recontinkeying
Faildisque,385327,Tradmisey,Recontinkeying
Isesumedwaive,1162637,Ortherationer,Wheley
Artwissia,896333,Keonsinstor,Imatentingles
Pauses,1410627,Frages,Recontinkeying
Sharctions,1398364,Henser,Ligeandictoria
Emencallover,1956337,Slationally,Imatentingles
Bewideted,934785,Tradmisey,Recontinkeying
Siliest,836041,Perogaing,Wheley
Latectine,664455,Recognizings,Recontinkeying
Boatess,1499336,Keonsinstor,Imatentingles
Hubewaus,499063,Chizered,Westuming
Parancilition,1154447,Derlbowl,Ligeandictoria
Corrion,1830845,Frages,Recontinkeying
Tweith,1618243,Frages,Recontinkeying
Bonnon,355852,Derlbowl,Ligeandictoria
Seassive,1463413,Keonsinstor,Imatentingles
Depoppener,1999531,Phusurally,Ligeandictoria
Dimickertilly,1302893,Clinsonic,Ligeandictoria
Thawanizes,1382346,Voreit,Recontinkeying
Signated,1907056,Ortherationer,Wheley
Belcyo,121294,Voreit,Recontinkeying
Sifitte,572307,Chantated,Ligeandictoria
Barrellarits,1519271,Slationally,Imatentingles
Exibler,87472,Chantated,Ligeandictoria
Snapsitobises,1760974,Lispectrih,Westuming
Actryses,1098574,Stelkhs,Wheley
Invanessly,1111944,Lumetend,Wheley
Deursecread,1827600,Resivelent,Recontinkeying
Commer,713456,Objeer,Westuming
Tiviewomedier,60536,Volthy,Westuming
Mototoken,1060965,Henser,Ligeandictoria
Digniths,1465857,Lumetend,Wheley
Coginewbore,599057,Frages,Recontinkeying
Monymonalizzle,332921,Chizered,Westuming
Mourition,1681866,Markmates,Westuming
Ecosessed,839018,Precing,Imatentingles
Hairess,890704,Lumetend,Wheley
Honoterms,1242464,Phusurally,Ligeandictoria
Atortly,380470,Precing,Imatentingles
Rhoparlabil,403042,Recognizings,Recontinkeying
Hillion,1363900,Chizered,Westuming`;*/
const csvData = fs.readFileSync('./countries.csv', 'utf-8');

/******************************************************
 *                   convertData
 * 
 * Write code to convert the data from a one
 * dimensional array to a multi-dimensional array.
 * It should follow the following format:
 *         Countries -> States -> Cities
 *   ---[{Name, States[{Name, Cities[{Name, 
 * Population}]}]}]---
 * 
 * If you have any questions about the format feel 
 * free to ask.
 * 
 * This function should return an array containing the
 * converted data.
 ******************************************************/
function convertData(data) {
    var organizeData = function (acc, cityInfo, index){
        var countryName = cityInfo.Country;
        var stateName = cityInfo.State;
        var cityName = cityInfo.Name;
        var population = cityInfo.Population;
        if(acc.some(country => country.Name === countryName)){
            var countryIndex = acc.findIndex(country => country.Name === countryName);
            if (acc[countryIndex].States.some(state => state.Name === stateName)) {
                var stateIndex = acc[countryIndex].States.findIndex(state => state.Name === stateName);
                if (acc[countryIndex].States[stateIndex].Cities.some(city => city.Name === cityName)) {
                    return acc;
                } else {
                    acc[countryIndex].States[stateIndex].Cities.push({Name: cityName, Population: population});
                    return acc;
                }
            } else {
                acc[countryIndex].States.push({Name: stateName, Cities:[{Name: cityName, Population: population}]});
                return acc;
            }
        } else {
            acc.push({Name: countryName, States:[{Name: stateName, Cities:[{Name: cityName, Population: population}]}]});
            return acc;
        }
    }
    var convertedData = data.reduce((acc, curr) => acc.concat(curr), []);
    convertedData = convertedData.reduce(organizeData, []);
    return convertedData;
}

/******************************************************
 *                    sortData
 * 
 * Write code to sort the data. The data should be
 * sorted the following way: 
 * Country&State: a->z, City: by population small->Big
 * 
 * If you have any questions about the format feel 
 * free to ask.
 * 
 * This function should return an array containing the
 * sorted data.
 ******************************************************/
function sortData(data) {
    var sortedData = data;
    var reorderData = function(place1, place2) {
        if (place1.Name === place2.Name) {return 0;}
        else if (place1.Name > place2.Name) {return 1;}
        else {return -1;}
    }
    var reorderByPopulation = function(place1, place2) {
        console.log("P1: " + place1.Population + " --- P2: " + place2.Population);
        if (place1.Population === place2.Population) {return 0;}
        else {return place1.Population - place2.Population}
    }
    sortedData.sort(reorderData);
    sortedData.forEach(country => country.States.sort(reorderData));
    sortedData.forEach(country => country.States.forEach(state => state.Cities.sort(reorderByPopulation/*reorderData*/)));
    return sortedData;
}


/******************************************************
 *                      Display
 *                 *Do not change*
 * 
 * Displays the data neatly in the console. If you
 * wish to view the data has a JSON object instead,
 * uncomment the first line of the function (You
 * should comment out all the other lines of code so
 * the output isn't so large).
 ******************************************************/
function display(data) {
    //console.log(JSON.stringify(data, null, 2));
    for (var i = 0; i < data.length; i++) {
        console.log("\n\n\n****************************************");
        console.log(" " + data[i].Name);
        console.log("****************************************");
        console.log("States of " + data[i].Name + ":");
        for (var j = 0; j < data[0].States.length; j++) {
            console.log(data[i].States[j].Name);
        }
        console.log("\n****************************************");
        for (var n = 0; n < data[0].States.length; n++) {
            console.log("Cities of " + data[i].States[n].Name + ": ");
            for (var x = 0; x < data[0].States[0].Cities.length; x++) {
                console.log(data[i].States[n].Cities[x].Name + " - Population: " +
                    data[i].States[n].Cities[x].Population);
            }
            console.log("");
        }
    }
    console.log("****************************************");
}

/***************************************************
 *                      Main
 *                 *Do not change*
 * 
 * The driver function for the entire program. It
 * calls the necessary functions to parse the
 * CSV file, convert the data, sort the data, and
 * display the sorted data neatly. 
 * 
 * Uncomment out the display function when you are 
 * ready to start testing.
 ****************************************************/
function main() {
    var data = d3.csvParse(csvData);
    var convertedData = convertData(data);
    var sortedData = sortData(convertedData);
    display(sortedData);
    //display(convertedData);
}

main();