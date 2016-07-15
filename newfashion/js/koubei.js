// JavaScript Document
window.onload=function(){
	imgLocation("container","box");
	}
function imgLocation(parent,box){
	//获取所有盒子
	var cparent=document.getElementById(parent);
	var childs=getChilds(cparent,box);
	//获取盒子的宽度
	var imgWidth=childs[0].offsetWidth;
	//console.log(imgWidth);
	//获取屏幕可视的宽度
	var cWidth=cparent.clientWidth;
	//console.log(cWidth);
	var imgNo=parseInt(cWidth/imgWidth);
	
	/*
	获取最小图片所在的下标
*/
function getMinImageIndex(imgHeights,minIndex) {
	for(var i=0;i<imgHeights.length;i++) {
		if(imgHeights[i] == minIndex) {
			return i;
		}
	}
}
	//查找最小高度的一列
	var imgHeights = [];
	for(var i=0;i<childs.length;i++) {
		if(i < imgNo) {//从其中找最小的高度
			imgHeights[i] = childs[i].offsetHeight+165;
		} else {//操作其他的图片
			//找到最小的位置，放置图片
			var minHeight = getMinImageHeight(imgHeights);
			//在最小高度的位置，添加图片
			var minIndex = getMinImageIndex(imgHeights,minHeight);
			//放置图片
			childs[i].style.position="absolute";
			childs[i].style.top = minHeight + "px";
			childs[i].style.left = childs[minIndex].offsetLeft + "px";
			//重新设置每列的高度
			imgHeights[minIndex] = imgHeights[minIndex] + childs[i].offsetHeight;
		}
	}
	
}
/*
	查找最小图片的高度
*/
function getMinImageHeight(imgHeights) {
	var minHeight = imgHeights[0];
	for(var i=1;i<imgHeights.length;i++) {
		if(imgHeights[i] < minHeight) {
			minHeight = imgHeights[i];
		}
	}
	return minHeight;
}





/*解决getElementsByClassName 兼容的问题*/
function getChilds(parent,className){ 
	var childsArr=[];
	var childs=parent.getElementsByTagName("*");
	for(var i=0;i<childs.length;i++){
		if(childs[i].className==className){
			childsArr.push(childs[i]);
		}
	}
	return childsArr;
}

$(function(){
	$(".box").mouseover(function(){
		$(this).css("opacity","0.5");
		$(this).children().css("borderColor","red");
	})
	$(".box").mouseout(function(){
		$(this).css("opacity","1");
		$(this).children().css("borderColor","#ccc");
	})
	
$(window).scroll(function(){
	if($(window).scrollTop()>=800){//$(window).scrollTop()滚动高度
		$(".toTop").show();
		$(".toTop").css("background","url(../images/koubei/top1.png)");
	}else{
		$(".toTop").hide();
	}
})
$(".toTop").click(function(){
	$("body").animate({scrollTop:"0"});
})
$(".toTop").mouseover(function(){
	$(".toTop").css("background","url(../images/koubei/top2.png)");
})
})