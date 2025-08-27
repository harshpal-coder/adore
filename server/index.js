require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('API is running');
});

// API routes
app.use('/services', require('./routes/services'));
app.use('/products', require('./routes/products'));
app.use('/news', require('./routes/news'));
app.use('/register', require('./routes/auth'));
app.use('/login', require('./routes/auth'));
app.use('/contact', require('./routes/contact'));
app.use('/bookings', require('./routes/bookings'));
app.use('/user', require('./routes/user'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/adore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error('MongoDB connection error:', err));
