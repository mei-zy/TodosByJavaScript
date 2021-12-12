const compress = word => {
  const alphabet = Array.from(new Array(26), (x, i) => String.fromCharCode(65 + i));

  let answer = '';
  const checked_dup = [];
  [...word].map((x, i) => {
    const reg = RegExp(`${x}{2,}`, 'g');

    if (checked_dup[checked_dup.length - 1] >= i) return;

    reg.test(word) ? checked_dup.push(i + word.match(reg)[0].length - 1) : false;
    reg.test(word) ? (answer += x + word.match(reg)[word.match(reg).length - 1].length + '') : (answer += x);
    return;
  });
  return answer;
};
console.log(compress('ABBBEEEFFFBB'));
