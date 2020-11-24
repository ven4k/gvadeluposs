let todoList = [];

	function getTemplate(text, id, completed) {
		return `
			<div class="todo">
				<span class="todo__text" id="content">
				<input type="checkbox" class="todo__checkbox" value="${id}" name="option1" checked="${completed}">
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
		let template = getTemplate(item.text, item.id, item.completed);
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



	$('.list').on('change', '.todo__checkbox', function (e) {
		const access = e.target;
		const id = e.target.value
		if ($('.todo__checkbox').is(':checked')) {
		$(access).parent().addClass('style');
		todoList.forEach(function(item){
			if(item.id === Number(id)){
				item.completed = !item.completed;
			}
		})
		console.log(true);
	} else {
		$('.todo__checkbox').parent().removeClass('style');
		console.log(false);
	}
	})


	$('.remover').on('click', '.todo__buttonSelect', function(e) {	
		 
		 $('#content .todo__checkbox').prop('checked', true);
			$('.todo__checkbox').parent().addClass('style'); 
			todoList.forEach(function(item){	
				item.completed = !item.completed;	
			})
		console.log('all true');
	})
	
	$('.remover').on('click', '.todo__buttonUnSelect', function(e) {	 
		
		 $('#content .todo__checkbox').prop('checked', false);
			$('.todo__checkbox').parent().removeClass('style'); 
			todoList.forEach(function(item){	
				item.completed = !item.completed;	
			})
		console.log('all false');

	})

	
		$('.remover').on('click', '.todo__buttonDeleteCompleted', function(e){ 
		todoList = todoList.filter(item => item.completed !== true);
		renderTask(todoList);		
	})
		
	