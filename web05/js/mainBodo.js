var newsCnt = 1;
var haemyungCnt = 1;
var intNews = '';
var intHaemyung = '';
var stopPlayFlag = true;//보도자료용
var stopPlayFlagH = true;//해명자료용

/* 팝업창 열기 */
function openPopupZone(url, target, width, height) {
	window.open(url,'openPopupZone','toolbar=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+width+',height='+height+',left=200,top=20' );
}


function moveNewsTv(type,idx){
	var classNull = "";
	var classTitleSelect = "";
	classTitleSelect = "pn0_";
 	for(var i=1; i<6; i++){
 		if(i == idx){
 			document.getElementById(classTitleSelect+i).className="on";
 			document.getElementById('pn0'+i).style.display="block";
 		}else{
 			document.getElementById(classTitleSelect+i).className="";
 			document.getElementById('pn0'+i).style.display="none";
 		}
 	}
	newsCnt = idx;
}

/* start/stop 이벤트 제어 */
function chgStartStopBtn(obj,objsub){
  var alink = document.getElementById(obj);
  var alinksub = document.getElementById(objsub);
  if(obj == "bodo_stop"){
  	alinksub.style.display = "block";
  	alink.style.display = "none";	
  	stopPlayFlag = false;
  	contentHover(obj);
  }else{
  	alinksub.style.display = "block";
  	alink.style.display = "none";
  	stopPlayFlag = true;
  	contentOut(obj);	
  
  }
}

function contentHover(obj){	
	window.clearInterval(intNews);
}

function contentOut(obj){
var chkobj = document.getElementById(obj);
  if(stopPlayFlag){
		//intNews = window.setInterval("movePrevNextBtn('news','next')",6000);
	}
}

function movePrevNextBtn(obj, type){
  
  var curNo = "";
  curNo = newsCnt;
  if(type == "next"){
  	curNo++;
  	if(curNo > 5)		curNo = 1;
  }else{
  	curNo--;
  	if(curNo < 1)		curNo = 5;
  }
	newsCnt = curNo;
	moveNewsTv('news',newsCnt);
}


/* 해명자료 */
function moveHaemyung(type,idx){
	var classNull = "";
	var classTitleSelect = "";
	classTitleSelect = "ph0_";
 	for(var i=1; i<6; i++){
 		if(i == idx){
 			document.getElementById(classTitleSelect+i).className="on";
 			document.getElementById('ph0'+i).style.display="block";
 		}else{
 			document.getElementById(classTitleSelect+i).className="";
 			document.getElementById('ph0'+i).style.display="none";
 		}
 	}
	haemyungCnt = idx;
}

/* start/stop 이벤트 제어 */
function chgPlayStopBtn(obj,objsub){
  var alink = document.getElementById(obj);
  var alinksub = document.getElementById(objsub);
  if(obj == "haemyung_stop"){
  	alinksub.style.display = "block";
  	alink.style.display = "none";	
  	stopPlayFlagH = false;
  	focusHover(obj);
  }else{
  	alinksub.style.display = "block";
  	alink.style.display = "none";
  	stopPlayFlagH = true;
  	focusOut(obj);	
  
  }
}

function focusHover(obj){	
	window.clearInterval(intHaemyung);
}

function focusOut(obj){
var chkobj = document.getElementById(obj);
  if(stopPlayFlagH){
		//intHaemyung = window.setInterval("movePrevNext('haemyung','next')",6000);
	}
}

function movePrevNext(obj, type){
  
  var curNo = "";
  curNo = haemyungCnt;
  if(type == "next"){
  	curNo++;
  	if(curNo > 5)		curNo = 1;
  }else{
  	curNo--;
  	if(curNo < 1)		curNo = 5;
  }
	haemyungCnt = curNo;
	moveHaemyung('haemyung',haemyungCnt);
}

function showHeadLineFunc(obj,showh2,hideh2,showid,hideid,efid){
	var showobj = document.getElementById(showid);
	var hideobj = document.getElementById(hideid);	
	var showh2obj = document.getElementById(showh2);
	var hideh2obj = document.getElementById(hideh2);
	var efobj = document.getElementById(efid);
	
	showobj.className = "";
	hideobj.className = "Dis_none";

  if(obj == "news"){
    //intNews = window.setInterval("movePrevNextBtn('news','next')",6000);
    window.clearInterval(intHaemyung);
   	showh2obj.className = "tit_s1n_on";
  	hideh2obj.className = "tit_s2n";
  	efobj.className = "tit_s3n";
  }else if(obj == "haemyung"){
    //intHaemyung = window.setInterval("movePrevNext('haemyung','next')",6000);
    window.clearInterval(intNews);
   	showh2obj.className = "tit_s2n_on";
  	hideh2obj.className = "tit_s1n";
  	efobj.className = "tit_s3n_on";  	
  }

}