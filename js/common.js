const products = [
  {
    id: 1,
    image: "img/Discovery.jpg",
    name: "Discovery 15\" F/5 Truss Tube Dobsonian Telescope",
    rating: 5,
    price: "2999.00",
    categories: ["dobsonian"],
    description: "When you talk about a Discovery Dobsonian Telescope, you aren't just talking about any run-of-the-mill, mass produced dob... You're talking hand-figured quality and all American pride in workmanship. When you lay your hands on a Discovery, you'll discover what you've been missing. All Discovery Truss Tube Dobs include the finest hand-figured optics available today and are custom made-to-order. Discovery optics are manufactured in their own state-of-the-art facility, not sold out of the country to the lowest bidder. Every set of optics is painstakingly tested until it passes Discovery's strict standards for \"diffraction limited\". They incorporate the use of Fizuea, Equal-plate and Scatter-path interferometers and documentation can be provided for your telescope for an extra fee. You won't find any shortcuts or substandard parts in a Discovery Telescope. There are no design flaws. Every Discovery Truss Tube Dobsonian Telescope is fully assembled and checked for fit and finish before it ever leaves for shipment. All of their telescopes are handcrafted and masterfully built. You will never find a Discovery Telescope sold in a discount department store... Ever!"
  },
  {
    id: 2,
    image: "img/Orion.jpg",
    name: "Orion Skyquest XT8I Intelliscope Dobsonian Telescope",
    rating: 3,
    price: "649.99",
    categories: ["reflector"],
    description: "This remarkable scope combines powerful 203mm-diameter reflector optics with point-and-view simplicity in one nicely portable package. And with the included Orion IntelliScope Computerized Object Locator, even the novice stargazer has access to the location of 14,000+ celestial wonders stored in the IntelliScope's databank. It's like having your own personal tour guide to the universe! You just select an object to observe using the Object Locator's illuminated menu buttons (Galaxies, Clusters, Nebulas, etc.), or choose a pre-set tour of the best objects, then press Enter. The IntelliScope's high-resolution, 9,216-step digital encoders direct the telescope right to the object, placing it squarely in the eyepiece. Just remember... Not every object can be seen given sky conditions, aperture, etc. The Orion XT8i IntelliScope is the most advanced 8\" Dobsonian telescope available. Its 8\" (203mm) parabolic primary mirror serves up jaw-dropping images of the planets, nebulas clusters, and galaxies. The enameled steel tube boasts a \"navigation knob\" for easy slewing, a right-angle finder scope and now a Crayford-style focuser that accepts 2\" and 1.25\" eyepieces. The focuser provides silky-smooth, backlash-free motion that eliminates image shift, making it easier to achieve the sharpest possible focus"
  },
  {
    id: 3,
    image: "img/APM.jpg",
    name: "APM 152/1200 APO Triplet",
    rating: 2,
    price: "12999.00",
    categories: ["refractor"],
    description: "The APM 152F/1200 is not only a wonderful, powerful visual APO telescope for lower power, wide-field observations and higher power, super high contrast planetary and double star observations, but it is also a superb imaging machine. The tube assembly has been redesigned to be even more compact and lightweight than previous models. The APM 152F/1200 can now be considered a fully portable high end APO that is solidly at home on medium sized, easily transportable( and relatively inexpensive) mounts. This model can be enjoyed visually with any binoviewer/diagonal combination without the use of a barlow/corrector. When used photographically with a matched field flattener you'll experience coverage up to a 6x7 cm format with pinpoint stars across the entire field...even into the corners! The super strong, lightweight CNC LW II tubes incorporated in the APM 152F/1200 are manufactured in Germany of the best materials and with fine attention to details and overall mechanical quality. The dew shield slides smoothly over the optical tube assembly without scratching the paint. The tube's internal baffles are matched for a large usable photographic field. The included tube rings with the APM 152F/1200 are flat on both sides and offer three tapped 1/4-20 holes perpendicular to the tube line. The center spacing between the two outer holes is 60mm, or 2.362\". The center tapped hole can be used for mounting plates that only have a single center hole."
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

function getProductsById(ids) {
  const result = [];

  for (const product of products) {
    for (const id of ids) {
      if (id === product.id) {
        result.push(product);
      }
    }
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
