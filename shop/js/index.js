// JavaScript Document

//打开页面就加载
function startimg(){
		myInterval=setInterval("changeimg()",1500);
		setInterval("daojishi()",1000);
		setInterval("daojishi2()",1000);
		setInterval("getdate()",1000);
		//模拟下拉菜单
		var  list = document.getElementById("list").childNodes;//li的合集
				for(var i=0; i<list.length; i++){
					list[i].onclick = function(){
						
						document.getElementById("selectvalue").value= this.innerHTML;
						document.getElementById("list").style.display = "none";
					};
			}
	
	}
//轮播图

$(function(){
	//轮播图
	$(".LeftA").css("display","none")
	$(".RightA").css("display","none")
	var page=0;
	var time1;
	var flag=true;//
	time1=setInterval(Shuffling,2000);//定时器调用时page++函数
	function Shuffling(){//page++函数
		page++;
		if(page>2){
			page=0
		}
		Lunbo();
		flag=false;
	}
	function reduce(){//page--函数
		page--;
		if(page<0){
			page=2;
		}
		Lunbo();
		flag=false;
	}
	function Lunbo(){//轮播
		$(".bannerbig div").eq(page).stop().siblings().fadeOut(500,function(){
			$(".bannerbig div").eq(page).stop().fadeIn(500,function(){
				$(".bannerNum li").eq(page).addClass("NumFirst").siblings().removeClass("NumFirst");
				flag=true;//
			});
		});
	}
	$(".maincenter").mouseover(function(){
		clearInterval(time1);
		$(".LeftA").css("display","block");
		$(".RightA").css("display","block");
	})
	$(".bannerNum li").mouseover(function(){
		var page = $(this).index();
		$(".bannerNum li").eq(page).addClass("NumFirst").siblings().removeClass("NumFirst");
		$(".bannerbig div").eq(page).stop().fadeIn(500).siblings().fadeOut(500);
	})
	$(".maincenter").mouseout(function(){
		time1=setInterval(Shuffling,2000);
		$(".LeftA").css("display","none")
		$(".RightA").css("display","none")
	})
	$(".LeftA").click(function(){
		if(flag){
			reduce();
		}
	})
	$(".RightA").click(function(){
		if(flag){
			Shuffling();
		}
	})
	
	
	$(".dong1").mouseover(function(){
		$(".dong1").animate({
			left:-15,
			},500);	
	})
	$(".dong1").mouseout(function(){
		$(".dong1").animate({
			left:0,
			},500);	
	})
	$(".dong2").mouseover(function(){
		$(".dong2").animate({
			left:-15,
			},500);	
	})
	$(".dong2").mouseout(function(){
		$(".dong2").animate({
			left:0,
			},500);	
	})
	$(".dong3").mouseover(function(){
		$(".dong3").animate({
			left:-15,
			},500);	
	})
	$(".dong3").mouseout(function(){
		$(".dong3").animate({
			left:0,
			},500);	
	})


	//边框动画
	$(".hotprocon  dl").mouseover(function(){
		$(this).find(".topline").stop().animate({"width":"240px"})
		$(this).find(".leftline").stop().animate({"height":"320px"})
		$(this).find(".rightline").stop().animate({"height":"320px"})
		$(this).find(".bottomline").stop().animate({"width":"240px"})
	})

	$(".hotprocon  dl").mouseout(function(){
		$(this).find(".topline").stop().animate({"width":"0"})
		$(this).find(".leftline").stop().animate({"height":"0"})
		$(this).find(".rightline").stop().animate({"height":"0"})
		$(this).find(".bottomline").stop().animate({"width":"0"})
	})

	//图片效果
	$(".renqicon dl img").mouseover(function(){
		$(this).animate({
			"width":"240",
			"height":"260"
		},400);
	}).mouseout(function(){
		$(this).animate({
			"width":"260",
			"height":"280"
		},400);
	})
//改变透明度

		$(".hotactivecon dl").mouseover(function(){

			$(this).css("opacity","0.5");
		})
		$(".hotactivecon dl").mouseout(function(){
			$(this).css("opacity","1");
		})
		$(".spcon dl").mouseover(function(){

			$(this).css("opacity","0.5").css("borderColor","red");
		})
		$(".spcon dl").mouseout(function(){
			$(this).css("opacity","1").css("borderColor","#ccc");
		})




//左侧悬浮框


$(window).scroll(function(){
	if($(window).scrollTop()>=350){//$(window).scrollTop()滚动高度
		$(".indexFixBox").fadeIn(500);
	}else{
		$(".indexFixBox").fadeOut(500);
	}
})
$(".toTop").click(function(){
	$("body").animate({scrollTop:"0"});
})
$(".indexFixli1").click(function(){
	$("body").animate({scrollTop:"700"});
})
$(".indexFixli2").click(function(){
	$("body").animate({scrollTop:"1450"});
})
$(".indexFixli3").click(function(){
	$("body").animate({scrollTop:"2650"});
})

});


//60秒抢购倒计时
	var sumsecond=60;
	function daojishi(){
		var second=document.getElementById("sumsecond");
		second.value=sumsecond;	
		sumsecond--;
		if(sumsecond==0){
			sumsecond=59;
		}
	}
//热门活动倒计时
	var hours=1;
	var minutes=1;
	var seconds=6;
	function daojishi2(){
	  document.getElementById("hour").value=hours;
	  document.getElementById("minute").value=minutes;
	  document.getElementById("second").value=seconds;
	  seconds=seconds-1;
	  if(seconds==0){
			  seconds=59;
			  minutes--;
		  if(minutes==0){
			  minutes=59;
			  hours--;
	      }
	  }	
}
//获取当前时间
	function getdate(){
		var Mydate=new Date();
		var str=""
		str=str+Mydate.getFullYear()+"-"+(Mydate.getMonth()+1)+"-"+Mydate.getDate()+" "+Mydate.getHours()+":"+Mydate.getMinutes()+":"+Mydate.getSeconds();
		document.getElementById("txt").value=str;
	}
//下拉菜单

	        	function showvalue(event){
				var list = document.getElementById("list");
			    var selectvalue = document.getElementById("selectvalue");
				var e =event?event:window.event;
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true;
				list.style.display = "block";
				selectvalue.value="";
			}
			document.onclick = function(){
				var list = document.getElementById("list");
				list.style.display = "none";
			}

