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

const fuckMe = [
    ["Team Number"],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [""],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [""],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [""],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [""],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [""],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [""],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [""],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [""],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [""],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [""],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [""],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [""],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [""],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [""],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [""],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [""],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [""],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [""],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [""],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [""],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [""],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [""],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [""],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [""],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [""],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [""],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [""],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [""],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843]
]

const fuckingHell = [
    ["Team's match number"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    [""],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    [""],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    [""],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    [""],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    [""],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    [""],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    [""],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    [""],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    [""],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    [""],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    [""],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    [""],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    [""],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    [""],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    [""],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    [""],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    [""],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    [""],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    [""],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    [""],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    [""],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    [""],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    [""],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    [""],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    [""],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    [""],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    [""],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    [""],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
]

const iHateOrbit = [
    ["Team's Match Number"],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"]
]

const querySnapshot = getDocs(collection(getFirestore(firebaseApp), "scouters"));

app.get("/", async (req, res) => {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

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

    let teams = [
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

    function getTeam(team) {
        switch (team) {
            case 1580:
                return 0;
            case 1657:
                return 1;
            case 1942:
                return 2;
            case 1943:
                return 3;
            case 1954:
                return 4;
            case 2230:
                return 5;
            case 3211:
                return 6;
            case 3388:
                return 7;
            case 3835:
                return 8;
            case 4320:
                return 9;
            case 4338:
                return 10;
            case 4416:
                return 11;
            case 4590:
                return 12;
            case 4661:
                return 13;
            case 4744:
                return 14;
            case 5554:
                return 15;
            case 5635:
                return 16;
            case 5715:
                return 17;
            case 5928:
                return 18;
            case 5951:
                return 19;
            case 5987:
                return 20;
            case 5990:
                return 21;
            case 6168:
                return 22;
            case 6230:
                return 23;
            case 7067:
                return 24;
            case 7112:
                return 25;
            case 8175:
                return 26;
            case 8223:
                return 27;
            case 8843:
                return 28;
            default:
                return 29;
        }

    }

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version: "v4", auth: client});

    // const spreadsheetId = "1A82d7KK2Ir0UzIVCz0he_k86P4hrbRwYC8dO_E1hneI";
    const spreadsheetId = "15aGCKytfFHFSzIDFnyXJo1NaYpGShhyMiIkdMULMAAo";

    let superRange = "Saar4!D2:Y500"

    await querySnapshot.then(results => {
        results.forEach(v => {
            const team = getTeam(parseFloat(v.data().teamNumber))
            const qualification = v.data().matchNumber
            let alreadyThere = false;
            for (let i = 0; i < teams[team].length; i++) {
                if (parseFloat(teams[team][i][0]) === parseFloat(qualification)) {
                    alreadyThere = true;

                    let autoMisses = 0;
                    let autoLow = 0;
                    let autoTarmac = 0;
                    let autoMiddle = 0;
                    let autoFar = 0;
                    for (let i = 0; i < v.data().autoShots.length; i++) {
                        if (v.data().autoShots[i].succeed) {
                            if (v.data().autoShots[i].distance === "low") {
                                autoLow++;
                            }
                            if (v.data().autoShots[i].distance === "tarmac") {
                                autoTarmac++;
                            }
                            if (v.data().autoShots[i].distance === "middle") {
                                autoMiddle++;
                            }
                            if (v.data().autoShots[i].distance === "far") {
                                autoFar++;
                            }
                        } else {
                            autoMisses++;
                        }
                    }

                    let teleopMisses = 0;
                    let teleopLow = 0;
                    let teleopTarmac = 0;
                    let teleopMiddle = 0;
                    let teleopFar = 0;
                    for (let i = 0; i < v.data().teleopShots.length; i++) {
                        sleep(10)
                        if (v.data().teleopShots[i].succeed) {
                            if (v.data().teleopShots[i].distance === "low") {
                                teleopLow++;
                            }
                            if (v.data().teleopShots[i].distance === "tarmac") {
                                teleopTarmac++;
                            }
                            if (v.data().teleopShots[i].distance === "middle") {
                                teleopMiddle++;
                            }
                            if (v.data().teleopShots[i].distance === "far") {
                                teleopFar++;
                            }
                        } else {
                            teleopMisses++;
                        }
                    }
                    // let score = ((v.data().taxi ? 2 : 0) + autoLow * 2 + (autoTarmac + autoMiddle + autoFar) * 4 + teleopLow + (teleopTarmac + teleopMiddle + teleopFar) * 2 + v.data().successfulClimbing ? v.data().successfulRung == 1 ? 4 : v.data().successfulRung == 2 ? 6 : v.data().successfulRung == 3 ? 10 : 15 : 0)
                    let score = ((v.data().taxi ? 2 : 0) + autoLow * 2 + (autoTarmac + autoMiddle + autoFar) * 4 + teleopLow + (teleopTarmac + teleopMiddle + teleopFar) * 2 + (v.data().successfulClimbing ? (v.data().successfulRung == 1 ? 4 : (v.data().successfulRung == 2 ? 6 : (v.data().successfulRung == 3 ? 10 : 15))) : 0))
                    array = ["", qualification, v.data().taxi ? 1 : 0, (autoLow + autoLow + autoTarmac + autoMiddle + autoFar), autoLow, autoTarmac, autoMiddle, autoFar, autoMisses, teleopLow, teleopTarmac, teleopMiddle, teleopFar, teleopMisses, (teleopMisses + autoMisses), v.data().climbed ? 1 : 0, v.data().successfulRung, v.data().succeedClimbing ? 1 : 0, v.data().remainingClimbingTime, v.data().endClimbingTime, score, 0, v.data().comments]
                    teams[team][i] = teams[team][i].concat(array)
                }
            }
            if (!alreadyThere) {
                let autoMisses = 0;
                let autoLow = 0;
                let autoTarmac = 0;
                let autoMiddle = 0;
                let autoFar = 0;
                for (let i = 0; i < v.data().autoShots.length; i++) {
                    if (v.data().autoShots[i].succeed) {
                        if (v.data().autoShots[i].distance === "low") {
                            autoLow++;
                        }
                        if (v.data().autoShots[i].distance === "tarmac") {
                            autoTarmac++;
                        }
                        if (v.data().autoShots[i].distance === "middle") {
                            autoMiddle++;
                        }
                        if (v.data().autoShots[i].distance === "far") {
                            autoFar++;
                        }
                    } else {
                        autoMisses++;
                    }
                }

                let teleopMisses = 0;
                let teleopLow = 0;
                let teleopTarmac = 0;
                let teleopMiddle = 0;
                let teleopFar = 0;
                for (let i = 0; i < v.data().teleopShots.length; i++) {
                    sleep(10)
                    if (v.data().teleopShots[i].succeed) {
                        if (v.data().teleopShots[i].distance === "low") {
                            teleopLow++;
                        }
                        if (v.data().teleopShots[i].distance === "tarmac") {
                            teleopTarmac++;
                        }
                        if (v.data().teleopShots[i].distance === "middle") {
                            teleopMiddle++;
                        }
                        if (v.data().teleopShots[i].distance === "far") {
                            teleopFar++;
                        }
                    } else {
                        teleopMisses++;
                    }
                }
                // let score = ((v.data().taxi ? 2 : 0) + autoLow * 2 + (autoTarmac + autoMiddle + autoFar) * 4 + teleopLow + (teleopTarmac + teleopMiddle + teleopFar) * 2 + v.data().successfulClimbing ? v.data().successfulRung == 1 ? 4 : v.data().successfulRung == 2 ? 6 : v.data().successfulRung == 3 ? 10 : 15 : 0)
                let score = ((v.data().taxi ? 2 : 0) + autoLow * 2 + (autoTarmac + autoMiddle + autoFar) * 4 + teleopLow + (teleopTarmac + teleopMiddle + teleopFar) * 2 + (v.data().successfulClimbing ? (v.data().successfulRung == 1 ? 4 : (v.data().successfulRung == 2 ? 6 : (v.data().successfulRung == 3 ? 10 : 15))) : 0))
                if (teams[team].length < 12)
                    teams[team].unshift([qualification, v.data().taxi ? 1 : 0, (autoLow + autoLow + autoTarmac + autoMiddle + autoFar), autoLow, autoTarmac, autoMiddle, autoFar, autoMisses, teleopLow, teleopTarmac, teleopMiddle, teleopFar, teleopMisses, (teleopMisses + autoMisses), v.data().climbed ? 1 : 0, v.data().successfulRung, v.data().succeedClimbing ? 1 : 0, v.data().remainingClimbingTime, v.data().endClimbingTime, score, 0, v.data().comments])
            }
        })
    });

    // console.log(teams)
    /*    const request2 = {
            spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
            range: "Saar2!A1:Y1",
            resource: {},
            auth: auth,
        };

        await googleSheets.spreadsheets.values.clear(request2)

        sleep(40)
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Saar2!A1:Y1",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    ["Team Number:", "Name:", "Team's Match Number", "Match Number", "Taxi (1/0)", "How many balls auto?", "Auto Lower Cargo", "Auto Upper Hub Cargo Tarmac Area", "Auto Upper Hub Cargo Middle Area", "Auto Upper Hub Cargo Far Area", "Auto cargo miss", "Teleop Lower Hub Cargo", "Teleop Upper Hub Cargo Tarmac Area", "Teleop Upper Hub Cargo Middle Area", "Teleop Upper Hub Cargo Far Area", "Teleop cargo miss", "All cargo miss", "Tried to climb?", "Which Rung?", "Successful Climbed?", "Reamining Time To Climb", "End Climb Time", "Total Points", "How good are the drivers? (1-10)", "Comments"]
                ]
            },
        });*/
    sleep(40)

    const request = {
        spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
        range: "Saar4",  // TODO: Update placeholder value.
        resource: {},
        auth: auth,
    };

    await googleSheets.spreadsheets.values.clear(request)

    sleep(10)
    teams[getTeam(-1)] = []
    for (let i = 0; i < teams.length; i++) {
        for (let j = 0; j < teams[i].length; j++) {
            let myRange = "Saar4!D" + (i * 14 + 2) + ":Y" + (i * 14 + 13)
            // console.log(teams[i][j])
            await googleSheets.spreadsheets.values.append({
                auth,
                spreadsheetId,
                range: myRange,
                valueInputOption: "USER_ENTERED",
                resource: {
                    values: [
                        teams[i][j]
                    ]
                },
            });
            sleep(10)
        }
        sleep(10)
    }

    sleep(40)
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Saar4!A1:Y1",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                ["", "", "", "Match Number", "Taxi (1/0)", "How many balls auto?", "Auto Lower Cargo", "Auto Upper Hub Cargo Tarmac Area", "Auto Upper Hub Cargo Middle Area", "Auto Upper Hub Cargo Far Area", "Auto cargo miss", "Teleop Lower Hub Cargo", "Teleop Upper Hub Cargo Tarmac Area", "Teleop Upper Hub Cargo Middle Area", "Teleop Upper Hub Cargo Far Area", "Teleop cargo miss", "All cargo miss", "Tried to climb?", "Which Rung?", "Successful Climbed?", "Reamining Time To Climb", "End Climb Time", "Total Points", "How good are the drivers? (1-10)", "Comments"]
            ]
        },
    });
    sleep(40)


    await googleSheets.spreadsheets.values.clear(
        {
            spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
            range: "Saar4!A:A",  // TODO: Update placeholder value.
            resource: {},
            auth: auth,
        })

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Saar4!A:A",
        valueInputOption: "USER_ENTERED",
        resource: {
            values:
            fuckMe
        },
    });

    await googleSheets.spreadsheets.values.clear(
        {
            spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
            range: "Saar4!B:B",  // TODO: Update placeholder value.
            resource: {},
            auth: auth,
        })

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Saar4!B:B",
        valueInputOption: "USER_ENTERED",
        resource: {
            values:
            fuckingHell
        },
    });

    await googleSheets.spreadsheets.values.clear(
        {
            spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
            range: "Saar4!C:C",  // TODO: Update placeholder value.
            resource: {},
            auth: auth,
        })

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Saar4!C:C",
        valueInputOption: "USER_ENTERED",
        resource: {
            values:
            iHateOrbit
        },
    });

    for (let i = 0; i < 37; i++) {
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Saar4!E" + ((i + 1) * 14),
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    ["=Average(E" + (2 + i * 14) + ": E" + ((i + 1) * 14 - 1) + ")", "=Average(F" + (2 + i * 14) + ": F" + ((i + 1) * 14 - 1) + ")", "=Average(G" + (2 + i * 14) + ": G" + ((i + 1) * 14 - 1) + ")", "=Average(H" + (2 + i * 14) + ": H" + ((i + 1) * 14 - 1) + ")", "=Average(I" + (2 + i * 14) + ": I" + ((i + 1) * 14 - 1) + ")", "=Average(J" + (2 + i * 14) + ": J" + ((i + 1) * 14 - 1) + ")", "=Average(K" + (2 + i * 14) + ": K" + ((i + 1) * 14 - 1) + ")", "=Average(L" + (2 + i * 14) + ": L" + ((i + 1) * 14 - 1) + ")", "=Average(M" + (2 + i * 14) + ": M" + ((i + 1) * 14 - 1) + ")", "=Average(N" + (2 + i * 14) + ": N" + ((i + 1) * 14 - 1) + ")", "=Average(O" + (2 + i * 14) + ": O" + ((i + 1) * 14 - 1) + ")", "=Average(P" + (2 + i * 14) + ":P" + ((i + 1) * 14 - 1) + ")", "=Average(Q" + (2 + i * 14) + ": Q" + ((i + 1) * 14 - 1) + ")", "=Average(R" + (2 + i * 14) + ": R" + ((i + 1) * 14 - 1) + ")", "=Average(S" + (2 + i * 14) + ": S" + ((i + 1) * 14 - 1) + ")", "=Average(T" + (2 + i * 14) + ": T" + ((i + 1) * 14 - 1) + ")", "=Average(U" + (2 + i * 14) + ":U" + ((i + 1) * 14 - 1) + ")", "=Average(V" + (2 + i * 14) + ": V" + ((i + 1) * 14 - 1) + ")", "=Average(W" + (2 + i * 14) + ": W" + ((i + 1) * 14 - 1) + ")", "=Average(X" + (2 + i * 14) + ": X" + ((i + 1) * 14 - 1) + ")"]
                ]
            },
        });
    }


    res.send("Refresh me to update.")
});

