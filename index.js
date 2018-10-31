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

var words = ["earth", "wind", "heart", "fire"];

function longPlaneteerCalls(words) {
  for(var i=0; i<words.length; i++) {
    if(words[i].length>4) {
    return true;
  } else{
    return false;
  }
  }
}

function findTheCheese (foods) {
  
  for (var i=0; i<foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
      return foods[i];
    }
  }
  return "no cheese!";
}

  
    
  
    
    
