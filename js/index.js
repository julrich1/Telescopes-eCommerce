function drawCarousel() {
  const products = getProducts(3);

  // const $carouselDiv = $("<div>");
  // const $img = $("<img>");
  // $img.attr("src", products[0].image);


  // $carouselDiv.append($img);
  // $("#carousel").append($carouselDiv);

  // <div class="carousel carousel-slider" data-indicators="true">
  //   <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1"></a>
  //   <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2"></a>
  //   <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3"></a>
  //   <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"></a>
  // </div>
  for (const product of products) {
    // $(".carousel").append($("<a>").attr("src", "https://lorempixel.com/800/400/food/4").addClass("carousel-item"));
  }

  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.carousel').carousel();
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

// drawCarousel();
// $('.carousel.carousel-slider').carousel({fullWidth: true});
drawFeaturedProducts();
loadCart();
updateCartDisplay();
