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
var helen = ['beauty','wife','white'];

characterList = [achilles,agamemnon,nestor,odysseus,diomedes,
    hector,paris,polydamas,priam,helen]

//dict associating character names w/scores

characterScores = {
  achilles : 0,
  agamemnon : 0,
  nestor : 0,
  odysseus : 0,
  diomedes : 0,
  hector : 0,
  paris : 0,
  polydamas : 0,
  priam : 0,
  helen : 0
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

//************************SEEING HOW THIS WORKS WITH PROCESSING****************
// Variable to store json data
var theData;


//loads before the rest, ofc
function preload() {
  // Get the data from IlliadWords and preload so its available
  var url = "JSON/ScaledIlliadWords.json";
  theData = loadJSON(url,"json");
}

// Initialize Processing sketch
//IT ALL NEEDS TO GO IN SETUP
//DAILY REMINDER THAT YOU'VE COMMITTED TO USING THIS FRAMEWORK FOR NO REASON
//AND NOW YOU MUST ABIDE BY ITS ARCANE RULES
function setup() {
  //its processing... without using processing!! NOBODY'S EVER DONE THIS BEFORE--
  noCanvas();

  //put it in array form for... uh... e-ease of access
  dataArray = (Object.keys(theData));

  //check to see if our html injector is still functioning
  allpos = pos0.concat(pos1,pos2);
  for (var i = 0; i < allpos.length; i++) {
    character = allpos[i]["Greeks"]["Odysseus"]
    document.getElementById("pos"+i.toString()).textContent="HAHA THE ILIAD";
  }

//************the good shit: calculating character power scores****************

//first assign every character a book -- for each character in the list
  for (var i=0; i<characterList.length; i++) {
    //get a random book title
    randomBook = dataArray[Math.floor(Math.random()*dataArray.length)];
    //and all the words included in said key (of course they're all the same
    //for each book title)
    randomBookWords = theData[randomBook];
    //delete it from the array of titles so everyone gets a unique book
    //this is so that after a character is assigned a book...
    //that book is deleted from the list of possible books for the next character
    //i knew i was a genius
    dataArray.splice(randomBook,1);
    //arrays are easier to work with so this puts all the character keywords in
    //array form (greed/pride/etc)
    bookWordsInArray = Object.keys(randomBookWords);
    console.log(bookWordsInArray);
    //now here's the kicker -- for every word in our random book dataset
    for (var j=0; j<bookWordsInArray.length; j++) {
      //if the current character's array includes the key we're looping through
      if (characterList[i].includes(bookWordsInArray[j])) {
        //then we want to add the score associated with that key to the
        //character's power score
        console.log(theData[randomBook][bookWordsInArray[j]]);
        characterScores
        //CURRENT STATUS: SUBOPTIMAL BECAUSE I HAVE NO WAY TO ASSOCIATE THE
        //ARRAYS TO THE PROPER CHARACTER IN THE CHARACTER SCORE DICT ABOVE
        //I WILL FIX THIS WHEN IM LESS TIRED
      }

    }

  }

}

/*
to do:

inject from the word things, like the json, instead of by hand

we have json of the pure word data
need to associate it with the characters
so we could define each character as an array and then check
to see if each word is in the array of each character
if so, add that word count score to the character's score

ok so:

each character has to be associated with both a book and a list of words
so key, and the thing is an array of words and a book
for each character
select a random book
assign that book to them
then for each word in the book list
if its in the character's array
then we add that number to the CHARACTER POWER SCORE
then we can compare CHARACTER POWER SCOREs

book title[word]
*/
