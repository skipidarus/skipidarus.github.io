$(document).ready(function () {
    var arrayPhones = ['1144781713', '1074336900', '5495998097', '1198919146', '3025752395', '6738479305'];
    $("#refCodeId").on("change", function (e) {
        console.log(this.value);
        if(arrayPhones.includes(this.value) ){
            if($("#phoneId").is(":hidden")){
                $("#phoneId").show();
            }
        } else {
            if($("#phoneId").is(":visible")){
                $('#registrationform-phone').val('');
                $("#phoneId").hide();
            }
        }
    });

    if(arrayPhones.includes($('#refCodeId').val()) ){
        if($("#phoneId").is(":hidden")){
            $('#phoneError').html('');
            $("#phoneId").show();
        }
    } else {
        if($("#phoneId").is(":visible")){
            $("#phoneId").hide();
        }
    }

    /** Phone подтверждение */
    function getConfirmPhone(phone, phoneCaptcha, callbackSuccess, callbackFail) {
        $.post('/confirm/reg-confirm-phone?phone=' + phone, {ConfirmPhoneForm: {phoneCaptcha: phoneCaptcha}}, function (data) {
            if (!data || !data.success) {
                console.log(data);
                if (data.message && data.message.length) {
                    callbackFail(data.message);
                    return;
                }
                callbackFail('Ошибка отправки смс!');
            } else {
                callbackSuccess(data.message);
            }
            console.log(data);
        }, 'json');
    }

    function hintPhoneShow() {
        window.setTimeout(function () {
          //  $('#hint-sended-phone-code').show();
            $('#hint-phone').show();
        }, 5000);
    }

    function confirmPhone() {
        var phone = $('#registrationform-phone').val();
        console.log('phone');
        console.log(phone);
        var phoneCaptcha = '';
        getConfirmPhone(phone, phoneCaptcha, function(message) {
            // код отправлен
            $('#phoneId > .help-block-error').html('');
            $('#phoneCodeId > .help-block-error').html('');
            $('#registrationform-phonecode').val('');
            $('#phoneCodeId > .help-block-success').html(message);
            if($("#phoneCodeId").is(":hidden")){
                $("#phoneCodeId").show();
                $("#phoneId").hide();
            }
            hintPhoneShow();
        }, function(message) {
            console.log(message);
            $('#phoneId .confirm-phone-btn').attr('disabled', false);
            $('#phoneId > .help-block-success').html('');
            $('#phoneId > .help-block-error').html(message);
            $('#phoneCodeId > .help-block-error').html(message);
        });
    }

    function getConfirmPhoneCode(phone, code, callbackSuccess, callbackFail) {
        $.post('/confirm/reg-confirm-phone-code?phone=' + phone + '&code=' + code, null, function (data) {
            if (!data || !data.success) {
                if (data.message && data.message.length) {
                    callbackFail(data.message);
                    return;
                }
                callbackFail('Ошибка подтверждения!');
            } else {
                callbackSuccess();
            }
        }, 'json');
    }

    $("#confirm1, #btn-send-replay-code-phone").on("click", function (e) {
        e.preventDefault();
        confirmPhone();
    });

    $("#confirm2").on("click", function (e) {
        e.preventDefault();
        var phone = $('#registrationform-phone').val();
        var code = $('#registrationform-phonecode').val();
        $('#phoneCodeId .confirm-phone-code-btn').attr('disabled', true);
        getConfirmPhoneCode(phone, code, function() {
            // код подтвержден
            $("#phoneCodeId").hide();
            $("#phoneId").show();
            $('#phoneId .confirm-phone-btn').html('Подтвержден').attr('disabled', true);
            $('#phoneId > .help-block-error, #phoneCodeId > .help-block-error').html('');
            $('#registrationform-phonecode').attr('readonly', true);
            $('#registrationform-phone').attr('readonly', true);
            $('#hint-phone').hide();
        }, function(message) {
            $('#phoneCodeId .confirm-phone-code-btn').attr('disabled', false);
            $('#phoneCodeId > .help-block-error').html(message);
        });

    });

    $(document).on('click', '#btn-replace-phone', function (e) {
        e.preventDefault();
        $('#phoneId').show();
        $('#phoneCodeId').hide();
        $('#registrationform-phone').attr('readonly', false);
        $('#phoneId .confirm-phone-btn').html('Подтвердить').attr('disabled', false);
    });
});