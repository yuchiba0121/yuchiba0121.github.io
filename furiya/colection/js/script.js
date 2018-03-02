$(function() {

    //スクロールイベント
    $(window).scroll(function(){

        // スクロール値を保存
        var scrollNum = $(this).scrollTop();
        console.log(scrollNum);

        // UMINOTAKARAMONO
        $('.umi1').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.umi2').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('.umino').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('#bg1').css('transform', 'translateY('+ scrollNum * -1.0 + 'px )');

        // OUTOTU
        $('.outotu1').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.outotu2').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('.o').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('#bg2').css('transform', 'translateY('+ scrollNum * -1.0 + 'px )');

        // TAIYOU
        $('.taiyou1').css('transform', 'translateY('+ scrollNum * -0.1 + 'px )');

        $('.ty').css('transform', 'translateY('+ scrollNum * -0.1 + 'px )');

        $('#bg3').css('transform', 'translateY('+ scrollNum * -1.0 + 'px )');

        //AOIROAKAIRO
        $('.aoaka1').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('.aoaka2').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.aoaka').css('transform', 'translateY('+ scrollNum * -0.3 + 'px )');

        $('#bg4').css('transform', 'translateY('+ scrollNum * -1.0 + 'px )');

        // MIZUSHIBUKI
        $('.mizushibuki1').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('.msbk').css('transform', 'translateY('+ scrollNum * -0.2 + 'px )');

        $('#bg5').css('transform', 'translateY('+ scrollNum * -1.0 + 'px )');




    // PAGETOP

        if(scrollNum > 860){
            $('.pagetop').addClass('in');
        } else {
            $('.pagetop').removeClass('in');
        }
    });


    // 写真・コピー出てくるタイミングをこちらで。
    $('#umi_zinwari').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.chaku_umi').addClass('fade-in').addClass('fade-in-delay2');
        $('.umi h1').addClass('fade-in').addClass('fade-in-delay8');
        $('.umi h2').addClass('fade-in').addClass('fade-in-delay12');
        $('.sentens').addClass('fade-in').addClass('fade-in-delay12');
        $('.umi1').addClass('fade-in').addClass('fade-in-delay2');
        $('.umi2').addClass('fade-in').addClass('fade-in-delay2');
        $('.umino').addClass('fade-in').addClass('fade-in-delay2');
        });

    $('#bg1').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.square1').addClass('fade-in1').addClass('fade-in-delay1');
        });

    ////////////////////
    $('#outotu_zinwari').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.chaku_outotu').addClass('fade-in').addClass('fade-in-delay2');
        $('.svg2').addClass('fade-in').addClass('fade-in-delay8');
        $('.outotu h2').addClass('fade-in').addClass('fade-in-delay12');
        $('.sentens2').addClass('fade-in').addClass('fade-in-delay12');
        });

    $('#bg2').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.square2').addClass('fade-in1').addClass('fade-in-delay1');
        });

    ////////////////////
    $('#taiyou_zinwari').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.chaku_taiyou').addClass('fade-in').addClass('fade-in-delay2');
        $('.taiyou h1').addClass('fade-in').addClass('fade-in-delay8');
        $('.taiyou h2').addClass('fade-in').addClass('fade-in-delay12');
        $('.sentens3').addClass('fade-in').addClass('fade-in-delay12');
        });

    $('#bg3').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.square3').addClass('fade-in1').addClass('fade-in-delay1');
        });

    ////////////////////
    $('#aoiroakairo_zinwari').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.chaku_aoaka').addClass('fade-in').addClass('fade-in-delay2');
        $('.aoiroakairo h1').addClass('fade-in').addClass('fade-in-delay8');
        $('.aoiroakairo h2').addClass('fade-in').addClass('fade-in-delay12');
        $('.sentens4').addClass('fade-in').addClass('fade-in-delay12');
        });

    $('#bg4').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.square4').addClass('fade-in1').addClass('fade-in-delay1');
        });

    ////////////////////
    $('#mizushibuki_zinwari').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.chaku_mizushibuki').addClass('fade-in').addClass('fade-in-delay2');
        $('.mizushibuki h1').addClass('fade-in').addClass('fade-in-delay8');
        $('.mizushibuki h2').addClass('fade-in').addClass('fade-in-delay12');
        $('.sentens5').addClass('fade-in').addClass('fade-in-delay12');
        });

    $('#bg5').on('inview', function() {
        // 要素がウィンドウの表示領域に現れたときに実行する処理
        $('.square5').addClass('fade-in1').addClass('fade-in-delay1');
        });

        // PAGETOPに戻る
            $('.pagetop a').click(function(){
                $('body,html').animate({
                scrollTop: 0},1000);
                return false;
        });

        });
