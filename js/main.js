// トップページ表示処理
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
        marginTop:'80px',
        fontSize: '50px'
      });
      $('#p2').animate({
        marginTop:'160px'
      });
      $('#p3').animate({
        marginTop:'240px'
      });
    });
  });
});

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
  //スクロールしてトップへ移動
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});


// スクロール処理①
$(function() {
  var aboutBtn = $('#about');    
  aboutBtn.click(function () {
    $('body,html').animate({
      scrollTop: 960
    }, 500);
    return false;
  });
});

// スクロール処理②
$(function() {
  var skillsBtn = $('#skills');    
  skillsBtn.click(function () {
    $('body,html').animate({
      scrollTop: 2150
    }, 500);
    return false;
  });
});

// スクロール処理③
$(function() {
  var portfolioBtn = $('#portfolio');    
  portfolioBtn.click(function () {
    $('body,html').animate({
      scrollTop: 3360
    }, 500);
    return false;
  });
});



// 表示処理①
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

// 表示処理②
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

// 表示処理③
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

// フォントサイズ変更処理
$('#box').animate({fontSize: 80},3000,'swing');

// About部分モーダル
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

// ポートフォリオ部分モーダル処理
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

