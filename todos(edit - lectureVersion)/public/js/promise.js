const request = (method, url, onSuccess, ...payload) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("content-type", "application/json");
    // 위에껏은 컴퓨터가 안보면 그만이기 때문에 생략 안해줘도된다.
    xhr.send(payload ? JSON.stringify(payload) : JSON.stringify());
    // xhr.send(JSON.stringify(payload));

    xhr.onload = () => {
      if (xhr.status === 200) {
        // console.log(JSON.parse(xhr.response));
        resolve(JSON.parse(xhr.response));
        // onSuccess(JSON.parse(xhr.response));
        // promise를 쓰면 callback 을 안써줘도 된다.
      } else {
        reject(new Error(xhr.status));
        console.error(xhr.status);
      }
    };
    // 아까는 undefined 를 리턴한다면 현재는 Promise 를 리턴한다.
  });
// 프로미스는 함수를 받는다. 두개의 인수를 가지고 있어야 한다. -> 호출한 놈이 인수를 전달해준다.(프로미스가 호출한다)
// new Promise((resolve, reject) => {
//   // 이 안에서 우리가 비동기 처리를 해주어야 한다.
// onload만 비동기이지만, 하나라도 비동기면 비동기다.

// });
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
  // ->콜백이 모두 지워져야 한다.
  // get(url){
  //  return  request("GET",url) 이런식으로 받아주면 된다.
  // -> 이제 리턴을 해주어야 한다.
  // },
  request,
};
// 파일 안에 export 를 하면 모듈로 인식한다. 만약 안쓰면 모듈로 인식하지 않는다.
