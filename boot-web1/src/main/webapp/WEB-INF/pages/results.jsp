<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Search result</title>
</head>
<body>
<c:if test="${error != null}">
	<h3>Error : ${error}</h3>
</c:if>
<c:forEach var="c" items="${results}">
	${c.firstName } ${c.lastName } ${c.phoneNo }<br/>
</c:forEach>
</body>
</html>