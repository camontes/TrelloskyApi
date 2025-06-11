const connectDB = require("./Db/connection");
const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/user");

connectDB();

 // Create an Express application
 const app = express();
 const PORT = process.env.PORT || 3000;

  // Middleware
app.use(cors());

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


///Use Routes
app.use('/api', userRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});