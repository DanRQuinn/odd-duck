'use strict'

let duckArray = [];

let myContainer = document.querySelector('section');

let image1 = document.querySelector('section img:first-child');

let image2 = document.querySelector('section img:nth-child(2)');

let image3 = document.querySelector('section img:nth-child(3)');

let counter = 0;
let max counter = 25

function Duck (name, fileExtention = 'jpg'){
  this.name =name
  this.src = `img/${name}.${fileExtention}`
  this.views = 0
}

let duck1 = new Duck ('duckname, png')

duckArray.push(all the ducks)

function selectRandomDuckNumber (){
  return Math.floor(Math.random()) * allDucks.length
}

function renderDucks{
  let duck1 = selectRandomDuckNumber();
  let duck2 = selectRandomDuckNumber();
  let duck3 = selectRandomDuckNumber();
  while (duck1 === duck2){
    duck2 = selectRandomDuckNumber();
  }
  // use an array how do you find if an array includes something?
  image1.src = duckArray[duck1].src;
  image1.alt = duckArray[duck1].name;
  duckArray[duck1].views++;
  image1.src = duckArray[duck2].src;
  image1.alt = duckArray[duck2].name;
  duckArray[duck2].views++;
  image1.src = duckArray[duck3].src;
  image1.alt = duckArray[duck3].name;
  duckArray[duck3].views++;
}

function handleDuckClick(event){
  console.log(event.target.alt);
  let clickedDuck =event.target.alt;
  for (let i = 0; i < duckArray.length; i++){
    if (clickedDuck === duckArray[i].name{
      duckArray[i].votes++;
      console.log duckArray
    })
  }
  if (counter < maxCounter){
    renderDucks();
  } else{
    // remove event listeners
    myContainer.removeEventListener('ckick', handleDuckClick);
    viewResultsBtn.addEventListener('click', viewResults)
  }
}

function viewResults(){
  let ul = document.querySelector('ul');
  for (let i = 0; i < duckArray.length; i++){
    let li =document.createElement('li');
    li.textContent = `${duckArray[i].name} had ${duckArray[i].views} views and ${duckArray}`
  }
}

renderDucks();

myContainer.addEventListener('ckick', handleDuckClick)
