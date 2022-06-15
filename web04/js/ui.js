(function(){
	var agent = navigator.userAgent.toLocaleLowerCase();
	var html = document.getElementsByTagName('html')[0];
	var htmlClass = html.getAttribute('class');
	var device, deviceVer, ver = null;
	if(agent.indexOf('mobile') > -1) { //모바일 체크
		ver = 'mobile';
		if(agent.indexOf('iphone') > -1 || agent.indexOf('ipad') > -1) { //ios 체크
			device = agent.substring(agent.indexOf('os') + 3);
			deviceVer = device.substring(0, device.indexOf('like mac os x'));
			osVer = 'ios' + deviceVer;
		}
		if(agent.indexOf('android') > -1) { //안드로이드 체크
			device = agent.substring(agent.indexOf('android') + 8);
			deviceVer = device.substring(0, device.indexOf(';'));
			andVer = deviceVer.replace(/[.]/gi,'_');
			osVer = 'android' + andVer;

			if(agent.indexOf('samsung') > -1) osVer += ' samsung'; //삼성 인터넷브라우져 체크
		}
	} else {
		ver = 'pc';
		if(agent.indexOf('msie') > -1) { //ie10 이하 체크
			device = agent.substring(agent.indexOf('msie') + 4);
			deviceVer = Math.floor(device.substring(0, device.indexOf(';')));
			osVer = 'ie' + deviceVer;
		} else {
			osVer = '';
		};
	}
	if(agent.indexOf('naver') > -1) osVer += ' naver'; //네이버 앱 체크
	if(ver !== null) {
		(htmlClass !== null) ? html.setAttribute('class', htmlClass + ' ' + ver + ' ' + osVer) : html.setAttribute('class', ver + ' ' + osVer); //html 클래스 부여
	}
	fontSize();
})();
$(function(){
	if(getCookie('topBannerChk') != 'done') {
		$('#wrap').addClass('bannerOn');
	}
	$('.tabMenu').each(function(){
		var $this = $(this);
		var txt = $(this).find('li.active').text();
		$this.find('.tabBtn').text(txt);
	});
});

$(window).on({
	'resize' : function() {
		var winW = $(window).width();
		fontSize();
	},
	'scroll' : function(){
		var scrollTop = $(this).scrollTop();
		gnbFixed(scrollTop);
	}
});

function fontSize() {
	var winW = $(window).width();
	if (winW <= 560) {
		var fontSize = winW / 5.76;
		$('html').css('font-size', Math.floor(fontSize*100)/100 + '%');
	} else {
		$('html').css('font-size','100%');
	}
}

function gnbFixed(scroll) {
	var gnbTop = $('#container').offset().top;
	if(scroll > gnbTop) {
		if(!$('body').hasClass('fixedMenu')) {
			$('body').addClass('fixedMenu');
		}
	} else {
		$('body').removeClass('fixedMenu');
	}
}

function deviceChk() {
	var winW = $(window).width();
	var state = '';
	(winW <= 1023) ? state = 'mo': state = 'pc';
	return state;
}

