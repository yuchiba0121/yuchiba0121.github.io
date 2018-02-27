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

        $('.umino').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        // OUTOTU
        $('.outotu1 img').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.outotu2 img').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('.o p').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        // TAIYOU
        $('.taiyou1 img').css('transform', 'translateY('+ scrollNum * -0.1 + 'px )');

        $('.ty p').css('transform', 'translateY('+ scrollNum * -0.1 + 'px )');

        //AOIROAKAIRO
        $('.aoaka1 img').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('.aoaka2 img').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.aoaka p').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        // MIZUSHIBUKI
        $('.mizushibuki1 img').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.msbk p').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');



        }

    });

//     // 写真・コピー出てくるタイミングをこちらで。
//     $('.taiyou1').on('inview', function() {
//         // 要素がウィンドウの表示領域に現れたときに実行する処理
//         $('.taiyou1').addClass('fade-in');
// });

});
