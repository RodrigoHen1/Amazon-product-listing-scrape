document.getElementById('scrape-button').addEventListener('click', async () => {
    const keyword = document.getElementById('keyword').value;
    if (!keyword) {
        alert('Please enter a keyword');
        return;
    }

    try {
        const response = await fetch(`/api/scrape?keyword=${encodeURIComponent(keyword)}`);
        const products = await response.json();

        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';

        if (products.length === 0) {
            resultsContainer.textContent = 'No products found';
            return;
        }

        products.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            productDiv.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.title}">
                <div class="details">
                    <h2>${product.title}</h2>
                    <p>Rating: ${product.rating} stars</p>
                    <p>Reviews: ${product.reviews}</p>
                </div>
            `;

            resultsContainer.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        alert('Failed to fetch products');
    }
});
