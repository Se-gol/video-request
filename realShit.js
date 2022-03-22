const express = require("express")
const {google} = require("googleapis")
const app = express();

const {initializeApp} = require("firebase/app");

const {collection, getDocs, getFirestore} = require('firebase/firestore');
const {parse} = require("nodemon/lib/cli");

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBQ8ZbGFTeK7kl67caTK4BEHT58Bw-YKRs",
    authDomain: "galaxia-scouting.firebaseapp.com",
    projectId: "galaxia-scouting",
    storageBucket: "galaxia-scouting.appspot.com",
    messagingSenderId: "266691765680",
    appId: "1:266691765680:web:c08e913dcf9ab4280ee275",
    measurementId: "G-BV172DBM9L"
});

const querySnapshot = getDocs(collection(getFirestore(firebaseApp), "scouters"));

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index");
});

let team1574 = []
let team7112 = []
let team7039 = []
let team118 = []
let team1744 = []
let team6738 = []
let team6740 = []
let team2231 = []
let team5654 = []
let team4414 = []
let team3065 = []
let team1937 = []
let team589 = []
let team2945 = []
let team3164 = []
let team6741 = []
let team3075 = []
let team2531 = []
let team8175 = []
let team3134 = []
let team179 = []
let team4319 = []
let team93 = []
let team359 = []
let team4416 = []
let team3316 = []
let team5614 = []
let team7067 = []
let team2052 = []
let team3276 = []
let team8324 = []
let team5554 = []
let team8754 = []
let team973 = []
let team5715 = []
let team1577 = []
let junk = []

let temps = [
    team1574,
    team7112,
    team7039,
    team118,
    team1744,
    team6738,
    team6740,
    team2231,
    team5654,
    team4414,
    team3065,
    team1937,
    team589,
    team2945,
    team3164,
    team6741,
    team3075,
    team2531,
    team8175,
    team3134,
    team179,
    team4319,
    team93,
    team359,
    team4416,
    team3316,
    team5614,
    team7067,
    team2052,
    team3276,
    team8324,
    team5554,
    team8754,
    team973,
    team5715,
    team1577,
    junk
]

app.post("/", async (req, res) => {
    const {qualification, high, low, points, miss} = req.body;


    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    // Create client instance for auth
    const client = await auth.getClient();

    // Instance of Google Sheets API
    const googleSheets = google.sheets({version: "v4", auth: client});

    const spreadsheetId = "1A82d7KK2Ir0UzIVCz0he_k86P4hrbRwYC8dO_E1hneI";

    function getTempTeams(team) {
        switch (team) {
            case 1574:
                return 0;
            case 7112:
                return 1;
            case 7039:
                return 2;
            case 118:
                return 3;
            case 1744:
                return 4;
            case 6738:
                return 5;
            case 6740:
                return 6;
            case 2231:
                return 7;
            case 5654:
                return 8;
            case 4414:
                return 9;
            case 3065:
                return 10;
            case 1937:
                return 11;
            case 589:
                return 12;
            case 2945:
                return 13;
            case 3164:
                return 14;
            case 6741:
                return 15;
            case 3075:
                return 16;
            case 2531:
                return 17;
            case 8175:
                return 18;
            case 3134:
                return 19;
            case 179:
                return 20;
            case 4319:
                return 21;
            case 93:
                return 22;
            case 359:
                return 23;
            case 4416:
                return 24;
            case 3316:
                return 25;
            case 5614:
                return 26;
            case 7067:
                return 27;
            case 2052:
                return 28;
            case 3276:
                return 29;
            case 8324:
                return 30;
            case 5554:
                return 31;
            case 8754:
                return 32;
            case 973:
                return 33;
            case 5715:
                return 34;
            case 1577:
                return 35;
            default:
                return 36;
        }
    }

    querySnapshot.then(results => {
        results.forEach(v => {
            const team = getTempTeams(parseFloat(v.data().teamNumber))
            const qualification = v.data().matchNumber
            let alreadyThere = false;
            for (let i = 0; i < temps[team].length; i++) {
                if (parseFloat(temps[team][i]) === parseFloat(qualification)) {
                    alreadyThere = true;
                }
            }
            if (!alreadyThere) {
                temps[team].push([qualification, v.data().teamNumber, v.data().taxi, v.data().autoShots.length, v.data().teleopShots.length])
            }
        })
        // console.log(temps)
        for (let i = 0; i < temps.length; i++) {

        }

    });

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: []
        },
    });


    console.log(temps)

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [temps[0][0]]
            ]
        },
    });


    res.send("Successfully submitted! Thank you!");

})

app.listen(2222, (req, res) => console.log("running on 2222"))
