const express = require('express');
const productRoutes = require('./routes/productroutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON
app.use('/api', productRoutes); // Use the product routes



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
