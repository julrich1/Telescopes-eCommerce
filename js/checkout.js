$(document).ready(function() {
    $('select').material_select();
    $('select[required]').css({
          display: 'inline',
          position: 'absolute',
          float: 'left',
          padding: 0,
          margin: 0,
          border: '1px solid rgba(255,255,255,0)',
          height: 0,
          width: 0,
          top: '2em',
          left: '3em',
          opacity: 0
        });
});

$("#ship2bill").click(function() {
  if ($("#ship2bill").prop("checked")) {
    $("#a-first_name").val($("#first_name").val());
    $("#a-first_name").prop("disabled", true);
    $("#a-first_name + label").addClass("active");

    $("#a-last_name").val($("#last_name").val());
    $("#a-last_name").prop("disabled", true);
    $("#a-last_name + label").addClass("active");

    $("#a-add1").val($("#add1").val());
    $("#a-add1").prop("disabled", true);
    $("#a-add1 + label").addClass("active");

    $("#a-add2").val($("#add2").val());
    $("#a-add2").prop("disabled", true);
    $("#a-add2 + label").addClass("active");

    $("#a-state").val($("#state").val());
    $("#a-state").prop("disabled", true);
    $('#a-state').material_select();

    $("#a-zip").val($("#zip").val());
    $("#a-zip").prop("disabled", true);
    $("#a-zip + label").addClass("active");

    $("#a-company").val($("#company").val());
    $("#a-company").prop("disabled", true);
    $("#a-company + label").addClass("active");
  }
  else {
    $("#a-first_name").prop("disabled", false);
    $("#a-last_name").prop("disabled", false);
    $("#a-add1").prop("disabled", false);
    $("#a-add2").prop("disabled", false);
    $("#a-state").prop("disabled", false);
    $("#a-zip").prop("disabled", false);
    $("#a-company").prop("disabled", false);
    $('#a-state').material_select();
  }
});

$("#checkForm").submit(function(event) {
  event.preventDefault();
console.log(cart.length);
  if(cart.length === 0) {
    Materialize.toast('Please add items to your cart', 4000);
  }
  else if (validateInput()) {
    Materialize.toast('Order placed', 4000);
  }
  else {
    Materialize.toast('Please complete all required fields', 4000);
  }
});

function validateInput() {
  if ($("#first_name").val() && $("#last_name").val() && $("#add1").val() && $("#state").val() && $("#zip").val() &&
    $("#a-first_name").val() && $("#a-last_name").val() && $("#a-add1").val() && $("#a-state").val() && $("#a-zip").val() &&
    $("#cCard").val() && $("#exp").val() && $("#cvc").val()) {
    return true;
  }

  return false;
}

function drawCheckout() {
  $("#checkout-table tbody").empty();
  $("#total-table").empty();

  if (cart.length) {
    for (const product of cart) {
      const $tableRow = $("<tr>");
      const $tdQty = $("<td>").text(product.quantity).addClass("center");
      const $tdDescription = $("<td>").text(product.name);
      const $tdPrice = $("<td>").text(formatCurrency(product.price)).addClass("right-align");
      const $tdDelete = $("<td>").html("<i class=\"material-icons prefix\">delete</i>").addClass("right-align cursor-pointer").data("product-id", product.id);

      $tdDelete.click(function() {
        console.log(jQuery.data(this, "product-id"));
        removeFromCart(jQuery.data(this, "product-id"));
        saveCart();
        updateCartDisplay();
        drawCheckout();
      });

      $tableRow.append($tdQty, $tdDescription, $tdPrice, $tdDelete);
      $("#checkout-table").append($tableRow);
    }
  }
  else {
    const $tableRow = $("<tr>");
    const $tdDescription = $("<td>").text("No products in cart").attr("colspan", "4").addClass("center");

    $tableRow.append($tdDescription);
    $("#checkout-table").append($tableRow);
  }

  const $tableRow = $("<tr>");
  const $tdTotal = $("<td>").addClass("right-align").html("<strong>Total</strong>").css("width", "60%");
  const $tdTotalPrice = $("<td>").addClass("right-align").html(`<strong>${getCartTotal()}</strong>`);

  $tableRow.append($tdTotal, $tdTotalPrice);
  $("#total-table").append($tableRow);
}

function getCartTotal() {
  let total = 0;

  for (const product of cart) {
    total += (product.price * product.quantity);
  }

  return formatCurrency(total);
}

loadCart();
updateCartDisplay();
drawCheckout();
formatCurrency("58444444494.99");

// this is to initilize modals ***jam
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
