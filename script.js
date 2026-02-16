let productsContainer = document.querySelector("#all-Products")

const loader = document.getElementById("loader")

///.........................for API.com/PRODUCTS...........................................

async function getAllProducts() {

  try {
    const response = await fetch("https://fakestoreapi.com/products")
    if (!response.ok) {
      throw new Error("API FAILED TO GET DATA")
    }
    const data = await response.json()

    loader.style.display = "none"

    //console.log(data)

    data.forEach((product) => {
      let card = document.createElement("div")
      card.className = "col-12 col-sm-6 col-md-4 col-lg-3"

      card.innerHTML = `
<div class="card h-100">
  <img src="${product.image}" class="card-img-top img-fluid p-3"
    style="height:200px; object-fit:contain;">
  <div class="card-body d-flex flex-column">
    <h6 class="card-title">${product.title}</h6>
    <p class="mt-auto"><strong>$${product.price}</strong></p>
    <a href="./productDetailPage.html?id=${product.id}"
       class="btn btn-primary btn-sm">
       Check Product Detail
    </a>
  </div>
</div>
`

      productsContainer.appendChild(card)
      console.log(product)
    })
  }
  catch (err) {
    console.log(err)
  }

}

getAllProducts()


//.........................................for crousel................................................

const carouselInner = document.getElementById("carouselContent");

const carouselImages = [
  {
    img: "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg",
    title: "Women Collection 2024",
    heading: "NEW SEASON",
    btn: "SHOP NOW"
  },
  {
    img: "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg",
    title: "Men New-Season",
    heading: "JACKETS & COATS",
    btn: "SHOP NOW"
  },
  {
    img: "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg",
    title: "Men Collection",
    heading: "NEW ARRIVALS",
    btn: "SHOP NOW"
  }
];

carouselImages.forEach((item, index) => {
  carouselInner.innerHTML += `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      <img src="${item.img}" class="d-block w-100" alt="slide">

      <div class="carousel-caption text-start">
        <p>${item.title}</p>
        <h1>${item.heading}</h1>
        <button class="btn btn-primary px-4 py-2">${item.btn}</button>

      </div>
    </div>
  `;
});



//==========================================filterByCategory==================================================

async function filterByCategory(category) {

  loader.style.display = "block"

  productsContainer.innerHTML = ""

  let apiURL

  if (category === "all") {
    apiURL = "https://fakestoreapi.com/products"
  } else {
    apiURL = `https://fakestoreapi.com/products/category/${category}`
  }

  const response = await fetch(apiURL)
  const products = await response.json()

  products.forEach(product => {

    let card = document.createElement("div")
    card.className = "col-12 col-sm-6 col-md-4 col-lg-3"

    card.innerHTML = `
<div class="card h-100">
  <img src="${product.image}" class="card-img-top img-fluid p-3"
    style="height:200px; object-fit:contain;">
  <div class="card-body d-flex flex-column">
    <h6 class="card-title">${product.title}</h6>
    <p class="mt-auto"><strong>$${product.price}</strong></p>
    <a href="./productDetailPage.html?id=${product.id}"
       class="btn btn-primary btn-sm">
       Check Product Detail
    </a>
  </div>
</div>
`


    productsContainer.appendChild(card)
  })

  loader.style.display = "none"


}


