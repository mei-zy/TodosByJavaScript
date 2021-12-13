replaceAtoSharp = str => str.replace(/A/g, '#');

// replaceAtoSharp = str =>
//   str
//     .split('')
//     .map(word => (word === 'A' ? '#' : word))
//     .join('');

console.log(replaceAtoSharp('BANAaNA')); // => B#N#N#
