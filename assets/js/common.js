$(function(){
    //tabs
    $('.tabs').find('a').click(function(){
        var tabID = $(this).attr('href');
        $(this).parent('li').siblings().removeClass('on')
        $(this).parent('li').addClass('on');
        $(this).parents('.tabs').siblings('.tab-contents').removeClass('on')
        $(tabID).addClass('on');
    })

})
