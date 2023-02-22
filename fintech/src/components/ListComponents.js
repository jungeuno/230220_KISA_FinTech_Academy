import React from "react";

const ListComponents = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news, index) => {
        return <p key={index}>{news.title}</p>;
      })}
    </div>
  );
};

export default ListComponents;
