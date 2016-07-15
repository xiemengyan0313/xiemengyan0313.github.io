// JavaScript Document
$(function(){
	
	//轮播图
	var page=0;
	var time1;
	var flag=true;//
	time1=setInterval(Shuffling,2000);//定时器调用时page++函数
	function Shuffling(){//page++函数
		page++;
		if(page>1){
			page=0
		}
		Lunbo();
		flag=false;
	}
	
	function reduce(){//page--函数
		page--;
		if(page<0){
			page=1;
		}
		Lunbo();
		flag=false;
	}
	
	function Lunbo(){//轮播
		$(".bannerbig div").eq(page).stop().siblings().fadeOut(500,function(){
			$(".bannerbig div").eq(page).stop().fadeIn(0,function(){
				$(".bannerNum li").eq(page).addClass("NumFirst").siblings().removeClass("NumFirst");
				flag=true;//
			});
		});
	}
	
	$(".bannerNum li").mouseover(function(){
		var page = $(this).index();
		$(".bannerNum li").eq(page).addClass("NumFirst").siblings().removeClass("NumFirst");
		$(".bannerbig div").eq(page).stop().fadeIn(500).siblings().fadeOut(500);
	})
	$(".banner").mouseover(function(){
		clearInterval(time1);
	})
	$(".banner").mouseout(function(){
		time1=setInterval(Shuffling,2000);
	})
	//tab切换
	
	var $li=$(".tabnav>li");
		
		var $div=$(".tab");
		//alert($div.length);
		$div.addClass("hide");
		$div[0].className="show";
		$li.addClass("normal");
		$li[0].className="hover";
		$li.mouseover(function(){
		
			var index=$(this).index();
			$li.removeClass().addClass("normal");
			$(this).removeClass().addClass("hover");
			$div.removeClass().addClass("hide");
			$div.eq(index).removeClass().addClass("show");
			})
			//悬浮框
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
	$("body").animate({scrollTop:"530"});
})
$(".indexFixli2").click(function(){
	$("body").animate({scrollTop:"1000"});
})
$(".indexFixli3").click(function(){
	$("body").animate({scrollTop:"1550"});
})
$(".indexFixli4").click(function(){
	$("body").animate({scrollTop:"2100"});
})

});