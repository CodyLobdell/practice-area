'use strict';


let myContainer = document.querySelector('section');

let myButton = document.querySelector('section + div');

let image1 = document.querySelector('#img img:first-child');
let image2 = document.querySelector('#img img:nth-child(2)');
let image3 = document.querySelector('#img img:nth-child(3)');

let numberOfMatchUps = 0;
let numberOfMatchUpsAllowed = 25;

let allProducts = [];


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `imgs/${name}.${fileExtension}`;
  this.views = 0;
  this.likes = 0;
}



let bag = new Product('bag', 'imgs/bag.jpg');
let banana = new Product('banana', 'imgs/bathroom.jpg');
let bathroom = new Product('bathroom', 'imgs/bathroom.jpg' );
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

allProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];

let rngNoAr = [];

function selectRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  let Product1 = selectRandomProduct();
  let Product2 = selectRandomProduct();
  let Product3 = selectRandomProduct();
  console.log(Product1, Product2);

  while (Product1 === Product2) {
    Product2 = selectRandomProduct();
    console.log(Product1, Product2);
  }


  image1.src = allProducts[Product1].src;
  image2.src = allProducts[Product2].src;
  image3.src = allProducts[Product2].src;
  image1.alt = allProducts[Product1].name;
  image2.alt = allProducts[Product2].name;
  image3.src = allProducts[Product2].name;
  allProducts[Product1].views++;
  allProducts[Product2].views++;
  allProducts[Product2].views++;


  numberOfMatchUps++;
}

renderImg();

let img = document.getElementById('img');


let resultUl = document.getElementById('resultUl');

function renderResults() {
  let results = document.querySelector('ul');
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and ${allProducts[i].likes} likes.`;
    results.appendChild(li);
  }
}


function handleProductClick(event) {

  console.log(event.target.alt);
  let clickedProduct = event.target.alt;

  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name === clickedProduct) {

      allProducts[i].likes++;
    }
  }

  if (numberOfMatchUps < numberOfMatchUpsAllowed) {
    renderProducts();
  } else {
    myContainer.removeEventListener('click', handleProductClick);
    myButton.addEventListener('click', renderResults);
  }
}


renderProducts();


myContainer.addEventListener('click', handleProductClick)