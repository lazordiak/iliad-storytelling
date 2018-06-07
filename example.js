// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var earthquakes;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=30c136eed7bb433ea12dbdbf188246c5&q=dead%20war&begin_date=20180606&fl=headline'
  earthquakes = loadJSON(url);
}

function setup() {
  noLoop();
}

function draw() {
  background(200);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  //var earthquakeMag = earthquakes.features[0].properties.mag;
  var earthquakeName = earthquakes.response.docs[0].headline.main;
  //ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
  createP(earthquakeName)
}
