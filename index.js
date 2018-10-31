var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
  var newArray = []; 
  for (let i=0; i<dwarves.length;i++){
    newArray.push(`${i+1}. ${dwarves[i]} ` );
   }
   return newArray.join("");
  }



var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
function summonCaptainPlanet(planeteerCalls){
  var newArray = [];
  for (var i=0; i<planeteerCalls.length; i++) {
    newArray.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return newArray;
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
