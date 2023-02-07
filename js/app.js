'use strict';


let myContainer = document.querySelector('section');

let myButton = document.querySelector('section + div');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let numberOfMatchUps = 0;
let numberOfMatchUpsAllowed = 25;

let allProducts = [];


function Product(name, fileExtension = 'jpg', 'png') {
  this.name = name;
  this.src = `imgs/${name}.${fileExtension}`;
  this.views = 0;
  this.likes = 0;
}



let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dog-duck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let pet-sweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let water-can = new Product('water-can');
let wine-glass = new Product('wine-glass');


allProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog - duck, dragon, pen, pet - sweep, scissors, shark, sweep, tauntaun, unicorn, water - can, wine - glass];



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
  image1.alt = allProducts[Product1].name;
  image2.alt = allProducts[Product2].name;
  allProducts[Product1].views++;
  allProducts[Product2].views++;


  numberOfMatchUps++;
}

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