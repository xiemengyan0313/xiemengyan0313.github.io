// JavaScript Document
//注册验证
var str = "";
function getCheckCode(){
	var arr = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	str = "";
	for(var i=0;i<4;i++){
		//随机下标，随机数范围是：0-(arr.length-1)
		var index = parseInt(Math.random()*arr.length);
		str = str+arr[index];
	}
	document.getElementById("checkcode").value = str;
}

function test2(){
	var userCheckMa = document.getElementById("userCheckMa").value;
	if(userCheckMa.toLowerCase()!=str.toLowerCase()){
		document.getElementById("sp2").innerHTML="<font color='red'>验证码错误!!!</font>";
	}
	else{document.getElementById("sp2").innerHTML="";}
}

	$(function(){
	$(".Pname1").css("display","none");
	$(".Pname2").css("display","none");
	$(".Pname3").css("display","none");
		
		var reguster={
				nameError:false,
				pass1Error:false,
				pass2Error:false,
				yanzhengError:false,
				
				username:function(){
				     $(".zhanghao").focus(function(){
				     	$(".Pname1").css("display","block");
//				     	if($(this).val()!=""){
//				     		$(this).val("");
//				     	}
				     })
				     
					$(".zhanghao").focusout(function(){
						var name=$(this).val();
						if(name==""){
							reguster.nameError=false;
							$(".Pname1").css("display","block");
							return;
						}else {
							if(/^1\d{10}$/.test(name)){
								reguster.nameError=true;
								$(".Pname1").css("display","none");
								return;
							}else{
								reguster.nameError=false;
								$(".Pname1").css("display","block");
								$(".Pname1").text("请检查手机号是否正确!");
							}
						}
					})
					return this;
			    },
			   	password1:function(){
			   		$(".pass").focus(function(){
			   			$(".Pname2").css("display","block");
			   			if($(this).val()!=""){
				     		$(this).val("");
				     	}
			   		})
			   		
			   		$(".pass").focusout(function(){
						var pass1=$(this).val();
						if(pass1==""){
							reguster.pass1Error=false;
							$(".Pname2").css("display","block");
							return;
						}else {
							if(/^[a-z0-9_-]{6,18}$/.test(pass1)){
								reguster.pass1Error=true;
								$(".Pname2").css("display","none");
								return;
							}else{
								reguster.pass1Error=false;
								$(".Pname2").css("display","block");
								$(".Pname2").text("密码格式不正确!");
							}
						}
					})
					return this;
			    },
				password2:function(){
			   		$(".passA").focus(function(){
			   			$(".Pname3").css("display","block");
			   			if($(this).val()!=""){
				     		$(this).val("");
				     	}
			   		})
		   		
			   		$(".passA").focusout(function(){
						var pass2=$(this).val();
			   			var pass1 = $(".pass").val();
						if(pass2==""){
							reguster.pass2Error=false;
							$(".Pname3").css("display","block");
							return;
						}else {
							if(pass2==pass1){
								reguster.pass2Error=true;
								$(".Pname3").css("display","none");
								return;
							}else{
								reguster.pass2Error=false;
								$(".Pname3").css("display","block");
								$(".Pname3").text("两次密码输入不相同!");
							}
						}
					})
					return this;
		    	},
			  	yanzhengma:function(){
			   		$(".yanzheng").focus(function(){
			   			$(".Pname4").css("display","block");
			   			if($(this).val()!=""){
				     		$(this).val("");
				     	}
			   		})
			   		$(".yanzheng").focusout(function(){
						var yanzhengA=$(this).val();
						if(yanzhengA==""){
							reguster.yanzhengError=false;
							return;
						}else {
							
								reguster.yanzhengError=true;
						}
					})
					return this;
		    	}
			};	
				
			function check(){
				if(  $("input[type='checkbox']").is(":checked")   ){
					return true;
				}else{
					alert("您必须同意此协议才能进行注册！");
				}
			};
		
		regusterInit();
		function regusterInit(){
				reguster.username();
				reguster.password1();
				reguster.password2();
				reguster.yanzhengma();
				//setcookie();
		};
		
				$(".buttonA").click(function(){
					if(reguster.nameError==true&&reguster.pass1Error==true&&reguster.pass2Error==true&&reguster.yanzhengError==true&&check()){
						
						window.location.href="login.html";
					}else{
						alert("请正确填完整注册信息")
					}
				
					return this;
			    })
				
	})