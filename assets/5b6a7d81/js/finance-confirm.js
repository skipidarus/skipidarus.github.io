$(document).ready(function () {

    _startTimer();
    $('form.use-confirm-code').on('beforeSubmit', function (event) {
        if ($('.confirm-code-block input').val()) {
            return true;
        }

        _getConfirmCode();

        return false;
    });

    $(document).on('click', '.resend-confirm-code', function () {
        _getConfirmCode();
    });

    function _getConfirmCode() {
        preLoaderShow();
        $.post('/finance-confirm/generate-confirm-code', {form: $('form.use-confirm-code').attr('id')}, function (answer) {
            $('.confirm-code-block').html(answer);
            _appendFormInput(answer);
            _startTimer();

            preLoaderHide();
        }, 'html');
    }

    function _appendFormInput(answer) {
        $.each($(answer).find('input'), function (k, v) {
            let input = $(this);
            let id = input.attr('id');
            if (!id) {
                return;
            }

            jQuery('form').yiiActiveForm("add", {
                "id": id,
                "name": input.attr('name'),
                "container": '.field-' + id,
                "input": '#' + id,
                "enableAjaxValidation": true,
                "validateOnBlur": false,
                "validateOnChange": false
            });
        });
    }

    let intervalId = false;

    function _startTimer() {
        if ($('.confirm-finance-timer').length == 0) {
            return;
        }

        setTimeout(function () {
            let timer = $('.confirm-finance-timer').val();

            if (timer <= 0) {
                $('.timer-block').hide();
                $('.get-new-code').show();

            } else {
                if (intervalId) {
                    clearInterval(intervalId);
                }

                intervalId = setInterval(function () {
                    timer--;
                    if (timer <= 0) {
                        $('.timer-block').hide();
                        $('.get-new-code').show();

                        return false;
                    }

                    $('.timer').text(timer);
                }, 1000);
            }
        }, 1000);
    }
});