//Utility Logic 
function getInputValue(inputArray){
  const innerTextArray = [];
  inputArray.forEach(function(element){
    const elementString = element.value;
    innerTextArray.push(elementString);
  });
  return innerTextArray;
}

//Business Logic
function Pizza(size, cheeseAmt, toppings, drinks, cheese) {
  this.size = size;
  this.cheeseAmt = cheeseAmt;
  this.cheese = cheese;
  this.toppings = toppings;
  this.drinks = drinks;
}

class Toppings extends Pizza {
  pushToPizza(input){
    this.prices.push(input);
  }
}

Pizza.prototype.totalCost = function(){
  let total = 0;
  if (this.size === "lg-size"){
    total += 15;
  } else {
    total += 5; 
  }

  switch (this.cheeseAmt) {
    case("lt-cheese"):
      total += 1.50;
      break;
    case("md-cheese"):
      total += 2;
      break;
    case("x-cheese"):
      total += 3;
      break;
  }

  this.toppings.forEach(function(element){
    total += 2;
  });


  this.drinks.forEach(function(element){
    switch (element) {
      case("water"):
      case("milk"):
      case("uncovered"):
        total += 2;
        break;
    }
  });

  total = total * 1.10;
  return total;
}

//UI Logic
window.addEventListener("load", function(){
  document.querySelector("form#pizza-form").addEventListener("submit", handleSubmission);
  document.querySelector("form#pizza-form").addEventListener("reset", handleReset);
})

function handleSubmission(event){
  event.preventDefault();
  const orderDisplay = document.getElementById("order-list");
  orderDisplay.innerHTML="";
  const size = document.querySelector("input[name='size']:checked").value;
  const cheese = document.querySelector("input[name='cheese-type']:checked").value;
  const cheeseAmt = document.querySelector("input[name='cheese-amt']:checked").value;
  const toppingsSelected = document.querySelectorAll("input[name='topping']:checked");
  const drinksSelected = document.querySelectorAll("input[name='drink']:checked");
  const toppings = getInputValue(toppingsSelected);
  const drinks = getInputValue(drinksSelected);
  const pizza1 = new Pizza(size, cheeseAmt, toppings, drinks, cheese);
  const cost = pizza1.totalCost();
  const myOrder = convertOrder(pizza1);
  const myCost = listCosts(myOrder);
  displayOrder(myOrder, myCost);
  displayCost(cost);
}

function handleReset(){
  const orderDisplay = document.getElementById("order-list");
  const subDisplay = document.querySelector("span#subtotal");
  const taxDisplay = document.querySelector("span#total-tax");
  const costDisplay = document.querySelector("span#total-cost");
  orderDisplay.innerHTML="";
  subDisplay.innerText = "";
  taxDisplay.innerText = "";
  costDisplay.innerText = "";
}

function convertOrder(order){
  const processArray = Object.values(order);
  const convertedArray = [];
  processArray.forEach(function(element){
    if(Array.isArray(element)){
      const subArray = Object.values(element);
      subArray.forEach(function(element){
        convertedArray.push(element);
      });
    } else {
      convertedArray.push(element);
    }
  });
  return convertedArray;
}

function listCosts(convertedArray){
  const listArray = []
  convertedArray.forEach(function(element){
    switch (element) {
      case("lt-cheese"):
        listArray.push("1.50");
        break;
      case("water"):
      case("milk"):
      case("uncovered"):
        listArray.push("2.50");
        break;
      case("md-cheese"):
      case("chicken"):
      case("tuna"):
      case("kibble"):
      case("anchovies"):
      case("greenies"):
      case("birds"):
        listArray.push("2.00");
        break;
      case("sm-size"):
        listArray.push("8.00");
        break;
      case("md-size"):
        listArray.push("10.00");
        break;
      case("lg-size"):
        listArray.push("12.00");
        break;
      case("x-cheese"):
        listArray.push("3.00");
        break;
      case("mozzerella"):
      case("provolone"):
      case("cheddar"):
        listArray.push("0.00");
        break;
      default:
        listArray.push("2.00");
        console.log("pushing " + element)
    }
  });
  return(listArray);
}

function displayOrder(order, costs){
  const orderList = document.createElement("ol");
  const orderDisplay = document.getElementById("order-list");
  for (let i=0; i < order.length; i++){
    const li = document.createElement("li");
    li.innerText = order[i] + "..." + costs[i];
    orderList.append(li);
  }
  orderDisplay.append(orderList);
}

function displayCost(cost){
  const subDisplay = document.querySelector("span#subtotal");
  const taxDisplay = document.querySelector("span#total-tax");
  const costDisplay = document.querySelector("span#total-cost");
  let sub = cost * 0.8;
  let tax = sub * 0.10;
  sub = "$" + sub.toFixed(2);
  tax = "$" + tax.toFixed(2);
  cost = "$" + cost.toFixed(2);
  subDisplay.innerText = sub;
  taxDisplay.innerText = tax;
  costDisplay.innerText = cost;
}