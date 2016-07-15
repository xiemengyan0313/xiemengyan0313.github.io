// JavaScript Document
function send(){
		document.getElementById("bigbox").style.display="block";
		//document.getElementById("userName").value="";
		document.getElementById("getTxt").value="";
	}
	function sure1(){
		var userName=document.getElementById("userName").value;
		var getTxt=document.getElementById("getTxt").value;
		if(userName==""||getTxt==""){
			alert("内容不能为空");
			return;
		}
		var tbody=document.getElementById("userInfo").childNodes[0];
		var trObj=document.createElement("tr");
		var tdObj=document.createElement("td");
		//var tdDelObj=document.createElement("td");
		
		var aObj=document.createElement("a");
		var content=document.createTextNode(getTxt);
		var userTextNode = document.createTextNode(userName+":");
		aObj.href="#";
		aObj.appendChild(userTextNode);
		tdObj.appendChild(aObj);
		tdObj.appendChild(content);
		//tdDelObj.innerHTML="<a href='#' onclick='deleteInfo(this)'>删除</a>";
		trObj.appendChild(tdObj);
		//trObj.appendChild(tdDelObj);
		tbody.appendChild(trObj);
		//tOld=tbody.childNodes[0];
		//tbody.insertBefore(trObj,tOld);
		document.getElementById("bigbox").style.display="none";
	}
	function quxiao(){
		document.getElementById("bigbox").style.display="none";
	}
	var isStillDown=false;
	var offsetX;
	var offsetY;
	window.onload=function(){
		document.body.onmousemove=function(event){
			moveTitle(event);
		}
		var titleObj=document.getElementById("title");
		titleObj.onmousedown=function(event){
			downTitle(event);
		}
		titleObj.onmouseup=function(){
			upTitle();
		}
	}
	function downTitle(event){
		var evt=event?event:window.event;
		isStillDown=true;
		var smallBox=document.getElementById("smallbox");
		offsetX=evt.clientX-parseInt(smallBox.currentStyle.left);
		offsetY=evt.clientY-parseInt(smallBox.currentStyle.top);	
	}
	function moveTitle(event){
		var evt=event?event:window.event;
		if(isStillDown){
			var smallBox=document.getElementById("smallbox");
			smallBox.style.left=(evt.clientX-offsetX)+"px";
			smallBox.style.top=(evt.clientY-offsetY)+"px";
		}
	}
	function upTitle(){
		isStillDown=false;
	}
	/*function deleteInfo(Obj){
		if(window.confirm("您确定要删除吗?")==false){
			return;
		}
		var tbody1=document.getElementById("userInfo").childNodes[0];
		var child=Obj.parentNode.parentNode;
		tbody1.removeChild(child);	
	}*/
	function show(obj,event){
	if(obj.value.length>=150 && event.keyCode!=8){
		event.returnValue = false;
	}
	document.getElementById("spanNum").innerHTML=150-obj.value.length;
}