# Amazon-product-listing-scrape
A simple script to scrape Amazon product listings from the first page of search results for a given keyword.

This project scrapes product details from Amazon based on a user-provided keyword and displays them on a webpage.

## Prerequisites

- Node.js installed on your machine

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/amazon-scraper.git
   cd amazon-scraper
Install the dependencies:

bash
npm install
Running the Project
Start the server:

bash

node src/index.js
Open your browser and go to:

arduino
http://localhost:3000
Usage
Enter a keyword in the input field.
Click the "Scrape" button.
View the scraped product results.
Project Structure
src/index.js: Backend logic with Express.js, Axios, and JSDOM.
public/index.html: HTML file for the frontend.
public/styles.css: CSS file for styling the frontend.
public/script.js: JavaScript file for handling frontend interactions.
Notes
This project is intended for educational purposes. Please respect Amazon's terms of service when scraping.
Example
Here is an example of how the project structure looks:

java
amazon-scraper/
├── src/
│   └── index.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── node_modules/
├── package.json
└── README.md
Detailed Explanation
Backend (Node.js)
Project Initialization:

Initialize the project with npm init -y to create a package.json file.
Dependencies:

Install necessary dependencies using npm install express axios jsdom.
Backend Script (src/index.js):

Sets up an Express server and defines an endpoint /api/scrape to handle GET requests.
Uses axios to fetch Amazon search results based on a keyword.
Parses the HTML using jsdom to extract product details.
Serves static files (frontend) from the public directory.
Express Server:

Express is used to create a web server.
The server listens on a specified port (default is 3000).
Frontend (Served by Node.js)
HTML (public/index.html):

Provides a user interface with an input field and a button to initiate the scraping process.
CSS (public/styles.css):

Styles the HTML elements to make the page presentable.
JavaScript (public/script.js):

Handles user interaction, makes an AJAX call to the backend to fetch the scraped data, and displays the results on the page.
