//***************************CHARACTERS W/THEIR WORDS***************************

//Argives:

var achilles = ['fight','honor','dead'];
var agamemnon = ['pride','greed','lead'];
var nestor = ['friend','love','justice'];
var odysseus = ['trick','smart','plot'];
var diomedes = ['sad','husband','steady'];

//Trojans
var hector = ['courage','skill','dedication'];
var paris = ['grace','charm','coward'];
var polydamas = ['devoted','fate','future'];
var priam = ['tired','old','king'];
var helen = ['beauty','white','white'];

characterList = [achilles,agamemnon,nestor,odysseus,diomedes,
    hector,paris,polydamas,priam,helen]

//dict associating character names w/scores

characterScores = {
  "achilles" : 0,
  "agamemnon" : 0,
  "nestor" : 0,
  "odysseus" : 0,
  "diomedes" : 0,
  "hector" : 0,
  "paris" : 0,
  "polydamas" : 0,
  "priam" : 0,
  "helen" : 0
}

//***************************STORY POSSIBILITIES********************************
//THESE ARE THE POSSIBLE FILL-INS TO ALL THE BLANKS IN THE STORY - INTRODUCTION

var pos0 = [{
  'Trojans': {
    'Hector': "Sing to me, as you will",
    'Priam': "Recall with sadness",
    'Helen': "Let us ponder on",
    'Paris': "We'll speak, reluctantly",
    'Polydamas': "We will reflect on"
  },
  'Greeks': {
    'Odysseus': "Explain to us",
    'Achilles': "Let us remember the glory of",
    'Agamemnon': "Recall the damned thing",
    'Diomedes': "Sing to me",
    'Nestor': "Let us recall, at length"
  }
}];

var pos1 = [{
  'Trojans': {
    'Hector': "barbaric",
    'Priam': "merciless",
    'Helen': "impressive",
    'Paris': "frightening",
    'Polydamas': "dreadful"
  },
  'Greeks': {
    'Odysseus': "illogical",
    'Achilles': "glorious",
    'Agamemnon': "vicious",
    'Diomedes': "violent",
    'Nestor': "tempestuous -- like a sea-storm, maybe, or else a typhoon making landfall --"
  }
}];

var pos2 = [{
  'Trojans': {
    'Hector': "Sing to me, as you will",
    'Priam': "Recall with sadness",
    'Helen': "Let us ponder on",
    'Paris': "We'll speak, reluctantly",
    'Polydamas': "We will reflect on"
  },
  'Greeks': {
    'Odysseus': "the boisterous",
    'Achilles': "the hero",
    'Agamemnon': "Recall the damned thing",
    'Diomedes': "Sing to me",
    'Nestor': "Let us recall, at length"
  }
}]

// Variable to store json data
var theData;


//loads before the rest, ofc
function preload() {
  // Get the data from IlliadWords and preload so its available
  var url = "JSON/ScaledIlliadWords.json";
  theData = loadJSON(url,"json");
}

// Initialize Processing sketch
function setup() {
  noCanvas();
  //print out the info in the json
  console.log(theData);
  dataArray = (Object.keys(theData));
  randomKey = dataArray[Math.floor(Math.random()*dataArray.length)];
  console.log(randomKey);
  console.log(theData[randomKey]);

/*
  for (var book in theData) {
    console.log(book);
  }
  */

}

var dataArray = (Object.keys(theData));

function draw() {


}
