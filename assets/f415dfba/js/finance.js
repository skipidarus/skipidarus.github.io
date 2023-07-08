$(document).ready(function () {
    _calculatePayoutCommission();
    _selectedPayoutType();

    $(document).on('change', '#payoutform-amount,#payoutform-type', function () {
        _calculatePayoutCommission();
    });

    $(document).on('change', '#payoutform-type', function () {
        _selectedPayoutType();
    });

    function _selectedPayoutType() {
        let type = $('#payoutform-type').val();

        let usdtNumber = $('.field-payoutform-usdtnumber');
        let pmNumber = $('.field-payoutform-pmnumber');

        if (type == 1) {
            usdtNumber.find('input').prop('disabled', false);
            usdtNumber.show();

            pmNumber.find('input').prop('disabled', true);
            pmNumber.hide();

        } else if (type == 2) {
            pmNumber.find('input').prop('disabled', false);
            pmNumber.show();

            usdtNumber.find('input').prop('disabled', true);
            usdtNumber.hide();
        } else if (type == 3) {
            usdtNumber.find('input').prop('disabled', false);
            usdtNumber.show();

            pmNumber.find('input').prop('disabled', true);
            pmNumber.hide();
        } else {
            usdtNumber.find('input').prop('disabled', true);
            usdtNumber.hide();

            pmNumber.find('input').prop('disabled', true);
            pmNumber.hide();
        }
    }

    function _calculatePayoutCommission() {
        if ($('#payoutform-amount').length === 0) {
            return;
        }

        let type   = $('#payoutform-type').val();
        let amount = $('#payoutform-amount').val();

        $.post('/cabinet/payout/get-commission', {amount: amount, type: type}, function (answer) {
            $('.payout-commission').html(answer);
        }, 'html');
    }

    $(document).on('click', '.payout-select-all', function () {
        $.post('/cabinet/payout/get-available-amount', {}, function (answer) {
            $("#payoutform-amount").val(answer.amount).trigger('change');
        }, 'json');
    });

    if ($('.wait-payment').length > 0) {
        setInterval(function () {
            window.location.reload();
        }, 3000);
    }

    $(document).on("change", "div.payment-type-item input", function () {
        _getExchangePrice();
    });
    function checkUsdtBlockVal(){
        return $('div.payment-type-item').find('input:checked').val();
    }
    function attentionUsdtVisibility(){
        if(checkedUsdt === '13'){
            $('#attentionTrc20').show();
        } else{
            $('#attentionTrc20').hide();
        }
    }
    let checkedUsdt = checkUsdtBlockVal();
    attentionUsdtVisibility();
    function _getExchangePrice() {
        let params = {
            type: checkUsdtBlockVal(),
            params: $('form#payment-form').serialize()
        };
        checkedUsdt = params.type;
        attentionUsdtVisibility();

        $.post('/cabinet/deposit/get-exchange-price', params, function (answer) {
            $('.exchange-price').html(answer);
        }, 'json');
    }

    $(document).on('input', '#paymentform-amount', function () {
        _getExchangePrice();
    });

    _setUserInfo();
    $(document).on('input', '#transferform-refcode', function () {
        _setUserInfo();
    });

    function _setUserInfo() {
        let obj = $('#transferform-refcode');
        if (obj.length === 0 || !obj.val()) {
            return;
        }

        let params = {
            refCode: obj.val(),
        };

        $.post('/cabinet/transfer/referral-info', params, function (answer) {
            $('.user-info').html(answer);
        }, 'json');
    }
});