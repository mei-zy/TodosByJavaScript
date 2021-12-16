const $new_todo = document.querySelector('.new-todo');
const $todo_list = document.querySelector('.todo-list');

function count_item() {
  const $todo_count = document.createElement('span');
  $todo_count.setAttribute('class', 'todo-count');
  $todo_count.textContent = `${$todo_list.childElementCount} item left`;
  document.querySelector('.footer').replaceChild($todo_count, document.querySelector('.todo-count'));
}
$new_todo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  // const $li = document.createElement('li');
  // const $div = document.createElement('div');
  // $div.setAttribute('class', 'view');

  // const $input = document.createElement('input');
  // $input.setAttribute('type', 'checkbox');
  // $input.setAttribute('class', 'toggle');
  // $div.appendChild($input);

  // $div.appendChild(document.createElement('label')).appendChild(document.createTextNode(e.target.value));

  // const $btn = document.createElement('button');
  // $btn.setAttribute('class', 'destroy');
  // $div.appendChild($btn);

  // const $input_edit = document.createElement('input');
  // $input_edit.setAttribute('class', 'edit');
  // $input_edit.setAttribute('value', e.target.value);

  // $li.appendChild($div);
  // $li.appendChild($input_edit);
  // $todo_list.appendChild($li);

  $todo_list.innerHTML += `
  <li data-id=${$todo_list.childElementCount + 1}>
     <div class="view">
        <input type="checkbox" class="toggle" />
        <label>${e.target.value}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value=${e.target.value} />
  </li>`;

  // todo의 갯수 변경
  count_item();
};

// 더블클릭시, 수정할 수 있게끔
// const $edit_input = document.querySelector('div[class=view]>label');
// console.log($edit_input);
// $edit_input.dblclick = e => {
//   console.log('dblclick');
// };

// 버튼 클릭시 todo 삭제
$todo_list.onclick = e => {
  // 발생하는 이벤트
  if (e.target.getAttribute('class') === 'destroy') {
    $todo_list.removeChild(e.target.parentNode.parentNode);
    count_item();
  }
};

// 라벨 클릭시, 토글 전체 취소
const $toggle_all = document.querySelector('#toggle-all');
$toggle_all.onclick = e => {
  $input_checked = document.querySelectorAll('.toggle');

  let check_count = 0;
  for (let toggle_input of $input_checked) toggle_input.checked ? check_count++ : false;

  if (check_count < $todo_list.childElementCount) {
    $input_checked.forEach(element => {
      if (!element.checked) element.checked = true;
    });
  } else {
    $input_checked.forEach(element => {
      if (element.checked) element.checked = false;
    });
  }
};

// $checked

// completed 된 것들은 삭제해준다.
const $del_completed = document.querySelector('.clear-completed');
console.log($del_completed);
$del_completed.onclick = e => {
  // 발생하는 이벤트
};