// 쿠키 설정
function setCookie(name, value, expiredays) {
	var today = new Date();
	today.setDate( today.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";"
}

// 쿠키 가져오기
function getCookie(key) {
	var cook = document.cookie + ";";
	var idx = cook.indexOf(key, 0);
	var val = "";

	if(idx != -1) {
		cook = cook.substring(idx, cook.length);
		begin = cook.indexOf("=", 0) + 1;
		end = cook.indexOf(";", begin);
		val = unescape( cook.substring(begin, end) );
	}
	return val;
}

/* url 파라미터 값 확인 함수*/
function getUrlParams() {
	var params = {};
	window.location.search.replace(
		/[?&]+([^=&]+)=([^&]*)/gi,
		function(str, key, value) { params[key] = value;}
	);
	return params;
}
oParams = getUrlParams();

function topBannerClose(name) {
	$('.topBanner').slideUp(200);
	if( $('input[name='+name+']').is(':checked') ) {
		setCookie(name, 'done', 1);
	}
}
function menu() {
	var wrap = $('html, body');
	wrap.toggleClass('menuOn');
}
function subMenu(state, obj) {
	if(deviceChk() === 'pc') {
		var head = $('#header');
		(state === 'open') ? head.addClass('subOpen') : head.removeClass('subOpen');
	} else {
		if(event.type === 'click') {
			event.preventDefault();
		} else {
			return false;
		}
		var menu = $(obj);
		if(menu.parent().hasClass('open')) {
			menu.next().slideUp(300).parent().removeClass('open');
		} else {
			menu.next().slideDown(300).parent().addClass('open')
			.siblings().removeClass('open')
			.find('.subDepth').slideUp(300);
		}
	}
}

function langList(obj) {
	var $this = $(obj);
	$this.toggleClass('open').next().slideToggle(300);
}

var slideObj = {};
function mainSlide() {
	var obj = 'mainSlide';
	if(osVer !== 'ie8') {
		var slide = new Swiper('.' + obj + ' .slide', {
			loop: true,
			speed: 500,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.' + obj + ' .slidePage',
				clickable: true,
				renderBullet: function (index, className) {
					return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
				}
			}
		});
	} else {
		var slide = $('.' + obj + ' .slide ul').bxSlider({
			auto: true,
			speed: 500,
			pause: 3000,
			controls: false,
			pager: true,
			pagerSelector: '.' + obj + ' .slidePage'
		});
	}
	slideObj.mainSlide = slide;
	var slideNum = $('.slideNum .activeNum');
	slideObj.mainSlide.on('slideChange', function(){
		var num = this.realIndex + 1;
		(this.realIndex < 10) ? slideNum.text('0' + num) : slideNum.text(num);
	});
}

function mainSlide2() {
	var obj = 'mainSlide2';
	if(osVer !== 'ie8') {
		var slide = new Swiper('.' + obj + ' .slide', {
			loop: true,
			speed: 500,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.' + obj + ' .slidePage',
				clickable: true,
				renderBullet: function (index, className) {
					return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
				},
			}
		});
	} else {
		var slide = $('.' + obj + ' .slide ul').bxSlider({
			auto: true,
			speed: 500,
			pause: 3000,
			controls: false,
			pager: true,
			pagerSelector: '.' + obj + ' .slidePage'
		});
	}
	slideObj.mainSlide2 = slide;
}

function mainSlide3() {
	var obj = 'mainSlide3';
	if(osVer !== 'ie8') {
		var slide = new Swiper('.' + obj + ' .slide', {
			loop: true,
			speed: 500,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.' + obj + ' .slidePage',
				clickable: true,
				renderBullet: function (index, className) {
					return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
				},
			}
		});
	} else {
		var slide = $('.' + obj + ' .slide ul').bxSlider({
			auto: true,
			speed: 500,
			pause: 3000,
			prevText: '이전',
			prevSelector : '.' + obj + ' .slidePrev',
			nextText: '다음',
			nextSelector : '.' + obj + ' .slideNext',
			pager: true,
			pagerSelector: '.' + obj + ' .slidePage'
		});
	}
	slideObj.mainSlide3 = slide;
}

function mainSlide4() {
	var obj = 'mainSlide4';
	if(osVer !== 'ie8') {
		var slide = new Swiper('.' + obj + ' .slide', {
			loop: true,
			speed: 500,
			navigation: {
				nextEl: '.' + obj + ' .slideNext',
				prevEl: '.' + obj + ' .slidePrev',
			},
			pagination: {
				el: '.' + obj + ' .slidePage',
				clickable: true,
				renderBullet: function (index, className) {
					return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
				},
			}
		});
	} else {
		var slide = $('.' + obj + ' .slide ul').bxSlider({
			auto: false,
			speed: 500,
			pause: 3000,
			prevText: '이전',
			prevSelector : '.' + obj + ' .slidePrev',
			nextText: '다음',
			nextSelector : '.' + obj + ' .slideNext',
			pager: true,
			pagerSelector: '.' + obj + ' .slidePage'
		});
	}
	slideObj.mainSlide4 = slide;
}

