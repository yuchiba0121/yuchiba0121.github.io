$(function() {

    //スクロールイベント
    $(window).scroll(function(){

    // スクロール値を保存
    var scrollNum = $(this).scrollTop();
    console.log(scrollNum);
        {
        // TOP
        $('.top img').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.coral').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.sunstone').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.labra').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.turquoise').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');
        }

    })
});
