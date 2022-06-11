<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="path1" value="${pageContext.request.contextPath }" /> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://code.jquery.com/jquery-latest.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
<title>회원 정보 상세보기</title>
<jsp:include page="../common.jsp"></jsp:include>
</head>
<body>
<jsp:include page="../header.jsp"></jsp:include>
<div id="content">
	<section class="con_wrap">
		<h2>회원정보 상세보기</h2>
		<form action="${path1 }/EditAdminMemberCtrl" method="post">
			<table class="table" id="lst_tb">
				<tbody>
					<tr>
						<th>아이디</th>
						<td>
							<input type="text" name="hid" value="${member.hid }" readonly>
						</td>
					</tr>
					<tr>
						<th>비밀번호</th>
						<td>
							<input type="password" name="hpw" value="${member.hpw }">
						</td>
					</tr>
					<tr>
						<th>이름</th>
						<td>
							<input type="text" name="hname" value="${member.hname }"required>
						</td>
					</tr>
					<tr>
						<th>이메일</th>
						<td>
							<input type="text" name="email" value="${member.email }">
						</td>
					</tr>
					<tr>
						<th>전화번호</th>
						<td>
							<input type="tel" name="tel" value="${member.tel }">
						</td>
					</tr>
					<tr>
						<th>주소</th>
						<td>
							<input type="text" name="addr1" value="${member.addr1 }" id="addr1"><br>
							<input type="text" name="addr2" value="${member.addr2 }" id="addr2"><br>
							<input type="text" name="postcode" value="${member.postcode }" id="postcode">
							<input type="button" value="주소찾기" onclick="findAddr()" class="button is-info">
						</td>
					</tr>
					<tr>
						<th>생년월일</th>
						<td>
						<%-- <fmt:parseDate var="parseBirthDate" value="${member.birth }" pattern="yyyy-MM-dd HH:MM:SS" /> --%>
							<input type="date" name="birth" value="${member.birth }">
						</td>
					</tr>
					<tr>
						<th>가입일</th>
						<td>
							${member.joinday }
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<input type="submit" value="수정" class="button is-info"/>
							<input type="reset" value="취소" class="button is-info"/>
							<a href="${path1 }/DelMemberCtrl?num=${member.hid }" class="button is-info">탈퇴</a>
							<c:if test="${sid=='admin' }">
							<a href="${path1 }/GetMemberListCtrl" class="button is-info">목록</a>
							</c:if>
						</td>
					</tr>
				</tbody>
			</table>
		</form>	
		<script>					//다음을 이용한 주소찾기
		function findAddr() {
			new daum.Postcode({
				oncomplete: function(data) {
					console.log(data);
					var roadAddr = data.roadAddress;
					var jibunAddr = data.jibunAddress;
					document.getElementById("postcode").value = data.zonecode;
					if(roadAddr !== '') {
						document.getElementById("addr1").value = roadAddr;				
					} else if(jibunAddr !== ''){
						document.getElementById("addr1").value = jibunAddr;
					}
				}
			}).open();
		}
		</script>
		<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>	
	</section>
</div>
<jsp:include page="../footer.jsp"></jsp:include>
</body>
</html>