$(document).ready(function() {
    if ($("input[name='payment']:checked").val() != "cards") {
        $('#cardOptions').hide();
        $('#partialBill1').hide();
    }
    $('input[type="radio"]').on("change", function() {
        let paymentOption = $("input[name='payment']:checked").val();

        if (paymentOption != "cards") {
            $('#cardOptions').hide();
            $('#partialBill1').hide();
        } else {
            $('#cardOptions').show();
            $('#partialBill1').show();
        }
    });
    window.addEventListener('load', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const totalPrice = urlParams.get('total');

        if (totalPrice) {
            document.getElementById('total-price').textContent = `₹${totalPrice}`;
        }
    });
});
