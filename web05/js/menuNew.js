var urlItem = (window.location + "").split("/");

if(urlItem[5] == "kor_ip"){
	urlItem[5] = 1;
}else if(urlItem[5] == "kor_nw"){
	urlItem[5] = 2;
}else if(urlItem[5] == "kor_pi"){
	urlItem[5] = 3;
}else if(urlItem[5] == "kor_ko"){
	urlItem[5] = 4;
}


function topInit(){
        if(document.getElementById("gnb" + urlItem[5]) != null) {
					document.getElementById("gnb" + urlItem[5]).getElementsByTagName("ul")[0].className = "mn_dep2";
	        if(urlItem[6] != null) {
	          if(urlItem[6] == "10"){
	            urlItem[6] = "a";
	          }else if(urlItem[6] == "11"){
	            urlItem[6] = "b";
	          }
	        }
					
					if(document.getElementById("gnb" + urlItem[5] + "_" + urlItem[6]) != null) {
						document.getElementById("gnb" + urlItem[5] + "_" + urlItem[6]).getElementsByTagName("a")[0].className = "";
					}
       }
}

function leftInit(categoryId){ 
	var catID = categoryId;
	for(var i = catID.length; i >= 8; i--){
		temp = catID.substring(0, i);
		if(document.getElementById("sub_" + temp) != null){
			document.getElementById("sub_" + temp).getElementsByTagName("a")[0].className = "M_on";
				if(document.getElementById("sub_" + temp).getElementsByTagName("ul") != null && 
					document.getElementById("sub_" + temp).getElementsByTagName("ul")[0] != null ) {
			  	document.getElementById("sub_" + temp).getElementsByTagName("ul")[0].className = "mn_depth2";
			  	break;
				}
		}
		if(document.getElementById("gnb_" + temp) != null){
			document.getElementById("gnb_" + temp).getElementsByTagName("a")[0].className = "M_on";
		}
		
	}
}


$(function(){
  	$(".lnb_list").on("mouseleave", function() {
      	$(".lnb_list > .mn_type03").each(function(index) {
      		  $(".mn_type03:eq("+index+")").removeClass("mnt_on");
      		  $(".mn_type03:eq("+index+") > ul").attr('class','Hidden');

  		  if($("#mn_list>li.off").index()!=-1){
                                           $("#mn_list>li").eq($("#mn_list>li.off").index()).addClass('click');
                                           $("#mn_list>li").eq($("#mn_list>li.click").index()).removeClass('off');
  		  }
	  


      	});  	
  	});
  

  
      /* depth2 */
  	$(".lnb_list > .mn_type03").each(function(index) {
  		$(".lnb_list > .mn_type03:eq("+index+")").on("mouseenter focusin", function(event) {
  		  $(".mn_type03:eq("+index+")").addClass("mnt_on");
  		  $(".mn_type03:eq("+index+") > ul").attr('class','mn_dep2');  	
  		    		  
  		  if($("#mn_list>li.click").index()!=-1){
                                           $("#mn_list>li").eq($("#mn_list>li.click").index()).addClass('off');
                                           $("#mn_list>li").eq($("#mn_list>li.off").index()).removeClass('click');
  		  }
      	  
  		});
  	});
  	$(".lnb_list > .mn_type03").each(function(index) {
  		$(".lnb_list > .mn_type03:eq("+index+")").on("mouseleave focusout", function(event) {
  		  $(".mn_type03:eq("+index+")").removeClass("mnt_on");
  		  $(".mn_type03:eq("+index+") > ul").attr('class','Hidden');  	

  		  if($("#mn_list>li.off").index()!=-1){
                                           $("#mn_list>li").eq($("#mn_list>li.off").index()).addClass('click');
                                           $("#mn_list>li").eq($("#mn_list>li.click").index()).removeClass('off');
  		  }
	  
  		});
  	});
  	
 	

});
