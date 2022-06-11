<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="path1" value="${pageContext.request.contextPath }" />  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>보충제 정보 보기</title>
<jsp:include page="../common.jsp"></jsp:include>
</head>
<body>
<jsp:include page="../header.jsp"></jsp:include>
<%-- <c:if test="${empty name }"><c:redirect url="../member/login.jsp" /></c:if> --%>
<div id="content" class="content_wrap">
	<section class="con_wrap">
		<h2>상품정보 보기</h2>
		<form action="${path1 }/GetPowderCtrl" method="post">
			<table class="table" id="lst_tb">
				<tbody>
					<tr>
						<th>글번호</th>
						<td>
							<input type="text" name="pno" value=" ${powder.pno }" required>
						</td>
					</tr>
					<tr>
						<th>카테고리</th>
						<td>
							<input type="text" name="pgory" value=" ${powder.pgory }" required>
						</td>
					</tr>
					<tr>
						<th>보충제명</th>
						<td>
							<input type="text" name="pname" value="${powder.pname }" required>
						</td>
					</tr>
					<tr>
						<th>가격</th>
						<td>
							<input type="text" name="pprice" value="${powder.pprice }" required>
						</td>
					</tr>
					<tr>
						<th>맛</th>
						<td>
							<input type="radio" name="ptaste" value="${powder.ptaste }" required>
							<input type="radio" name="ptaste" value="${powder.ptaste }" required>
						</td>
					</tr>
					<tr>
						<th>개수</th>
						<td>
							<input type="number" name="pamount" value="${powder.pamount }" required>
						</td>
					</tr>
					<tr>
						<th>내용</th>
						<td>
							<textarea cols="100" rows ="7" name="pcomment" >${powder.pcomment }</textarea>
						</td>
					</tr>
					<tr>
						<th>제품사진</th>
						<td>
							<input type="image" name="pimage" value="${powder.pimage }" required>
						</td>
					</tr>
					<tr>
						<th>제품등록일</th>
						<td>
							${ powder.pinday}
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<input type="submit" value="보충제 수정" class="button is-info"/>
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