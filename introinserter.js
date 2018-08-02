//***************************CHARACTERS W/THEIR WORDS***************************
// each character is an object with a list of their words and a power score
// (initialized at zero)

//if i ever decide i want to be a real og mlg player here i can come back
//and just define one class template instead of making 20 billion object literals
//for anyone reading this -- yes, i know how to construct objects in different
//ways in js, this was just easy!!
//best practices is my middle name but my first name is schuyler

//Argives:
var achilles = {
  words : ['fight','honor','dead'],
  score : 0
};

var agamemnon = {
  words : ['pride','greed','lead'],
  score : 0
};

var nestor = {
  words : ['friend','love','justice'],
  score : 0
};

var odysseus = {
  words : ['trick','smart','plot'],
  score : 0
};

var diomedes = {
  words : ['sad','husband','steady'],
  score : 0
};

//Trojans
var hector = {
  words : ['courage','skill','dedication'],
  score : 0
};

var paris = {
  words : ['grace','charm','coward'],
  score : 0
};

var polydamas = {
  words : ['devoted','fate','future'],
  score : 0
};

var priam = {
  words : ['tired','old','king'],
  score : 0
};

var helen = {
  words : ['beauty','wife','white'],
  score : 0
};

//list of all the character-objects to iterate through
characterList = [hector,priam,helen,paris,polydamas,odysseus,achilles,agamemnon,
  diomedes,nestor];

//the total score of all characters, initialized to zero
//since we select different books each go through this will be
//different every time
totalScore = 0;

//variable to store the probability distributions
weights = []

//***************************STORY POSSIBILITIES********************************
//THESE ARE THE POSSIBLE FILL-INS TO ALL THE BLANKS IN THE STORY
//pos[x] refers to the empty spaces in the html template

var pos0 = {
    'Hector': "Sing to me, as you will",
    'Priam': "Recall with sadness",
    'Helen': "Let us ponder on",
    'Paris': "We'll speak, reluctantly",
    'Polydamas': "We will reflect on",
    'Odysseus': "Explain to us",
    'Achilles': "Let us remember the glory of",
    'Agamemnon': "Recall the damned thing",
    'Diomedes': "Sing to me",
    'Nestor': "Let us recall, at length"
};

var pos1 = {
    'Hector': "barbaric",
    'Priam': "merciless",
    'Helen': "impressive",
    'Paris': "frightening",
    'Polydamas': "dreadful",
    'Odysseus': "illogical",
    'Achilles': "glorious",
    'Agamemnon': "vicious",
    'Diomedes': "violent",
    'Nestor': "tempestuous -- like a sea-storm, maybe, or else a typhoon making landfall --"
};

var pos2 = {
    'Hector': "Sing to me, as you will",
    'Priam': "Recall with sadness",
    'Helen': "Let us ponder on",
    'Paris': "We'll speak, reluctantly",
    'Polydamas': "We will reflect on",
    'Odysseus': "the boisterous",
    'Achilles': "the hero",
    'Agamemnon': "Recall the damned thing",
    'Diomedes': "Sing to me",
    'Nestor': "Let us recall, at length"
};

//************************INITIALIZING W/PROCESSING****************************
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
  //since we'll be needing the index later
  dataArray = (Object.keys(theData));

  //check to see if our html injector is still functioning, this is the code
  //we use to throw our text into the html template
  allpos = [pos0,pos1,pos2];
  for (var i = 0; i < allpos.length; i++) {
    character = allpos[i]["Odysseus"]
    document.getElementById("pos"+i.toString()).textContent="HAHA THE ILIAD";
  }

//************the good shit: calculating character power scores****************

//first assign every character a book --
//BEGIN: for each character in the list
  for (var i=0; i<characterList.length; i++) {
    //get a random book title
    randomBook = dataArray[Math.floor(Math.random()*dataArray.length)];
    //and all the words included in said book title/object key (of course
    //they're all the same for each book title)
    randomBookWords = theData[randomBook];
    //delete it from the array of titles so everyone gets a unique book
    //this is so that after a character is assigned a book...
    //that book is deleted from the list of possible books for the next character
    //i knew i was a genius
    dataArray.splice(randomBook,1);
    //arrays are easier to work with so this puts all the character keywords in
    //array form (greed/pride/etc)
    bookWordsInArray = Object.keys(randomBookWords);
    //now here's the kicker -- for every word in our random book dataset
    for (var j=0; j<bookWordsInArray.length; j++) {
      //if the current character's word array property inside the character
      //object includes the words we're looping through
      if (characterList[i]['words'].includes(bookWordsInArray[j])) {
        //then we want to add the score associated with that key to the
        //character's power score
        characterList[i]['score'] = characterList[i]['score'] + theData[randomBook][bookWordsInArray[j]];
        //console.log(characterList[i]['score']);
        totalScore = totalScore + theData[randomBook][bookWordsInArray[j]];
      }

    }

  }

//*******gooder shit -- selecting appropriate verses through power scores*******

/*boom, ive got it...
if this will work.
what i want to do is turn the power scores into a probability distribution
kind of like in those nlp neural networks
and then we choose a character based on that probability distribution.
... how do i make a probability distribution

ok
*/
//turning raw score into percentage of total score and pushing it to
//weights i.e. creating the probability distribution
for (var i=0; i<characterList.length; i++) {
  characterList[i]['score'] = characterList[i]['score']/totalScore
  weights.push(characterList[i]['score']);
  console.log(weights);
};

//for each position uses the probability to select a character
for (var i=0; i < allpos.length; i++) {
  continue
}

}

/*
to do:

implement method for selecting character
finish all possible character implementations for all positions
make it pretty
make sure all these files work together
*/
