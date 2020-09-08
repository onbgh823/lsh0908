(function(){

    $('.skillContainer').hide()
    function openNav(){
        $('#header').toggleClass('on')
        if ( $('#header').hasClass('on') ) {
            $('.nav').css({display:'block'}).animate({right:'0px'})
        }
    }

})(jQuery)