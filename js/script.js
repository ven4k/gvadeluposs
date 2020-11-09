let todoList = [];

function renderTask() {
	todoList.forEach(function(task) {
	todoList.reverse().splice(0, todoList.length);

})};


	$('.btn').click(function() {
	let value = $('input').val();
	let task = {
		id: Date.now(),
		text: value,
		completed: false,
	}
	if(task.value !== ''){
	todoList.push(task);
	}
	console.log(task);
	$('input').val('');
	renderTask(todoList);
	if(task.text !== ''){
	$('.list-item').append(task.text);
    $('.list-item').wrapInner(`<div class="newItem"></div>`);
}});

