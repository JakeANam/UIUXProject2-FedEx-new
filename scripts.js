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

    // 댓글 창 이동 초기 설정
    let toSlide = -50;
    $('#replies .replySlide>li:last').clone().prependTo('#replies .replySlide');

    //댓글 창 이동
    $('#replies .repliesList>p').click(function(){
        toSlide = -50;
        if($(window).width() < 760) {
            toSlide *= 2
        }
        // 다음 표시
        if($(this).text() == '>'){
            $('#replies .replySlide').animate({'marginLeft':(toSlide * 2) +'%'} , 1000, function(){
                $('#replies .replySlide>li:first').remove();
                $('#replies .replySlide>li:first').clone().appendTo('#replies .replySlide');
                $('#replies .replySlide').css('marginLeft', + (toSlide) + '%');
            });

        // 이전 표시    
        } else {
            $('#replies .replySlide').animate({'marginLeft':'0'} , 1000, function(){
                $('#replies .replySlide>li:last').remove();
                $('#replies .replySlide>li:last').clone().prependTo('#replies .replySlide');
                $('#replies .replySlide').css('marginLeft', + (toSlide) + '%');
            });
        }        
    });
});
