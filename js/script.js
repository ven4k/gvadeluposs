let info = $('.btn').click(function() {
	let q = $('input').val();
 	$('.spisok-item').append(q);
 	if($('input').val() !== ''){
 	 	$('.remove-btn').css('display', 'block');
    	$('.spisok-item').wrapInner(`<div class="newItem"></div>`);
    	
    }
	$('input').val('');
});
	
let remove = $('.remove-btn').click(function() {
	$('.spisok-item').empty();
	$('.remove-btn').css('display', 'none');
});


