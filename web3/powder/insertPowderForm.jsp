<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="path1" value="${pageContext.request.contextPath }" />  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>글쓰기</title>
<jsp:include page="../common.jsp"></jsp:include>
</head>
<body>
<jsp:include page="../header.jsp"></jsp:include>
<%-- <c:if test="${empty name }"><c:redirect url="../member/login.jsp" /></c:if> --%>
<div id="content" class="content_wrap">
	<section class="con_wrap">
		<h2>보충제 등록</h2>
		<form action="${path1 }/InsertPowderCtrl" method="post" enctype="multipart/form-data">
			<table class="table" id="lst_tb">
				<tbody>
					<tr>
<!-- 						<th>카테고리</th>
						<td>
						<label>보충제</label>
							<input type="radio" name="pgory" required>
						<label>부스터</label>
							<input type="radio" name="pgory"required>
						</td> -->
						<th>카테고리</th>
						<td>
							<input type="text" name="pgory" required>
							<input type="hidden" name="pno">
						</td>
					</tr>
					<tr>
						<th>보충제명</th>
						<td>
							<input type="text" name="pname" required>
						</td>
					</tr>
					<tr>
						<th>가격</th>
						<td>
							<input type="number" name="pprice" required>
						</td>
					</tr>
					<tr>
						<th>맛</th>
						<td>
						<label>리얼초코</label>
							<input type="radio" name="ptaste" required>
						<label>바닐라</label>
							<input type="radio" name="ptaste"required>
						</td>
					</tr>
					<tr>
						<th>개수</th>
						<td>
							<input type="number" name="pamount" required>
						</td>
					</tr>
					<tr>
						<th>설명</th>
						<td>
							<textarea cols="100" rows ="7" name="pcomment" ></textarea>
						</td>
					</tr>
					<tr>
						<th>상품 이미지</th>
						<td>
							<input type="file" accept="*.jpeg,*.jpg, *.png, *.gif" name="pimage" class="input is-primary">
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<input type="submit" value="보충제 등록" class="button is-info"/>
							<input type="reset" value="취소" class="button is-info"/>
							<a href="${path1 }/GetPowderListCtrl" class="button is-info">목록</a>
						</td>
					</tr>
				</tbody>
			</table>
		</form>	
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