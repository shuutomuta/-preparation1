$('.slide').slick({
	autoplay: true,
	infinite: true,
  dots: true,
  fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	responsive: [{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}]
});

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});

$(window).scroll(function (){
  $('.fadein').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
          }
  });
});


$(function() {
  var $topBtn = $('.back-to-top');
  $('.back-to-top').hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          $topBtn.fadeIn();
      } else {
          $topBtn.fadeOut();
      }
  });
    $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var $target = $(href == "#" || href == "" ? 'html' : href);
      var position = $target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
});


$(function () {
  const ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
    var navPos = jQuery( '#nav' ).offset().top; // グローバルメニューの位置
    var navHeight = jQuery( '#nav' ).outerHeight(); // グローバルメニューの高さ
    jQuery( window ).on( 'scroll', function() {
      if ( jQuery( this ).scrollTop() > navPos ) {
        jQuery( 'body' ).css( 'padding-top', navHeight );
        jQuery( '#nav' ).addClass( 'nav__fixed' );
      } else {
        jQuery( 'body' ).css( 'padding-top', 0 );
        jQuery( '#nav' ).removeClass( 'nav__fixed' );
      }
    });
  } else {
    var navPos = jQuery( '#nav' ).offset().top; // グローバルメニューの位置
    var navHeight = jQuery( '#nav' ).outerHeight(); // グローバルメニューの高さ
    jQuery( window ).on( 'scroll', function() {
      if ( jQuery( this ).scrollTop() > navPos ) {
        jQuery( 'body' ).css( 'padding-top', navHeight );
        jQuery( '#nav' ).addClass( 'nav__fixed' );
      } else {
        jQuery( 'body' ).css( 'padding-top', 0 );
        jQuery( '#nav' ).removeClass( 'nav__fixed' );
      }
    });
  }
})



$(function(){
  //ローディングエリアを取得
  var loading = $("#loading");
  //ローディングエリアを隠す処理
  var isHidden = function(){
    loading.fadeOut(1000); //1000ミリ秒かけてフェードアウト
  };
  //1000ミリ秒後にloadingFunc開始
  setTimeout(isHidden,1000);
});


var timeoutId;
var revealElems = document.querySelectorAll('.revealItem');

window.addEventListener("scroll", function () {
	if(timeoutId) return;

	timeoutId = this.setTimeout( function() {
		timeoutId = 0;

		for (const revealElem of revealElems)  {
			const heightOfRevealElem = revealElem.clientHeight;
			const revealPoint = (window.scrollY + window.innerHeight) - heightOfRevealElem / 2;
			const halfShown = revealPoint > revealElem.offsetTop;
			if (halfShown) {
				if (!revealElem.classList.contains('revealActive')) {
					revealElem.className += ' revealActive';
				}
			}
		};

	}, 300);
});