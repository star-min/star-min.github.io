<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>  
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="path1" value="${pageContext.request.contextPath }" />  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>장바구니 목록</title>
<jsp:include page="../common.jsp"></jsp:include>
<style>
.page_tit { border-bottom:1px solid #cdcdcd; margin-bottom:25px; }
#lst_tb2 { width:1280px; margin:20px; auto; }
#lst_tb2 li { float:left; width:300px; height:600px; margin-right:15px; margin-top:15px; 
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
		<h2 class="page_tit">장바구니 목록</h2>
		<ul class="pro_lst" id="lst_tb2">
			<c:forEach items="${list }" var="vo" varStatus="status">
				<li>
					<div class="img_fr">
						<%-- <a href="${path1 }/GetPowderCtrl?pno=${vo.pno }">${vo.pno }</a> --%>
						<a href="${path1 }/GetBasketCtrl?bno=${vo.bno }">장바구니 상세정보</a>
					</div>
					<div class="hidden item1">${status.count }</div>
<%-- 					<h3 class="item_tit">${vo.pname }</h3> --%>
					<p><span>맛 : ${vo.ptaste }</span></p>
					<p><span>남은 수량 : ${vo.pamount }</span></p>
					<a href="${path1 }/SailFormCtrl?pno=${vo.pno }&bno=${vo.bno }&ptaste=${vo.ptaste}" class="button is-primary">구매하기</a>
					<a href="${path1 }/DelBasketCtrl?bno=${vo.bno }" class="button is-primary">장바구니 삭제</a>
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
</div>
<jsp:include page="../footer.jsp"></jsp:include>
</body>
</html>