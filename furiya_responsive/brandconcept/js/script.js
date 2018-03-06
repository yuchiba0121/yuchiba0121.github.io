$(function() {

    //スクロールイベント
    $(window).scroll(function(){

    // スクロール値を保存
    var scrollNum = $(this).scrollTop();
    console.log(scrollNum);
        {
        // TOP
        $('.topPic').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.coral').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.sunstone').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.labra').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.turquoise').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('#bg1').css('transform', 'translateY('+ scrollNum * -1.0 + 'px )');
        }

});

    ////////////////////
    $('#stone_zinwari').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.coral').addClass('fade-in').addClass('fade-in-delay10');
        $('.sunstone').addClass('fade-in').addClass('fade-in-delay14');
        $('.labra').addClass('fade-in').addClass('fade-in-delay18');
        $('.turquoise').addClass('fade-in').addClass('fade-in-delay22');
        });

});
