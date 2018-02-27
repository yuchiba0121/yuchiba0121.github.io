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

        $('.bg_red').css('transform', 'translateY('+ scrollNum * -0.09 + 'px )');

        // $('.bg_blue').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

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

        $('.aoiroakairoPic').css('transform', 'translateY('+ scrollNum * -0.25 + 'px )');

        $('.taiyouPic').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        // $('.p5').css('transform', 'translateX('+ scrollNum * +0.2 + 'px )');

        $('.p6').addClass('fade-in').css('transform', 'translateY('+ scrollNum * -0.25 + 'px )');

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

//     $('.umiear').on('inview', function() {
//         // 要素がウィンドウの表示領域に現れたときに実行する処理
//         $('.umiear').addClass('fade-in');
// });
//
//     $('.umiear2').on('inview', function() {
//         // 要素がウィンドウの表示領域に現れたときに実行する処理
//         $('.umiear2').addClass('fade-in');
// });

    $('#u1').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.umiear').addClass('fade-in').addClass('fade-in-delay8');
        $('.umiear2').addClass('fade-in').addClass('fade-in-delay4');
    });

    $('#a1').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.aoiroakairoPic').addClass('fade-in').addClass('fade-in-delay2');
        $('.taiyouPic').addClass('fade-in').addClass('fade-in-delay4');
});


// PAGETOPに戻る
    $('.pagetop a').click(function(){
        $('body,html').animate({
        scrollTop: 0},1000);
        return false;
});

});




// LOADER

var imgPath = 'image/';

// 画像を保存する配列
var manifest = [
    {src: imgPath + 'logo_furiya.svg'},
    {src: imgPath + 'bg_blue.png'},
    {src: imgPath + 'red.png'},
    {src: 'image2/hamanasan.png'},
    {src: imgPath + 'allow.png'},
    {src: imgPath + 'UMINOTAKARAMONO_R.png'},
    {src: imgPath + 'UMINOTAKARAMONO_L.png'},
    {src: 'image2/aoaka.png'},
    {src: 'image2/taiyou.png'},
    {src: imgPath + 'facebook.png'},
    {src: imgPath + 'twitter.png'},
    {src: imgPath + 'instagram.png'},
];

$(function(){

    var windowWidth;
    var windowHeight;

    var wLoader = $('.wrap-loader');


    // loadQueueクラス
    var loadQueue = new createjs.LoadQueue();

    // 同時に何ファイル読み込むか
    loadQueue.setMaxConnections(12);

    // 読み込み開始
    loadQueue.loadManifest(manifest);

    // 読み込み状況
    loadQueue.addEventListener('progress',function(evt){
        console.log(evt.progress);
    });

    // 使わないかも

    // ひとつ読み込み終わったら
    loadQueue.addEventListener("fileload", function(evt){
        // console.log(evt.result);
    });

    // 使う

    // 全部読み込み終わったら
    loadQueue.addEventListener("complete", function(evt){
        console.log('読み込み完了');
        startScene();
    });



    function startScene(){
        wLoader.addClass('fade-out');
        setTimeout(function(){
        wLoader.remove();
       },1000);
        $('#displayNone').css('display','block');

// TOP
        $('h1').addClass('fade-in').addClass('fade-in-delay25');
        $('header h2').addClass('fade-in').addClass('fade-in-delay25');
        $('.shape1').addClass('fade-in').addClass('fade-in-delay30');
        $('.bg_blue').addClass('fade-in').addClass('fade-in-delay10');
        $('.bg_red').addClass('fade-in').addClass('fade-in-delay15');
        $('.chakuyou').addClass('fade-in').addClass('fade-in-delay20');
        $('.p1').addClass('fade-in').addClass('fade-in-delay30');
        $('.p2').addClass('fade-in').addClass('fade-in-delay32');
        $('.arrow1').addClass('fade-in').addClass('fade-in-delay30');
        $('.p2Rotate').addClass('fade-in').addClass('fade-in-delay30');
    }



});
