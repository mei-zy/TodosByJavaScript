// 대소문자변환

const toggleCase = (str) =>
  str.replace(/[a-zA-Z]/g, (match) =>
    match.charCodeAt(0) >= 65 && match.charCodeAt(0) <= 97
      ? match.toLowerCase()
      : match.toUpperCase()
  );
console.log(toggleCase("StuDY"));
