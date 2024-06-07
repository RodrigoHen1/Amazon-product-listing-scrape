const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Function to fetch and parse Amazon search results
const fetchAmazonResults = async (keyword) => {
    const searchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const response = await axios.get(searchUrl);
    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    const products = [];

    // Iterate over product items
    document.querySelectorAll('.s-result-item').forEach((item) => {
        const title = item.querySelector('h2 .a-link-normal')?.textContent?.trim();
        const rating = item.querySelector('.a-icon-alt')?.textContent?.split(' ')[0];
        const reviews = item.querySelector('.a-size-base')?.textContent?.replace(/,/g, '');
        const imageUrl = item.querySelector('.s-image')?.getAttribute('src');

        if (title && rating && reviews && imageUrl) {
            products.push({
                title,
                rating: parseFloat(rating),
                reviews: parseInt(reviews),
                imageUrl
            });
        }
    });

    return products;
};

// API route to trigger scraping
app.get('/api/scrape', async (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
    }

    try {
        const products = await fetchAmazonResults(keyword);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Scraping failed' });
    }
});

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
