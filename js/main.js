// トップページ移動ボタン
$(function() {
  var topBtn = $('#page-top');    
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});

// ページ内移動処理
$(".goSection").on("click", function() {

  // クリックされた要素のhref属性の値を取得 例：#first
  const scrollTarget = $(this)[0].attributes[1].nodeValue;

  // 取得した値のid属性がついた要素の位置を取得
  const offsetTop = $(scrollTarget).offset().top;

  // 取得した箇所に移動
  $("html, body").animate({ scrollTop: offsetTop }, 200);

  return false;
});

// スクロールすると浮き上がる動的処理
$(window).scroll(function() {
  $('.fade-in').each(function() {
    var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height(),
        startPosition = 420;
      if (scroll > elemPos - windowHeight + startPosition) {
        $(this).addClass('scroll-in')
      }
  })
})

// スクロールすると浮き上がる動的処理
$(window).scroll(function() {
  $('.fade-side-in').each(function() {
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height(),
    startPosition = 640;
    if (scroll > elemPos - windowHeight + startPosition) {
      $(this).addClass('scroll-side-in')
    }
  })
})
var ad = true 
// スクロールすると浮き上がる動的処理
$(window).scroll(function() {
  $('.fade-side-in').each(function() {
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height(),
    startPosition = 800;
    if (scroll > elemPos - windowHeight + startPosition) {
      $(this).addClass('scroll-in')
      return skillMater();
    }
  })
})

// When the DOM is loaded and ready, let's do some shit!
var skillMater = function(){ $(document).ready(function() {
  function skillSet() {
    // Iterate over each element w/ a class of
    // bar-info, storing the value of data-total
    // in a variable.  Using jQuery's CSS method,
    // dynamically update the width of each bar.
    $('.bar-info').each(function() {
      total = $(this).data("total");
      $(this).css("width", total + "%");
    });
    
    // Iterate over each element w/ the class percent.  Using
    // jQuery's $(this) will allow us to interact w/ each specific
    // object in the loop.  Then use jQuery's super awesome animate method
    // to implement a counter on each .percent element, which will "count"
    // up incrementally until it reaches the number inside the percent span,
    // aka it's "ceiling".
    $('.percent').each(function() {
      var $this = $(this);
      $({
        Counter: 10
      }).animate({
        Counter: $this.text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter) + "%");
        }
      });
    });
  };
  // Invoke our skillSet function inside a setTimeout, 
  // to create a short delay before the animation begins.
  setTimeout(skillSet, 1000);
}); 
}

    
$('#box').animate({fontSize: 80},3000,'swing');

// 上記モーダル
$(function(){
  $('.same-js-modal-open').on('click',function(){
    $('.same-js-modal').fadeIn();
    return false;
  });
  $('.same-js-modal-close').on('click',function(){
      $('.same-js-modal').fadeOut();
      return false;
    });
  });
  
  $(function(){
    $('.same-js-modal-open').on('click',function(){
      $('.same-js-modal').fadeIn();
      return false;
    });
    $('.same-js-modal-close').on('click',function(){
      $('.same-js-modal').fadeOut();
      return false;
    });
});
// 下記モーダル
$(function(){
  $('.js-modal-open').on('click',function(){
    $('.js-modal').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
    });
  });
  
  $(function(){
    $('.js-same-modal-open').on('click',function(){
      $('.js-same-modal').fadeIn();
      return false;
    });
    $('.js-same-modal-close').on('click',function(){
      $('.js-same-modal').fadeOut();
      return false;
    });
});

$(function(){

  $("p").children().addBack().contents().each(function(){
    if (this.nodeType == 3) {
      var $this = $(this);
      $this.replaceWith($this.text().replace(/(\S)/g, "<span>$&</span>"));
    }
  });

  var delaySpeed = 1000; // 1秒ずつ遅らせる
  var fadeSpeed = 2000; // 1秒かける

  $(window).on('load', function() {

    $('.p').each(function(i){
      $(this).delay(i*(delaySpeed)).animate({
        'opacity' : '1'
      },fadeSpeed);
      $('.p').animate({
        marginTop:'80px',//margin-leftをキャメルケースで書く
        fontSize: '50px'
      });
      $('#p2').animate({
        marginTop:'160px'//margin-leftをキャメルケースで書く
      });
      $('#p3').animate({
        marginTop:'240px'//margin-leftをキャメルケースで書く
      });
    });


  });
});