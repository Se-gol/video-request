const express = require("express")
const {google} = require("googleapis")
const app = express();

const {initializeApp} = require("firebase/app");

const {collection, getDocs, getFirestore} = require('firebase/firestore');

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

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,

    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!E3:E15",
    });

    // let sum = 0;
    // let rows = getRows.data.values;
    // for (const rowsKey in rows) {
    //     console.log(rowsKey)
    //     sum += parseFloat(rowsKey);
    // }
    // console.log(sum)

    var id = ["id"]
    var matchNumber = ["matchNumber"]
    var teamNumber = ["teamNumber"]
    var auto = ["auto"]
    var teleop = ["teleop"]
    var climb = ["climb"]
    var comments = ["comments"]

    querySnapshot.then(results => {
        results.forEach(v => {
            id.push(v.id)
            matchNumber.push(v.data().matchNumber)
            teamNumber.push(v.data().teamNumber)
            auto.push(v.data().autoShots.length)
            teleop.push(v.data().teleopShots.length)
            climb.push(v.data().climbed)
            comments.push(v.data().comments)
        })
    });

    // console.log(fruits)
    // for (let i = 0; i < fruits.length; i++) {
    //     console.log(fruits[i])
    //     await googleSheets.spreadsheets.values.append({
    //         auth,
    //         spreadsheetId,
    //         range: "Sheet1!B3:F24",
    //         valueInputOption: "USER_ENTERED",
    //         resource: {
    //             values: [
    //                 [fruits[i], high, low, points, miss]
    //             ]
    //         },
    //     });
    // }
    console.log("id", id)
    console.log("teamNumber", teamNumber)
    console.log("auto", auto)
    console.log("teleop", teleop)
    console.log("climb", climb)
    console.log("comments", comments)
    console.log("match", matchNumber)
    for (let i = 0; i < id.length; i++) {
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Sheet1",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [id[i], matchNumber[i], teamNumber[i], auto[i], teleop[i], climb[i], comments[i]]
                ]
            },
        });

    }

    res.send("Successfully submitted! Thank you!");
})

app.listen(2222, (req, res) => console.log("running on 2222"))
