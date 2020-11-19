let todoList = [];

	function getTemplate(text, id) {
		return `
			<div class="todo">
				<span class="todo__text">
				<input type="checkbox" class="todo__checkbox" value="${id}" name="option1">
				${text}
				</span>
				<button type="button" class="todo__button" value="${id}">
					Delete
				</button>

			</div>
		`
	}

	function renderTask(tasks) {
		$('.list').empty();
	todoList.forEach(function(item){
		let template = getTemplate(item.text, item.id);
		$('.list').append(template)
	})
}

	$('.btn').click(function(e) {
	e.preventDefault();
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
	$('.list').empty();
	renderTask(todoList)
});
	$('.list').on('click', '.todo__button', function(e) {
		e.preventDefault();
		const id = e.target.value;
		const index = todoList.indexOf((item) => item.id === Number(id));
		todoList.splice(index, 1);
		renderTask(todoList);
	});

	$('.remover').on('click', '.todo__buttonDeleteAll', function(e) {
		todoList.splice(0);
		renderTask(todoList);
	});



	$('.list').on('click', '.todo__checkbox', function (e) {
		const target = e.target;
		const id = e.target.value;
		const index = todoList.indexOf((item) => item.id === Number(id));
		if ($(target).is(':checked')) {
		todoList.map((index, item) => item.completed = true);
		$(target).parent().css({
			'color': 'red',
			'font-weight': 'bold'
	})
		console.log(true);
	} else {
		todoList.map(index, (item) => item.completed = false);
		$(target).parent().css({
			'color': '#000',
			'font-weight': 'normal'
	})
		console.log(false);
	}
	})
	
	$('.remover').on('click', '.todo__buttonSelect', function(e) {	
		 
		 $('.todo__checkbox').each(function() { 
		this.checked = true;
		todoList.map((item) => item.completed = true);
		$('.list').parent().css({
			'color': 'red',
			'font-weight': 'bold'
	})
	})})
	$('.remover').on('click', '.todo__buttonUnSelect', function(e) {	
		 $('.todo__checkbox').each(function() { 
			this.checked = false;
		 $('.list').parent().css({
			'color': '#000',
			'font-weight': 'normal'
	})
	})})