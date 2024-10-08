// Creating an object of a market vendor
const marketVendor = {
    name: "Martha's Groceries",
    products: {
      bananas: { price: 3000, quantity: 100 },
      cassava: { price: 500, quantity: 50 },
      tomatoes: { price: 900, quantity: 200 }
    },
    
    // Method to calculate total revenue
    calculateTotalRevenue: function() {
      let totalRevenue = 0;
      
      for (const product in this.products) {
        const { price, quantity } = this.products[product];
        totalRevenue += price * quantity;
      }
      
      return totalRevenue;
    }
  };
  
  // Loging the total revenue
  console.log(`Total revenue: $${marketVendor.calculateTotalRevenue()}`);
  