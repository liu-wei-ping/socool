<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>后台运维系统_微操盘</title>
<%-- <link rel="shortcut icon" href="<?php echo Util::ini('url_params',0)->img_path;?>/favicon.ico"> --%>
</head>
<style type="text/css">
#b_main { overflow: auto;}
</style>
<frameset cols="*" rows="120, *,30" id="frame_layout"  border="0">
	<!-- 显示头部界面 -->
    <frame src="${pageContext.request.contextPath}/main/${type}/header.html" noresize="noresize" name="b_header" id="b_header" />
  
	<!-- 显示主要内容 -->
    <frame src="${pageContext.request.contextPath}/main/${type}/center.html" name="b_main" id="b_main" />

	<!-- 显示底部界面 -->
    <frame src="${pageContext.request.contextPath}/main/${type}/footer.html" noresize="noresize" name="b_footer" id="b_footer" />
</frameset>

</html>
