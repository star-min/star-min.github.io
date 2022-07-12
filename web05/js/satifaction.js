function insertSatifaction() {
	var frm = document.getElementById("satifaction");
	SatifactionBean.menuSeq = document.getElementById("menuSeq").value;
	SatifactionBean.articleSeq = frm.articleSeq.value;
	SatifactionBean.exp = frm.exp.value;
	for(var i = 0; i < frm.point.length; i++){
		if(frm.point[i].checked){
			SatifactionBean.point = frm.point[i].value;
		}
	}
	var exp1_val = document.getElementById("exp1").value;

	if(SatifactionBean.point == undefined){
		alert("만족도를 선택해 주세요.");
document.getElementById("point5").focus();
	}else{
if(exp1_val == null || exp1_val == ""){
alert("평가내용을 작성해주세요.");
document.getElementById("exp1").focus();
return false;
}
		SatifactionDwr.ajaxInsert(SatifactionBean, function(result){
			if(result == 1){
				alert("등록되었습니다.");
				frm.exp.value = "";
				for(var i = 0; i < frm.point.length; i++){
					frm.point[i].checked = false;
				}
			}else if(result == 2){
			if(confirm("로그인 및 실명인증이 필요한 메뉴 입니다. 로그인 페이지로 이동하시겠습니까?")){
				window.location = "/portal/korea/kor_mp/1/index.action?retUrl=" + window.location;
			}else{
				return false;
			}
			}else{
				alert("실패하였습니다.");
			}
		});
	}
}

function scrap(){
	var url = String(window.location);
	var name = document.title;

	CommonDwr.insert(url, name, function(result){

		if(result==1){
			alert("스크랩 되었습니다.");
			return false;
		}else if(result==2){
			if(confirm("회원을 위한 기능입니다. 회원가입 페이지로 이동하시겠습니까?")){
				window.location = "/portal/korea/kor_mp/2/index.action";
			}else{
				return false;
			}
		} else {
			if(confirm("로그인이 필요한 메뉴 입니다 로그인 페이지로 이동하시겠습니까?")){
				window.location = "/portal/korea/kor_mp/1/index.action?retUrl=" + window.location;
			}else{
				return false;
			}
		}
	});
}