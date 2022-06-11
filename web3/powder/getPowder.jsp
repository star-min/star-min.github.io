<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="path1" value="${pageContext.request.contextPath }" />  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://code.jquery.com/jquery-latest.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
<title>보충제 정보 보기</title>
<jsp:include page="../common.jsp"></jsp:include>
</head>
<body>
<jsp:include page="../header.jsp"></jsp:include>
<%-- <c:if test="${empty name }"><c:redirect url="../member/login.jsp" /></c:if> --%>
<div id="content" class="content_wrap">
	<section class="con_wrap">
		<c:if test="${sid=='admin' }">
		<h2 class="page_tit">상품 정보 수정</h2>
		</c:if>
		<c:if test="${sid!='admin' }">
		<h2 class="page_tit">상품 정보 보기</h2>
		</c:if>
		<form action="${path1 }/UpdatePowderCtrl" method="post" enctype="multipart/form-data">
			<table class="table" id="lst_tb">
				<tbody>
<!-- 					<tr>
						<th>글번호</th>
						<td>
							<input type="text" name="pno" value="${powder.pno}" readonly="readonly">
						</td>
					</tr> -->
					<tr>
						<th>카테고리</th>
						<td>
							<c:if test="${sid=='admin' }">
							<select name="pgory" class="select is-primary" required>
								<option value="보충제" >보충제</option>
								<option value="babel">바벨</option>
								<option value="dumbel">덤벨</option>
								<option value="muchin">머신</option>
								<option value="vitamin">영양제</option>
							</select>
							<input type="hidden" name="pno" value="${powder.pno }">
							
							</c:if>
							<!-- <span>${powder.pgory }</span> -->
						</td>
					</tr>
					<tr>
						<th>보충제명</th>
						<c:if test="${sid!='admin' }">
						<td>
							<input type="text" name="pname" value="${powder.pname }" readonly>
						</td>
						</c:if>
						<c:if test="${sid=='admin' }">
						<td>
							<input type="text" name="pname" value="${powder.pname }">
						</td>
						</c:if>
					</tr>
					<tr>
						<th>가격</th>
						<c:if test="${sid!='admin' }">
						<td>
							<input type="text" name="pprice" value="${powder.pprice }" id="money" readonly>
						</td>
						</c:if>
						<c:if test="${sid=='admin' }">
						<td>
							<input type="text" name="pprice" value="${powder.pprice }" id="money">
						</td>
						</c:if>
					</tr>
					<tr>
						<th>맛</th>
						<td>
							<!-- <input type="text" name="ptaste" value="${powder.ptaste }"> -->
							<select name="ptaste" class="select is-primary" required>
								<option value="리얼초코" >리얼초코</option>
								<option value="바닐라">바닐라</option>
							</select>
						</td>
					</tr>
					<tr>
						<th>남은 수량</th>
						<td>
							<input type="number" name="pamount" value="${powder.pamount }">
						</td>
					</tr>
					<tr>
						<th>내용</th>
						<c:if test="${sid!='admin' }">
						<td>
							<textarea cols="100" rows ="7" name="pcomment" readonly>${powder.pcomment }</textarea>
						</td>
						</c:if>
						<c:if test="${sid=='admin' }">
						<td>
							<textarea cols="100" rows ="7" name="pcomment" >${powder.pcomment }</textarea>
						</td>
						</c:if>
					</tr>
					<tr>
						<th>제품사진</th>
						<td>
							<c:if test="${sid=='admin' }">
							<input type="file" accept="*.jpeg,*.jpg, *.png, *.gif" name="pimage" value="./img/${powder.pimage }" class="input is-normal">
							</c:if>
							<img alt="./upload/${powder.pimage }" src="./upload/${powder.pimage }">
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
							<c:if test="${sid=='admin' }">
							<input type="submit" value="제품 정보 수정" class="button is-info"/>
							<input type="reset" value="취소" class="button is-info"/>
							<a href="${path1 }/DeletPowderCtrl?pno=${powder.pno }" class="button is-info">상품 삭제</a>
							</c:if>
							<c:if test="${sid!='admin'  }">
							<a href="${path1 }/AddBasketCtrl?pno=${powder.pno }&ptaste=${powder.ptaste}" class="button is-info">장바구니 담기</a>
							<a href="${path1 }/SailFormCtrl?pno=${powder.pno }&ptaste=${powder.ptaste}" class="button is-info">바로 구매</a>
							</c:if>
							
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