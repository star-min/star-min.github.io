<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="path" value="${pageContext.request.contextPath }" />  
<%
	String sid = "";
	if(session !=null) sid = (String) session.getAttribute("sid");  
%>
<header id="header" class="panel-heading">
	<div class="hd_wrap">
		<nav class="navbar" role="navigation" aria-label="main navigation">
		  <div class="navbar-brand">
		    <a class="navbar-item" href="${path }/index.jsp" id="logo">
		      <img src="${path }/img/logo.jpg" width="auto" height="auto">
		    </a>
		
		    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		    </a>
		  </div>
		
		  <div id="gnb" class="navbar-menu">
		    <div class="navbar-start">
		      <div class="navbar-item has-dropdown is-hoverable">
		        <a class="navbar-link">
		          스택
		        </a>
		        <div class="navbar-dropdown">
		          <a class="navbar-item">
		            운동후 회복
		          </a>
		          <a class="navbar-item">
		            근성장 필수 스택
		          </a>
		        </div>
		      </div>
		      <div class="navbar-item has-dropdown is-hoverable">
		        <a class="navbar-link">
		          부스터
		        </a>
		        <div class="navbar-dropdown">
		          <a class="navbar-item">
		            운동 전
		          </a>
		          <a class="navbar-item">
		            운동 중
		          </a>
		          <hr class="navbar-divider">
		          <a class="navbar-item">
		            에너지 음료
		          </a>
		          <a class="navbar-item">
		            무카페인 부스터
		          </a>
		        </div>
		      </div>
		      <div class="navbar-item has-dropdown is-hoverable">
		        <a href="${path }/powder/getPowderList.jsp" class="navbar-link">
		          근성장
		        </a>
		
		        <div class="navbar-dropdown">
		          <a class="navbar-item" href="${path }/GetPowderListCtrl">
		            단백질 파우더
		          </a>
		        </div>
		      </div>
		      <div class="navbar-item has-dropdown is-hoverable">
		        <a class="navbar-link">
		          용품
		        </a>
		
		        <div class="navbar-dropdown">
		          <a class="navbar-item" href="GetEventListCtrl">
		            리프팅 벨트
		          </a>
		          <a class="navbar-item">
		            쉐이커 & 물통 & 케이스
		          </a>
		          <a class="navbar-item">
		            대회준비
		          </a>
		          <a class="navbar-item">
		            폼롤러&스트레칭
		          </a>
		          <a class="navbar-item">
		            스크랩&그립
		          </a>
		          <a class="navbar-item">
		            헬스 장갑
		          </a>
		          <a class="navbar-item">
		            보호장비
		          </a>
		          <a class="navbar-item">
		            홈트레이닝
		          </a>
		          <a class="navbar-item">
		            그외 용품
		          </a>
		        </div>
		      </div>
		      <div class="navbar-item has-dropdown is-hoverable">
		        <a class="navbar-link">
		          고객센터
		        </a>		
		        <div class="navbar-dropdown">
		          <a class="navbar-item" href="${path }/GetBoardListCtrl">
		            공지사항
		          </a>
			      <c:if test="${!empty sid }">
			          <a href="${path }/mailForm.jsp" class="navbar-item">
			            1:1 문의
			          </a>
			      </c:if>  
		          <a class="navbar-item">
		            자주하는 질문 및 답변
		          </a>
		          <hr class="navbar-divider">
		          <a class="navbar-item">
		            반품안내
		          </a>
		        </div>
		      </div>
		    </div>
			<c:if test="${empty sid }">		
		    <div class="navbar-end">
		      <div class="navbar-item">
		        <div class="buttons">
		          <a href="${path }/member/agree.jsp" class="button is-primary">
		            <strong>회원가입</strong>
		          </a>
		          <a href="${path }/member/login.jsp" class="button is-light">
		            로그인
		          </a>
		        </div>
		      </div>
		      </c:if>
		      <c:if test="${sid!='admin' && !empty sid }">
		      <!-- 로그인 사용자 -->
		      <div class="navbar-item">
		        <div class="buttons">
		          <a href="${path }/GetMemberCtrl?hid=${sid }" class="button is-primary">
		            <strong>회원정보수정</strong>
		          </a>
		          <a href="${path }/GetBasketListCtrl" class="button is-primary">
		            <strong>장바구니</strong>
		          </a>
		          <a href="myPageCtrl" class="button is-primary">
		            마이페이지
		          </a>
		          <a href="${path }/logOutCtrl" class="button is-light">
		            로그아웃
		          </a>
		        </div>
		      </div>
		      </c:if>
		      <!-- 관리자 -->
		      <c:if test="${sid =='admin' }">
		      <div class="navbar-item">
		        <div class="buttons">
		          <a href="${path }/GetBoardListCtrl" class="button is-primary">
		            <strong>글 관리</strong>
		          </a>
		          <a href="${path }/GetMemberListCtrl" class="button is-primary">
		            회원관리
		          </a>
		         <a href="${path }/GetPowderListCtrl" class="button is-primary">
		            제품관리
		          </a>
		          <a href="${path }/GetPaymentListCtrl" class="button is-primary">
		            판매관리
		          </a>
		          <a href="${path }/AccessListCtrl" class="button is-primary">
		            접속자관리
		          </a>
		          <a href="${path }/logOutCtrl" class="button is-light">
		            로그아웃
		          </a>
		        </div>
		      </div>
		      </c:if>
		    </div>
		  </div>
		</nav>
	</div>
</header>