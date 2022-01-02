// const $toggleAll = document.querySelector(".toggle-all");
// const $newTodo = document.querySelector(".new-todo");
// const $todoList = document.querySelector(".todo-list");
// const $main = document.querySelector(".main");
// const $footer = document.querySelector(".footer");
// const $todoCount = document.querySelector(".todo-count");
// const $filters = document.querySelector(".filters");
// const $clearCompleted = document.querySelector(".clear-completed");

// /**
//  * @typedef {Object} Todo
//  * @property {number} id
//  * @property {string} content
//  * @property {boolean} completed
//  */

// /** @typedef {'all'|'active'|'completed'} Filter */

// /** @type {Todo[]} */
// let todos = [];
// /** @type {Filter} */
// let currentFilter = "all";

// const render = () => {
//   // 상태가 3가지가 있다. all,active,completed 를 상태로 관리한다.
//   // 얘네들이 클릭이 되면 all을 변경해준다.
//   const _todos = todos.filter((todo) =>
//     currentFilter === "completed"
//       ? todo.completed
//       : currentFilter === "active"
//       ? !todo.completed
//       : true
//   );

//   // complete가 들어오면 todo.completed가 true인 애들만 return 해주겟다.
//   $todoList.innerHTML = _todos
//     .map(
//       ({ id, content, completed }) => `
//         <li data-id="${id}">
//           <div class="view">
//             <input type="checkbox" class="toggle" ${
//               completed ? "checked" : ""
//             }/>
//             <label>${content}</label>
//             <button class="destroy"></button>
//           </div>
//           <input class="edit" value="${content}" />
//         </li>`
//     )
//     .join("");

//   // todo의 갯수가 0이면 .main, .footer 요소를 비표시한다.
//   [$main, $footer].forEach(($el) =>
//     $el.classList.toggle("hidden", todos.length === 0)
//   );

//   const activeTodos = todos.filter((todo) => !todo.completed);

//   // activeTodos의 갯수가 0 또는 1개면 'n item left' todo의 갯수가 2개 이상이면 'n items left'
//   // $todoCount.textContent =
//   //   activeTodos.length > 1
//   //     ? `${activeTodos.length} items left`
//   //     : `${activeTodos.length} item left`;
//   $todoCount.textContent = `${activeTodos.length} ${
//     activeTodos.length > 1 ? "items" : "item"
//   } left`;

//   // completed 상태인 todo가 없으면 비표시한다
//   const completedTodos = todos.filter((todo) => todo.completed);
//   $clearCompleted.classList.toggle("hidden", completedTodos.length === 0);
// };

// /** @type {(_todos: Todo[]) => void} */
// const setTodos = (_todos) => {
//   todos = _todos;
//   console.log("[todos]", todos);

//   render();
// };

// /** @type {(filter: Filter) => void} */
// const setFilter = (filter) => {
//   currentFilter = filter;
//   render();
// };

// const fetchTodos = () => {
//   const xhr = new XMLHttpRequest();
//   // 이벤트를 발생시킬 수 있는 객체
//   xhr.open("GET", "/todos");
//   // localhost:9000/todos 인데 뗄 수 있는 경우는 same origin 일 때만 가능하다.
//   xhr.send();
//   // 이건 요청만 하는 것이다.

//   // xhr.onreadystatechange 혹은 xhr.onload
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       // 성공했을 때,
//       console.log(json.parse(xhr.response));
//       // 근데 서버가 우리에게 문자열을 준다. 그래서 json.parse를 해주어야 한다.
//     } else {
//       console.error(xhr.status);
//     }
//     // status는 기본적으로 서버가 상태 코드를 준다.
//     // 200번대가 있고, 400번대가 있다. 200번대가 성공
//   };
// };

// const toggleAllTodos = (completed) => {
//   setTodos(todos.map((todo) => ({ ...todo, completed })));
// };

// const generateId = () => Math.max(...todos.map((todo) => todo.id), 0) + 1;

// const addTodo = (content) => {
//   // setTodos([{ id: generateId(), content, completed: false }, ...todos]);
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "/todos"); //  /todos는 상대경로 (same origin일때만 https~생략가능)
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.send(JSON.stringify({ id: generateId(), content, completed: false }));

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response));
//       setTodos(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status);
//     }
//   };
// };

// const toggleTodo = (id) => {
//   setTodos(
//     todos.map((todo) =>
//       todo.id === +id ? { ...todo, completed: !todo.completed } : todo
//     )
//   );
// };

// const updateTodoContent = (id, content) => {
//   setTodos(
//     todos.map((todo) => (todo.id === +id ? { ...todo, content } : todo))
//   );
// };

// const removeTodo = (id) => {
//   setTodos(todos.filter((todo) => todo.id !== +id));
// };

