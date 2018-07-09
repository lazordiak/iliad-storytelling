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
    'Nestor': "tempestuous -- like a sea-storm, or a typhoon perhaps making landfall --"
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

var allpos = pos0.concat(pos1,pos2);

for (var i = 0; i < allpos.length; i++) {
  var character = allpos[i]["Greeks"]["Odysseus"]
  document.getElementById("pos"+i.toString()).textContent="HAHA THE ILIAD";
}
/*
to do:

maybe for i in 1 to whatever:
no, i could put all these objects into an array
and then for i in array length
get element by id thats 'pos'+i
and then "document.getElementById("myspan").textContent="newtext";"
ofc it has to select the right one so thats ok like thats fine and doable
*/
