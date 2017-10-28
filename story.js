//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){

  return array[Math.floor(Math.random()*array.length)];
}

//2. RAW TEXT STRINGS

var storyText= "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertx=["Willy the Goblin","Big Daddy","Father Christmas"];
var inserty= ["the soup kitchen","Disneyland","the White House"];
var insertz=["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
 var newStory=storyText;
var xItem=randomValueFromArray(insertx);
var yItem=randomValueFromArray(inserty);
var zItem=randomValueFromArray(insertz);
newStory=storyText.replace(":insertx:",insertx[i]);
newStory=storyText.replace(":inserty:",inserty[i]);
newStory=storyText.replace(":insertz:",insertz[i]);

  if(customName.value != '') {
    var name = customName.value;
    newStory=storyText.replace('bob',name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.071429)+"stones";
    var temperature =  Math.round((94-32)/1.8)+"centigrade";

     newStory=storyText.replace( '300 pounds',weight);
      newStory=storyText.replace('94 farenheit',temperature);
  }

  story.textContent = newStory;
story.style.visibility = 'visible';
}