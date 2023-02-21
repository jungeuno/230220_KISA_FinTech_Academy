function sum(p1, p2) {
  return p1 + p2;
}

console.log(sum(2, 3));
// 함수를 1급 객체로 취급한다.
// 2+3의 결과 5를 출력함
console.log(sum);

const sum2 = function (p1, p2) {
  return p1 + p2;
};

console.log(sum2(4, 6));

const sumWithArrowFunc = (p1, p2) => {
  return p1 + p2;
};

console.log(sumWithArrowFunc(2, 3));

//#Work01 : 나누기, 빼기, 곱하기 기능을 화살표 함수로 선언 해보기
const div_fun = (p1, p2) => {
  return p1 / p2;
}; //나누기

const minus_fun = (p1, p2) => {
  return p1 - p2;
}; //빼기

const mul_fun = (p1, p2) => {
  return p1 * p2;
}; //곱하기

console.log(div_fun(10, 2));
console.log(minus_fun(10, 2));
console.log(mul_fun(10, 2));
