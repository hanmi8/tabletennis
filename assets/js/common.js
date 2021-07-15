$(function(){
    $('.container').css('height',$(window).height() - $('.appbar').outerHeight(true) - $('.tabbar').outerHeight(true));

    $('.folding').find('button').click(function(){
        $('.folding-contents').slideToggle(200);
        $(this).children('i').toggleClass('fa-chevron-down fa-chevron-up');
    })

    //tabs
    $('.tabs').find('a').click(function(){
        var tabID = $(this).attr('href');
        $(this).parent('li').siblings().removeClass('on')
        $(this).parent('li').addClass('on');
        $(this).parents('.tabs').siblings('.tab-contents').removeClass('on')
        $(tabID).addClass('on');
    })

    // modal open
    $('.modal-call').click(function(){
        var modalID = $(this).attr('data-target');
        $(modalID).show();
    })
    // modal close
    $('.modal-close').click(function(){
        $(this).parents('.modal').hide();
    })

    // button - toggle
    $('.toggle-btn').find('button').click(function(){
        if($(this).hasClass('general')){
            $(this).removeClass('btn-default')
            $(this).addClass('btn-success')
        }else if($(this).hasClass('owner')){
            $(this).removeClass('btn-default')
            $(this).addClass('btn-danger')
        }
        $(this).siblings().removeClass('btn-success');
        $(this).siblings().addClass('btn-default');
        $(this).removeClass('btn-default');
        $(this).addClass('btn-success');

        var buttonID = $(this).attr('data-target')
        $(this).parent().siblings('.tab-contents').removeClass('on')
        $(buttonID).addClass('on')
    })
    // button - check
    $('.check-btn').find('button').click(function() {
        $(this).toggleClass('btn-default btn-success');
    })

})
