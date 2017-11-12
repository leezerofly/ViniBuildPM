<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
   <title>信息详情页</title>
   <style type="text/css">
   div{
     width:100%;
     }
    body{
     text-align:center;  
     color: #333;  
     font-family:arial,verdana,sans-serif;  
     }
    div.test1 div{
    width:100px;height:50px;
    border:2px;
    margin:10px;
    display:inline-block; /*注意此处采用行内元素的方式*/
}
    </style>
    </head>
<body>
<h2>你的信息详情</h2>
<div class="test1">
    <div><p>类别： </p></div>
    <div><p>优先级：</p></div>
    <div><p>指派给：</p></div>
</div>   
<p>话题内容：</p>
<textarea style="width:300px;height:100px;"></textarea>
<div class="test1">
    <div><button type="submit">编辑</button></div>
    <div><button type="submit">删除</button></div>
    <div><button type="submit">回复</button></div>
</div>   
</body>