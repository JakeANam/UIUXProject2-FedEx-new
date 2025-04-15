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
    $('<li>' + $('#replies .replySlide>li:last').html() + '</li>')
        .prependTo('#replies .replySlide');
    $('#replies .replySlide').css('marginLeft','-50%');

    $('#replies .repliesList>p').click(function(){
        // 다음 표시
        if($(this).text() == '>'){
            
            $('#replies .replySlide').animate({'marginLeft':'-100%'} , 1000, function(){
                
                $('#replies .replySlide>li:first').remove();
                $('<li>' + $('#replies .replySlide>li:first').html() + '</li>')
                    .appendTo('#replies .replySlide');
                $('#replies .replySlide').css('marginLeft','-50%');
                
                
                
            });
        // 이전 표시    
        } else {
            $('#replies .replySlide').animate({'marginLeft':'0'} , 1000, function(){
                $('#replies .repliesList>div>ul>li:last-of-type').remove();
                $('<li>' + $('#replies .replySlide>li:last').html() + '</li>')
                    .prependTo('#replies .replySlide');
                $('#replies .replySlide').css('marginLeft','-50%');
            });
            
        }
    });
});