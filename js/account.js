$(document).ready(function(){
	var choose_dur = $(".tl-recent");
	var choose_type = $(".tl-all-type");
	var more = $("#tl-more-condition");
	var fliter_btn = $("#tl-fliter-btn");
	var current_tab = $(".tl-current");
	choose_dur.click(function(event){
		var input = $(".tl-recent input[type=text]");
		var ul = $(".tl-recent ul");
		
		switch(event.target.nodeName.toUpperCase()){
			case "INPUT":
				if(ul.css('display')==='none'){
					ul.css('display','block');
					choose_dur.children("span").css('background-position','-120px -72px');
				}else{
					ul.css('display','none');
					choose_dur.children("span").css('background-position','-108px -72px');
				}

				break;
			case "SPAN":
				if(ul.css('display')==='none'){
					ul.css('display','block');
					choose_dur.children("span").css('background-position','-120px -72px');
				}else{
					ul.css('display','none');
					choose_dur.children("span").css('background-position','-108px -72px');
				}
				break;
			case "LI":
				input.val(event.target.innerHTML);
				ul.css('display','none');
				choose_dur.children("span").css('background-position','-108px -72px');
		};
	});
	choose_type.click(function(event){
		switch(event.target.nodeName.toUpperCase()){
			case "A":
				event.preventDefault();
				$(".tl-current").removeClass("tl-current");
				$(event.target).parent().addClass("tl-current");

				if($(event.target).parent()[0]===$(".tl-more")[0]){
					if($(".tl-more ul").css('display')==='none'){
						$(".tl-more ul").css('display','block');
						$(event.target).children("span").css('background-position','-132px -72px');
					}else{
						$(".tl-more ul").css('display','none');
						$(event.target).children("span").css('background-position','-144px -72px');
					}
				}else{
					// current_tab = $(event.target).text();
					$(".tl-more ul").css('display','none');
					$(".tl-more span").css('background-position','-108px -72px');
					// $.ajax({
					//     type: 'POST',
					//     url: /*这里写ajax的请求地址*/,
					//     data: {
					//     	tab:$(event.target).text();
					//     },
					//     success: function (data) {
					    	
					//     } 
					// });
				}
				break;
			case "SPAN":
				event.preventDefault();
				$(".tl-current").removeClass("tl-current");
				$(event.target).parent().parent().addClass("tl-current");
				if($(".tl-more ul").css('display')==='none'){
					$(".tl-more ul").css('display','block');
					$(event.target).css('background-position','-132px -72px');
				}else{
					$(".tl-more ul").css('display','none');
					$(event.target).css('background-position','-144px -72px');
				}
			
				break;
			case "LI":
				$(event.target).parents("li.tl-more").children("a").html($(event.target).html()+"<span class='icon'></span>");
				$(".tl-more ul").css('display','none');
				// current_tab = $(event.target).text();
				// $.ajax({
				//     type: 'POST',
				//     url: /*这里写ajax的请求地址*/,
				//     data: {
				//     	tab:$(event.target).text();
				//     },
				//     success: function (data) {
				    	
				//     } 
				// });
		};
	});
	more.click(function(event) {
		event.preventDefault();
		more.toggleClass("tl-more-bg");
		if($(".tl-fliter").css('display')==='none'){
			$(".tl-fliter").css('display','block');
		}else{
			$(".tl-fliter").css('display','none');
		}
	});
	fliter_btn.click(function(event){
		event.preventDefault();
	});
});