// const removeAllCompletedTodos = () => {
//   setTodos(todos.filter((todo) => !todo.completed));
// };

// // Event bindings
// // initial rendering
// window.addEventListener("DOMContentLoaded", fetchTodos);

// // toggle all todo completed
// $toggleAll.onchange = (e) => {
//   toggleAllTodos(e.target.checked);
// };

// // add todo
// $newTodo.onkeyup = (e) => {
//   if (e.key !== "Enter") return;

//   const content = e.target.value.trim();
//   if (content !== "") addTodo(content);
//   e.target.value = "";
// };

// // toggle todo completed
// $todoList.onchange = (e) => {
//   // input text에서 change 이벤트가 발생하는 경우도 있다.
//   if (!e.target.classList.contains("toggle")) return;
//   // toggleTodo(e.target.parentNode.parentNode.dataset.id);
//   // https://caniuse.com/?search=closest
//   toggleTodo(e.target.closest("li").dataset.id);
// };

// // edit mode
// $todoList.ondblclick = (e) => {
//   if (!e.target.matches(".view > label")) return;
//   // e.target.parentNode.parentNode.classList.add('editing');
//   e.target.closest("li").classList.add("editing");
// };

// // update todo content
// $todoList.onkeyup = (e) => {
//   if (e.key !== "Enter" || !e.target.classList.contains("edit")) return;
//   updateTodoContent(e.target.closest("li").dataset.id, e.target.value);
//   // editTodoContent에 의해 rerendering되므로 .editing을 제거할 필요가 없다.
//   // e.target.closest('li').classList.remove('editing');
// };

// // remove todo
// $todoList.onclick = (e) => {
//   if (!e.target.classList.contains("destroy")) return;
//   removeTodo(e.target.closest("li").dataset.id);
// };

// // filter todos
// $filters.onclick = (e) => {
//   if (!e.target.matches(".filters > li > a")) return;

//   $filters.querySelectorAll("a").forEach(($filter) => {
//     $filter.classList.toggle("selected", $filter === e.target);
//   });
//   // $filters.querySelector('a.selected').classList.remove('selected');
//   // e.target.classList.add('selected');

//   setFilter(e.target.id);
// };

// // remove all completed todos
// $clearCompleted.onclick = removeAllCompletedTodos;

// import request from "./request.js";
import request from "./promise.js";

// console.log(request);
// get과 post 가 넘어왔다는 것을 알 수 있다.

const $toggleAll = document.querySelector(".toggle-all");
const $newTodo = document.querySelector(".new-todo");
const $todoList = document.querySelector(".todo-list");
const $main = document.querySelector(".main");
const $footer = document.querySelector(".footer");
const $todoCount = document.querySelector(".todo-count");
const $filters = document.querySelector(".filters");
const $clearCompleted = document.querySelector(".clear-completed");

// 공통 모듈이 필요하다.

/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} content
 * @property {boolean} completed
 */

/** @typedef {'all'|'active'|'completed'} Filter */

/** @type {Todo[]} */
let todos = [];
/** @type {Filter} */
let currentFilter = "all";

