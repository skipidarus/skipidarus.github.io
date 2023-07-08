$(document).ready(function () {
    $(document).on("input", "#creditform-amount", function () {
        $(this).trigger('change');
    });

    $(document).on('click', '.credit-select-all', function () {
        $("#creditform-amount").val($('#credit-left-amount').val()).trigger('change');
    });

    $(document).on('change', '#credit-is-recurrent', function () {
        $.post('/cabinet/credit/toggle-is-recurrent?id=' + $(this).data('id'));
    });
});