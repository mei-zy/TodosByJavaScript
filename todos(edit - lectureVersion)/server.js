// const express = require("express");

// const app = express();
// const port = 9000;

// // 목데이터다.
// const todos = [
//   { id: 3, content: "Javascript", completed: false },
//   { id: 2, content: "CSS", completed: true },
//   { id: 1, content: "HTML", completed: false },
// ];

// // express 가 static을
// // public은 루트 디렉토리
// app.use(express.static("public"));

// // json.stringfy 를 express는 자동 파싱해서 넘겨준다.

// //  /는 url 이다. get는 http 메소드다.
// // 루트 url 에 접근했을 때 무엇을 할 것인가. res
// // app.get("/", (req, res) => {
// //   res.send("<h1>hello<h1>");
// // });

// // GET / todos 로 하고, payload 방식은 무시한다. 왜냐하면 get은 payload가 필요 없다.
// app.get("/todos", (req, res) => {
//   res.send(todos);
// });

// app.use(express.json());
// app.post("/todos", (req, res) => {
//   console.log(req.body); // node.js 에서 동작하고 있기 때문에 브라우저의 console.log 가 안된다.
//   todos = [req.body, ...todos];

//   // request 의 body 에 담겨서 온다.
//   res.send(todos);
// });
// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
// // 실행시키면 cannot get 이라는 오류 메세지가 출력된다

const express = require("express");
const res = require("express/lib/response");

const app = express();
const port = 9000;

// Mock data
let todos = [
  { id: 3, content: "Javascript", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "HTML", completed: false },
];

app.use(express.static("public"));
app.use(express.json());

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  todos = [req.body, ...todos];
  res.send(todos);
});

/*
todos의 배열의 모든 요소의 completed 를 payload 와 일치시킨다.
PATCH http://localHost:9000/todos
Content-Type: application/json

{
  "completed" : true
}
 */
app.patch("/todos", (req, res) => {
  // 페이로드를 받아야 한다.
  const { completed } = req.body;
  /* completed 가 문자열일까 아니면 불리언일까
  console.log(completed, typeof completed);
  불리언 값이다.
  */

  todos = todos.map((todo) => ({ ...todo, completed }));
  // 만약에 response 가 없으면 무한 대기하고 있기 때문에
  res.send(todos);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

/*
PATCH http://localHost:9000/todos/4
Content-Type: application/json

{
  "completed" : true
}
*/

app.patch("/todos/:id", (req, res) => {
  // console.log(req.params);
  // id와 관련된 정보가 어떻게 넘어오는지 체크를 한다. , 근데 문자열로 들어온다.

  const { id } = req.params;

  // 페이로드는 completed 거나 content 다. 둘중에 하나만 들어온다.
  const payload = req.body;

  todos = todos.map((todo) =>
    todo.id === +id ? { ...todo, ...payload } : todo
  );
  res.send(todos);
});

//DELETE http://localHost:9000/todos/4
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  todos = todos.filter((todo) => todo.id !== +id);
  res.send(todos);
});

// DELETE http://localHost:9000/todos/4?complete=true
app.delete("/todos", (req, res) => {
  const { completed } = req.query; // {completed : true} 로 가져 온다.
  //completed 가 string 으로 넘어온다. parsing 을 해주지 않았다.

  console.log(completed);
  todos = todos.filter((todo) => todo.completed !== JSON.parse(completed));
  res.send(todos);
});
