(function ($) {
    $.fn.modal.Constructor.prototype.enforceFocus = function () {
    };

    $.fn.hasAttr = function (name) {
        return this.attr(name) !== undefined;
    };
})(jQuery);

function preLoaderShow() {
    $('.page-preloader').fadeIn(200);
}

function preLoaderHide() {
    $('.page-preloader').fadeOut(200);
}

function setNotification(text) {
    let obj = $('.notification-message');

    obj.text(text).fadeIn(200);

    setTimeout(function () {
        obj.text('').fadeOut(300);
    }, 1700);

    return false;
}

$(document).ready(function () {
    var clipboard = new ClipboardJS('.btn-clipboard');

    clipboard.on('success', function (e) {
        setNotification($(e.trigger).data('message'));
    });

    $(function () {
        $("[data-toggle='popover']").popover();
    });

    $('body').on('click', function (e) {
        if ($(e.target).data('toggle') !== 'popover'
            && $(e.target).parents('.popover.in').length === 0
        ) {
            $('[data-toggle="popover"]').popover('hide');
        }
    });

    $('.kv-drp-container').on('cancel.daterangepicker', function () {
        $(this).find('.range-value').text('');
        $(this).find('.daterangepicker').val('').trigger('change');
    });

    $(document).on('click', 'a.share', function (e) {
        e.preventDefault();

        $(this).closest('.modal').find('button.close').trigger('click');

        let url = $(this).attr('href');

        if (browserIsMobile()) {
            document.location.href = url;
        } else {
            window.open(url);
        }
    });


    function toggleHideEmail() {
        $.post('/user/toggle-hide-email');
    }
    $(document).on('click', 'a.btn-eye-mini-info-hide', function (e) {
        e.preventDefault();
        $(this).parent().parent().find('.eye-mini-info-show').hide();
        $(this).parent().parent().find('.eye-mini-info-hide').show();
        toggleHideEmail();
    });
    $(document).on('click', 'a.btn-eye-mini-info-show', function (e) {
        e.preventDefault();
        $(this).parent().parent().find('.eye-mini-info-show').show();
        $(this).parent().parent().find('.eye-mini-info-hide').hide();
        toggleHideEmail();
    });

    let navTab = $('.container-fluid .nav-tabs');
    if (navTab.length !== 0) {
        let liActive = navTab.find('li.active');
        let position = liActive.position();
        let scroll = position.left - (($(window).width() - liActive.width()) / 2);

        if (scroll > 0) {
            navTab.scrollLeft(scroll);
        }
    }

    if ($('#pjax-top-banner').length !== 0) {
        setInterval(function () {
            $.pjax.reload({container: '#pjax-top-banner', async: false});
        }, 60000);
    }

    if ($('#pjax-top-banner-partner').length !== 0) {
        setInterval(function () {
            $.pjax.reload({container: '#pjax-top-banner-partner', async: false});
        }, 60000);
    }

    $(document).on('click', '.pjax-wrapper .pjax-button', function (e) {
        var url = $(this).attr('href');
        var containerId = $(this).closest('.pjax-wrapper').attr('id');
        var confirmMsg = $(this).data('confirm-msg');
        if (confirmMsg) {
            if (!confirm(confirmMsg)) {
                return false;
            }
        }

        $(this).replaceWith('<img src="/images/mini-preloader.gif" height="30"/>');

        var options = {replace: false};
        var reloadUrl = $(this).data('pjax-reload-url');

        if (reloadUrl) {
            options.url = reloadUrl;
        }

        $.post(url, function () {
            $.pjax.reload('#' + containerId, options);
        });

        return false;
    });
});

function browserIsMobile() {
    return /Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent);
}

function iOS() {
    var iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    if (navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()) {
                return true;
            }
        }
    }

    return false;
}

function showNotification(type, heading, text) {
    $.toast({
        heading: heading,
        text: text,
        position: 'top-right',
        loaderBg: '#9abeff',
        icon: type,
        hideAfter: 30000,
        stack: 10
    });
}