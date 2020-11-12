let todoList = [];

	function renderTask() {
	todoList.forEach(function(item){
		let taskInfo = item.text;
		$('.list-item').append($('<div>', {
	'class': 'newItem',		
    'text': taskInfo,
		}));
		$('.newItem').append($('<button>', {
			'class': 'removeBtn',
			'text': 'Delete',
		}))
		})}

	$('.btn').click(function() {
	let value = $('input').val();
	let task = {
		id: Date.now(),
		text: value,
		completed: false,
	}
	if(value === ''){
	return console.log('task value = none');
	}else{
		todoList.push(task);
	}
	console.log(todoList);
	todoList.push(task);
	console.log(task);
	$('input').val('');
	$('.list-item').empty();
	renderTask(todoList);

	

	$('.list-item').append(task.text);
    	$('.list-item').wrapInner(`<div class="newItem"></div>`);
});
	$('.removeBtn').click(function() {
		$('.newItem').closest().remove();
	});