function displayProducts() {
  const products = getProducts(3);

  for (const product of products) {
    const $row = $("<div>").addClass("row");
    const $colImg = $("<div>").addClass("col s5");
    const $img = $("<img>").attr("src", product.image);
    const $colDesc = $("<div>").addClass("col s7");
    const $h5 = $("<h5>").text(product.name);
    const $price = $("<p>").text(product.price);
    const $checkout = $("<a>").addClass("waves-effect waves-light btn");
    const $icon = $("<i>").addClass("material-icons").text("add_shopping_cart");
    const $rating = getRatingElements(product.id);
    const $description = $("<p>").text(product.description);

    $checkout.data("product-id", product.id);

    $checkout.click(function() {
      addToCart(jQuery.data(this, "product-id"));
      saveCart();
      updateCartDisplay();
    });

    $checkout.append($icon);
    $colImg.append($img);
    $colDesc.append($h5, $price, $checkout, $rating, $description);
    $row.append($colImg, $colDesc);

    $("#prodList").append($row);
  }
}

//
// <div class="row">
//   <div class="col s5">
//     <img src="https://www.optcorp.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/i/pi-rc24_astrograph.jpg" height=200px width=auto>
//   </div>
//   <div class="col s7">
//     <h5>PLANEWAVE 24" RITCHEY-CHRÉTIEN ASTROGRAPH OTA</h5>
//     <p>$64,995.00</p>
//     <a>* * * * *</a>
//     <p>The PlaneWave Instruments PW24-RC is a 24" (0.51 m) f/6.5 Ritchey-Chrétien (RC) Astrograph telescope OTA. The PW24-RC has a dual carbon fiber truss design, with 3 cooling fans ejecting air from the back of the telescope and 4 fans at the front of the primary mirror to quickly cool the primary mirror and keep its temperature stabilized. The instrument weight is 140 lb (64 kg) and it comes standard with a back plate retaining ring ready to accept the focuser of your choice.</p>
//   </div>
// </div>

displayProducts();
loadCart();
updateCartDisplay();
