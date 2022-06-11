<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>  
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="com.shop.common.*" %>
<%
	PowderVO vo = (PowderVO) request.getAttribute("bs"); 
%>

<c:set var="path1" value="${pageContext.request.contextPath }" />  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 목록</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<jsp:include page="../common.jsp"></jsp:include>
<style>
.page_tit { border-bottom:1px solid #cdcdcd; margin-bottom:25px; }
#lst_tb2 { width:1280px; margin:20px; auto; }
#lst_tb2 li { float:left; width:300px; height:400px; margin-right:15px; margin-top:15px; 
overflow:hidden; }
#lst_tb2 li img { display:block; width:100%; }
#lst_tb2 li.nothing { width:100%; clear:both; text-align:center; font-weight:bold; 
height:60px; line-height:60px; border-top:1px solid #cdcdcd; border-bottom:1px solid #cdcdcd;
margin-top:20px; margin-bottom:15px; }
#btn_group { clear:both; }
</style>
</head>
<body>
<jsp:include page="../header.jsp"></jsp:include>
<div id="content" class="content_wrap">
	<section class="con_wrap">
		<div>
			
		</div>	
		<h2 class="page_tit">상품 목록</h2>
		<form method="post" action="${path1 }/GetPowderSearchCtrl" class="frm_fr">
			<table class="table" id="search_tb">
				<tr>
					<td>
						<select name="searchCondition" required>
							<option value="title">제목</option>
							<option value="content">내용</option>
						</select>
						<input type="text" name="searchKeyword" required />
						<input type="submit" value="검색" class="button is-info"/>
					</td>
				</tr>
			</table>
		</form>
		<ul class="pro_lst" id="lst_tb2">
			<c:forEach items="${list }" var="vo" varStatus="status">
				<li>
					<div class="img_fr">
						<img src="${path1 }/img/${vo.pimage }" alt="${vo.pname }">
					</div>
					<div class="hidden item1">${status.count }</div>
					<h3 class="item_tit"><a href="${path1 }/GetPowderCtrl?pno=${vo.pno }">${vo.pname }</a></h3>

					<p class="item_com" id="money"> ${vo.pprice }￦</p>
					<p class="item_data">
						<span>맛 : ${vo.ptaste }</span><br>
					</p>
					<p><span>남은 수량 : ${vo.pamount }</span>
				</li>
			</c:forEach>
			<c:if test="${vo==null }">
				<li class="nothing">더 이상 상품이 존재하지 않습니다.</li>
			</c:if>
		</ul>
		<c:if test="${sid=='admin' }">
		<div id="btn_group">
			<a href="${path1 }/powder/insertPowderForm.jsp" class="button is-info">제품 등록</a>
		</div>
		</c:if>	
	</section>
	<script type="text/javascript">
function comma(str) {
       str = String(str);
       return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
   }

   function uncomma(str) {
       str = String(str);
       return str.replace(/[^\d]+/g, '');
   } 
   
   function inputNumberFormat(obj) {
       obj.value = comma(uncomma(obj.value));
   }
   
   function inputOnlyNumberFormat(obj) {
       obj.value = onlynumber(uncomma(obj.value));
   }
   
   function onlynumber(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1');
}
   
   var money = $('#money').text();
   var money2 = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   $('#money').text(money2);
</script>
</div>
<jsp:include page="../footer.jsp"></jsp:include>
</body>
</html>