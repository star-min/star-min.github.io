//<![CDATA[


function RollingBanner() {

	this.bannerImageSrc = new Array();

	this.bannerTitle = new Array();

	this.bannerLinkUrl = new Array();

	this.bannerTarget = new Array();

	this.displayCount = 2;

	this.totalCount = this.getTotalCount();

	this.startIndex = 0;


}

RollingBanner.prototype.setDisplayCount = function(displayCount) {

	this.displayCount = displayCount;

};

// Banner Counts

RollingBanner.prototype.getTotalCount = function() {

	return this.bannerImageSrc.length;

};

// Banner Add

RollingBanner.prototype.addBanner = function(imageSrc, title, linkUrl, target) {
var imageSrcHttps =imageSrc.replace("http://kostat.go.kr","");
	var index = this.getTotalCount();

	this.bannerImageSrc[index] = imageSrcHttps;

	this.bannerTitle[index] = title;

	this.bannerLinkUrl[index] = linkUrl;

	this.bannerTarget[index] = target;

};

RollingBanner.prototype.write = function(event) {

	if (this.main_button_pause == true)
		return;

	var bl = document.getElementById("bannerList");

	var bannerText = "";

	var idx = this.startIndex;

	for (i = 0; i < this.displayCount; i++) {

		if (idx >= this.getTotalCount()) {

			idx = 0;
			
			break;

		}

		var target = "";

		if (this.bannerTarget[idx] == 'T') {

			target = "target='_blank'";

		}
		if(i == 0){
		bannerText += "<li class='l_first'>";
		}else{
		bannerText += "<li class='l_last'>";
		}
		bannerText += "<a href='" + this.bannerLinkUrl[idx] + "'" + target	+ ">";

		bannerText += "<img src='" + this.bannerImageSrc[idx] + "' alt='" + this.bannerTitle[idx] + "' width='138' height='35' />";

		bannerText += "</a>";

		bannerText += "</li>";

		idx++;

	}

	bl.innerHTML = bannerText;


};
//]]>