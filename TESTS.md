Describe Pizza()

Test 1: It should return a Pizza object with one property for size string, one for cheese string, one for toppings array, one for other array.  
Code:  
  const myPizza = new Pizza("md-size", "md-cheese", ["tuna", "chicken"]);  
Expected Output:  
Pizza{size: "Cat(m)" cheese: "Light", toppings: ["Tuna", "Chicken"]};  

Describe Pizza.prototype.totalCost()

Test 1: It should return a number (price) that considers the size of the pizza with tax. Tax is 25%.  
Code:  
  const myPizza = new Pizza("md-size");  
  myPizza.totalCost();  
Expected Result:  


Test 2: It sould return a number (price) that considers the amount of cheese
Code:  
  const myPizza = new Pizza("md-size", "lg-cheese");  
  myPizza.totalCost();  
Expected Result:  

