$(function() {

    //スクロールイベント
    $(window).scroll(function(){

    // スクロール値を保存
    var scrollNum = $(this).scrollTop();
    console.log(scrollNum);
        {
        $('.umi img').css('transform', 'translateY('+ scrollNum * -0.4 + 'px )');
        }

    });

});
