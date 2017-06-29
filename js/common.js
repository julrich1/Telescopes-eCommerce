const products = [
  {
    id: 1,
    image: "http://lorempixel.com/300/400/",
    name: "Discovery 15\" F/5 Truss Tube Dobsonian Telescope",
    rating: 5,
    price: "2999.00",
    categories: ["dobsonian"],
    description: "When you talk about a Discovery Dobsonian Telescope, you aren't just talking about any run-of-the-mill, mass produced dob... You're talking hand-figured quality and all American pride in workmanship. When you lay your hands on a Discovery, you'll discover what you've been missing. All Discovery Truss Tube Dobs include the finest hand-figured optics available today and are custom made-to-order. Discovery optics are manufactured in their own state-of-the-art facility, not sold out of the country to the lowest bidder. Every set of optics is painstakingly tested until it passes Discovery's strict standards for \"diffraction limited\". They incorporate the use of Fizuea, Equal-plate and Scatter-path interferometers and documentation can be provided for your telescope for an extra fee. You won't find any shortcuts or substandard parts in a Discovery Telescope. There are no design flaws. Every Discovery Truss Tube Dobsonian Telescope is fully assembled and checked for fit and finish before it ever leaves for shipment. All of their telescopes are handcrafted and masterfully built. You will never find a Discovery Telescope sold in a discount department store... Ever!"
  },
  {
    id: 2,
    image: "http://lorempixel.com/300/400/",
    name: "Orion Skyquest XT8I Intelliscope Dobsonian Telescope",
    rating: 3,
    price: "649.99",
    categories: ["reflector"],
    description: "This remarkable scope combines powerful 203mm-diameter reflector optics with point-and-view simplicity in one nicely portable package. And with the included Orion IntelliScope Computerized Object Locator, even the novice stargazer has access to the location of 14,000+ celestial wonders stored in the IntelliScope's databank. It's like having your own personal tour guide to the universe! You just select an object to observe using the Object Locator's illuminated menu buttons (Galaxies, Clusters, Nebulas, etc.), or choose a pre-set tour of the best objects, then press Enter. The IntelliScope's high-resolution, 9,216-step digital encoders direct the telescope right to the object, placing it squarely in the eyepiece. Just remember... Not every object can be seen given sky conditions, aperture, etc. The Orion XT8i IntelliScope is the most advanced 8\" Dobsonian telescope available. Its 8\" (203mm) parabolic primary mirror serves up jaw-dropping images of the planets, nebulas clusters, and galaxies. The enameled steel tube boasts a \"navigation knob\" for easy slewing, a right-angle finder scope and now a Crayford-style focuser that accepts 2\" and 1.25\" eyepieces. The focuser provides silky-smooth, backlash-free motion that eliminates image shift, making it easier to achieve the sharpest possible focus"
  },
  {
    id: 3,
    image: "http://lorempixel.com/300/400/",
    name: "APM 152/1200 APO Triplet",
    rating: 2,
    price: "12999.00",
    categories: ["refractor"],
    description: "The APM 152F/1200 is not only a wonderful, powerful visual APO telescope for lower power, wide-field observations and higher power, super high contrast planetary and double star observations, but it is also a superb imaging machine. The tube assembly has been redesigned to be even more compact and lightweight than previous models. The APM 152F/1200 can now be considered a fully portable high end APO that is solidly at home on medium sized, easily transportable( and relatively inexpensive) mounts. This model can be enjoyed visually with any binoviewer/diagonal combination without the use of a barlow/corrector. When used photographically with a matched field flattener you'll experience coverage up to a 6x7 cm format with pinpoint stars across the entire field...even into the corners! The super strong, lightweight CNC LW II tubes incorporated in the APM 152F/1200 are manufactured in Germany of the best materials and with fine attention to details and overall mechanical quality. The dew shield slides smoothly over the optical tube assembly without scratching the paint. The tube's internal baffles are matched for a large usable photographic field. The included tube rings with the APM 152F/1200 are flat on both sides and offer three tapped 1/4-20 holes perpendicular to the tube line. The center spacing between the two outer holes is 60mm, or 2.362\". The center tapped hole can be used for mounting plates that only have a single center hole."
  },
  {
    id: 4,
    image: "http://lorempixel.com/300/400/",
    name: "Meade 16\" ACF LX200 Telescope w/ giant tripod",
    rating: 4,
    price: "14349.00",
    categories: ["reflector"],
    description: "The most widely used research telescope on earth now comes with the most advanced optical system. Meade's LX200-ACF brings Advanced Coma-Free (ACF) optics within reach of aspiring astronomers everywhere. Nearly every observatory reflector in the world uses an aplanatic (coma-free) optical system like the Ritchey-Chrétien (RC), including NASA's Hubble Space Telescope. Now you can own similar optics to what the professionals use. The LX200-ACF includes all the field-proven features of the LX200 including GPS, Primary Mirror Lock, Zero Image-Shift Microfocuser, Oversized Primary Mirror, SmartDrive™;, Smart Mount™, AutoStar® II and more. Plus, the LX200-ACF comes with observatory-class optics and a Series 5000 26mm 5-Element Plössl eyepiece. The new LX200-ACF. It's the biggest news in astronomy since, well, the LX200."
  },
  {
    id: 5,
    image: "http://lorempixel.com/300/400/",
    name: "Celestron 14\" EdgeHD CGX-L TELESCOPE",
    rating: 4,
    price: "8499.00",
    categories: ["reflector"],
    description: "Celestron has taken another bold step as the market leader in telescopes with the introduction of their latest series of high-end telescopes. Since the moment Celestron first started producing Schmidt Cassegrain optical systems, they have continued to design high-quality optics with pride. After years of research and development, Celestron has now taken one giant step! The Edge HD is Celestron’s latest innovation that will surely be the system of choice for the serious astro-imagers. The new Edge High Definition telescope series features an Aplanatic Schmidt optical system that produces pinpoint star images all the way to the edge of the field. Some optical systems currently on the market may produce coma free images. But there is a difference.... the optical difference. Not only is the Celestron Edge coma free, but it also has a built in field flattener to ensure sharp focus all the way to the edge of the field, producing true Astrograph quality images. This results in pinpoint, High Definition star images throughout your astro photograph."
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
    description: "Sky-Watcher has opened a portal to the stars with the new Stargate 20\" Truss-Tube Dobsonian telescope. This telescope designed for immense light gathering power and ease of use, and is sure to deliver on both fronts for the most discerning of visual astronomers. With a maximum useful magnification of 1000x, you will find that the Sky-Watcher Stargate 20\" Dobsonian makes it easy and enjoyable to scour planetary and deep sky visual targets for the most refined and subtle of details. The Stargate 20\" is somewhat larger than its 18\" sibling, but Sky-Watcher still estimates that it should take no longer than thirty minutes for an experienced astronomer to assemble and render it ready for observational use under normal circumstances. And of course, it's not just raw power and convenience that Sky-Watcher prioritized when designing and making the Stargate 20\". They also made sure to include a primary parabolic mirror design that eliminates the spherical aberrations that are otherwise inherent in faster focal length reflectors. These mirrors are designed to bring all of the light your telescope has gathered to a single focal point and ensure sharp, high contrast, high detail images. Every optical mirror in the Stargate, including the parabolic primary mirror, is fully multi-coated with high quality Silicon Dioxide coatings that ensure optimal durability and performance."
  },
  {
    id: 9,
    image: "http://lorempixel.com/300/400/",
    name: "Orion Skyquest XX14G Go-tO Truss Tube Dobsonian Telescope",
    rating: 4,
    price: "2799.00",
    categories: ["dobsonian"],
    description: "This pleasantly portable, yet large-aperture Orion Dobsonian is equipped with GoTo motorization and closed-loop tracking, making it an ideal telescope for use in the backyard or at your favorite dark sky site. Not only does the Oron SkyQuest XX14g GoTo Truss Tube Dobsonian feature exceptionally large 14\" (356mm) diameter optics, but its Orion-designed collapsible GoTo Dobsonian base and truss tube make the Orion XX14g conveniently portable, since you can break the entire telescope down into bite-size component pieces. Imagine, a 14\" diameter Dobsonian reflector with motorized GoTo object location and tracking, capable of being packed into a small car. The optical tube and base both separate into smaller components - without tools. Once broken down, everything fits easily into even a compact car, for the trip to your favorite dark-sky site. The rigid 8-pole truss tube of the Orion XX14g virtually eliminates flexure observed in 6- and 3-pole collapsible tube designs. Stability of the assembled Orion XX14g Dobsonian base is enhanced by its 1\" thick composite wood base panels, which are laminated with water-resistant black melamine. GoTo and tracking motors are pre-installed on the base panels, making assembly nice and easy. Once the tube and base are assembled, the optical tube attaches to the base with a dovetail trunnion and locks securely in place with a single captive hand knob. Since all base and truss tube hardware is captive, you don't have to worry about leaving a screw behind after a long night of viewing in the field."
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
