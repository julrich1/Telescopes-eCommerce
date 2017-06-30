const products = [
  {
    id: 1,
    image: "http://lorempixel.com/300/400/",
    name: "Discovery 15\" F/5 Truss Tube Dobsonian Telescope",
    rating: 5,
    price: "2999.00",
    categories: ["dobsonian"],
    description: "When you lay your hands on a Discovery, you'll discover what you've been missing. All Discovery Truss Tube Dobs include the finest hand-figured optics available today and are custom made-to-order. Discovery optics are manufactured in their own state-of-the-art facility, not sold out of the country to the lowest bidder. Every set of optics is painstakingly tested until it passes Discovery's strict standards for \"diffraction limited\". They incorporate the use of Fizuea, Equal-plate and Scatter-path interferometers and documentation can be provided for your telescope for an extra fee. "
  },
  {
    id: 2,
    image: "http://lorempixel.com/300/400/",
    name: "Orion Skyquest XT8I Intelliscope Dobsonian Telescope",
    rating: 3,
    price: "649.99",
    categories: ["reflector"],
    description: "This remarkable scope combines powerful 203mm-diameter reflector optics with point-and-view simplicity in one nicely portable package. And with the included Orion IntelliScope Computerized Object Locator, even the novice stargazer has access to the location of 14,000+ celestial wonders stored in the IntelliScope's databank.  The Orion XT8i IntelliScope is the most advanced 8\" Dobsonian telescope available. Its 8\" (203mm) parabolic primary mirror serves up jaw-dropping images of the planets, nebulas clusters, and galaxies. The enameled steel tube boasts a \"navigation knob\" for easy slewing, a right-angle finder scope and now a Crayford-style focuser that accepts 2\" and 1.25\" eyepieces."
  },
  {
    id: 3,
    image: "http://lorempixel.com/300/400/",
    name: "APM 152/1200 APO Triplet",
    rating: 2,
    price: "12999.00",
    categories: ["refractor"],
    description: "The APM 152F/1200 is not only a wonderful, powerful visual APO telescope for lower power, wide-field observations and higher power, super high contrast planetary and double star observations. The APM 152F/1200 can now be considered a fully portable high end APO that is solidly at home on medium sized, easily transportable( and relatively inexpensive) mounts. When used photographically with a matched field flattener you'll experience coverage up to a 6x7 cm format with pinpoint stars across the entire field...even into the corners! The tube's internal baffles are matched for a large usable photographic field."
  },
  {
    id: 4,
    image: "http://lorempixel.com/300/400/",
    name: "Meade 16\" ACF LX200 Telescope w/ giant tripod",
    rating: 4,
    price: "14349.00",
    categories: ["reflector"],
    description: "Meade's LX200-ACF brings Advanced Coma-Free (ACF) optics within reach of aspiring astronomers everywhere. The LX200-ACF includes all the field-proven features of the LX200 including GPS, Primary Mirror Lock, Zero Image-Shift Microfocuser, Oversized Primary Mirror, SmartDrive™;, Smart Mount™, AutoStar® II and more. Plus, the LX200-ACF comes with observatory-class optics and a Series 5000 26mm 5-Element Plössl eyepiece. The new LX200-ACF. It's the biggest news in astronomy since, well, the LX200."
  },
  {
    id: 5,
    image: "http://lorempixel.com/300/400/",
    name: "Celestron 14\" EdgeHD CGX-L TELESCOPE",
    rating: 4,
    price: "8499.00",
    categories: ["reflector"],
    description: "The Edge HD is Celestron’s latest innovation that will surely be the system of choice for the serious astro-imagers. The new Edge High Definition telescope series features an Aplanatic Schmidt optical system that produces pinpoint star images all the way to the edge of the field. Some optical systems currently on the market may produce coma free images. Not only is the Celestron Edge coma free, but it also has a built in field flattener to ensure sharp focus all the way to the edge of the field, producing true Astrograph quality images."
  },
  {
    id: 6,
    image: "http://lorempixel.com/300/400/",
    name: "TEC 140MM F/7 APO ED Refractor Telescope",
    rating: 5,
    price: "5900.00",
    categories: ["refractor"],
    description: "The 140mm APO ED is TEC's most popular telescope and for good reason. With a generous aperture, superior optics and high quality construction the 140mm is unbeatable in its class. The TEC 140mm APO ED is also a great choice for both the imaging and visual astronomer. Beautifully clear, high contrast and sharp FPL-53 oil spaced optics serve every astronomer well. The 140mm is also highly portable at only 19 pounds and 34 inches long."
  },
  {
    id: 7,
    image: "http://lorempixel.com/300/400/",
    name: "Takahashi TSA-120 Triplet APO Refractor",
    rating: 2,
    price: "4430.00",
    categories: ["refractor"],
    description: "Are you ready for more Takahashi innovations? You asked for superior quality optics in a portable package and you got it... the Takahashi TSA-120. The \"T\" stands for Triplet and an air-spaced triplet design is exactly what you'll get. Inside the precision crafted lens cell, you'll find three elements, two extreme quality crown and flint glass, with an FPL-53 Extra-low Dispersion glass element sandwiched in between. While traditional refractor designs use oil in between elements, Takahashi doesn't... that means no oil to possibly leak out or become opaque with age. The \"SA\" stand for \"Super Apochromat\" and Apochromatic means you're free from those strange violet glows which often accompany bright stars or planets."
  },
  {
    id: 8,
    image: "http://lorempixel.com/300/400/",
    name: "Sky-watcher 20\" Stargate Truss-Tube Go-to Dobsonian",
    rating: 1,
    price: "7999.00",
    categories: ["dobsonian"],
    description: "This telescope designed for immense light gathering power and ease of use. The Stargate 20\" is somewhat larger than its 18\" sibling, but Sky-Watcher still estimates that it should take no longer than thirty minutes for an experienced astronomer to assemble and render it ready for observational use under normal circumstances. They also made sure to include a primary parabolic mirror design that eliminates the spherical aberrations that are otherwise inherent in faster focal length reflectors.  Every optical mirror in the Stargate, including the parabolic primary mirror, is fully multi-coated with high quality Silicon Dioxide coatings that ensure optimal durability and performance."
  },
  {
    id: 9,
    image: "http://lorempixel.com/300/400/",
    name: "Orion Skyquest XX14G Go-tO Truss Tube Dobsonian Telescope",
    rating: 4,
    price: "2799.00",
    categories: ["dobsonian"],
    description: "This pleasantly portable, yet large-aperture Orion Dobsonian is equipped with GoTo motorization and closed-loop tracking, making it an ideal telescope for use in the backyard or at your favorite dark sky site. The optical tube and base both separate into smaller components - without tools. Once broken down, everything fits easily into even a compact car. The rigid 8-pole truss tube of the Orion XX14g virtually eliminates flexure observed in 6- and 3-pole collapsible tube designs. GoTo and tracking motors are pre-installed on the base panels, making assembly nice and easy. Since all base and truss tube hardware is captive, you don't have to worry about leaving a screw behind after a long night of viewing in the field."
  },
  {
    id: 10,
    image: "http://lorempixel.com/300/400/",
    name: "Meade 12\" Dobsonian Lightbridge Telescope",
    rating: 5,
    price: "999.00",
    categories: ["dobsonian"],
    description: "It's not just a big telescope. It's a big telescope that goes anywhere. LightBridge truss-dobs from Meade will fit in just about any car, and set up and and take down quickly, so you can take one of these massive windows on the universe out to your favorite dark-sky location with ease...even if your favorite location is your own back yard. Light Bridge Dobs give you high quality Meade optics, premium components, and ultra portability...all for about the same price as a classic, tube-style Dobsonian. Diffraction Limited Optics Meade optics consistently outperform telescopes of similar and larger aperture. Consumers know that \"Meade Optics Inside\" means that what they see through our telescopes will be views that are detailed, crisp and full of contrast."
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
  console.log(id);
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      console.log("found");
      cart.splice(i, 1);
    }
  }
  console.log(cart);
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

function formatCurrency(price) {
  price = parseFloat(price);
  price = price.toFixed(2);

  price = price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  price = price.split("");
  price.unshift("$");

  return price.join("");
}
