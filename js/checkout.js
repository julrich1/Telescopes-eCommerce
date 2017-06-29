$(document).ready(function() {
    $('select').material_select();
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

$("#purchase-button").click(function() {
  if (validateInput()) {
    Materialize.toast('Order placed', 4000);
  }
  else {
    Materialize.toast('Please complete all required fields', 4000);
  }
});

function validateInput() {
  // first_name
  // last_name
  // add1
  // add2
  // state
  // zip

  if ($("#first_name").val() && $("#last_name").val() && $("#add1").val() && $("#state").val() && $("#zip").val() &&
    $("#a-first_name").val() && $("#a-last_name").val() && $("#a-add1").val() && $("#a-state").val() && $("#a-zip").val() &&
    $("#cCard").val() && $("#exp").val() && $("#cvc").val()) {
    return true;
  }

  return false;
}
