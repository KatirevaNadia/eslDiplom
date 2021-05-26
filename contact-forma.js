jQuery(document).ready(function($) {

$(".ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST_",
url: "contact.php",
data: str,
success: function(msg) {

if(msg == 'OK') {
result = '<p>Ваш заказ принят</p>';

$("#mailForm").trigger("reset");
$(".fields").hide();
} else {
result = msg;
}
$('.note').html(result);
}
});
return false;
});
});
