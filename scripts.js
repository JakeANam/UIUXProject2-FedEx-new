// 비즈니스 리소스 초기 설정
let toSlide = decideToSlice($(window).width());
setBusiListWidth(toSlide);

// jQuery 시행
$(function(){
    // 헤더 햄버거 메뉴 표시
    $('header .burgerButton').click(function(){
        $(this).css({'backgroundColor':'var(--orangeF)'});
        if ($('header nav').css('display') == 'none') {
            $(this).css({'backgroundColor':'var(--orangeF)','color':'var(--blackC)'});
        } else {
            $(this).css({'backgroundColor':'var(--blackC)','color':'var(--whitePerfect)'});
        }
        $('header nav').slideToggle();
    });

    // 서브메뉴 표시
    $('nav>ul>li>a').mouseenter(function(){
        $(this).siblings('ul').show();
    });
    $('nav>ul>li').mouseleave(function(){
        $('nav>ul>li>ul').hide();
    });

    // 비즈니스 리소스 셋업
    $(window).resize(function(){
        toSlide = decideToSlice($(window).width());
        setBusiListWidth(toSlide);
    });
    
    // 비즈니스 리소스 왼쪽 이동
    $('#business .businessSlide>p').click(function(){
        // 다음 버튼
        if($(this).text() == '>'){   
            $('#business .businessList').stop().animate({
                'marginLeft': toSlide + '%'
            }, 1000, function(){
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
});

//jQuery 함수
/** 현재 창 너비에 따라 슬라이드 할 길이 결정 */
function decideToSlice(currentWidth) {
    let toSlide = -100;
    if(currentWidth >= 760) {
        toSlide = -50;
    }

    return toSlide;
}

/** 비즈니스 리소스 너비 설정 */
function setBusiListWidth(toSlide) {
    let busiListNum = $('#business .businessList>li').length;
    $('#business .businessList').css('width',(busiListNum * toSlide * -1)+'%');
}
