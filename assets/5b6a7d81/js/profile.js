$(document).ready(function () {
    $('.ref-collapse').on('hidden.bs.collapse', function (e) {
        if ($(this).is(e.target)) {
            let obj = $(this).closest('.group_row');
            obj.find('.row').first().removeClass('active');
            obj.removeClass('open');
        }

    }).on('show.bs.collapse', function (e) {
        if ($(this).is(e.target)) {
            let obj = $(this).closest('.group_row:not(.open)');
            obj.find('.row').first().addClass('active');
            obj.addClass('open');
        }
    });

    $(document).on('input', '#profileform-phone', function () {
        $('.confirm-phone-btn').data('phone', $(this).val())
    });


    $(document).on('click', '.confirm-phone-btn', function (e) {
        e.preventDefault();
        window.location.href = $(this).attr('href') + '?phone=' + $(this).data('phone');
    });

    let isPreloadConfirm = false;

    $('form#confirm-phone-form').on('beforeSubmit', function (event) {

        if (!isPreloadConfirm) {
            preLoaderShow();

            isPreloadConfirm = true;
            setTimeout(function () {
                $('form#confirm-phone-form').submit();
            }, 2000);

            return false;

        } else {
            return true;
        }
    });

    if ($('.confirm-phone-timer').length !== 0) {
        let timer = $('.confirm-phone-timer').val();

        if (timer <= 0) {
            $('.timer-block').hide();
            $('.get-new-code').show();

        } else {
            setInterval(function () {
                timer--;
                if (timer <= 0) {
                    $('.timer-block').hide();
                    $('.get-new-code').show();

                    return false;
                }

                $('.timer').text(timer);
            }, 1000);
        }
    }

    let activationAfter30 = $('.activationAfter30');
    if (activationAfter30.length !== 0) {
        let timer = $('.activationAfter30 .timer span').html();

        if (timer <= 0) {
            $('.activationAfter30 .timer').hide();
            activationAfter30.prop( "disabled", false );
            activationAfter30.removeClass('disabled');
        } else {
            setInterval(function () {
                timer--;
                if (timer <= 0) {
                    $('.activationAfter30 .timer').hide();
                    activationAfter30.prop( "disabled", false );
                    activationAfter30.removeClass('disabled');
                    return false;
                }

                $('.activationAfter30 .timer span').html(timer);
            }, 1000);
        }
    }
});