// 메인페이지 초기 설정
let toSlide = decideToSlice($(window).outerWidth()); // 표시할 배너 슬라이스 개수 결정
setBusiListWidth(toSlide); // 배너 슬라이드의 너비 결정

let originalWidth = $(window).outerWidth(); // 처음 접속 시 화면 너비

// jQuery 시행
$(function() {
    // 헤더 햄버거 메뉴 표시
    $('header .burgerButton').click(function() {
        $(this).css({'backgroundColor':'var(--orangeF)'});
        if ($('header nav').css('display') == 'none') {
            $(this).css({'backgroundColor':'var(--orangeF)','color':'var(--blackC)'});
        } else {
            $(this).css({'backgroundColor':'var(--blackC)','color':'var(--whitePerfect)'});
        }
        $('header nav').slideToggle();
    });

    // 서브메뉴 표시
    $('nav>ul>li>a').mouseenter(function() {
        $(this).siblings('ul').show();
    });
    $('nav>ul>li').mouseleave(function() {
        $('nav>ul>li>ul').hide();
    });

    // 화면 크기가 바뀌면
    $(window).resize(function() {
        // 너비 1000px 이상인데 메인 메뉴 안보이게 했으면 보이게
        if (!$('nav').is(':visible') && $(window).outerWidth() >= 1000) {
            $('nav').css('display', 'block');

        // 1000px 미만인데 메인 메뉴 보이게 했으면 안보이게
        } else if ($('nav').is(':visible') && $(window).outerWidth() < 1000 && originalWidth >= 1000) {
            $('nav').css('display', 'none');
            $('header .burgerButton').css({'backgroundColor':'var(--blackC)','color':'var(--whitePerfect)'});
        }

        // 비즈니스 리소스 셋업
        toSlide = decideToSlice($(window).outerWidth());
        setBusiListWidth(toSlide);

        // 원래 너비 재설정
        originalWidth = $(window).outerWidth();
    });
    
    // 비즈니스 리소스 왼쪽 이동
    $('#business .businessSlide>p').click(function() {
        // 다음 버튼
        if ($(this).text() == '>') {   
            $('#business .businessList').stop().animate({
                'marginLeft': toSlide + '%'
            }, 1000, function() {
                $(this).children(':first').appendTo(this);
                $(this).css('margin','0');
            }); 

        // 이전 버튼
        } else {
            $('#business .businessList').children(':last').prependTo('#business .businessList');
            $('#business .businessList').css('marginLeft', toSlide + '%');
            $('#business .businessList').stop().animate({
                'marginLeft':'0%'
            }, 1000);
        }
    });

    // 메인 화면 화살표 회전
    $('#blog .blogFirst a, #blog .blogList a, #direction .directionList a').hover(function() {
        $(this).children().css({'transform':'rotate(0deg)','transition':'0.5s'});
    }, function() {
        $(this).children().css('transform', 'rotate(-45deg)');
    });

    // 온라인 사기경고 아코디언 메뉴
    $("#blogpage .fraudWarning h2>span:last-child").click(function() {
        if (!$(this).parent().next('p').is(':visible')) {
            $(this).css('transform','rotate(180deg)');
            $(this).parent().next('p').slideDown();
        } else {
            $(this).css('transform','rotate(0deg)');
            $(this).parent().next('p').slideUp();
        }
    });
});

//jQuery 함수
/**
 * @param {Number} currentWidth 현재 화면 너비
 * @returns 화면 너비가 760px 미만이면 슬라이드 할 길이 100%, 760px이상이면 50%
 * @summary 현재 창 너비에 따라 슬라이드 할 길이 결정
 */
function decideToSlice(currentWidth) {
    let toSlide = -100;
    if (currentWidth >= 760) {
        toSlide = -50;
    }
    return toSlide;
}

/**
 * @param {Number} toSlide 슬라이드 할 길이
 * @summary 배너슬라이드 갯수와 슬라이드당 너비에 따라 슬라이드 너비 설정
 */
function setBusiListWidth(toSlide) {
    let busiListNum = $('#business .businessList>li').length;
    $('#business .businessList').css('width',(busiListNum * toSlide * -1)+'%');
}

/**
 * @link "./blogList.html"
 * @summary 기사 목록 이동
 */
function moveArticleList() {
    alert("블로그, 기사 목록 페이지로 이동합니다.");
    location.href="./blogList.html";
}

/**
 * @link "./blogArticle.html"
 * @summary 기사문 이동
 */
function moveThisArticle() {
    alert("제작 중인 기사 하나로 이동합니다.");
    location.href="./blogArticle.html";
}