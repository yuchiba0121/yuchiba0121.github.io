$(function() {

    //スクロールイベント
    $(window).scroll(function(){

    // スクロール値を保存
    var scrollNum = $(this).scrollTop();
    console.log(scrollNum);
        {
        // TOP
        $('.top img').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');
        }
    })
});

// // スクロール800pxでロゴを消す
// $(function() {
//
//     //スクロールイベント
//     $(window).scroll(function(){
//
//     // スクロール値を保存
//     var scrollNum = $(this).scrollTop();
//     console.log(scrollNum);
//
//     if(scrollNum > 900){
//             $('.logo_furiya').addClass('in');
//         } else {
//             $('.logo_furiya').removeClass('in');
//         }
//     })
// });
