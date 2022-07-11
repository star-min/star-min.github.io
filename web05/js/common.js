// 전메뉴 공통적인 스크립트
// 레이어 관련 스크립트
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}



/*
* 새로운 팝업창을 띄웁니다.
* String url : 팝업문서의 경로 [필수]
* String name : 팝업창의 이름 [default:"nWin"]
* int w : 팝업창의 폭 [default:300]
* int h : 팝업창의 높이 [default:300]
* int x : 팝업창의 좌측 상단의 x좌표 [default:10]
* int y : 팝업창의 좌측 상단의 y좌표 [default:10]
* String s : 팝업창에 스클로바 표시여부('no' : 표시안함, 'yes' : 표시함, [default:"no"])
*/
function popup(url, name, w, h, x, y, s) {
	if(url == null) return;
	_name = arguments[1] != null ? arguments[1] : "nWin";
	_w = arguments[2] != null ? arguments[2] : "300";
	_h = arguments[3] != null ? arguments[3] : "300";
	_x = arguments[4] != null ? arguments[4] : "10";
	_y = arguments[5] != null ? arguments[5] : "10";
	_s = arguments[6] != "yes" ? "no" : "yes";
	var opt = ',menubar=0,status=0,resizable=0,directories=0,toolbar=0,location=0,';
	var p_win = window.open(url, _name, 'width=' + _w + ',height=' + _h + ',left=' + _x + ',top=' + _y + ',scrollbars=' + _s + opt);
	p_win.focus();
	this.name = 'cnedu';
	return p_win;
}

function fullPopup(url, name) {
	var userwidth = (screen.width - 10);
	var userheight = (screen.height - 35);
	window.open(url, name, "scrollbars=no,toolbar=no,location=no,status=no,menubar=no,resizable=yes,width="+userwidth+",height="+userheight+",left=0,top=0");
}


/*
* 화면의 중앙에 팝업창을 띄웁니다.
*
* String url : 팝업문서의 경로 [필수]
* String name : 팝업창의 이름 [default:"nWin"]
* int w : 팝업창의 폭 [default:300]
* int h : 팝업창의 높이 [default:300]
* String s : 팝업창에 스클로바 표시여부('no' : 표시안함, 'yes' : 표시함, [default:"no"])
*/
function popupCenter(url, name, w, h, s) {
	if(url == null) return; 
	_name = arguments[1] != null ? arguments[1] : "nWin";
	_w = arguments[2] != null ? arguments[2] : "300";
	_h = arguments[3] != null ? arguments[3] : "300";
	_x = (screen.width / 2) - (_w / 2);
	_y = (screen.height / 2) - (_h / 2);
	_s = arguments[4] == "yes" ? "yes" : "no";
	var opt = ',menubar=no,status=no,resizable=no,directories=0,toolbar=0,location=0,';
	var p_win = window.open(url, _name,
			'width=' + _w + ',height=' + _h + ',left=' + _x + ',top=' + _y + ',scrollbars=' + _s + opt);
	p_win.focus();
	this.name = 'cnedu';
	return p_win;
}  

/*
* 새로운 윈도우를 띄웁니다.
*/
function openWin(url, name) {
	if(url == null) return;
	_name = arguments[1] != null ? arguments[1] : "nWin";
	var p_win = window.open(url, _name);
	p_win.focus();
	this.name = 'cnedu';
	return p_win;
}


/*

 쿠키의 존재여부에 따라 popup창을 띄웁니다.
 String c_name : 쿠키명
 String url : 팝업문서의 경로
 String name : 팝업창의 이름
 int w : 팝업창을 폭
 int h : 팝업창의 높이
 int x : 팝업창의 좌측 상단의 x좌표
 int y : 팝업창의 좌측 상단의 y표표
 String s : 팝업창에 스클로바 표시여부('no' : 표시안함, 'yes' : 표시함)

 #2003.11.18 silver_star
 String s_date : 시작일시
 String e_date : 종료일시

 시작일시 <= 게시일 < 종료일시
*/
function popupByCookie(c_name, url, name, w, h, x, y, s,s_date,e_date) {
	var cookie = getCookie(c_name);

	if(s_date != null && e_date != null) {
		var day = new Date();
		year = day.getYear();
		month = day.getMonth() + 1;
		date = day.getDate();
		hour = day.getHours();
		if(month < 10) month = "0" + month;
		if(date < 10) date = "0" + date;
		if(hour < 10) hour = "0" + hour;

		var c_date = year + "" + month + "" + date + "" + hour;

		c_date = parseInt(c_date);
		s_date = parseInt(s_date);
		e_date = parseInt(e_date);

		if((c_date >= s_date) && (c_date < e_date)) {
			if(!cookie) popup(url, name, w, h, x, y, s);
		}
	} else {
		if(!cookie) popup(url, name, w, h, x, y, s);
	}
}

