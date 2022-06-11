<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>  
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="path1" value="${pageContext.request.contextPath }" />  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 목록</title>
<jsp:include page="../common.jsp"></jsp:include>
</head>
<body>
<jsp:include page="../header.jsp"></jsp:include>
<%-- <c:if test="${empty name }"><c:redirect url="../member/login.jsp" /></c:if> --%>
<div id="content" class="content_wrap">
	<section class="con_wrap">
		<div>
			<%-- <h3>${name }님 &nbsp; &nbsp; <a href="../LogoutCtrl">로그아웃</a></h3> --%>
		</div>	
		<h2>회원 목록</h2>
		<table class="table" id="lst_tb">
			<thead>
				<tr>
					<th class="item1">번호</th>
					<th class="item2">아이디</th>
					<th class="item3">이름</th>
					<th class="item4">전화번호</th>
					<th class="item6">이메일</th>
					<th class="item7">가입일</th>
				</tr>
			</thead>
			<tbody>
			<c:forEach items="${list }" var="vo" varStatus="status">
				<tr>
					<td>${status.count }</td>
					<td><a href="${path1 }/GetMemberCtrl?hid=${vo.hid }">${vo.hid }</a></td>
					<td>${vo.hname }</td>
					<td>${vo.tel }</td>
					<td>${vo.email }</td>
					<td>${vo.joinday }</td>
				</tr>
			</c:forEach>
			</tbody>
		</table>
	</section>
	<script>
	$(document).ready(function(){
		$("#lst_tb_filter").css("display","none");
	});
	</script>	
</div>
<jsp:include page="../footer.jsp"></jsp:include>
</body>
</html>