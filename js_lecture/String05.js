function solution(new_id) {
  var answer = "";

  // 1. 소문자 => 대문자로 변경
  if (/[A-Z]/g.test(new_id)) new_id = new_id.toLowerCase();
  // 2. 특수 문제 빼기
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
  // 3. 두번 이상 마침표 => . 으로 대체
  new_id = new_id.replace(/\.{2,}/g, ".");

  // 4. 마침표가 처음이나 끝에 위치한다면 제거
  new_id = new_id.replace(/^\.|| \.$/g, "");

  // 5. 빈 문자열이면 a를 대입
  new_id = new_id.replace(" ", "a");

  // 6. 16자리면 15자리만
  if (new_id.length >= 16) new_id = new_id.substring(0, 15);
  if (/\.$/.test(new_id)) new_id = new_id.substring(0, new_id.length - 1);

  if (new_id.length <= 2) {
    if (new_id.length === 0) new_id = "aaa";
    else new_id += new_id[new_id.length - 1].repeat(3 - new_id.length);
  }
  answer = new_id;
  return answer;
}
