// container 높이
function base() {
    $('a').click(function (e) {
        if ($(e.target).attr('href') === '#' || $(e.target).parent().attr('href') === '#') {
            e.preventDefault()
        }
    })
    $('.container').css('height', $(window).height() - $('.appbar').outerHeight(true) - $('.tabbar').outerHeight(true));
}


// 검색창 접기
function folding() {
    $('.folding').find('button').click(function () {
        $('.folding-contents').slideToggle(200);
        $(this).children('i').toggleClass('fa-chevron-down fa-chevron-up');
    })
}

//tabs
function tabs() {
    $('.tabs').find('a').click(function (e) {
        e.preventDefault()
        var tabID = $(this).attr('href');
        $(this).parent('li').siblings().removeClass('on')
        $(this).parent('li').addClass('on');
        $(this).parents('.tabs').siblings('.tab-contents').removeClass('on')
        $(tabID).addClass('on');
    })
}

// reserve-tabs
function reserveTabs() {
    $('.reserve-tabs').find('a').click(function (e) {
        e.preventDefault()
        var tabID = $(this).attr('href');
        $(this).parent('li').siblings().removeClass('on')
        $(this).parent('li').addClass('on');
        $(this).parents('.reserve-tabs').siblings('.reserve-tab-contents').removeClass('on')
        $(tabID).addClass('on');
    })
}

// modal open
function modalCall() {
    $('.modal-call').click(function () {
        var modalID = $(this).attr('data-target');
        $(modalID).show();
    })
}

// modal close
function modalClose() {
    $('.modal-close').click(function () {
        $(this).parents('.modal').hide();
    })
}

function listSelected() {
    $('.list-selected').children('li').click(function () {
        $(this).siblings('li').removeClass('on')
        $(this).addClass('on')
    })
}

function normalBtn() {
    $('.normal-btn').children().click(function () {
        $(this).siblings().removeClass('on')
        $(this).addClass('on')
    })
}

// button - toggle
function buttonToggle() {
    $('.toggle-btn').find('button').click(function () {
        if ($(this).hasClass('general')) {
            $(this).removeClass('btn-default')
            $(this).addClass('btn-success')
        } else if ($(this).hasClass('owner')) {
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
}

// button - check
function buttonCheck() {
    $('.check-btn').find('button').click(function () {
        $(this).toggleClass('btn-default btn-success');
    })
}

// 공지사항 (접기/펼치기)
function bbs() {
    $('.bbs_list').find('a').click(function () {
        $(this).siblings('.bbs_contents').slideToggle(200);
        $(this).children('i.slideToggle').toggleClass('fa-caret-down fa-caret-up')
    })
}

function iChecks() {
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
    });
}

function reserveTime() {
    $('.reserve-time').find('span').click(function (e) {
        if (!$(this).parent('li').hasClass('disabled')) {
            $(this).parent('li').toggleClass('on');
            if (!$(this).parent('li').siblings('li').hasClass('on')) {
                $(this).parent('li').addClass('first')
            } else {
                $(this).parent('li').addClass('last')
            }
        }
    })
}

function badgeReservation() {
    $('.badge-reservation').click(function () {
        if (!$(this).hasClass('disabled')) {
            $(this).toggleClass('on')
        }
    })
}

function possible() {
    $('.badge-wrap').find('em').click(function () {
        $(this).toggleClass('on')
    })
}

function dayOff() {
    $('.day').find('li').click(function () {
        $(this).toggleClass('on')
    })
}


/////// datepicker ////////
function makeCalendar() {
    $('.calendar-wrap').pignoseCalendar({
        format: 'YYYY/MM/DD',
        lang: 'ko',
        // modal: true,
        // buttons: true,
    })
}

function calendarModal() {
    $('.fa-calendar-alt').pignoseCalendar({
        format: 'YYYY/MM/DD',
        lang: 'ko',
        modal: true,
        buttons: true,
    })
}

function calendarModalInput() {
    $('input.calendar-call').pignoseCalendar({
        format: 'YYYY/MM/DD',
        lang: 'ko',
        modal: true,
        buttons: true,
    })
}

// [관장회원] 탁구대관리
function mngtTable() {
    $('.badge-wrap').find('em').click(function () {
        if ($(this).hasClass('waiting')) {
            $(this).toggleClass('waiting reservate')
        } else if ($(this).hasClass('reservate')) {
            $(this).toggleClass('waiting reservate')
        } else if ($(this).hasClass('possible')) {
            $(this).toggleClass('possible impossible')
        } else if ($(this).hasClass('impossible')) {
            $(this).toggleClass('possible impossible')
        }
    })
}



