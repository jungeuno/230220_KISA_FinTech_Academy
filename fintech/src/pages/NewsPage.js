import React, { useState } from "react";
import AppHeader from "../components/Common/AppHeader";
import InputComponents from "../components/InputComponents";
import ListComponents from "../components/ListComponents";
import axios from "axios";

// 뉴스 api 불러오기 실습
const NewsPage = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const [newsList, setNewsList] = useState([]);
  const handleSearchInputChange = (e) => {
    // 변경될 화면에 보여질 데이터들
    const { value } = e.target; // e - 해당 이벤트 객체 전체를 불러옴
    setSearchInputText(value);
    console.log(value);
  };
  const handleSearchButtonClick = () => {
    //axios 통해서 news API 에 요청 보내기
    //템플릿 리터럴을 통해 API URL 작성해보기
    console.log("서버로 요청을 보냅니다.");
    const requestUrl = `https://newsapi.org/v2/everything?q=${searchInputText}&from=2023-01-22&sortBy=publishedAt&apiKey=54fa60b3d1ef40a99a2ab6634f7bd379`;
    axios.get(requestUrl).then(({ data }) => {
      // axios 서버 통신, 응답받은 데이터를 확인
      console.log(data.articles); // 응답받은 데이터에서 'articles' 영역을 추출
      const articles = data.articles;
      setNewsList(articles); // articles를 배열로 세팅
    });
  };
  return (
    <div>
      <AppHeader title={"뉴스 검색"}></AppHeader>
      <InputComponents
        handleChange={handleSearchInputChange}
        handleClick={handleSearchButtonClick}
      ></InputComponents>
      <ListComponents newsList={newsList}></ListComponents>
    </div>
  );
};

export default NewsPage;
