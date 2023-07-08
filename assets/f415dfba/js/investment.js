$(document).ready(function () {
    let wizard = $('.wizard');
    if (wizard.length !== 0) {
        let liActive = wizard.find('li.current');
        let position = liActive.position();
        let scroll = position.left - (($(window).width() - liActive.width()) / 2) + 40;

        if (scroll > 0) {
            wizard.scrollLeft(scroll);
        }
    }
});