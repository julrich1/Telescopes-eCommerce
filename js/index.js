const products = [
  {
    id: 1,
    image: "img/Discovery.jpg",
    name: "Discovery 15\" F/5 Truss Tube Dobsonian Telescope",
    rating: 5,
    price: "2999.00",
    categories: ["dobsonian"]
  },
  {
    id: 2,
    image: "img/Orion.jpg",
    name: "Orion Skyquest XT8I Intelliscope Dobsonian Telescope",
    rating: 3,
    price: "649.99",
    categories: ["reflector"]
  },
  {
    id: 3,
    image: "img/APM.jpg",
    name: "APM 152/1200 APO Triplet",
    rating: 2,
    price: "12999.00",
    categories: ["refractor"]
  }
];

const categories = ["dobsonian", "reflector", "refractor"];

let cart = [];

// Return a number of products sequentially
function getProducts(number) {
  const result = [];

  for (let i = 0; i < number; i++) {
    result.push(products[i]);
  }

  return result;
}

// Return a list of products based on a category
function getProductsByCategory(categoryName) {
  const result = [];

  for (const product of products) {
    for (const category of product.categories) {
      if (category === categoryName) {
        result.push(product);
      }
    }
  }

  return result;
}

// Sort product based on supplied criteria
function sortProducts(productList, criteria) {
  if (criteria === "price") {
    //Do sorting
  }
}

// Add something to the cart based on its product ID
function addToCart(id) {
  for (const product of products) {
    if (product.id === id) {
      //Check to see if this item is already in the cart
      if (cart.length > 0) {
        for (const cartProduct of cart) {
          if (cartProduct.id === id) {
            cartProduct.quantity++;
          }
        }
      }
      else {
        let cartProduct = Object.assign({}, product);
        cartProduct.quantity = 1;
        cart.push(partProduct);
      }
    }
  }
}

// Remove something from the cart based on its product ID
function removeFromCart(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(id, 1);
    }
  }
}

//Save the cart to local storage
function saveCart() {
  const jsonCart = JSON.stringify(cart);

  localStorage.setItem("cart", jsonCart);
}

// Load the cart from local storage if it exists
function loadCart() {
  const jsonCart = localStorage.getItem("cart");

  if (jsonCart) {
    cart = JSON.parse(jsonCart);
  }
}

function getRatingElements(id) {
  for (const product of products) {
    if (product.id === id) {
      $ratingElement = $("<div>");
      for (var i = 1; i <= product.rating; i++) {
        $ratingElement.append($("<img>").attr("src", "img/star-full.png").addClass("star-rating"));
      }

      for (let j = i; j <= 5; j++) {
        $ratingElement.append($("<img>").attr("src", "img/star-empty.png").addClass("star-rating"));
      }

      return $ratingElement;
    }
  }
}

function drawCarousel() {
  const products = getProducts(1);

  const $carouselDiv = $("<div>");
  const $img = $("<img>");
  $img.attr("src", products[0].image);

  $carouselDiv.append($img);
  $("#carousel").append($carouselDiv);
}

function drawFeaturedProducts() {
  const featuredProducts = getProducts(3);

  for (const product of featuredProducts) {
  //
  // <div class="card">
  //   <div class="card-image">
  //     <img src="images/sample-1.jpg">
  //     <span class="card-title">Card Title</span>
  //     <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
  //   </div>
  //   <div class="card-content">
  //     <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  //   </div>
  // </div>

    const $cardDiv = $("<div>").addClass("card");
    const $cardImageDiv = $("<div>").addClass("card-image");
    const $cardImage = $("<img>");
    const $cardTitle = $("<span>").addClass("card-title");
    const $cardButton = $("<a>").addClass("btn-floating halfway-fab waves-effect waves-light red");
    const $cardIcon = $("<i>").addClass("material-icons").text("add_shopping_cart");
    const $cardContent = $("<div>").addClass("card-content");

    const $productName = $("<p>");
    const $productPrice = $("<p>");
    const $productRating = getRatingElements(product.id);

    $cardImage.attr("src", product.image);
    $productName.text(product.name);
    $productPrice.text(product.price);

    $cardButton.append($cardIcon);
    $cardImageDiv.append($cardImage, $cardTitle, $cardButton);
    $cardContent.append($productName, $productPrice, $productRating);

    $cardDiv.append($cardImageDiv, $cardContent);
    //
    // const $productPrice = $("<p>");
    // const $imageDiv = $("<div>");
    // const $productRating = getRatingElements(product.id);

    // $productDiv.addClass("product");
    // $productImg.addClass("product-image");
    // $productName.addClass("product-title");


    // $imageDiv.append($productImg);
    // $productDiv.append($imageDiv);
    // $productDiv.append($productName);
    // $productDiv.append($productPrice);
    // $productDiv.append($productRating);

    $("#featured1").append($cardDiv);
  }
}

drawCarousel();
drawFeaturedProducts();
