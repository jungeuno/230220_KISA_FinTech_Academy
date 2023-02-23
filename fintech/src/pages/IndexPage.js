import React from "react";
import styled from "styled-components";
import AppHeader from "../components/Common/AppHeader";

const AuthButton = styled.button`
  margin-top: 100px;
  width: 100%;
`;

const IndexPage = () => {
  // 금결원 계좌인증 사이트 이동하도록 함
  const handleClick = () => {
    let tmpwindow = window.open("about:blank");
    const clientId = "f2502e15-4016-4bb2-8c6f-de08dfb4920a"; //<-- 본인의 client id 를 입력
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <div>
      <AppHeader title={"인증시작"}></AppHeader>
      <AuthButton onClick={handleClick}>인증 사이트로 이동</AuthButton>
    </div>
  );
};

export default IndexPage;
