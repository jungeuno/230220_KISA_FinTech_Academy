import { useState } from "react";

const InputComponents = (props) => {
  //  let value = "test";
  const [name, setName] = useState("test"); // [사용할 이름, 변경할 메소드]
  const handleChangeInput = (event) => {
    setName(event.target.value); // 입력한 값을 출력으로 세팅해줌
  };

  const handleClickButton = () => {
    alert(name);
  }; // 버튼 클릭 시 경고창 띄움

  return (
    <>
      <p>{name}</p>
      <input onChange={handleChangeInput}></input>{" "}
      {/* <input> - 입력 상자 생성*/}
      <button onClick={handleClickButton}>입력</button>
    </>
  );
};

export default InputComponents;
