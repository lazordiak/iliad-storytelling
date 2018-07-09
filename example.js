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
  createCanvas(windowWidth, windowHeight);
  //i want it painted BLACK
  background(0);
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

function draw() {


}
