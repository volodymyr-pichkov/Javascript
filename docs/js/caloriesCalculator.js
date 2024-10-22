class CalorieCalculator {
    constructor() {

    }
  
    addProduct() {

    }
  
    getProductCalories(productName) {

    }
  
    removeProduct(productName) {

    }
  }
  
  const calorieCalculator = new CalorieCalculator()
  
  calorieCalculator.addProduct('Apple', 52)
  calorieCalculator.addProduct('Banana', 89)
  
  console.log(calorieCalculator.getProductCalories('Apple')) // 52
  console.log(calorieCalculator.getProductCalories('Banana')) // 89
  
  calorieCalculator.removeProduct('Apple')
  console.log(calorieCalculator.getProductCalories('Apple')) // Product not found
  