var urldata;

function preload() {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=30c136eed7bb433ea12dbdbf188246c5&q=dead%20war&begin_date=20180606&fl=headline";
  urldata = loadJSON(url);
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  angleMode(DEGREES);
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*
CHARACTERS:
Argives:
achilles - impetuous, vicious, sees far - blood red
agamemnon - hubris, burdened by weight of leadership - gold
patroclus - kind, humble - sky blue
odysseus - world-weary, cunning, aloof - wine dark
menelaus - quiet, unimposing, tired? - brown

Trojans
hector - brave, honest, carries all responsibility - green
paris - extravagant, cowardly, charming - orange
aeneas - nobleman, valiant, stony - brown
polydamas - cool and cautious lieutenant - gray
helen - wistful, distant - white
*/

/*
var achilles = [];
var agamemnon = [];
var patroclus = [];
var odysseus = [];
var menelaus = [];

var hector = [];
var paris = [];
var aeneas = [];
var polydamus = [];
var helen = [];

var aegeans = [achilles,agamemnon,patroclus,odysseus,menelaus];

var trojans = [hector,paris,aeneas,polydamus,helen];
*/

function draw() {

  background(200);

  var headlines = urldata.response.docs;

  var firstHeadline = headlines[0].main;

  createP(firstHeadline);

  console.log(firstHeadline);

  textAlign(CENTER);
  text(firstHeadline, 0, height - 30, width, 30);

/*
DEPRECATED BUT HERE SO I DONT FORGET IT
for (i = 0; i < 10; i++) {

    beginShape();

    for (let a = 0; a < 360; a += 10) {
      let x = 60 * sin(a) + (width*.5);
      let y = 60 * cos(a) + (height*.5);
      curveVertex(x, y);
    }

    endShape(CLOSE);

  }
  */

//drawing the polygon
//polygon(width/2,height/2, 50, 15);

}

//polygon class
function polygon(x, y, radius, npoints) {
  var angle = 360 / npoints;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
