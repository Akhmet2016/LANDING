$(document).ready(function() {

	$('.popup').magnificPopup();

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: $(this).serialize()
		}).done(function() {
			alert("Ждите звонка! Скоро перезвоним!");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});

	$("#communication").submit(function() {
		$.ajax({
			type: "POST",
			url: "communication.php", //Change
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжимся");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});
	
});