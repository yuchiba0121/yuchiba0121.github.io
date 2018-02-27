;


var imgPath = 'img/';

// 画像を保存する配列
var manifest = [
    {src: imgPath + 'book_cover@2x.png'},
    {src: imgPath + 'book_illust01@2x.png'},
    {src: imgPath + 'header_illust@2x.png'},
    {src: imgPath + 'header_illust02@2x.png'},
    {src: imgPath + 'header_photo@2x.png'},
    {src: imgPath + 'header_title@2x.png'},
    {src: imgPath + 'illust01@2x.png'},
    {src: imgPath + 'illust02@2x.png'},
    {src: imgPath + 'illust03@2x.png'},
    {src: imgPath + 'illust04@2x.png'},
    {src: imgPath + 'illust05@2x.png'},
    {src: imgPath + 'illust06@2x.png'},
    {src: imgPath + 'illust07@2x.png'},
    {src: imgPath + 'illust08@2x.png'},
    {src: imgPath + 'illust09@2x.png'},
    {src: imgPath + 'illust11@2x.png'},
    {src: imgPath + 'method01.jpg'},
    {src: imgPath + 'method02-2.jpg'},
    {src: imgPath + 'method02.jpg'},
    {src: imgPath + 'method03.jpg'},
    {src: imgPath + 'method04.jpg'},
    {src: imgPath + 'method05.jpg'},
    {src: imgPath + 'method06.jpg'},
    {src: imgPath + 'method07.jpg'},
    {src: imgPath + 'p6-7.jpg'},
    {src: imgPath + 'p28-29.jpg'},
    {src: imgPath + 'p30-31.jpg'},
    {src: imgPath + 'p76-77.jpg'},
    {src: imgPath + 'profile_photo@2x.png'},
    {src: imgPath + 'profile_photo2@2x.jpg'}
];

$(function(){

    var windowWidth;
    var windowHeight;

    var wLoader = $('.wrap-loader');


    // loadQueueクラス
    var loadQueue = new createjs.LoadQueue();

    // 同時に何ファイル読み込むか
    loadQueue.setMaxConnections(6);

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

    // 全部読み込み終わったら
    loadQueue.addEventListener("complete", function(evt){
        console.log('読み込み完了');
        startScene();
    });



    function startScene(){
        wLoader.addClass('fade-out');
        $('.container').css('display','block').addClass('fade-in');
    }



});