function rollingSlide(obj) {
	var slideWrap = $(obj);
	var slideCont = slideWrap.find('.slideList');
	var slideItem = slideCont.find('li');
	var leftBtn = slideWrap.find('.btnPrev');
	var rightBtn = slideWrap.find('.btnNext');
	var direction = 'left';
	var position = 0;
	var slideContWidth = 0;

	setTimeout(function(){
		slideItem.each(function(){
			slideContWidth += $(this).outerWidth();
		});
		slideCont.append(slideCont.html());
		slideWrap.action();
	},300);
	
	leftBtn.click(function(){
		clearInterval(timer);
		direction = 'left';
		slideWrap.action();
	})
	rightBtn.click(function(){
		clearInterval(timer);
		direction = 'right';
		slideWrap.action();
	})

	var timer;
	slideWrap.action = function(){
		timer = setInterval(function(){
			if (direction == 'left') {
				position--;
				if (position == '-' + slideContWidth) {
					position = 0;
				}
			}
			if (direction == 'right') {
				position++;
				if (position == 0) {
					position = '-' + slideContWidth;
				}
			}
			slideCont.css('left', position);
		},20);
	}
	slideCont.on('mouseenter focus', 'a', function(){
		clearInterval(timer);
	});
	slideCont.on('mouseleave focusout', 'a', function(){
		slideWrap.action();
	});
}

function layerOpen(ele) {
	var layer = $('#'+ele);
	layer.show();
}
function layerClose(ele) {
	var layer = $('#'+ele);
	layer.hide();
}
function layerFind(ele) {
	layerClose('loginLayer');
	layerOpen(ele);
}

function tabOpen(obj) {
	var $this = $(obj);
	$this.toggleClass('open').next().slideToggle(200);
}
function tabActive(obj, idx, type) {
	if(typeof obj !== 'string') {
		var $this = $(obj);
		var idx = $this.parent().index();
		var txt = $this.text();
		var tabContents = $this.closest('.tabMenu').next('.tabContents');

		if(type === true && !$this.parent().hasClass('active')) event.preventDefault();

		$this.parent().addClass('active').siblings().removeClass('active');
		
		if($this.closest('.tabMenu').find('.tabBtn').is(':visible')) {
			$this.parent().parent().slideUp(200).closest('.tabMenu').find('.tabBtn').text(txt);
		}
	} else {
		var tab = $('#' + obj);
		var menu = tab.find('li');
		var tabContents = tab.next('.tabContents');
		
		idx = idx - 1;

		menu.eq(idx).addClass('active').siblings().removeClass('active');
	}
	tabContents.find('.tabCont').eq(idx).addClass('active').siblings().removeClass('active');
}

function accoActive(obj, idx) {
	if(typeof obj !== 'string') {
		var $this = $(obj);
		var cont = $this.closest('.accordianCont').find('.cont');

		if($this.parent().hasClass('active')) {
			cont.slideUp(300);
			$this.parent().removeClass('active');
		} else {
			cont.slideUp(300);
			$this.parent().addClass('active').find('.cont').slideDown(300);
			$this.parent().siblings().removeClass('active');
		}
	} else {
		var acco = $(obj);
		acco.find('li').eq(idx).addClass('active').find('.cont').show();
	}
}

function fileUpload(obj) {
	var $this = $(obj);
	var thisFile = $this[0].files;
	var thisVal = $this.val();
	var txtVal = $this.parent().prev('.inputTxt');
	
	(thisVal.length > 0 || thisFile.length > 0) ? txtVal.removeClass('error').addClass('active').val(thisVal) : txtVal.removeClass('active').val(thisVal);
}

function docTop() {
	$('html, body').animate({scrollTop: 0},300);
}

