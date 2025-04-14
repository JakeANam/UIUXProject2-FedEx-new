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
    $('<li>' + $('#replies .repliesList>div>ul>li:last-of-type').html() + '</li>')
        .prependTo('#replies .repliesList>div>ul');
    $('#replies .repliesList>div>ul').css('marginLeft','-50%');

    $('#replies .repliesList>p').click(function(){
        // 다음 표시
        if($(this).text() == '>'){
            //alert($('#replies .repliesList>ul>li:last-of-type').html())
            $('#replies .repliesList>div>ul').animate({'marginLeft':'-100%'} , 1000);
        // 이전 표시    
        } else {
            $('#replies .repliesList>div>ul').animate({'marginLeft':'0'} , 1000, function(){
                $('#replies .repliesList>div>ul>li:last-of-type').remove();
            
             $('<li>' + $('#replies .repliesList>div>ul>li:last-of-type').html() + '</li>')
                .prependTo('#replies .repliesList>div>ul');
                $('#replies .repliesList>div>ul').css('marginLeft','0%');
            });
            
        }
    });
});