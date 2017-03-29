function init() {

    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

	$("#volcan").hover(function () {
    	$(this).addClass('shake-hard shake-constant');
    	$(this).removeClass('shake-slow shake-constant');
	}, function () {
    	$(this).removeClass('shake-hard shake-constant');
    	$(this).addClass('shake-slow shake-constant');
	});

	$("#volcan").click(function(){
		$( "#lapin-1" ).animate({ 
			"left": Math.floor(Math.random() * w),
			"bottom":Math.floor(Math.random() * h)
		}, "slow" );

		$( "#lapin-2" ).animate({ 
			"left": Math.floor(Math.random() * w),
			"bottom":Math.floor(Math.random() * h)
		}, "slow" );

		$( "#lapin-3" ).animate({ 
			"left": Math.floor(Math.random() * w),
			"bottom":Math.floor(Math.random() * h)
		}, "slow" );

		$( "#lapin-4" ).animate({ 
			"left": Math.floor(Math.random() * w),
			"bottom":Math.floor(Math.random() * h)
		}, "slow" );

	});

}