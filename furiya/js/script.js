
$(function() {

    //スクロールイベント
    $(window).scroll(function(){

    // スクロール値を保存
    var scrollNum = $(this).scrollTop();
    console.log(scrollNum);

    // if( scrollNum > 0 && scrollNum <= 550)
    {

        // SPRING&SUMMER
        $('.chakuyou').css('transform', 'translateY('+ scrollNum * -0.4 + 'px )');

        $('h2').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('h1').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.shape1').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.bg_red').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.bg_blue').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        // $('.p2').css('transform', 'translateX('+ scrollNum * +0.1 + 'px )');


    // } else if (scrollNum > 550 && scrollNum <= 1600 ){

        // CONCEPT
        $('.shape2').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.umiear').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('.umiear2').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.p4').css('transform', 'translateX('+ scrollNum * +0.1 + 'px )');


    // } else if (scrollNum > 1600 && scrollNum <= 2800 ){

        // NEWARRIVAL
        $('.shape3').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.aoiroakairoPic').addClass('fade-in').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('.taiyouPic').addClass('fade-in').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        // $('.p5').css('transform', 'translateX('+ scrollNum * +0.2 + 'px )');

        $('.p6').addClass('fade-in').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        // $('.p7').css('transform', 'translateX('+ scrollNum * +0.2 + 'px )');

        $('.p8').addClass('fade-in').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');


        // NEWS
        $('.shape4').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

    }




    if(scrollNum > 860){
            $('.pagetop').addClass('in');
        } else {
            $('.pagetop').removeClass('in');
        }

    });


// 写真・コピー出てくるタイミングをこちらで。

    $('.umiear').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.umiear').addClass('fade-in');
});

    $('.umiear2').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.umiear2').addClass('fade-in');
});

    $('.aoiroakairoPic').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.aoiroakairoPic').addClass('fade-in');
});

    $('.taiyouPic').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.taiyouPic').addClass('fade-in');
});



});
