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
	todoList.push(task);
	console.log(task);
	$('input').val('');
	renderTask(todoList);
	$('.list-item').append(task.text);
    	$('.list-item').wrapInner(`<div class="newItem"></div>`);
});