/*
 쿠키 생성 함수
 String name : 쿠키명
 String value : 쿠키 값
 int day : 쿠키만료 기간(일 단위)
*/
function setCookie(name, value, day) {
	if(false && day != null) {
	    var expDays = day;                // 만료 날짜 셋팅
	    var exp = new Date();
	    exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
	    var expire_date = new Date(exp);
	    document.cookie = name + "=" + value + " ; domain=.daejeon.go.kr ;expires=" + expire_date.toGMTString()+ "; path=/";
	} else {
		document.cookie = name + "=" + value + "; domain=.daejeon.go.kr ;path=/";
	}
	
}

/*
 쿠키 소멸 함수
 String name : 소멸시킬 쿠키명
*/
function clearCookie(name) {
   var today = new Date()
   //어제 날짜를 쿠키 소멸 날짜로 설정한다.
   var expire_date = new Date(today.getTime() - 60*60*24*1000);
   document.cookie = name + "= " + ";domain=.daejeon.go.kr ;expires=" + expire_date.toGMTString() + "; path=/";
}

/*
 쿠키를 가져오는 함수
 String name : 쿠키명
*/
function getCookie(name) {
  var from_idx = document.cookie.indexOf(name+'=');
  if (from_idx != -1) {
     from_idx += name.length + 1;
     to_idx = document.cookie.indexOf(';', from_idx);

     if (to_idx == -1) {
           to_idx = document.cookie.length;
     }
     return unescape(document.cookie.substring(from_idx, to_idx));
  }
}

/*
 체크 상태에 따라 쿠키 생성과 소멸을 제어하는 함수
 checkbox의 Event Handler인 onClick이벤트에 등록해서 사용합니다.
 ex) <input type="checkbox" onClick="controlCookie(this, 'cName')">
 Form.checkbox frmObj : input type이 'checkbox'인 Form Object
 ex) checkbox를 사용하지 않는경우 use에 값을 부여한다.
*/
function controlCookie(frmObj, name, day,use) {
	  if ((frmObj.checked) || (use != null)) {
       //체크 박스를 선택했을 경우 쿠키 생성 함수 호출
       setCookie(name,"true", day);
       self.close();
   }
   else {
       //체크 박스를 해제했을 경우 쿠키 소멸 함수 호출
       clearCookie(name);
   } 
}


/*
인쇄 기능
*/
function popPrint() {
	popupCenter("/dj2009/assist/common/print.view.html", "wPrintWindow", 750, 600, "yes");
}

/*
메일보내기 기능
*/
function popMail() {
	pUrl = getPostPathString(document.location.pathname, 2);
}

/*
달력창열기
*/
function openCal(pName) {
	popupCenter("/dj2009/assist/calendar/calendar.jsp?pName=" + pName, "nCal", 200, 213, "no");
}

/**
* IE의 새로운 ActiveX정책에 의해 Object는 document.write스크립트를 활용하여야 한다.
* 작성자 : 2006.10.12 현준아빠
*
* String src : 동영상 주소 [필수]
* int w : 동영상 폭 [필수]
* int h : 동영상 높이 [필수]
*/

/*
검색어 확인 후 검색으로 전달
*/
function chkSearchForm(frm) {
	if(frm != null) {
		var list = new Array();
		list[0] = frm.qt.value;
		list[1] = frm.menu.value;
		Utils.toEucKrs(list, chkSearchResult);  //UTF-8에서 EUC-KR시스템으로 값을 건네주기위한 전처리
		return false;
	}
	return false;	
}

function chkSearchResult(results) {
	var uri = "http://210.104.41.118/RSA/front/Search.jsp?qt=" + results[0] + "&menu=" + results[1];
	window.open(uri,"winRepiaSearch"); 
}

/**
* 우편번호 찾기
*/
function searchZipCode(frmId, sId, tId) {
	var frm = document.getElementById(frmId);
	var obj = document.getElementById(sId);
	var sel = document.getElementById(tId);
	if(isEmptyForm(obj, "지역(아파트)명을")) { return false; }
		CommonDwr.searchZipCode(obj.value, function(results) {
		dwr.util.removeAllOptions(tId);
		dwr.util.addOptions(tId,["선택하세요"]);
		dwr.util.addOptions(tId, results, "zip_code", "address");
		sel.multiple= "multiple";
		sel.style.height = 120;
	});
}

/**
* 우편번호 부여
*/
function setZipCode(id01, id02, sel) {
	var obj01 = document.getElementById(id01);
	var obj02 = document.getElementById(id02);
	var value = sel.value;
	if(value == "선택하세요") {
		obj01.value = "";
		obj02.value = "";
	} else {
		obj01.value = value.substring(0,3);
		obj02.value = value.substring(3,6);
	}
	sel.multiple = "";
}

