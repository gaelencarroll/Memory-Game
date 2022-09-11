const gameContainer = document.getElementById("game");
let numClicks = 0;
let score = 0;
let colors = [];
let redCount = 0;
let orangeCount = 0;
let blueCount = 0;
let greenCount =0; 
let purpleCount = 0;



const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let i = 0; i < colorArray.length; i++) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(colorArray[i]);
   
    if (colorArray[i]==='red'){
      redCount++;
      if (redCount === 1){
        newDiv.setAttribute('id',`${colorArray[i]}-1`);
      }
      else if (redCount === 2){
        newDiv.setAttribute('id',`${colorArray[i]}-2`);
      }
    }
    else if (colorArray[i]==='orange'){
      orangeCount++;
      if (orangeCount === 1){
        newDiv.setAttribute('id',`${colorArray[i]}-1`);
      }
      else if (orangeCount === 2){
        newDiv.setAttribute('id',`${colorArray[i]}-2`);
      }
    }
    else if (colorArray[i]==='blue'){
      blueCount++;
      if (blueCount === 1){
        newDiv.setAttribute('id',`${colorArray[i]}-1`);
      }
      else if (blueCount === 2){
        newDiv.setAttribute('id',`${colorArray[i]}-2`);
      }
    }
    else if (colorArray[i]==='green'){
      greenCount++;
      if (greenCount === 1){
        newDiv.setAttribute('id',`${colorArray[i]}-1`);
      }
      else if (greenCount === 2){
        newDiv.setAttribute('id',`${colorArray[i]}-2`);
      }
    }
    else if (colorArray[i]==='purple'){
      purpleCount++;
      if (purpleCount === 1){
        newDiv.setAttribute('id',`${colorArray[i]}-1`);
      }
      else if (purpleCount === 2){
        newDiv.setAttribute('id',`${colorArray[i]}-2`);
      }
    }

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }


}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  event.target.style.backgroundColor = event.target.id.split('-')[0];// split('-')[0]

  console.log(event.target.id.split('-')[0])
  numClicks++;
  console.log(colors.length)

  if (numClicks%2 == 0){
    console.log('2nd click')
    let color2 = event.target.getAttribute('id');
    colors[colors.length] = color2;

    if (colors[1].split('-')[0] === colors[0].split('-')[0]){
      score++;
      console.log(score);
      colors = [];
    }
    else if(colors[1] !== colors[0]){
      setTimeout(function(){
        console.log(colors[0], colors[1])
        let firstColor = document.getElementById(colors[0]);
        firstColor.style.backgroundColor = 'white';
        let otherColor = document.getElementById(colors[1]);
        otherColor.style.backgroundColor = 'white';
        colors = [];
      }, 1000)
    }
  }
  else if (numClicks%2 == 1){
    console.log('1st click')
    let color1 = event.target.getAttribute('id');
    colors[colors.length] = color1;
  }
  
  if (score === 5){
    alert('YOU WIN!!')
  }
}


// when the DOM loads
createDivsForColors(shuffledColors);

/* */