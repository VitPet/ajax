$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "https://phpsend.herokuapp.com/",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you for message!");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});