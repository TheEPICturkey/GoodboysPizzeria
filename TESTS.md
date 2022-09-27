Describe Pizza()

Test 1: It should return a Pizza object with one property for size string, one for cheese string, one for toppings array, one for other array.  
Code:  
  const myPizza = new Pizza("md-size", "md-cheese", ["tuna", "chicken"]);  
Expected Output:  
Pizza{size: "Cat(m)" cheese: "Light", toppings: ["Tuna", "Chicken"]};  

Describe Pizza.prototype.totalCost()

Test 1: It should return a number (price) that considers the size of the pizza with tax. Tax is 20%.  
Code:  
  const myPizza = new Pizza("Chonky-Size", "Extra-Cheese", ["Greenies", "Birds"], ["uncovered"]);  
  myPizza.totalCost();  
Expected Result:  27.50

Test 2: It should return a number (price) that considers the amount of cheese
Code:  
  const myPizza = new Pizza("Kitten-size", "Light-Cheese");  
  myPizza.totalCost();  
Expected Result:  

Test 3: It should return a number (price) that considers any number of toppings.
Code:  
const myPizza = new Pizza("Chonky-Size", "Extra-Cheese", ["Greenies", "Birds", "Tuna"], ["Uncovered"]);
  myPizza.totalCost();
Expected Result:  
  28.60

Test 4: It should return a number (price) that considers any number of drinks.
Code:  
  const myPizza = new Pizza("Chonky-Size", "Extra-Cheese", ["Greenies", "Birds", "Tuna"], ["Uncovered", "Milk"]);  
  myPizza.totalCost();  
Expected Result:  
  30.80  

Test 5: It should return a number (price) that considers any number of other items.
Code:  
  const myPizza = new Pizza("Chonky-Size", "Extra-Cheese", ["Greenies", "Anchovies", "Kibble", "Chicken", "Birds", "Tuna"], ["Uncovered", "Milk", "Water"]); 
  myPizza.totalCost();  
Expected Result:  
  36.30

