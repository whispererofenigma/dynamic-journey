const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup (body parser, CORS, etc.)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Example database connection setup using environment variables
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};*/

// Serve static files (HTML, CSS, JS, images) from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Handle clean URLs by serving specific HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'contact.html'));
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
