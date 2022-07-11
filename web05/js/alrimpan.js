//<![CDATA[

// author : ermi

// date : 2009-08-20

// next : auto-rolling ?



// RollingBanner constructor



function RollingBanner() {

	this.bannerImageSrc = new Array(); // banner image url

	this.bannerAlt = new Array(); // banner alt alt

	this.bannerLinkUrl = new Array(); // banner linkUrl alt

	this.bannerTarget = new Array(); // banner target alt

	this.totalCount = this.getTotalCount();

	this.startIndex = 0;

	this.main_button_pause = false;
	this.first_main_dis = false;

this.frist_load = false; //페이지가 처음로딩 되었음을 표시하는 변수17.12.14 ul안에 li가 있어야되는데 여기서 li는 스크립트 펑신이 실행되서 생성되는데 생성되기전에는 ul안에 아무것도 없어서 태그 오류가 발생 그래서 아래애li빈값을 넣었는데 생성될때 문제가 생기므로 ul태그안을 싹 비우고 생성되어야하므로 페이지가 처음 로딩되었을때만 li빈태그가 있고 다음부터 없도록 구분하기 위해 생성

};

// Banner Counts

RollingBanner.prototype.getTotalCount = function() {

	return this.bannerImageSrc.length;

};

// Banner Add

RollingBanner.prototype.addBanner = function(imageSrc, alt, linkUrl, target) {
var imageSrcHttps =imageSrc.replace("http://kostat.go.kr","");

	var index = this.getTotalCount();

	this.bannerImageSrc[index] = imageSrcHttps;

	this.bannerAlt[index] = alt;

	this.bannerLinkUrl[index] = linkUrl;

	this.bannerTarget[index] = target;

};



RollingBanner.prototype.write = function() {

		if(this.main_button_pause==true ) return;
	
		//alert(this.getTotalCount());
	
		var bl = document.getElementById("IntroList");
	var bc = document.getElementById("bannerCount");
		var bannerText = "";//팝업이미지
		var bannerNumText = "";//버튼
		var idx = this.startIndex;
if(this.frist_load  == 1){
bl.innerHTML = ""; 
frist_load =2;
}

	for (var i = 0; i < this.getTotalCount(); i++ ) {
	        if(idx == this.getTotalCount()) {
				idx = 0; //idx - (this.getTotalCount() - 1);
		}
		var target = "";
		if(this.bannerTarget[i] == 'TT'){
			target = "target='_blank'";
		}
		
		if(!this.first_main_dis){
			if(i==0){
				bannerText += "<li id='ulBn"+(i+1)+"'>";
				bannerText += "<a href='"+this.bannerLinkUrl[i]+"'"+target+">";
				bannerText += "<img  src='"+this.bannerImageSrc[i]+"' alt='"+this.bannerAlt[i]+"'/>";
				bannerText += "</a>";
				bannerText += "</li>";
			}else{
				bannerText += "<li id='ulBn"+(i+1)+"' class = 'Hidden'>";
				bannerText += "<a href='"+this.bannerLinkUrl[i]+"'"+target+">";
				bannerText += "<img  src='"+this.bannerImageSrc[i]+"' alt='"+this.bannerAlt[i]+"'/>";
				bannerText += "</a>";
				bannerText += "</li>";
			}

			
			bl.innerHTML = bannerText; 
		}else{
			if(idx == i){
				document.getElementById("ulBn"+(i+1)).className="";
			}else{
				document.getElementById("ulBn"+(i+1)).className="Hidden";
			}
			
		}
	}

if(bc != null){

			bc.innerHTML = "<span class='p_num'>"+(this.startIndex+1)+"</span>/"+this.getTotalCount();

		}

};


RollingBanner.prototype.previous = function(event) {

	this.main_button_pause = false;
this.first_main_dis = true;

	this.startIndex--;

	if (this.startIndex < 0) {

		this.startIndex = this.getTotalCount() - 1;

	}

	

	this.write();

};


RollingBanner.prototype.next = function(event) {
	this.main_button_pause = false;
	this.first_main_dis = true;
	
	this.startIndex++;
	
	if (this.startIndex >= this.getTotalCount()) {
		this.startIndex = 0;
	}
	this.write();

};
//]]>