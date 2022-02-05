//함수 calc() 선언과 구현
function calc() {
  var currntYear = 2022;
  var birthYear = prompt("태어난년도를 입력하세요.", "YYYY");
  var age = 0;
  age = currntYear - birthYear + 1;
  //document는 현재 웹브라우저의 페이지를 의미하고, querySelector()는 id가 result인 요소를 의미함
  //innerHTML은 대입한 값으로 html문서를 대체함
  document.querySelector("#result").innerHTML = "당신의 나이는"+age+"세 입니다.";
}
