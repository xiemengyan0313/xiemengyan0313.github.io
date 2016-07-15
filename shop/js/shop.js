var num1=1;
var num2=1;
var Price1=118;
var Price2=348;
window.onload=function(){
for( var i=0;i<2;i++){
		document.getElementById("chk"+(i+1)).onclick=function(){
			checkedStatus();
		}	
	}
	document.getElementById("num1").value=num1;
	document.getElementById("num2").value=num2;
	document.getElementById("jifen1").innerHTML=Price1;
	document.getElementById("jifen2").innerHTML=Price2;
	document.getElementById("Tosumprice").innerHTML=0;
}
//根据每个商品复选框的选中状态来决定全选复选框的选中状态；
function checkedStatus(){
	var isChecked=true;
	for(var i=0;i<2;i++){
		if(document.getElementById("chk"+(i+1)).checked==false){
			isChecked=false;
			break;
		}
	}
	var chk1=document.getElementById("chk1")
	var chk2=document.getElementById("chk2")
	document.getElementById("chkAll").checked=isChecked;
	
	if(chk1.checked==true&&chk2.checked==true){
	document.getElementById("Tosumprice").innerHTML=Price1+Price2;
	}else if(chk1.checked==true&&chk2.checked==false){
	document.getElementById("Tosumprice").innerHTML=Price1;
	}
	else if(chk1.checked==false&&chk2.checked==true){
	document.getElementById("Tosumprice").innerHTML=Price2;
	}
	else if(chkAll.checked==false){
	document.getElementById("Tosumprice").innerHTML=0;
	}
}
//全选
function changeCheck(){
	var chkAll = document.getElementById("chkAll");
	for(var i=0;i<2;i++){
		document.getElementById("chk"+(i+1)).checked = chkAll.checked;
	}
	document.getElementById("Tosumprice").innerHTML=Price1+Price2;
}	

function jia1(){
var count=1;
	//count++;
	num1++;
	document.getElementById("num1").value=num1;
	Price1=Price1+118*count;
	document.getElementById("jifen1").innerHTML=Price1;
}
function jian1(){
var count=1;
	if(num1>1){
		num1--;
	document.getElementById("num1").value=num1;
	Price1=Price1-118*count;
	document.getElementById("jifen1").innerHTML=Price1;
	}
}
function jia2(){
var count=1;
	//count++;
	num2++;
	document.getElementById("num2").value=num2;
	Price2=Price2+348*count;
	document.getElementById("jifen2").innerHTML=Price2;
}
function jian2(){
var count=1;
	if(num2>1){
		num2--;
	document.getElementById("num2").value=num2;
	Price2=Price2-348*count;
	document.getElementById("jifen2").innerHTML=Price2;
	}
}