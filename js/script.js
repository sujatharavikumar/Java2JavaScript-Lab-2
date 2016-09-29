" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var str = speak(type);
      var textOut = type + " " + name + " says "+ str+ "<br />";
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var speak = function(type){
  if (type == "dog")
    return "Bow Bow";
  else if (type == "cat")
    return "Meow Meow";
  else if (type == "bird")
    return "Coo Coo";
  else
    return "Pet Pet";
};

var chat = new PetChat();
chat.init();
