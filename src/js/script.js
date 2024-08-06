$(document).ready(function(){

    let HAMBERGER = $('#Hamburger');
    let HamburgerMenu = $('#HamburgerMenu');

    // منو همبرگری نوبار
    HAMBERGER.click(function(){
        HamburgerMenu.toggleClass('hidden flex flex-col slide-down');
    });
});
