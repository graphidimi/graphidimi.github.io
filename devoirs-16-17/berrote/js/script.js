$('#un').hover(function(){
	$('.bloc').css('background-color', 'cyan');
	$('p').css('color', 'orange');
	$('#lent').css('background-image', 'url(images/kanye.png)');
	$('#normal').css('background-image', 'url(images/charli.png)');
	$('#rapide').css('background-image', 'url(images/e-man.png)');
	$('#hardcore').css('background-image', 'url(images/shia.png)');
});

$('#deux').hover(function(){
	$('.bloc').css('background-color', 'orange');
	$('p').css('color', 'cyan');
	$('#lent').css('background-image', 'url(images/kanye.png)');
	$('#normal').css('background-image', 'url(images/charli.png)');
	$('#rapide').css('background-image', 'url(images/e-man.png)');
	$('#hardcore').css('background-image', 'url(images/shia.png)');
});

$('#trois').hover(function(){
	$('.bloc').css('background-color', 'yellow');
	$('p').css('color', 'darkorchid');
	$('#lent').css('background-image', 'url(images/kanye.png)');
	$('#normal').css('background-image', 'url(images/charli.png)');
	$('#rapide').css('background-image', 'url(images/e-man.png)');
	$('#hardcore').css('background-image', 'url(images/shia.png)');
});

$('#quatre').hover(function(){
	$('.bloc').css('background-color', 'darkorchid');
	$('p').css('color', 'yellow');
	$('#lent').css('background-image', 'url(images/kanye.png)');
	$('#normal').css('background-image', 'url(images/charli.png)');
	$('#rapide').css('background-image', 'url(images/e-man.png)');
	$('#hardcore').css('background-image', 'url(images/shia.png)');
});

$('.vitesse').hover(function(){
	$('p').hide();
	$('#centre').css('background-image', 'url(images/isis1.png)');
	$('#un').hover(function(){
		$('#centre').css('background-image', 'url(images/isis4.png)');
	});
	$('#deux').hover(function(){
		$('#centre').css('background-image', 'url(images/isis2.png)');
	});
	$('#trois').hover(function(){
		$('#centre').css('background-image', 'url(images/isis3.png)');
	});
	$('#quatre').hover(function(){
		$('#centre').css('background-image', 'url(images/isis1.png)');
	});
});


$('#lent').hover(function(){
	$("#bound").trigger('play');
	$("#vroom").trigger('pause');
	$("#hey").trigger('pause');
	$("#doit").trigger('pause');
	$('#centre').css('animation-duration', '2.1s');
});

$('#normal').hover(function(){
	$("#vroom").trigger('play');
	$("#bound").trigger('pause');
	$("#hey").trigger('pause');
	$("#doit").trigger('pause');
	$('#centre').css('animation-duration', '0.8s');
});

$('#rapide').hover(function(){
	$("#hey").trigger('play');
	$("#bound").trigger('pause');
	$("#vroom").trigger('pause');
	$("#doit").trigger('pause');
	$('#centre').css('animation-duration', '0.4s');
});

$('#hardcore').hover(function(){
	$("#doit").trigger('play');
	$("#bound").trigger('pause');
	$("#vroom").trigger('pause');
	$("#hey").trigger('pause');
	$('#centre').css('animation-duration', '0.2s');
});