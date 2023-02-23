import React, { useEffect } from "react";
import { useState } from "react";
import AppHeader from "../components/Common/AppHeader";
import MainAccountCard from "../components/Main/MainAccountCard";
import axios from "axios";

const MainPage = () => {
  useEffect(() => {
    console.log("시작하자마 일을 시작합니다.");
    getAccountList();
  }, []);

  const [accountList, setAcccountList] = useState([]);

  const getAccountList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");
    console.log(accessToken, userSeqNo);
    //axios 요청을 작성해야함
    //header 설정
    const option = {
      // 계좌 내역 조회 api 요청
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        user_seq_no: userSeqNo,
      },
    };

    axios(option).then(({ data }) => {
      console.log(data);
      setAcccountList(data.res_list); // 계좌 내역 조회에서 계좌 정보들을 추출
    });
  };

  return (
    <div>
      <AppHeader title={"계좌 목록"}></AppHeader>
      {accountList.map((data) => {
        return (
          <MainAccountCard
            key={data.fintech_use_num}
            bankName={data.bank_name}
            fintechUseNo={data.fintech_use_num}
          ></MainAccountCard>
        );
      })}
    </div>
  );
};

export default MainPage;
