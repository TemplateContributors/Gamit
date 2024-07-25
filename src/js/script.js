$(document).ready(function(){

    let flasher = $('#flasher');
    let navigation = $('.navigation');
    let lives = $('#lives');
    let hoverFlasher = 'bg-white';
    let HAMBERGER = $('#HAMBERGER');
    let disappear =  $('#disappear');
    let upCross =  $('#upCross');
    let downCross =  $('#downCross');

    // هاور دایره لایو
    lives.hover(function(){
        if (flasher.hasClass('bg-white')){
            flasher.addClass('bg-[#f00909]').removeClass('bg-white')
        }
        hoverFlasher = 'bg-[#f00909]';
    },function(){
        if (flasher.hasClass('bg-[#f00909]')){
            flasher.addClass('bg-white').removeClass('bg-[#f00909]')
        }
        hoverFlasher = 'bg-white';
    });

    // چشمک زن لایو
    setInterval(() => {
        flasher.toggleClass(`${hoverFlasher} bg-transparent`);
    }, 1000);
    // هاور دایره های نوبار
    navigation.hover(function(){
        $(this).find('.bottom-crcl').toggleClass('bg-white bg-transparent');
    },function(){
        $(this).find('.bottom-crcl').toggleClass('bg-white bg-transparent');
    });
    // منو همبرگری نوبار
    HAMBERGER.click(function(){
        disappear.toggleClass('shift-left shift-rigth');
        upCross.toggleClass('top-[0.5rem] top-0 right-[0.3rem] rotate-45');
        downCross.toggleClass('top-5 top-[0.62rem] rotate-[135deg]');
    });
});