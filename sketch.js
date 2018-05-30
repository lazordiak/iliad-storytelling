function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  angleMode(DEGREES);
  background(0);


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

// so lets say a grid of vertices represents each character
//then we can crawl data and apply it to each of the... vertices according
// to conditions? this will probably turn out to be the single shittiest way
// one could get this done

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

function draw() {
  background(0);

  for (i = 0; i < aegeans.length; i++) {

    beginShape();

    for (let a = 0; a < 360; a += 10) {
      let x = 50 * sin(a) + (width*.5);
      let y = 50 * cos(a) + (height*.5);
      curveVertex(x, y);
    }

    endShape(CLOSE);

  }
}
