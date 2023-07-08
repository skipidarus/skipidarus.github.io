$(document).ready(function () {
    $(document).on('click', '.show-modal-link', function (e) {
        e.preventDefault();

        openModal(
            $(this).data('target'),
            $(this).data('size'),
            $(this).data('title'),
            $(this).attr('href')
        );

        return false;
    });

    $(document).on('show.bs.modal', '.modal', function () {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function() {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });

    $(".bs-modal-block").on('hidden.bs.modal', function () {
        $(this).find('.modal-header-title').html('');
        $(this).find('.modal-body').html('');

        let obj = $(this).find('.modal-dialog');

        obj.removeClass('modal-sm');
        obj.removeClass('modal-md');
        obj.removeClass('modal-lg');
    });

    $(document).on('hidden.bs.modal', '.modal', function () {
        $('.modal:visible').length && $(document.body).addClass('modal-open');
    });
});

function openModal(modalId, size, title, href) {
    if (!modalId || !$(modalId).length) {
        modalId = '#modal-dialog';
    }

    let modal = $(modalId);
    if (!modal.data('bs.modal').isShown) {

        setTimeout(function () {
            modal.modal('show');
        }, 400);
    }

    let modalBody = modal.find('.modal-body');

    setTimeout(function () {
        modalBody.load(href, function () {
            if (title) {
                title = '<h3>' + (title ? title : "&nbsp;") + '</h3>';
                modal.find('.modal-header .modal-header-title').html(title);
            }

            if (size) {
                modal.find('.modal-dialog').addClass(size);
            }
        });
    }, 500);
}