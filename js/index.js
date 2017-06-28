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
  let found = false;

  for (const product of products) {
    if (product.id === id) {
      //Check to see if this item is already in the cart
      for (const cartProduct of cart) {
        if (cartProduct.id === id) {
          found = true;
          cartProduct.quantity++;
        }
      }

      if (!found) {
        const cartProduct = Object.assign({}, product);
        cartProduct.quantity = 1;
        cart.push(cartProduct);
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

function updateCartDisplay() {
  const totalItems = getCartItems();

  $("#cart").text(`${totalItems} items in cart`);
}

function getCartItems() {
  let total = 0;

  for (const product of cart) {
    total += product.quantity;
  }

  return total;
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
    const $colDiv = $("<div>").addClass("col s4");
    const $cardDiv = $("<div>").addClass("card");
    const $cardImageDiv = $("<div>").addClass("card-image");
    const $cardImage = $("<img>");
    const $cardTitle = $("<span>").addClass("card-title");
    const $cardButton = $("<a>").addClass("btn-floating btn-large halfway-fab waves-effect waves-light red");
    const $cardIcon = $("<i>").addClass("material-icons").text("add_shopping_cart");
    const $cardContent = $("<div>").addClass("card-content");

    const $productName = $("<p>");
    const $productPrice = $("<p>");
    const $productRating = getRatingElements(product.id);

    // $cardDiv.attr("id", `product-${product.id}`);
    $cardImage.attr("src", product.image);
    $productName.text(product.name);
    $productPrice.text(product.price);

    $cardButton.data("product-id", product.id);

    $cardButton.click(function() {
      addToCart(jQuery.data(this, "product-id"));
      saveCart();
      updateCartDisplay();
    });

    $cardButton.append($cardIcon);
    $cardImageDiv.append($cardImage, $cardTitle, $cardButton);
    $cardContent.append($productName, $productPrice, $productRating);

    $cardDiv.append($cardImageDiv, $cardContent);
    $colDiv.append($cardDiv);

    $("#featuredProd").append($colDiv);
  }
}

drawCarousel();
drawFeaturedProducts();
loadCart();
updateCartDisplay();
