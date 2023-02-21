let initArray = [];
let carArray = ["sonata", "bmw", "tico", 1243124];
// 타입의 상관없이 배열 생성 가능

// java
// private String[] carArraㅛ = new String[5];
// private ArrayList<String> = new ArrayList<String>;
console.log(carArray);
console.log(carArray[0]);
console.log(carArray[1]);
console.log(carArray[2]);

for (let i = 0; i < carArray.length; i++) {
  let car = carArray[i];
  console.log(car);
}

for (car of carArray) {
  console.log(car);
} // 배열 속의 요소를 순회

carArray.map((car) => {
  console.log(car);
}); // map 함수 사용
