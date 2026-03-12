require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);

// Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
