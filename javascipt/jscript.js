

$('.side1').click(function() {
    $('div.car2').siblings('div.car').removeClass('active');
    $('div.car2').addClass('active');
    $('#exampleModal').modal('show');
});
$('.side2').click(function() {
    $('div.car3').siblings('div.car').removeClass('active');
    $('div.car3').addClass('active');
    $('#exampleModal').modal('show');
});
$('.side3').click(function() {
    $('div.car4').siblings('div.car').removeClass('active');
    $('div.car4').addClass('active');
    $('#exampleModal').modal('show');
});
$('.side4').click(function() {
    $('div.car5').siblings('div.car').removeClass('active');
    $('div.car5').addClass('active');
    $('#exampleModal').modal('show');
});
