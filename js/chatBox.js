$(function(){
	$('.chat a').click(function(){
 		$(".chatbox").show()
 		
 		$(".chat").hide()
 	});
 	$('.chat-up .xxx').click(function(){
 		$(".chatbox").hide()
 		$('.chat ').show()
 	})
 	$('.chat-up').mousedown(function(e){
			var e = e || window.e;
			var l = e.offsetX;
			var t = e.offsetY;
			//console.log(l,t);
			$('body').mousemove (function(event){
				var event = event || window.event;
				var x = event.clientX - l;
				var y = event.clientY - t;
				$('.chatbox').css({
					left:x,
					top:y
				})
			})
			
		})
	$('.chat-up').mouseup(function(){
			$('body').off("mousemove mouseup")
	})
})
$(window).ready(function(){
	var a = 1;
	var timer = 0;
	$('#banner li').eq(a-1).css({'background':'#555252'})
	autos();
	$('#banner').mouseout (function(){
		$('#pre').css({'display':'none'})
		$('#next').css({'display':'none'})
		autos();
	})
	$('#banner').mouseover (function(){
		
		$('#pre').css({'display':'block'})
		$('#next').css({'display':'block'})
		clearInterval(timer);
	}) 
	
	$('#pre').click ( function(){
		a--;

		if(a == 0){
			a = 3;
		}
		move();
	})
	$('#next').click (function(){
		a++;
		if(a == 4){
			a = 1;
		}
		move();
	})
	for(var j = 0;j<$('#banner li').length;j++){
		
		$('#banner li').eq(j).click (function(){
			a = $(this).index()+1;
			move();
		})
	}
	function autos (){
		timer = setInterval(function(){
			a++;
			if(a == 4){
				a = 1;
			}
			move();
		},1500)
	}
	function move(){
		for(var i = 0;i<$('#banner li').length;i++){
			$('#banner li').eq(i).css({'background':'#ccc'})
		}
		$('#banner li').eq([a-1]).css({'background':'#555252'})
		$('#img')[0].src = 'img/banner-'+a+'.jpg';
	}
})