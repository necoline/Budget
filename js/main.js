$(document).ready( function() {

  $('#enter_bankVal').click( function(){
    var total = $('#total').text("Total: $ " + $('#bankVal').val());
    $('#bankVal').val(null);
    return total;
  });

  $('#enter_bill').click( function(){
    var totalVal = $('#total').text().replace("Total: $ ", "");
    var billVal = $('#billVal').val();
    var result = (parseInt(totalVal) - billVal);
    var billName = $('#billName')[0].value;
    var tableRow = $('<tr></tr>');
    var tableLabel = $('<td></td>');
    var tableNumber = $('<td></td>');
    $('#total').text("Total: $ " + result);
    $('#billVal').val(null);
    $('#billName').val(null);
    if(result < 0) {
      $('#total').text("Total: $ " + result).css('color', 'red');
    }
    tableRow.append(tableLabel.text(billName), tableNumber.text(billVal));
    $('#table-body').append(tableRow);

  });
});
