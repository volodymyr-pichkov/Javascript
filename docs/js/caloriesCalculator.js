class CalorieCalculator {
  constructor() {
    this.products = new Map();
  }

  addProduct(productName, calories) {
    this.products.set(productName, calories);
  }

  getProductCalories(productName) {
    if (this.products.has(productName)) {
      return this.products.get(productName);
    }
    return 'Product not found';
  }

  removeProduct(productName) {
    this.products.delete(productName);
  }
}

  
  const calorieCalculator = new CalorieCalculator()
  
  calorieCalculator.addProduct('Apple', 52)
  calorieCalculator.addProduct('Banana', 89)
  
  console.log(calorieCalculator.getProductCalories('Apple'))
  console.log(calorieCalculator.getProductCalories('Banana'))
  
  calorieCalculator.removeProduct('Apple')
  console.log(calorieCalculator.getProductCalories('Apple'))
  
  export { CalorieCalculator }
  