function relatedSite(){
	var clazz = document.getElementById("relatedSite").className;
	if(clazz == "TotalMore"){
		document.getElementById("relatedSite").className = "TotalMore Hidden";
	}else{
		document.getElementById("relatedSite").className = "TotalMore";
	}
}

/**
* 주소복사
*/
function copyurl(id){
	var str = document.getElementById(id).href;
 if( is_ie() ) {
	 var ret = null;
	 ret = clipboardData.clearData();
	  if(ret){
		  window.clipboardData.setData("Text", urlStr);
		  alert("주소가 복사되었습니다.");
	  }else{
		  alert("클립보드 액세스 허용을 해주세요.");
	  }
    return;
  }
  prompt("Ctrl+C를 눌러 복사하세요.", str);
}

function is_ie() {
  if(navigator.userAgent.toLowerCase().indexOf("chrome") != -1) return false;
  if(navigator.userAgent.toLowerCase().indexOf("msie") != -1) return true;
  if(navigator.userAgent.toLowerCase().indexOf("windows nt") != -1) return true;
  return false;
}
 
//function copyClipboard(){
//var urlbox = document.getElementById("current_url");
//urlbox.select();
//document.execCommand(''); 
//이것은 input상자가 숨겨지거나 하면 값을 못가져온다.때문에 최대한 작게하거나 해야된다.근데 execCommand('copy')는 사파리 지원이 안됨.
//}

function copy_to_clipboard() {
  var urlStr = window.location.href;
    if( is_ie() ) {
        try{
        	 var ret = null;
        	 ret = clipboardData.clearData();
          	  if(ret){
      		  window.clipboardData.setData("Text", urlStr);
      		  alert("주소가 복사되었습니다.");
      	  }else{
      		  alert("클립보드 액세스 허용을 해주세요.");
      	  }
          return;
        }catch(err){
          prompt("Ctrl+C를 눌러 복사하세요.", urlStr);
          return;
        }
    }
  if(navigator.userAgent.toLowerCase().indexOf("mobile") > 0) {
    prompt("아래의 URL을 길게 누르면 복사할 수 있습니다.", urlStr);
  }else{
    prompt("Ctrl+C를 눌러 복사하세요.", urlStr);
  }

}

/**
* 통계정보
*/
function PopKosisHp() {
	var url = context+"http://kosis.kr/help/helpView.jsp";
	var win = window.open(url,'helpWin','location=no,directories=no,resizable=no,status=no,toolbar=no,scrollbars=no,width=860,height=650');
	win.focus();
}

function fnPrint(){

var ht = location.protocol + "//kostat.go.kr/portal/common/s019801/print.kor.jsp" ;


open_win(ht,"850","500","yes","" );
}
		
function open_win(open_url,wth,hgt,scr,opt){
	var posi = 'top='+((screen.height-hgt)/2-50)+',left='+((screen.width-wth)/2-190)+',scrollbars='+scr;
	posi = posi + ',width='+wth + ',height='+hgt+opt;
	var win = window.open(open_url,'',posi);
	if(win.focus)win.focus();
	return win;
}



function dummyAndPop(popUrl, dummyUrl){
       var userwidth = screen.width;
       var userheight = screen.height;
        $.getJSON(dummyUrl);
       var newWindow = window.open("about:blank");
       newWindow.location.href = popUrl;
}

function dummyAndPop1(popUrl, dummyUrl){
        $.getJSON(dummyUrl);
        window.location.href=popUrl; 
}


function dummyAndPop2(popUrl, dummyUrl){
       var currHost = location.protocol + "//" + location.host;
       var userwidth = screen.width;
       var userheight = screen.height;
       $.getJSON(currHost + dummyUrl);
       var newWindow = window.open("about:blank");
       newWindow.location.href = popUrl;
}

function dummyAndPop3(popUrl, dummyUrl){
       var currHost = location.protocol + "//" + location.host;
       var popUrl1= location.protocol + "//" + popUrl;
       var userwidth = screen.width;
       var userheight = screen.height;
       $.getJSON(currHost + dummyUrl);
       var newWindow = window.open("about:blank");
       newWindow.location.href = popUrl1;
}

function dummyAndPop4(popUrl, dummyUrl){
       var popUrl1= location.protocol + "//" + popUrl;
        $.getJSON(dummyUrl);
        window.location.href=popUrl1; 
}

function moveUrl(){
//open_win("https://data.kostat.go.kr/social/moblilePopMoveInfoPage.do","700","870","yes","" );
fullPopup("https://data.kostat.go.kr/social/moblilePopMoveInfoPage.do","" );

}
