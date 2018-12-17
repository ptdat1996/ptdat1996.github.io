/*------change header color when scroll----*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".header").addClass("header-scrolled");
    } else {
        $(".header").removeClass("header-scrolled");
    }
});

window.onscroll = function(){
    onScrollWindow();
}

function onScrollWindow(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("back-to-top").style.display = "block";
    }
    else{
        document.getElementById("back-to-top").style.display = "none";
    }
}

$("#back-to-top").click(function(event){
    event.preventDefault();   
    $("body").animate({scrollTop : 0} ,'300');
    console.log('click');
});


/*-------- loading skill when scroll to-----*/
$(function () {
    var position = $(".skills").offset().top;

    $(window).scroll(function () {
        var distance = parseInt(position - $(window).scrollTop());

        if (distance < 100) {
            $('.progress-bar').each(function () {
                $(this).css("width", $(this).data("max") + '%');
            });
        } else {
            return false;
        }
    });
});