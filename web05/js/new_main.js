	/**
	 * 통계청 2011년 개편 메인화면 텝이동 스크립트 모음 
	 */
	function tboard01(id, len, idx){
		var tab;
		var src;
		
		for(var i = 1; i <= len; i++){
			if(i == idx){
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_no", "_on");
				tab.getElementsByTagName("div")[0].className = "";
			}else{
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_on", "_no");
				tab.getElementsByTagName("div")[0].className = "Hidden";
			}
			
		}
	}
	
	function tboard02(id, len, idx){
		var tab;
		var src;
		
		for(var i = 1; i <= len; i++){
			if(i == idx){
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_of", "_on");
				tab.getElementsByTagName("ul")[0].className = "";
			}else{
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_on", "_of");
				tab.getElementsByTagName("ul")[0].className = "Hidden";
			}
		}
	}
	
	function tboard02_n(id, len, idx){
		var tab;
		var src;
		
		for(var i = 1; i <= len; i++){
			if(i == idx){
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_off", "_on");
				tab.getElementsByTagName("ul")[0].className = "";
			}else{
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_on", "_off");
				tab.getElementsByTagName("ul")[0].className = "Hidden";
			}
		}
	}	
	
	function tboard03_n(id, len, idx){
		var tab;
		var src;
		
		for(var i = 1; i <= len; i++){
			if(i == idx){
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_off", "_on");
				tab.getElementsByTagName("dl")[0].className = id + i;
			}else{
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_on", "_off");
				tab.getElementsByTagName("dl")[0].className = id + i + " Hidden";
			}
		}
	}

	function tboard03(id, len, idx){
		var tab;
		var src;
		
		for(var i = 1; i <= len; i++){
			if(i == idx){
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_of", "_on");
				tab.getElementsByTagName("dl")[0].className = id + i;
			}else{
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_on", "_of");
				tab.getElementsByTagName("dl")[0].className = id + i + " Hidden";
			}
		}
	}
	
	function tboard04(id, len, idx){
		var tab;
		var src;
		
		for(var i = 1; i <= len; i++){
			if(i == idx){
				tab = document.getElementById(id + i);
				tab.getElementsByTagName("a")[0].className = "Tab02 M_on";
				tab.getElementsByTagName("div")[0].className = "";
			}else{
				tab = document.getElementById(id + i);
				tab.getElementsByTagName("a")[0].className = "Tab02";
				tab.getElementsByTagName("div")[0].className = "Hidden";
			}
		}
	}
	
	function tboard05(id, len, idx){
		var tab;
		var src;
		
		for(var i = 1; i <= len; i++){
			if(i == idx){
				tab = document.getElementById(id + i);
				tab.getElementsByTagName("a")[0].className = "Tab03 M_on";
				tab.getElementsByTagName("ul")[0].className = "";
			}else{
				tab = document.getElementById(id + i);
				tab.getElementsByTagName("a")[0].className = "Tab03";
				tab.getElementsByTagName("ul")[0].className = "Hidden";
			}
		}
	}
	
	function tboardsns(id, len, idx){
		var tab;
		var src;
		
		for(var i = 1; i <= len; i++){
			if(i == idx){
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_off", "_on");
if(idx == "2"){
tab.getElementsByTagName("ul")[0].className = "facebookfeed";
}else{
tab.getElementsByTagName("ul")[0].className = "";
}
							}else{
				tab = document.getElementById(id + i);
				src = tab.getElementsByTagName("img")[0].src;
				tab.getElementsByTagName("img")[0].src = src.replace("_on", "_off");
if(idx == "2"){
tab.getElementsByTagName("ul")[0].className = "facebookfeed Hidden";
}else{
tab.getElementsByTagName("ul")[0].className = "Hidden";
}

			}
		}
	}

	/**
	 * 통계청 2011년 개편 주간 보도계획 롤링 스크립트
	 */
	var main_timer = null;
	var main_delay_time = 5000;
	var main_pause = false;
	var main_button_pause = false;

	var survey_timer = null;
	var survey_delay_time = 5000;
	var survey_pause = false;
	var survey_button_pause = false;
	
	function survey_display(id, surveyIDX, move) {
		if(!surveyIDX)  {
			surveyIDX = select_survey_num;
			if(survey_pause==true && !move) return;
			if(survey_button_pause==true && !move) return;
			if(!move) move = 'next';
			hide_main(id, surveyIDX);
		}else{
			hide_main(id, select_survey_num);
		}
		if(move=='prev') {
			if(surveyIDX==1) {
				surveyIDX = survey_object_num;
			} else {
				surveyIDX--;
			}
		} else if(move=='next') {
			if(surveyIDX==survey_object_num) {
				surveyIDX = 1;
			} else {
				surveyIDX++;
			}
		}
		show_main(id, surveyIDX);
		select_survey_num = surveyIDX;

		document.getElementById(id + "Count").innerHTML = surveyIDX + "/" + survey_object_num;
		
	}


	function survey_display_zero(id, surveyIDX) {
		document.getElementById(id + "_" + surveyIDX).className = '';
	}
	
	function main_display(id, mainIDX, move) {
		if(!mainIDX)  {
			mainIDX = select_main_num;
			if(main_pause==true && !move) return;
			if(main_button_pause==true && !move) return;
			if(!move) move = 'next';
			hide_main(id, mainIDX);
		}else{
			hide_main(id, select_main_num);
		}
		if(move=='prev') {
			if(mainIDX==1) {
				mainIDX = main_object_num;
			} else {
				mainIDX--;
			}
		} else if(move=='next') {
			if(mainIDX==main_object_num) {
				mainIDX = 1;
			} else {
				mainIDX++;
			}
		}
		show_main(id, mainIDX);
		select_main_num = mainIDX;

		document.getElementById(id + "Count").innerHTML = mainIDX + "/" + main_object_num;
		
	}
	
	function hide_main(id, num) {
		var ann;
		if(num < 10){
			ann="0"+num;
		} else {
			ann=num;
		}
		
		if(ann != "00"){
  		document.getElementById(id + "_" + num).className = 'Hidden';
  		if(id == "survey"){
  			document.getElementById(id + "_date_" + num).className = 'Date Hidden';
  		}else if(id == "main"){
  			document.getElementById(id + "_date_" + num).className = 'Date Hidden';
  		}
		}
	}
	
	function show_main(id, num) {
		var ann;
		if(num < 10){
			ann="0"+num;
		} else {
			ann=num;
		}
		if(ann != "00"){
  		document.getElementById(id + "_" + num).className = '';
  		if(id == "survey"){
  			document.getElementById(id + "_date_" + num).className = 'Date';
  		}else if(id == "main"){
  			document.getElementById(id + "_date_" + num).className = 'Date';
  		}
		}

	}
	
	function main_scroll() {
		main_timer = setInterval("main_display('main', '', 'next')", main_delay_time); 
	}
	
	function survey_scroll() {
		survey_timer = setInterval("survey_display('survey', '', 'next')", survey_delay_time); 
	}
	
	function main_list_open_close(id) {
		var obj = document.getElementById(id);
		if(obj == null) return false;
		
		if(obj.className == '') {
			obj.className = 'Hidden';
		} else {
			obj.className = '';
		}
		return false;
	}

	function encodeLink1(url, param1, param2){
		var link = url + "?parentId=" + param1 + "&listnm=" + encodeURIComponent(param2);
		window.open(link, "newpage", "");
	}
	
	function encodeLink2(url, param1, param2){
		var link = url + "?parentId=" + param1 + "&listnm=" + escape(param2);
		window.open(link, "newpage", "");
	}

function dayGap () {
    var dday = new Date("October 15, 2020 00:00:00").getTime();//디데이
    var nowday = new Date();//현재
    nowday = nowday.getTime();//밀리세컨드 단위변환
    var distance = dday - nowday;//디데이에서 현재까지 뺀다.

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));//일


    if (distance <= 0) {//당일넘어섰을때, dday로 변경
        //document.getElementById("dday-timer").innerHTML = "D-day";
        //alert("D-DAY!!");
        return false;
    } else {
        //document.getElementById("dDay").value= d+1;
        //document.getElementById("time-day").innerHTML = d+1;
        //alert("인구 총조사로 부터 " + (d+1) + "일 남았습니다.");
        
        return false;
    }
}