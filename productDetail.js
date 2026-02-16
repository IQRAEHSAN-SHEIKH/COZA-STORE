let detailContainer = document.querySelector("#product-detail")

// URL se id uthana
const params = new URLSearchParams(window.location.search)
const id = params.get("id")

async function getProductDetail() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!response.ok) {
      throw new Error("Product not found")
    }

    const product = await response.json()

    detailContainer.innerHTML = `
  <div class="product-detail-wrapper">

    <!-- IMAGE -->
    <div class="product-image-box">
      <img src="${product.image}" alt="${product.title}">
    </div>

    <!-- INFO -->
    <div class="product-info">
      <h2>${product.title}</h2>

      <div class="product-price">
        $${product.price}
      </div>

      <div class="product-category">
        Category: ${product.category}
      </div>

      <p class="product-desc">
        ${product.description}
      </p>

      <div class="action-buttons">
        <button class="btn-cart">Add to Cart</button>
        <button class="btn-buy">Buy Now</button>
      </div>
    </div>

  </div>
`


  } catch (error) {
    console.log(error)
  }
}

getProductDetail()


function goBack() {
  window.history.back()
}