const render = () => {
  const _todos = todos.filter((todo) =>
    currentFilter === "completed"
      ? todo.completed
      : currentFilter === "active"
      ? !todo.completed
      : true
  );

  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) => `
        <li data-id="${id}">
          <div class="view">
            <input type="checkbox" class="toggle" ${
              completed ? "checked" : ""
            }/>
            <label>${content}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${content}" />
        </li>`
    )
    .join("");

  // todo의 갯수가 0이면 .main, .footer 요소를 비표시한다.
  [$main, $footer].forEach(($el) =>
    $el.classList.toggle("hidden", todos.length === 0)
  );

  const activeTodos = todos.filter((todo) => !todo.completed);

  // activeTodos의 갯수가 0 또는 1개면 'n item left' todo의 갯수가 2개 이상이면 'n items left'
  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? "items" : "item"
  } left`;

  // completed 상태인 todo가 없으면 비표시한다
  const completedTodos = todos.filter((todo) => todo.completed);
  $clearCompleted.classList.toggle("hidden", completedTodos.length === 0);
};

/** @type {(_todos: Todo[]) => void} */
const setTodos = (_todos) => {
  todos = _todos;
  console.log("[todos]", todos);

  render();
};

/** @type {(filter: Filter) => void} */
const setFilter = (filter) => {
  currentFilter = filter;
  render();
};

const fetchTodos = () => {
  // request.get("/todos", setTodos);
  request.request("GET", "/todos", setTodos);

  // const xhr = new XMLHttpRequest();
  // xhr.open("GET", "/todos");
  // xhr.send();

  // xhr.onload = () => {
  //   if (xhr.status === 200) {
  //     console.log(JSON.parse(xhr.response));
  //     setTodos(JSON.parse(xhr.response));
  //   } else {
  //     console.error(xhr.status);
  //   }
  // };

  /* 프로미스로 호출
  request.get('todos').then(setTodos).catch(()=>{})
  원래 .then(()=>{}) 이지만, setTodos 가 자체적으로 함수기 때문에 괜찮다
  */
};

const toggleAllTodos = (completed) => {
  /*
  PATCH http://localHost:9000/todos/4
  Content-Type: application/json

  {
    "completed" : true
  }
  */
  // request.patch("/todos", setTodos, { completed });
  request.request("PATCH", "/todos", setTodos, { completed });
  // setTodos(todos.map((todo) => ({ ...todo, completed })));
};

const generateId = () => Math.max(...todos.map((todo) => todo.id), 0) + 1;

const addTodo = (content) => {
  // request.post("todos", setTodos, {
  //   id: generateId(),
  //   content,
  //   completed: false,
  // });
  request.request("POST", "/todos", setTodos, {
    id: generateId(),
    content,
    completed: false,
  });
  // setTodos([{ id: generateId(), content, completed: false }, ...todos]);

  // const xhr = new XMLHttpRequest();
  // xhr.open("POST", "/todos");
  // xhr.setRequestHeader("content-type", "application/json");
  // xhr.send(JSON.stringify({ id: generateId(), content, completed: false }));

  // xhr.onload = () => {
  //   if (xhr.status === 200) {
  //     console.log(JSON.parse(xhr.response));
  //     setTodos(JSON.parse(xhr.response));
  //   } else {
  //     console.error(xhr.status);
  //   }
  // };
};

const toggleTodo = (id) => {
  // 아이디를 가지고 completed 를 가져올 수 있는 방법이 있나?
  // patch를 통해서...
  //const {completed}= todos.find(todo => todo.id === +id)
  // request.patch(`/todos/${id}` ,setTodos,{completed : !completed}) 로 넘겨주면 된다.

  setTodos(
    todos.map((todo) =>
      todo.id === +id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const updateTodoContent = (id, content) => {
  // 여기도 patch 다.
  // request.patch(`/todos/${id}`,setTodos,{content});
  setTodos(
    todos.map((todo) => (todo.id === +id ? { ...todo, content } : todo))
  );
};

const removeTodo = (id) => {
  // request.remove(`/todos/${id}`, setTodos);
  request.request("DELETE", `/todos/${id}`, setTodos);
  // setTodos(todos.filter((todo) => todo.id !== +id));
};

const removeAllCompletedTodos = () => {
  // 일관 토글이다. remove 함수주고, ('/todos?completed=true',setTodos);
  setTodos(todos.filter((todo) => !todo.completed));
};

// Event bindings
// initial rendering
window.addEventListener("DOMContentLoaded", fetchTodos);

// toggle all todo completed
$toggleAll.onchange = (e) => {
  toggleAllTodos(e.target.checked);
};

// add todo
$newTodo.onkeyup = (e) => {
  if (e.key !== "Enter") return;

  const content = e.target.value.trim();
  if (content !== "") addTodo(content);
  e.target.value = "";
};

// toggle todo completed
$todoList.onchange = (e) => {
  // input text에서 change 이벤트가 발생하는 경우도 있다.
  if (!e.target.classList.contains("toggle")) return;
  // toggleTodo(e.target.parentNode.parentNode.dataset.id);
  // https://caniuse.com/?search=closest
  toggleTodo(e.target.closest("li").dataset.id);
};

// edit mode
$todoList.ondblclick = (e) => {
  if (!e.target.matches(".view > label")) return;
  // e.target.parentNode.parentNode.classList.add('editing');
  e.target.closest("li").classList.add("editing");
};

// update todo content
$todoList.onkeyup = (e) => {
  if (e.key !== "Enter" || !e.target.classList.contains("edit")) return;
  updateTodoContent(e.target.closest("li").dataset.id, e.target.value);
  // editTodoContent에 의해 rerendering되므로 .editing을 제거할 필요가 없다.
  // e.target.closest('li').classList.remove('editing');
};

// remove todo
$todoList.onclick = (e) => {
  if (!e.target.classList.contains("destroy")) return;
  removeTodo(e.target.closest("li").dataset.id);
};

// filter todos
$filters.onclick = (e) => {
  if (!e.target.matches(".filters > li > a")) return;

  $filters.querySelectorAll("a").forEach(($filter) => {
    $filter.classList.toggle("selected", $filter === e.target);
  });
  // $filters.querySelector('a.selected').classList.remove('selected');
  // e.target.classList.add('selected');

  setFilter(e.target.id);
};

// remove all completed todos
$clearCompleted.onclick = removeAllCompletedTodos;
