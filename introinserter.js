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
    paris: "We'll sing, reluctantly",
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
  polydamas: "loss and ruin",
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
  hector: "son of Atreus",
  priam: "husband of Clytemnestra",
  helen: "brother of Menelaos",
  paris: "a skilled spearman",
  polydamas: "the wide-ruler",
  odysseus: "a blowhard",
  achilles: "curse him",
  agamemnon: "shepherd of the people",
  diomedes: "the commander",
  nestor: "the lord marshal"
};

var pos9 = {
  hector: "crippling the Greek forces",
  priam: "to the great joy of the Trojans",
  helen: "and the war grew even fiercer",
  paris: "and the Trojans gained their chance",
  polydamas: "and the plans of the Achaeans were left in ruin",
  odysseus: "each shouting too much, and too long",
  achilles: "and Agamemnon doomed his people",
  agamemnon: "and Achilles doomed his people",
  diomedes: "and blood was in the water",
  nestor: "each making great speeches and great claims"
};

var pos10 = {
  hector: "pit them against each other",
  priam: "caused this fight",
  helen: "set them on to fight",
  paris: "made them fight thus",
  polydamas: "brought this about",
  odysseus: "set them at each other's throats",
  achilles: "spurred Agamenon to hubris",
  agamemnon: "spurred Achilles to hubris",
  diomedes: "caused this clash",
  nestor: "spurred on this disagreement"
};

var pos11 = {
  hector: "angry because of his transgressions",
  priam: "on account of one of his many bad decisions",
  helen: "for some offense he gave to the god",
  paris: "and thereby sided with the Trojans",
  polydamas: "because of one of Agamemnon's schemes",
  odysseus: "which wasn't very surprising",
  achilles: "and for good reason too",
  agamemnon: "unfairly so, when you stop to consider it",
  diomedes: "and got his revenge",
  nestor: "this being its own tale"
};

var pos12 = {
  hector: "his pestilent arrows",
  priam: "swift retribution",
  helen: "a great illness",
  paris: "his arrows of plague",
  polydamas: "a scourge",
  odysseus: "a vicious disease",
  achilles: "a black, rotten, inglorious death",
  agamemnon: "a sickness",
  diomedes: "vile death by plague",
  nestor: "a pestilential plague"
};

var pos13 = {
  hector: "black ships",
  priam: "boats",
  helen: "ships",
  paris: "intimidating ships",
  polydamas: "packed ships",
  odysseus: "hollow ships",
  achilles: "long ships",
  agamemnon: "swift ships",
  diomedes: "strong ships",
  nestor: "ships -- a full list of which is forthcoming --"
};

var pos14 = {
  hector: "sweet Chryseis who had been stolen away",
  priam: "dear Chryseis, a perfect daughter",
  helen: "Astynome was her name",
  paris: "the lovely Chryseis",
  polydamas: "the inimitable Chrseis",
  odysseus: "Chryseis, a nice girl",
  achilles: "some girl Agamemnon liked",
  agamemnon: "Chryseis, finer than Clytemnestra",
  diomedes: "beautiful Chryseis",
  nestor: "Chryseis, her name was"
};

var pos15 = {
  hector: "begged",
  priam: "ransomed with",
  helen: "supplicated",
  paris: "pled, on his knees, with",
  polydamas: "implored",
  odysseus: "approached one by one",
  achilles: "beseeched",
  agamemnon: "was begging with",
  diomedes: "showed the treasure to",
  nestor: "pleaded in long speeches to"
};

var pos16 = {
  hector: "their commanders",
  priam: "not known for their kind treatment of children",
  helen: "watching him with disdain",
  paris: "acting haughty",
  polydamas: "brothers",
  odysseus: "talking loudly",
  achilles: "the whole reason behind this war",
  agamemnon: "their brave leaders",
  diomedes: "not so receptive",
  nestor: "milling around at the base camp"
};

var pos17 = {
  hector: "gathered here from far-off lands",
  priam: "gathered for siege and war",
  helen: "gathered to win back Helen",
  paris: "gathered to slaughter the Trojans",
  polydamas: "gathered to mount a siege",
  odysseus: "from Ithaca and elsewhere",
  achilles: "from Skyros and elsewhere",
  agamemnon: "from Mycenae and elsewhere",
  diomedes: "from Argos and elsewhere",
  nestor: "from Pylos and elsewhere"
};

var pos18 = {
  hector: "And that was only the beginning.",
  priam: "If only it were that simple.",
  helen: "But, men are men.",
  paris: "Then it got very frightening.",
  polydamas: "... Things, however, did not turn well.",
  odysseus: "As if it would be that easy.",
  achilles: "It was the beginning of the end.",
  agamemnon: "Well, it could have gone better.",
  diomedes: "Sadly, it didn't end like that.",
  nestor: "Now here's where things really get good."
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

  var allpos = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11,
  pos12,pos13,pos14,pos15,pos16,pos17,pos18];

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

      //insert the relevant snipper at the correct position and break the for loop
      document.getElementById("pos"+i.toString()).textContent =
        allpos[i][characterList[j]['name']];
      break;

    }

  }
}

}

/*
to do
lets see if we can get the text to typewriter in like i did for that rita thing
its processing so it should still work?
*/
