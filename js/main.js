var value1 = 0;
var value2 = 0;
var operator = "";
var flagForOperationComplete = false;
jQuery(document).ready(function ($) {
    $("a").click(function () {
        if(($(this).attr('id') === "add") || ($(this).attr('id') === "subtract") || ($(this).attr('id') === "multiply") || ($(this).attr('id') === "divide")) {
            value1 = parseInt($("#inputNumber").val());
            operator = $(this).attr('id');
            $("#inputNumber").val('');
        }
        else if($(this).attr('id') === "equal") {
            var output = 0;
            value2 = parseInt($("#inputNumber").val());
            output = operation(operator);
            (isNaN(output)) ? output = "Error" : output = output;
            $("#inputNumber").val(output);
            flagForOperationComplete = true;
        }
        else if ($(this).attr('id') === "clear") {
            $("#inputNumber").val('');
        }
        else {
            if (flagForOperationComplete == true) {
                $("#inputNumber").val($(this).attr('id'));
            }
            else {
                var value = $("#inputNumber").val();
                $("#inputNumber").val(value + $(this).attr('id'));
            }
        }
    });
});
function operation(operator) {
    var result = 0;
    switch (operator) {
        case "add":
            result = value1 + value2;
            break;
        case "subtract":
            result = value1 - value2;
            break;
        case "multiply":
            result = value1 * value2;
            break;
        case "divide":
            result = value1 / value2;
            break;
        default:
            //do nothing
            break;
    }
    return result;
}