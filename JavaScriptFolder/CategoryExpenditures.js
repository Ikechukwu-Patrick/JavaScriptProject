function calculateTotalExpenses(expenses) {
    let totalAmount = 0;
  
    for (let category in expenses) {
      totalAmount += expenses[category];
    }
  
    return totalAmount;
  }
  
  let expenses = { "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 };
  let totalAmount = calculateTotalExpenses(expenses);
  
  console.log("Total amount spent on all categories is: $" + totalAmount);
  module.exports = (calculateTotalExpenses);