app.listen(1234, (req, res) => console.log("running on http://localhost:1234/"))

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

const fuckMe = [
    ["Team Number"],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [1580],
    [""],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [1657],
    [""],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [1942],
    [""],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [1943],
    [""],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [1954],
    [""],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [2230],
    [""],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [3211],
    [""],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [3388],
    [""],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [3835],
    [""],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [4320],
    [""],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [4338],
    [""],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [4416],
    [""],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [4590],
    [""],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [4661],
    [""],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [4744],
    [""],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [5554],
    [""],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [5635],
    [""],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [5715],
    [""],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [5928],
    [""],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [5951],
    [""],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [5987],
    [""],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [5990],
    [""],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [6168],
    [""],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [6230],
    [""],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [7067],
    [""],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [7112],
    [""],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [8175],
    [""],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [8223],
    [""],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843],
    [8843]
]

const fuckingHell = [
    ["Team's match number"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    ["The Blue Monkeys"],
    [""],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    ["Hamosad"],
    [""],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    ["Cinderella Tel - Nof"],
    [""],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    ["Neat Team"],
    [""],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    ["ElectroBunny"],
    [""],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    ["General Angels"],
    [""],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    ["The Y Team"],
    [""],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    ["Flash"],
    [""],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    ["Vulcan"],
    [""],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    ["The Joker"],
    [""],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    ["Falcons"],
    [""],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    ["Skynet"],
    [""],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    ["GreenBlitz"],
    [""],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    ["The Red Pirates"],
    [""],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    ["Ninjas"],
    [""],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    ["The Poros Robotics"],
    [""],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    ["Demacia"],
    [""],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    ["DRC"],
    [""],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    ["MetalBoost"],
    [""],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    ["Makers Assemble"],
    [""],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    ["Galaxia in memory of David Zohar"],
    [""],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    ["TRIGON"],
    [""],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    ["alzahrawi"],
    [""],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    ["Team Koi"],
    [""],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    ["Team Streak"],
    [""],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    ["EverGreen"],
    [""],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    ["Piece of Mind"],
    [""],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    ["Mariners"],
    [""],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
    ["Amal Space and Aviation Maale Adumim"],
]

const iHateOrbit = [
    ["Team's Match Number"],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"],
    [""],
    ["1"],
    ["2"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"],
    ["11"],
    ["12"],
    ["AVERAGE"]
]

const querySnapshot = getDocs(collection(getFirestore(firebaseApp), "scouters"));

app.get("/", async (req, res) => {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let team1580 = []
    let team1657 = []
    let team1942 = []
    let team1943 = []
    let team1954 = []
    let team2230 = []
    let team3211 = []
    let team3388 = []
    let team3835 = []
    let team4320 = []
    let team4338 = []
    let team4416 = []
    let team4590 = []
    let team4661 = []
    let team4744 = []
    let team5554 = []
    let team5635 = []
    let team5715 = []
    let team5928 = []
    let team5951 = []
    let team5987 = []
    let team5990 = []
    let team6168 = []
    let team6230 = []
    let team7067 = []
    let team7112 = []
    let team8175 = []
    let team8223 = []
    let team8843 = []
    let junk = []

    let teams = [
        team1580,
        team1657,
        team1942,
        team1943,
        team1954,
        team2230,
        team3211,
        team3388,
        team3835,
        team4320,
        team4338,
        team4416,
        team4590,
        team4661,
        team4744,
        team5554,
        team5635,
        team5715,
        team5928,
        team5951,
        team5987,
        team5990,
        team6168,
        team6230,
        team7067,
        team7112,
        team8175,
        team8223,
        team8843,
        junk
    ]

    function getTeam(team) {
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

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version: "v4", auth: client});

    // const spreadsheetId = "1A82d7KK2Ir0UzIVCz0he_k86P4hrbRwYC8dO_E1hneI";
    const spreadsheetId = "15aGCKytfFHFSzIDFnyXJo1NaYpGShhyMiIkdMULMAAo";

    let superRange = "Saar4!D2:Y500"

    await querySnapshot.then(results => {
        results.forEach(v => {
            const team = getTeam(parseFloat(v.data().teamNumber))
            const qualification = v.data().matchNumber
            let alreadyThere = false;
            for (let i = 0; i < teams[team].length; i++) {
                if (parseFloat(teams[team][i][0]) === parseFloat(qualification)) {
                    alreadyThere = true;

                    let autoMisses = 0;
                    let autoLow = 0;
                    let autoTarmac = 0;
                    let autoMiddle = 0;
                    let autoFar = 0;
                    for (let i = 0; i < v.data().autoShots.length; i++) {
                        if (v.data().autoShots[i].succeed) {
                            if (v.data().autoShots[i].distance === "low") {
                                autoLow++;
                            }
                            if (v.data().autoShots[i].distance === "tarmac") {
                                autoTarmac++;
                            }
                            if (v.data().autoShots[i].distance === "middle") {
                                autoMiddle++;
                            }
                            if (v.data().autoShots[i].distance === "far") {
                                autoFar++;
                            }
                        } else {
                            autoMisses++;
                        }
                    }

                    let teleopMisses = 0;
                    let teleopLow = 0;
                    let teleopTarmac = 0;
                    let teleopMiddle = 0;
                    let teleopFar = 0;
                    for (let i = 0; i < v.data().teleopShots.length; i++) {
                        sleep(10)
                        if (v.data().teleopShots[i].succeed) {
                            if (v.data().teleopShots[i].distance === "low") {
                                teleopLow++;
                            }
                            if (v.data().teleopShots[i].distance === "tarmac") {
                                teleopTarmac++;
                            }
                            if (v.data().teleopShots[i].distance === "middle") {
                                teleopMiddle++;
                            }
                            if (v.data().teleopShots[i].distance === "far") {
                                teleopFar++;
                            }
                        } else {
                            teleopMisses++;
                        }
                    }
                    // let score = ((v.data().taxi ? 2 : 0) + autoLow * 2 + (autoTarmac + autoMiddle + autoFar) * 4 + teleopLow + (teleopTarmac + teleopMiddle + teleopFar) * 2 + v.data().successfulClimbing ? v.data().successfulRung == 1 ? 4 : v.data().successfulRung == 2 ? 6 : v.data().successfulRung == 3 ? 10 : 15 : 0)
                    let score = ((v.data().taxi ? 2 : 0) + autoLow * 2 + (autoTarmac + autoMiddle + autoFar) * 4 + teleopLow + (teleopTarmac + teleopMiddle + teleopFar) * 2 + (v.data().successfulClimbing ? (v.data().successfulRung == 1 ? 4 : (v.data().successfulRung == 2 ? 6 : (v.data().successfulRung == 3 ? 10 : 15))) : 0))
                    array = ["", qualification, v.data().taxi ? 1 : 0, (autoLow + autoLow + autoTarmac + autoMiddle + autoFar), autoLow, autoTarmac, autoMiddle, autoFar, autoMisses, teleopLow, teleopTarmac, teleopMiddle, teleopFar, teleopMisses, (teleopMisses + autoMisses), v.data().climbed ? 1 : 0, v.data().successfulRung, v.data().succeedClimbing ? 1 : 0, v.data().remainingClimbingTime, v.data().endClimbingTime, score, 0, v.data().comments]
                    teams[team][i] = teams[team][i].concat(array)
                }
            }
            if (!alreadyThere) {
                let autoMisses = 0;
                let autoLow = 0;
                let autoTarmac = 0;
                let autoMiddle = 0;
                let autoFar = 0;
                for (let i = 0; i < v.data().autoShots.length; i++) {
                    if (v.data().autoShots[i].succeed) {
                        if (v.data().autoShots[i].distance === "low") {
                            autoLow++;
                        }
                        if (v.data().autoShots[i].distance === "tarmac") {
                            autoTarmac++;
                        }
                        if (v.data().autoShots[i].distance === "middle") {
                            autoMiddle++;
                        }
                        if (v.data().autoShots[i].distance === "far") {
                            autoFar++;
                        }
                    } else {
                        autoMisses++;
                    }
                }

                let teleopMisses = 0;
                let teleopLow = 0;
                let teleopTarmac = 0;
                let teleopMiddle = 0;
                let teleopFar = 0;
                for (let i = 0; i < v.data().teleopShots.length; i++) {
                    sleep(10)
                    if (v.data().teleopShots[i].succeed) {
                        if (v.data().teleopShots[i].distance === "low") {
                            teleopLow++;
                        }
                        if (v.data().teleopShots[i].distance === "tarmac") {
                            teleopTarmac++;
                        }
                        if (v.data().teleopShots[i].distance === "middle") {
                            teleopMiddle++;
                        }
                        if (v.data().teleopShots[i].distance === "far") {
                            teleopFar++;
                        }
                    } else {
                        teleopMisses++;
                    }
                }
                // let score = ((v.data().taxi ? 2 : 0) + autoLow * 2 + (autoTarmac + autoMiddle + autoFar) * 4 + teleopLow + (teleopTarmac + teleopMiddle + teleopFar) * 2 + v.data().successfulClimbing ? v.data().successfulRung == 1 ? 4 : v.data().successfulRung == 2 ? 6 : v.data().successfulRung == 3 ? 10 : 15 : 0)
                let score = ((v.data().taxi ? 2 : 0) + autoLow * 2 + (autoTarmac + autoMiddle + autoFar) * 4 + teleopLow + (teleopTarmac + teleopMiddle + teleopFar) * 2 + (v.data().successfulClimbing ? (v.data().successfulRung == 1 ? 4 : (v.data().successfulRung == 2 ? 6 : (v.data().successfulRung == 3 ? 10 : 15))) : 0))
                if (teams[team].length < 12)
                    teams[team].unshift([qualification, v.data().taxi ? 1 : 0, (autoLow + autoLow + autoTarmac + autoMiddle + autoFar), autoLow, autoTarmac, autoMiddle, autoFar, autoMisses, teleopLow, teleopTarmac, teleopMiddle, teleopFar, teleopMisses, (teleopMisses + autoMisses), v.data().climbed ? 1 : 0, v.data().successfulRung, v.data().succeedClimbing ? 1 : 0, v.data().remainingClimbingTime, v.data().endClimbingTime, score, 0, v.data().comments])
            }
        })
    });

    // console.log(teams)
    /*    const request2 = {
            spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
            range: "Saar2!A1:Y1",
            resource: {},
            auth: auth,
        };

        await googleSheets.spreadsheets.values.clear(request2)

        sleep(40)
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Saar2!A1:Y1",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    ["Team Number:", "Name:", "Team's Match Number", "Match Number", "Taxi (1/0)", "How many balls auto?", "Auto Lower Cargo", "Auto Upper Hub Cargo Tarmac Area", "Auto Upper Hub Cargo Middle Area", "Auto Upper Hub Cargo Far Area", "Auto cargo miss", "Teleop Lower Hub Cargo", "Teleop Upper Hub Cargo Tarmac Area", "Teleop Upper Hub Cargo Middle Area", "Teleop Upper Hub Cargo Far Area", "Teleop cargo miss", "All cargo miss", "Tried to climb?", "Which Rung?", "Successful Climbed?", "Reamining Time To Climb", "End Climb Time", "Total Points", "How good are the drivers? (1-10)", "Comments"]
                ]
            },
        });*/
    sleep(40)

    const request = {
        spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
        range: "Saar4",  // TODO: Update placeholder value.
        resource: {},
        auth: auth,
    };

    await googleSheets.spreadsheets.values.clear(request)

    sleep(10)
    teams[getTeam(-1)] = []
    for (let i = 0; i < teams.length; i++) {
        for (let j = 0; j < teams[i].length; j++) {
            let myRange = "Saar4!D" + (i * 14 + 2) + ":Y" + (i * 14 + 13)
            // console.log(teams[i][j])
            await googleSheets.spreadsheets.values.append({
                auth,
                spreadsheetId,
                range: myRange,
                valueInputOption: "USER_ENTERED",
                resource: {
                    values: [
                        teams[i][j]
                    ]
                },
            });
            sleep(10)
        }
        sleep(10)
    }

    sleep(40)
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Saar4!A1:Y1",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                ["", "", "", "Match Number", "Taxi (1/0)", "How many balls auto?", "Auto Lower Cargo", "Auto Upper Hub Cargo Tarmac Area", "Auto Upper Hub Cargo Middle Area", "Auto Upper Hub Cargo Far Area", "Auto cargo miss", "Teleop Lower Hub Cargo", "Teleop Upper Hub Cargo Tarmac Area", "Teleop Upper Hub Cargo Middle Area", "Teleop Upper Hub Cargo Far Area", "Teleop cargo miss", "All cargo miss", "Tried to climb?", "Which Rung?", "Successful Climbed?", "Reamining Time To Climb", "End Climb Time", "Total Points", "How good are the drivers? (1-10)", "Comments"]
            ]
        },
    });
    sleep(40)


    await googleSheets.spreadsheets.values.clear(
        {
            spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
            range: "Saar4!A:A",  // TODO: Update placeholder value.
            resource: {},
            auth: auth,
        })

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Saar4!A:A",
        valueInputOption: "USER_ENTERED",
        resource: {
            values:
            fuckMe
        },
    });

    await googleSheets.spreadsheets.values.clear(
        {
            spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
            range: "Saar4!B:B",  // TODO: Update placeholder value.
            resource: {},
            auth: auth,
        })

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Saar4!B:B",
        valueInputOption: "USER_ENTERED",
        resource: {
            values:
            fuckingHell
        },
    });

    await googleSheets.spreadsheets.values.clear(
        {
            spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.
            range: "Saar4!C:C",  // TODO: Update placeholder value.
            resource: {},
            auth: auth,
        })

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Saar4!C:C",
        valueInputOption: "USER_ENTERED",
        resource: {
            values:
            iHateOrbit
        },
    });

    for (let i = 0; i < 37; i++) {
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Saar4!E" + ((i + 1) * 14),
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    ["=Average(E" + (2 + i * 14) + ": E" + ((i + 1) * 14 - 1) + ")", "=Average(F" + (2 + i * 14) + ": F" + ((i + 1) * 14 - 1) + ")", "=Average(G" + (2 + i * 14) + ": G" + ((i + 1) * 14 - 1) + ")", "=Average(H" + (2 + i * 14) + ": H" + ((i + 1) * 14 - 1) + ")", "=Average(I" + (2 + i * 14) + ": I" + ((i + 1) * 14 - 1) + ")", "=Average(J" + (2 + i * 14) + ": J" + ((i + 1) * 14 - 1) + ")", "=Average(K" + (2 + i * 14) + ": K" + ((i + 1) * 14 - 1) + ")", "=Average(L" + (2 + i * 14) + ": L" + ((i + 1) * 14 - 1) + ")", "=Average(M" + (2 + i * 14) + ": M" + ((i + 1) * 14 - 1) + ")", "=Average(N" + (2 + i * 14) + ": N" + ((i + 1) * 14 - 1) + ")", "=Average(O" + (2 + i * 14) + ": O" + ((i + 1) * 14 - 1) + ")", "=Average(P" + (2 + i * 14) + ":P" + ((i + 1) * 14 - 1) + ")", "=Average(Q" + (2 + i * 14) + ": Q" + ((i + 1) * 14 - 1) + ")", "=Average(R" + (2 + i * 14) + ": R" + ((i + 1) * 14 - 1) + ")", "=Average(S" + (2 + i * 14) + ": S" + ((i + 1) * 14 - 1) + ")", "=Average(T" + (2 + i * 14) + ": T" + ((i + 1) * 14 - 1) + ")", "=Average(U" + (2 + i * 14) + ":U" + ((i + 1) * 14 - 1) + ")", "=Average(V" + (2 + i * 14) + ": V" + ((i + 1) * 14 - 1) + ")", "=Average(W" + (2 + i * 14) + ": W" + ((i + 1) * 14 - 1) + ")", "=Average(X" + (2 + i * 14) + ": X" + ((i + 1) * 14 - 1) + ")"]
                ]
            },
        });
    }


    res.send("Refresh me to update.")
});


app.listen(1234, (req, res) => console.log("running on http://localhost:1234/"))

