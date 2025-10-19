// This is the main container where we will add all the product cards
const productGrid = document.getElementById('product-grid');

// This function fetches the product data from our backend API
async function fetchProducts() {
    try {
        // Sending a request to the backend's product route
        const response = await fetch('http://localhost:5000/api/products');
        const products = await response.json();

        // Clear any existing content
        productGrid.innerHTML = '';

        // Loop through each product and create a card for it
        products.forEach(product => {
            // 1. Create the main card container
            const card = document.createElement('div');
            card.classList.add('product-card');

            // 2. Create the product image
            const image = document.createElement('img');
            image.src = `http://localhost:5000${product.image}`; // We need to add the backend URL to the image path
            image.alt = product.name;

            // 3. Create the product name
            const name = document.createElement('h3');
            name.textContent = product.name;

            // 4. Create the product price
            const price = document.createElement('p');
            price.textContent = `$${product.price}`;

            // 5. Add the image, name, and price to the card
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(price);

            // 6. Add the completed card to the grid on the webpage
            productGrid.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching products:', error);
        productGrid.innerHTML = '<p>Could not load products. Make sure the backend server is running.</p>';
    }
}

// Call the function to run it when the page loads
fetchProducts();