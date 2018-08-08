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
  name : 'achilles',
  words : ['fight','honor','dead'],
  score : 0
};

var agamemnon = {
  name: 'agamemnon',
  words : ['pride','greed','lead'],
  score : 0
};

var nestor = {
  name : 'nestor',
  words : ['friend','love','justice'],
  score : 0
};

var odysseus = {
  name : 'odysseus',
  words : ['trick','smart','plot'],
  score : 0
};

var diomedes = {
  name : 'diomedes',
  words : ['sad','husband','steady'],
  score : 0
};

//Trojans
var hector = {
  name : 'hector',
  words : ['courage','skill','dedication'],
  score : 0
};

var paris = {
  name : 'paris',
  words : ['grace','charm','coward'],
  score : 0
};

var polydamas = {
  name : 'polydamas',
  words : ['devoted','fate','future'],
  score : 0
};

var priam = {
  name : 'priam',
  words : ['tired','old','king'],
  score : 0
};

var helen = {
  name : 'helen',
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
weights = [];

//***************************STORY POSSIBILITIES********************************
//THESE ARE THE POSSIBLE FILL-INS TO ALL THE BLANKS IN THE STORY
//pos[x] refers to the empty spaces in the html template

var pos0 = {
    hector: "Sing to me, as you will",
    priam: "Recall with sadness",
    helen: "Let us ponder on",
    paris: "We'll speak, reluctantly",
    polydamas: "We will reflect on",
    odysseus: "Explain to us",
    achilles: "Let us remember the glory of",
    agamemnon: "Recall the damned thing",
    diomedes: "Sing to me",
    nestor: "Let us recall, at length"
};

var pos1 = {
    hector: "barbaric",
    priam: "merciless",
    helen: "impressive",
    paris: "frightening",
    polydamas: "dreadful",
    odysseus: "illogical",
    achilles: "glorious",
    agamemnon: "vicious",
    diomedes: "violent",
    nestor: "tempestuous -- like a sea-storm or a typhoon making landfall --"
};

var pos2 = {
    hector: "the killer",
    priam: "the son-killer",
    helen: "doomed",
    paris: "frightful",
    polydamas: "We will reflect on",
    odysseus: "loud",
    achilles: "unparalleled",
    agamemnon: "hubristic",
    diomedes: "excellent",
    nestor: "many-gloried"
};

var pos3 = {
  hector: "an awful",
  priam: "an awful",
  helen: "an awful",
  paris: "an awful",
  polydamas: "an awful",
  odysseus: "an awful",
  achilles: "a justified",
  agamemnon: "an awful",
  diomedes: "an awful",
  nestor: "an awful"
};

var pos4 = {
  hector: "great losses",
  priam: "revenge",
  helen: "misery",
  paris: "tears and death",
  polydamas: "loss and retreat",
  odysseus: "weeks of death",
  achilles: "well-deserved pain",
  agamemnon: "plague and pain",
  diomedes: "hardships",
  nestor: "untold and untellable sufferings"
};

var pos5 = {
  hector: "stout",
  priam: "beloved",
  helen: "brutish",
  paris: "Greek",
  polydamas: "noble",
  odysseus: "poor",
  achilles: "brave",
  agamemnon: "allied",
  diomedes: "Trojan",
  nestor: "young"
};

var pos6 = {
  hector: "men who deserved better",
  priam: "whose families wept for their death",
  helen: "and not old men, either",
  paris: "the battlefield was horrifying to behold",
  polydamas: "good and bad alike",
  odysseus: "those who should have planned better",
  achilles: "men who fell in glory",
  agamemnon: "who gave their all for their leaders",
  diomedes: "great men and great leaders of men",
  nestor: "the listing of them all would take too long to tell"
};

var pos7 = {
  hector: "the final arbiter",
  priam: "the father of the gods",
  helen: "almighty",
  paris: "dreadful",
  polydamas: "far-seeing",
  odysseus: "the great tactician",
  achilles: "just",
  agamemnon: "the greatest leader",
  diomedes: "powerful",
  nestor: "the great judge"
};

var pos8 = {
  hector: "full of hubris",
  priam: "the father of the gods",
  helen: "almighty",
  paris: "dreadful",
  polydamas: "far-seeing",
  odysseus: "the great tactician",
  achilles: "curse him",
  agamemnon: "finest leader of the Greeks",
  diomedes: "powerful",
  nestor: "the great judge"
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

  var allpos = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8];

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

//what i can do is
for (var i=0; i<characterList.length; i++) {
  characterList[i]['score'] = characterList[i]['score']/totalScore
  weights.push(characterList[i]['score']);
};

//for each position that needs filling
for (var i=0; i < allpos.length; i++) {

  //initialize the prbability variable
  var prob = 0;
  //and pick a random number
  var randomNumber = Math.random();

  //we go through each of the characters and weights...
  for (var j=0; j < characterList.length; j++) {

    //the probability is equal to the probably so far plus
    //the probability of the current character
    prob = prob + weights[j];

    //if that number is less than or equal to the current probability
    //we can grab the current index!
    if (randomNumber <= prob) {

      //the reason its not working rn is that we need to get the index here and
      //use it in the for loop one level up at the position level

      //maybe a 'continue' here -- gotta figure out the way to break the for loop
      //if i were smart id just make a function here that returns the correct index

      document.getElementById("pos"+i.toString()).textContent = allpos[i][characterList[j]['name']];
      break;

    }

  }
}

}

/*
to do:

implement method for selecting character
finish all possible character implementations for all positions
make it pretty
make sure all these files work together
*/
