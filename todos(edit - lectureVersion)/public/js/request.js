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

// 두 개 함수의 중복을 한번 제거해보는 일은 어떻게 해야할까 ?

/* 모듈은 두가지만 알면된다. import 와 export
모듈은 실행컨텍스트의 소스코드의 타입이 있다고 했다. 4가지
전역코드, -- 모듈코드 걔네들의 특징은 실행 컨텍스트를 만든다. 
=> 렉시컬 환경을 만들고, 스코프를 만든다는 것이다. 모듈 또한 스코프를 가지고 있는데
그것을 모듈 스코프 혹은 파일 스코프라고 부른다. 

=> 일부를 참조를 내보낸다. (export)*/

// const get = (url, onSuccess) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response));
//       onSuccess(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status);
//     }
//   };
// };

// const post = (url, onSuccess, payload) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", url);
//   xhr.setRequestHeader("content-type", "application/json");
//   // xhr.send(JSON.stringify({ id: generateId(), content, completed: false }));
//   xhr.send(JSON.stringify(payload));

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response));
//       onSuccess(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status);
//     }
//   };
// };

// const patch = (url, onSuccess, payload) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("PATCH", url);
//   xhr.setRequestHeader("content-type", "application/json");
//   // xhr.send(JSON.stringify({ id: generateId(), content, completed: false }));
//   xhr.send(JSON.stringify(payload));

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response));
//       onSuccess(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status);
//     }
//   };
// };

// const remove = (url, onSuccess) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("DELETE", url);
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.send(JSON.stringify());

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response));
//       onSuccess(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status);
//     }
//   };
// };

const request = (method, url, onSuccess, ...payload) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("content-type", "application/json");
  // 위에껏은 컴퓨터가 안보면 그만이기 때문에 생략 안해줘도된다.
  xhr.send(payload ? JSON.stringify(payload) : JSON.stringify());
  // xhr.send(JSON.stringify(payload));

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response));
      onSuccess(JSON.parse(xhr.response));
    } else {
      console.error(xhr.status);
    }
  };
};
export default {
  /* 
  모듈되는 순간 export 되는 함수가 export 안되는 값을 바라보고 있으면 위에가 자유변수고
  아래는 클로저가 되는 것이다.
  => 모듈을 쓰는 순간, 클로저를 그냥 쓰게 된다는 것이 이런 것이다. 
  */
  // get(url,onsuccess){
  //   request("GET",url, onSuccess) 이런식으로 받아주면 된다.
  // },
  // post(){},
  // patch(){},
  // remove,
  request,
};
// 파일 안에 export 를 하면 모듈로 인식한다. 만약 안쓰면 모듈로 인식하지 않는다.
