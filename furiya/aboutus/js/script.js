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



    // 写真・コピー出てくるタイミングをこちらで。
    $('.top').on('inview', function() {
        $('h1').addClass('fade-in').addClass('fade-in-delay25');
        $('.shape1').addClass('fade-in').addClass('fade-in-delay25');
        $('.sentens1').addClass('fade-in').addClass('fade-in-delay30');
        $('.sentens2').addClass('fade-in').addClass('fade-in-delay30');
        $('.sentens3').addClass('fade-in').addClass('fade-in-delay35');
        $('.topPic').addClass('fade-in').addClass('fade-in-delay20');
    })
});
