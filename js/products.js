function displayProducts(products) {
  //If passed products, use those, otherwise get some from getProducts();
  if (!products) {
    products = getProducts(3);
  }
  
  $("#prodList").empty();

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

function displayCategories() {
  const $catParent = $("#categories");

  for (const category of categories) {
    const $category = $("<span>").text(category);

    $category.click(function() {
      displayProducts(getProductsByCategory(this.innerText.toLowerCase()));
    });

    $catParent.append($category);
  }
}

displayCategories();
displayProducts();
loadCart();
updateCartDisplay();
