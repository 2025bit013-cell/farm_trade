// Function to generate simulated real-time price fluctuations
function updatePrices() {
    // Base prices for each crop
    const basePrices = {
        'price-maize': 1500,
        'price-beans': 3000,
        'price-tomatoes': 2500,
        'price-cassava': 1000
    };

    for (let id in basePrices) {
        // Generate a random fluctuation between -5% and +5%
        let fluctuation = (Math.random() * 0.1) - 0.05; 
        
        // Calculate new price
        let newPrice = basePrices[id] + (basePrices[id] * fluctuation);
        
        // Round to nearest 50 UGX to look realistic
        newPrice = Math.round(newPrice / 50) * 50;
        
        // Format with comma
        let formattedPrice = newPrice.toLocaleString('en-US');
        
       …