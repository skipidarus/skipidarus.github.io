$(document).ready(function () {
    $(document).on("click", ".go-to-payment", function () {
        let pack = $(this).data('package');
        $('#selectpackageform-packageid').val(pack);

        $('#select-package-form').submit();
    });

    $(document).on("change", "div.payment-option-item input", function () {
        let isCreditBlock = $('.is-credit');
        let isFullPaymentBlock = $('.is-full-payment');

        if ($('div.payment-option-item').find('input:checked').val() == 2) {
            isCreditBlock.removeClass('hidden');
            if (isFullPaymentBlock) {
                isFullPaymentBlock.addClass('hidden');
            }
        } else {
            isCreditBlock.addClass('hidden');
            if (isFullPaymentBlock) {
                isFullPaymentBlock.removeClass('hidden');
            }
        }

        $('#payment-form').yiiActiveForm('validateAttribute', 'selectpaymenttypeform-formerror');
    });

    $(document).on("change", "#creditCountMonths, #creditFirstPayment", function () {
        let params = {
            basketId: $('#basketId').val(),
            params: $(this).closest('form').serialize()
        };

        $.post('/cabinet/package/get-credit-info', params, function (answer) {
            $('.credit-info').html(answer);

            $('#payment-form').yiiActiveForm('validateAttribute', 'selectpaymenttypeform-formerror');
        }, 'json');
    });
});