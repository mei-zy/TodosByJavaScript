count = (str, cntstr) => str.match(new RegExp(cntstr, 'g')).length;

console.log(count('COMPUTERPROGRAMMING', 'R'));
