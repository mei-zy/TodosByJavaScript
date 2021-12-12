function Recommend_id(new_id) {
  var answer = '';

  answer = new_id
    .replace(/[A-Z]/g, upper => upper.toLowerCase())
    .replace(/[^\w-.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/g, '');

  answer.length <= 2 ? (answer += answer[answer.length - 1].repeat(3 - answer.length)) : false;

  return answer;
}

console.log(Recommend_id('...!@BaT#*..y.abcdefghijklm.'));
console.log(Recommend_id(' '));
console.log(Recommend_id('123_.def'));
console.log(Recommend_id('z-+.^.'));
console.log(Recommend_id('abcdefghijklmn.p'));