function layerAgree(obj) {
	$.ajax({
		url: '/member/' + obj + '.html',
		dataType: 'html',
		success: function(data){
			$('body').append(data);
			$('.layerAgree').show().focus();
		}
	});
	event.preventDefault();
}
function agreeClose(obj) {
	var $this = $(obj);
	$this.closest('.layerAgree').remove();
}

function rollingList(obj) {
	var list = $(obj);
	if (list.length) {
		var rollingList = list.find('ul'),
			listLength = rollingList.find('li').length,
			rollHeight = list.height(),
			idx = 0,num = 0;
		rollingList.find('li:first-child').clone().appendTo(rollingList);
		function rolling(idx) {
			rollHeight = list.height();
			num = idx * rollHeight;
			rollingList.animate({'margin-top':'-' + num + 'px'},500);
		}
		function rollTimer() {
			rollTime = setInterval(function(){
				if(idx === listLength) {
					idx = 1;
					rollingList.css({'margin-top':0});
					clearInterval(rollTime);
					rollTimer();
					rolling(idx);
				} else {
					idx++;
					rolling(idx);
				}
			}, 5000);
		}
		rollTimer();
	}
}

var floor = '', floorThumb = '';
function floorSlide() {
	var obj = '.active .floorSlide';
	var slide = $(obj + ' .swiper-wrapper');
	var thumb = $(obj + 'Thumb .swiper-wrapper');

	thumb.html(slide.html());

	if(osVer !== 'ie8') {
		floorThumb = new Swiper(obj + 'Thumb', {
			loop: false,
			spaceBetween: 0,
			slidesPerView: 'auto',
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		floor = new Swiper(obj, {
			loop: false,
			speed: 500,
			navigation: {
				nextEl: obj + ' .slideNext',
				prevEl: obj + ' .slidePrev',
			},
			thumbs: {
				swiper: floorThumb,
			},
		});
	} else {
		floor = $(obj + ' ul').bxSlider({
			auto: false,
			speed: 500,
			pause: 3000,
			controls: false,
			pager: true,
			pagerSelector: obj + ' .slidePage'
		});
	}
}

function floorShow(idx) {
	var floorShow = $('.floorShowWrap .slideWrap');
	var floorInfo = $('.floorInfoSection li');

	if(osVer !== 'ie8') {
		floor.destroy(true, true);
		floorThumb.destroy(true, true);
	} else {
		floor.destroySlider();
	}
	floorInfo.eq(idx - 1).addClass('active').siblings().removeClass('active');
	floorShow.eq(idx - 1).addClass('active').siblings().removeClass('active');

	floorSlide();
	$('html, body').animate({scrollTop: $('.pageTitle').offset().top},300);
}

function floorSlide2() {
	var obj = 'floorSlide';
	if(osVer !== 'ie8') {
		var slide = new Swiper('.' + obj, {
			loop: true,
			speed: 500,
			navigation: {
				nextEl: '.' + obj + ' .slideNext',
				prevEl: '.' + obj + ' .slidePrev',
			}
		});
	} else {
		var slide = $('.' + obj + ' ul').bxSlider({
			auto: false,
			speed: 500,
			pause: 3000,
			prevText: '이전',
			prevSelector : '.' + obj + ' .slidePrev',
			nextText: '다음',
			nextSelector : '.' + obj + ' .slideNext',
			pager: true,
			pagerSelector: '.' + obj + ' .slidePage'
		});
	}
	slideObj.floorSlide = slide;
}

function vodActive(obj, key) {
	var $this = $(obj);
	var youtube = $this.closest('.tabMenu').next('.movWrap').find('iframe');
	var youtubeSrc = 'https://www.youtube.com/embed/' + key;
	if(key === 'ready') {
		youtube.parent().addClass('ready');
	} else {
		youtube.attr('src', youtubeSrc).parent().removeClass('ready');
	}
}



function onlinePopup(){
	var target = $(this),
		popupWrap = $('.onlinePopupWrap');
	if ( popupWrap.hasClass('on') ){
		popupWrap.removeClass('on');
	}else{
		popupWrap.addClass('on');
	}
}