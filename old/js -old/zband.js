
$(document).ready(function() {
	
	$(".attachment-full").click(function(){
		$(this).toggle(1000, function(){
			$(this).toggle(1000);
		});		
	});

});