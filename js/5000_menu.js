// $(function() 
// {
(function($) {

    "use strict";

	$("#panel_projects").hide();

	$("#btn_logo img").on("click", function(){
	    $("#btn_logo").toggleClass("active");
	    $("#panel_projects").toggle();
	});
	$("#btn_logo").hover(function () {
	        $("#btn_logo img").css("opacity", "1.0");
	}, 
    function () {
        if($("#btn_logo").is(".active")) {
            $("#btn_logo img").css("opacity", "1.0");
        } else {
            $("#btn_logo img").css("opacity", "0.6");
        }
    });

	$("#btn_0").on("click", function(){
	    $("#btn_0").addClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
    $("#btn_1").on("click", function(){
	    $("#btn_1").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	// $("#btn_1").hover(function () {
	//         $("#btn_1 h1").css("opacity", "1.0");
	// }, 
    // function () {
    //     if($("#btn_1").is(".active")) {
    //         $("#btn_1 h1").css("opacity", "1.0");
    //     } else {
    //         $("#btn_1 h1").css("opacity", "0.6");
    //     }
    // });

    $("#btn_2").on("click", function(){
	    $("#btn_2").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_3").on("click", function(){
	    $("#btn_3").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_4").on("click", function(){
	    $("#btn_4").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_5").on("click", function(){
	    $("#btn_5").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_6").on("click", function(){
	    $("#btn_6").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_7").on("click", function(){
	    $("#btn_7").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_8").removeClass("active");
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_8").on("click", function(){
	    $("#btn_4").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_9").on("click", function(){
	    $("#btn_9").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");  
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_10").on("click", function(){
	    $("#btn_10").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");  
	    $("#btn_9").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_11").on("click", function(){
	    $("#btn_11").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");  
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_12").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#btn_12").on("click", function(){
	    $("#btn_12").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");  
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_url").removeClass("active");
	});
	$("#urlclick").on("click", function(){
	    $("#btn_url").addClass("active");
	    $("#btn_0").removeClass("active");
	    $("#btn_1").removeClass("active");
	    $("#btn_2").removeClass("active");
	    $("#btn_3").removeClass("active");
	    $("#btn_4").removeClass("active");
	    $("#btn_5").removeClass("active");
	    $("#btn_6").removeClass("active");
	    $("#btn_7").removeClass("active");
	    $("#btn_8").removeClass("active");  
	    $("#btn_9").removeClass("active");
	    $("#btn_10").removeClass("active");
	    $("#btn_11").removeClass("active");
	    $("#btn_12").removeClass("active");
	});
	$("#btn_url").keypress(function(e){
        var key = e.which;
        if (key == 13) {
        	$("#btn_url").addClass("active");
		    $("#btn_1").removeClass("active");
		    $("#btn_2").removeClass("active");
		    $("#btn_3").removeClass("active");
		    $("#btn_4").removeClass("active");
		    $("#btn_5").removeClass("active");
		    $("#btn_6").removeClass("active");
		    $("#btn_7").removeClass("active");
		    $("#btn_8").removeClass("active");  
		    $("#btn_9").removeClass("active");
		    $("#btn_10").removeClass("active");
		    $("#btn_11").removeClass("active");
		    $("#btn_12").removeClass("active");
        } 
    });




	/*
	$("#infoBox")
	.css( 
	{
	   "background":"rgba(255,255,255,0.5)"
	})
	.dialog({ autoOpen: false, 
		show: { effect: 'fade', duration: 500 },
		hide: { effect: 'fade', duration: 500 } 
	});
	
	$("#infoButton")
       .text("") 
	.css(
	{ "z-index":"2",
	  "background":"rgba(0,0,0,0)", "opacity":"0.9", 
	  "position":"absolute", "top":"4px", "left":"4px"
	}) 
    .append("<img width='32' height='32' src='images/icon-info.png'/>")
    .button()
	.click( 
		function() 
		{ 
			$("#infoBox").dialog("open");
		});
	*/
})(jQuery); 
// });