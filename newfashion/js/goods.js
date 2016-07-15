// JavaScript Document

	//数量
	var num=0;
	
	function jia(){
		num++
		document.getElementById("number").value=num;
		
	}
	function jian(){
		if(num>0){	
		num--;
		}
		if(num>=0){
		document.getElementById("number").value=num;
		}
	}
	
$(function(){
//放大镜  tab换图
	$(".picUl li").mouseover(function(){
		var index = $(this).index();
		$(".picUl li").eq(index).css("border-color","red").siblings().css("border-color","#ccc");
		$(".left1 li").eq(index).css("display","block").siblings().css("display","none");
		$("#ShowBigPictureBox img").eq(index).css("display","block").siblings().css("display","none");
	})
	//放大效果
$(".left1").bind({
	"mouseover":function(){
		$("#drag").css("display","block");
		$("#ShowBigPictureBox").css("display","block");
	},
	"mousemove":function(e){
		var event = e||window.event;
		var oLeft = event.pageX-($("#drag").outerWidth()/2);
		var oTop = event.pageY-($("#drag").outerHeight()/2);
		var smPicLeft = $(".left1").offset().left;
		var smPicTop = $(".left1").offset().top;
		var nowLeft = oLeft - smPicLeft;
		var nowTop = oTop - smPicTop;		
		console.log(nowLeft)
		if(nowLeft<=0){
			nowLeft = 0;
		}else if(nowLeft>=($(".left1").outerWidth()-$("#drag").outerWidth())){
			nowLeft = $(".left1").outerWidth()-$("#drag").outerWidth();
		}
		if(nowTop<=0){
			nowTop = 0;
		}else if(nowTop>=($(".left1").outerHeight()-$("#drag").outerHeight())){
			nowTop = $(".left1").outerHeight()-$("#drag").outerHeight();
		}
		$("#drag").css({"left":nowLeft,"top":nowTop});
		$("#ShowBigPictureBox img").css({"left":(-nowLeft*2),"top":(-nowTop*2)});
	}
	,
	"mouseout":function(){
		$("#drag").css("display","none");
		$("#ShowBigPictureBox").css("display","none");
	}
})
//吸顶
window.onscroll = function(){
	//吸顶
		var detailnav2 = document.getElementById("detailnav2");
		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		//document.title = _scroll;
		if(_scroll >= 628){
			detailnav2.style.position = "fixed";
			detailnav2.style.top = 0;
		} else {
			detailnav2.style.position = "absolute";
			detailnav2.style.top = "628px";
		}
}

});