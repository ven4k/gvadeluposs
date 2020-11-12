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
<<<<<<< HEAD
	if(value === ''){
	return console.log('task value = none');
	}else{
		todoList.push(task);
	}
	console.log(todoList);
=======
	todoList.push(task);
	console.log(task);
>>>>>>> 84142421d3496b33cd4f53da2dfc257ca3f575e4
	$('input').val('');
	$('.list-item').empty();
	renderTask(todoList);
<<<<<<< HEAD
	
=======
	$('.list-item').append(task.text);
    	$('.list-item').wrapInner(`<div class="newItem"></div>`);
>>>>>>> 84142421d3496b33cd4f53da2dfc257ca3f575e4
});
	$('.removeBtn').click(function() {
		$('.newItem').closest().remove();
	});