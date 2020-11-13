let todoList = [];

	function renderTask() {
	todoList.forEach(function(item){
		let taskInfo = item.text;
		$('.list-item').append($('<div>', {
	'class': 'newItem',		
    'text': taskInfo,
		}));
		
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
	$('input').val('');
	$('.list-item').empty();
	renderTask(todoList);
	$('.newItem').append($('<button>', {
			'class': 'removeBtn',
			'text': 'Delete',
		}))
		
});
	$('.list-item').on('click','button.removeBtn', function(){
  let del = $(this).closest('div');
  todoList.splice(del.index(), 1);
  del.remove();
});