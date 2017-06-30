function displayProducts(products) {
  //If passed products, use those, otherwise get some from getProducts();
  if (!products) {
    products = getProducts(10);
  }

  $("#prodList").empty();

  for (const product of products) {
    const $row = $("<div>").addClass("row");
    const $colImg = $("<div>").addClass("col s5 center");
    const $img = $("<img>").attr("src", product.image);
    const $colDesc = $("<div>").addClass("col s7");
    const $h5 = $("<h5>").text(product.name);
    const $price = $("<p>").text(formatCurrency(product.price));
    const $checkout = $("<a>").addClass("waves-effect waves-light btn amber accent-3");
    const $icon = $("<i>").addClass("material-icons amber accent-3 light-blue-text text-darken-4").text("add_shopping_cart");
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

  const $all = $("<a>").text("All");
  $all.addClass("waves-effect waves-teal btn-flat dob active-category");
  $all.click(function() {
    $(".active-category").removeClass("active-category");
    $(this).addClass("active-category");
    displayProducts();
  });

  $catParent.append($all);

  for (const category of categories) {
    const $category = $("<a>").text(category);
    $category.addClass("waves-effect waves-teal btn-flat dob");

    $category.click(function() {
      $(".active-category").removeClass("active-category");
      $(this).addClass("active-category");
      displayProducts(getProductsByCategory(this.innerText.toLowerCase()));
    });

    $catParent.append($category);
  }
}

displayCategories();
displayProducts();
loadCart();
updateCartDisplay();

// this is to initilize modals ***jam
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
// this is to initilize modals ***jam
