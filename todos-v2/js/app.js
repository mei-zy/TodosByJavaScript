// const $new_todo = document.querySelector('.new-todo');
// const $todo_list = document.querySelector('.todo-list');

// function count_item() {
//   const $todo_count = document.createElement('span');
//   $todo_count.setAttribute('class', 'todo-count');
//   $todo_count.textContent = `${$todo_list.childElementCount} item left`;
//   document.querySelector('.footer').replaceChild($todo_count, document.querySelector('.todo-count'));
// }
// $new_todo.onkeyup = e => {
//   if (e.key !== 'Enter') return;

//   $todo_list.innerHTML += `
//   <li data-id=${$todo_list.childElementCount + 1}>
//      <div class="view">
//         <input type="checkbox" class="toggle" />
//         <label>${e.target.value}</label>
//         <button class="destroy"></button>
//     </div>
//     <input class="edit" value=${e.target.value} />
//   </li>`;

//   // todo의 갯수 변경
//   count_item();
// };

// // 더블클릭시, 수정할 수 있게끔
// $todo_list.ondblclick = e => {
//   if (e.target.nodeName !== 'LABEL') return;
//   e.target.parentNode.parentNode.setAttribute('class', 'editing');

//   // const edit_word = e.target.textContent;
//   const $edit = document.querySelector(`input[value=${e.target.textContent}]`);

//   $edit.onkeyup = edite => {
//     console.log(edite.key);
//     if (edite.key !== 'Enter') return;
//     e.target.textContent = edite.target.value;
//   };
//   // e.target.parentNode.parentNode.setAttribute('class', '');
// };

// // 버튼 클릭시 todo 삭제
// $todo_list.onclick = e => {
//   // 발생하는 이벤트
//   if (e.target.getAttribute('class') === 'destroy') {
//     $todo_list.removeChild(e.target.parentNode.parentNode);
//     count_item();
//   }
// };

// // 라벨 클릭시, 토글 전체 취소
// const $toggle_all = document.querySelector('#toggle-all');

// $toggle_all.onclick = e => {
//   const $input_checked = document.querySelectorAll('.toggle');
//   let check_count = 0;
//   for (let toggle_input of $input_checked) toggle_input.checked ? check_count++ : false;

//   if (check_count < $todo_list.childElementCount) {
//     $input_checked.forEach(element => {
//       if (!element.checked) element.checked = true;
//     });
//   } else {
//     $input_checked.forEach(element => {
//       if (element.checked) element.checked = false;
//     });
//   }
// };

// const $filters = document.querySelector('.filters');
// $filters.onclick = e => {
//   const $input_checked = document.querySelectorAll('.toggle');
//   if (e.target.getAttribute('id') === 'all') {
//     console.log('all');
//   }
//   // active
//   else if (e.target.getAttribute('id') === 'active') {
//     [...$input_checked]
//       .filter(element => element.checked)
//       .map(element => element.parentNode.parentNode.setAttribute('class', 'hidden'));
//   } else if (e.target.getAttribute('id') === 'completed') {
//     [...$input_checked]
//       .filter(element => !element.checked)
//       .map(element => element.parentNode.parentNode.setAttribute('class', 'hidden'));
//   }
//   // completed
// };

// // completed 된 것들은 삭제해준다.
// // const $del_completed = document.querySelector('.clear-completed');
// // $del_completed.onclick = e => {
// //   $input_checked = document.querySelectorAll('.toggle');

// //   // 필터해주어야 한다.
// //   // for (let toggle_input of $input_checked) toggle_input.checked ?
// // };

// const $clearButton = document.querySelector('.clear-completed');
// $clearButton.addEventListener('click', () => {
//   const $input_checked = document.querySelectorAll('.toggle');
//   $input_checked.forEach(ele => {
//     // if (todo.querySelector('.toggle:checked')) {
//     //   $todoList.removeChild(todo);
//     // }
//     console.log(ele);
//   });
// });

let todos = [];
const $newTodo = document.querySelector('.new-todo');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');
// handler
const render = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) => `
    <li data-id=${id}>
       <div class="view">
          <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
          <label>${content}</label>
          <button class="destroy"></button>
      </div>
    </li>`
    )
    .join('');

  $todoCount.textContent = `${todos.length} item left`;
};

const setTodos = todo => {
  todos = todo;
  render();
};
const addTodo = content => {
  setTodos([{ id: Math.max(...todos.map(todo => todo.id), 0) + 1, content, completed: false }, ...todos]);
};
const checkCompleted = () => todos.filter(todo => !todo.completed).length;
const toggleCheckbox = () => {
  checkCompleted()
    ? setTodos(
        todos.map(todo => {
          todo.completed = true;
          return todo;
        })
      )
    : setTodos(
        todos.map(todo => {
          todo.completed = false;
          return todo;
        })
      );
};
const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== Number(id)));
  render();
};
// 토글되면 상태 변경시켜주기
const toggleCompleted = id => {
  setTodos(
    todos.map(todo => {
      if (todo.id === Number(id)) todo.completed ? (todo.completed = false) : (todo.completed = true);
      return todo;
    })
  );
  // console.log(todos);
};
const removeCompleted = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

// 입력받았을 때
$newTodo.onkeyup = ({ key }) => {
  const content = $newTodo.value.trim();
  if (key !== 'Enter' || content === '') return;
  addTodo(content);
  $newTodo.value = '';
};
$toggleAll.onclick = e => toggleCheckbox();
// 삭제할 때
$todoList.onclick = e => {
  if (e.target.getAttribute('class') !== 'destroy') return;

  removeTodo(e.target.parentNode.parentNode.getAttribute('data-id'));
};
// 체크로 변경 시킬때
$todoList.onchange = e => toggleCompleted(e.target.parentNode.parentNode.getAttribute('data-id'));
// completed 된 것을 삭제
$clearCompleted.onclick = e => {
  removeCompleted();
};
