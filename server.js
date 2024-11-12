const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (like CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage (replace with your original content)
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Shopper | Online Shopping Site',
        categories: [
            { name: 'Electronics', image: 'electronics.jpg', description: 'Find the latest Electronics gadgets like mobile phones, laptops, headphones, etc.' },
            { name: 'Fashion', image: 'clothing.jpg', description: 'Get trendy fashion, from Clothing to accessories.' },
            { name: 'Home And Kitchen', image: 'Kitchen.jpg', description: 'Find all daily needs items at one place, kitchen appliances, utensils, bathroom products, etc.' },
            { name: 'Sports And Outdoors', image: 'sports.jpg', description: 'Preparing for a new adventure? We got it covered. Get sports accessories, trekking essentials here.' }
        ]
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
