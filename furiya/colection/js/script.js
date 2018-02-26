$(function() {

    //スクロールイベント
    $(window).scroll(function(){

    // スクロール値を保存
    var scrollNum = $(this).scrollTop();
    console.log(scrollNum);
        {
        // UMINOTAKARAMONO
        $('.umi1 img').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.umi2 img').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('.unt').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        // OUTOTU
        $('.outotu1 img').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        }

    });

});
