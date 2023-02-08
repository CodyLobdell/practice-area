'use strict';

// number of product votes total

let vote = 0;
let maxVote = 25;

// Render img
let image1 = document.querySelector('#img img:first-child');
let image2 = document.querySelector('#img img:nth-child(2)');
let image3 = document.querySelector('#img img:nth-child(3)');

//constructor function for product
function Product(name, src) {
  this.name = name;
  this.src = src;
  // this.src = `img/${name}.jpg`;
  this.view = 0;
  this.like = 0;
}

//all products

let bag = new Product('bag', 'imgs/bag.jpg');
let banana = new Product('banana', 'imgs/banana.jpg');
let bathroom = new Product('bathroom', 'imgs/bathroom.jpg');
let boots = new Product('boots', 'imgs/boots.jpg');
let breakfast = new Product('breakfast', 'imgs/breakfast.jpg');
let bubblegum = new Product('bubblegum', 'imgs/bubblegum.jpg');
let chair = new Product('chair', 'imgs/chair.jpg');
let cthulhu = new Product('cthulhu', 'imgs/cthulhu.jpg');
let dogDuck = new Product('dog-duck', 'imgs/dog-duck.jpg');
let dragon = new Product('dragon', 'imgs/dragon.jpg');
let pen = new Product('pen', 'imgs/pen.jpg');
let petSweep = new Product('pet-sweep', 'imgs/pet-sweep.jpg');
let scissors = new Product('scissors', 'imgs/scissors.jpg');
let shark = new Product('shark', 'imgs/shark.jpg');
let sweep = new Product('sweep', 'imgs/sweep.png');
let tauntaun = new Product('tauntaun', 'imgs/tauntaun.jpg');
let unicorn = new Product('unicorn', 'imgs/unicorn.jpg');
let waterCan = new Product('water-can', 'imgs/water-can.jpg');
let wineGlass = new Product('wine-glass', 'imgs/wine-glass.jpg');

// all product listed in an array
let list = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];

//Random image function
function rng() {
  return Math.floor(Math.random() * list.length);
}

function renderImg() {

  let img1 = rng();
  let img2 = rng();
  let img3 = rng();
  console.log(img1, img2, img3);
  while (img1 === img2 || img1 === img3 || img2 === img3) {
    img2 = rng();
    img3 = rng();
  }
  //cycle through images for next pick
  image1.src = list[img1].src;
  image2.src = list[img2].src;
  image3.src = list[img3].src;
  image1.alt = list[img1].name;
  image2.alt = list[img2].name;
  image3.alt = list[img3].name;
  list[img1].view++;
  list[img2].view++;
  list[img3].view++;
}

renderImg();
// add event listener

let img = document.getElementById('img');


let resultUl = document.getElementById('resultUl');

let mouseClick = function (event) {
  // console.log(event.target.alt);
  let clickName = event.target.alt;
  for (let i = 0; i < list.length; i++) {
    if (clickName === list[i].name) {
      list[i].like++;
      vote++;
      console.log(list[i].like);
    }
  }
  if (vote < maxVote) {
    renderImg();
  } else {
    img.removeEventListener('click', mouseClick);
    alert("Click 'View Results' on the left for totals.")
    // render();
    viewResult.addEventListener('click', render);
    renderImg();
  }

};

img.addEventListener('click', mouseClick);

// render result
let render = function () {
  for (let j = 0; j < list.length; j++) {
    let newList = document.createElement('li');
    newList.textContent = `${list[j].name} has ${list[j].like} votes, and was seen ${list[j].view} times.`;
    
    resultUl.appendChild(newList);
  }
  viewResult.removeEventListener('click', render);
}

let viewResult = document.getElementById('view');