$(document).ready(function(){
	var compartir = false,
		suscribir = false;

	//===== Mobile =====
	if(detectmob()){
		$("video").replaceWith("<div class='bgvid'></div>");
	}
	function detectmob() { 
		if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
		){
		 	return true;
		}else {
			return false;
		}
	}

	//===== Init Skrollr =====
	var s = skrollr.init({
		smoothScrolling: true,
		mobileDeceleration: 0.004
	});
	skrollr.menu.init(s);
	//===== Menú =====
	var visible = 0;
	if(detectmob()){
		$(".carnita nav ul").css({
			display: "none"
		});
	}
	$(".menu-trigger").on("click", function(e){
		e.preventDefault();
		if(visible == 0){
			muestraMenu();
		}
		else{
			ocultaMenu();
		}
		console.log(visible);
	});

	function muestraMenu(){
		visible = 1;
		$(".carnita nav ul").css({
			display: "block"
		});
		$(".carnita article").css({
			display: "none"
		});
	}
	function ocultaMenu(){
		visible = 0;
		$(".carnita nav ul").css({
			display: "none"
		});
		$(".carnita article").css({
			display: "block"
		});
	}
	//===== Compartir =====
	$(".compartir-trigger").on("click", function(e){
		e.preventDefault();
		compartir = !compartir;
		if(compartir){
			//TweenMax.to($(".yt"), 0.3, {alpha: 1, rotation: 0, top: "-35px", left: "0px"});
			TweenMax.to($(".fb"), 0.3, {alpha: 1, rotation: 0, top: "-8px", left: "-25px"});
			TweenMax.to($(".tw"), 0.3, {alpha: 1, rotation: 0, top: "40px", left: "-40px"});
			TweenMax.to($(".gp"), 0.3, {alpha: 1, rotation: 0, top: "80px", left: "-25px"});
			//TweenMax.to($(".vi"), 0.3, {alpha: 1, rotation: 0, top: "104px", left: "0px"});
		}else{
			TweenMax.to($(".compartir-iconos"), 0.3, {alpha: 0, rotation: 180, top: "15px", left: "35px"});
		}
	});
	$(".fb").on("click", function(e){
		e.preventDefault();
		window.open('http://www.facebook.com/sharer.php?u=Visita camaleón '+location.href, 'Compartir en Facebook', 'width=692, height=330');
		TweenMax.to($(".compartir-iconos"), 0.3, {alpha: 0, rotation: 180, top: "15px", left: "35px"});
	});
	$(".tw").on("click", function(e){
		e.preventDefault();
		window.open('https://twitter.com/share?url=Visita camaleón '+location.href, 'Compartir en Twitter', 'width=692, height=330');
		TweenMax.to($(".compartir-iconos"), 0.3, {alpha: 0, rotation: 180, top: "15px", left: "35px"});
	});
	$(".gp").on("click", function(e){
		e.preventDefault();
		window.open('https://plus.google.com/share?url='+encodeURIComponent(location.href), 'Compartir en Twitter', 'width=692, height=330');
		TweenMax.to($(".compartir-iconos"), 0.3, {alpha: 0, rotation: 180, top: "15px", left: "35px"});
	});
	TweenMax.set($(".compartir-iconos"), {opacity:0});

	//===== Social Networks =====
	$(".seguir-trigger").on("click", function(e){
		e.preventDefault();
		var currentIndex = $(e.target).index();
		$(".siguenos-content > img").css({display: 'none'});
		$(".siguenos-content > img").eq(currentIndex).css({display: 'block'});
		TweenMax.to($(".siguenos-content"), 0.3, {left: "-235px"});
	});
	$(".siguenos-content").on("click", function(e){
		seguir = false;
		TweenMax.to($(".siguenos-content"), 0.3, {left: "105px"});
	});

	//===== Suscribe =====
	$(".suscribir-trigger").on("click", function(e){
		e.preventDefault();
		var currentIndex = $(e.target).index();
		$(".suscribir-formulario form").removeClass();
		$(".suscribir-formulario form").addClass("secc"+currentIndex);
		TweenMax.to($(".suscribir-formulario form"), 0.3, {height: "190px"});
	});
	$(".suscribir-formulario").on("click", function(e){
		e.preventDefault();
		TweenMax.to($(".suscribir-formulario form"), 0.3, {height: "0px"});
	});
	TweenMax.set($(".suscribir-formulario form"), {height:0});

	//===== Filtro =====
	$(".squarebox input").on("change", function(e){
		$(".squarebox").each(function(index){
			subcat = $(this).data("filter");
			if($(this).children("input").is(":checked")){
	    		$('.'+subcat).show('slow');
    		}else{
    			$('.'+subcat).hide('slow');
    		}
    	});
	});
	$(".buscar").on("keyup", function(e){
		var keyword = $(".buscar").val();
		if(keyword.length >= 2){
			$("#locations li").each(function(){
				if($(this).attr("class").indexOf(keyword) > -1){
					$(this).show("slow");
				}else{
					$(this).hide("slow");
				}
			});
		}
	});
})