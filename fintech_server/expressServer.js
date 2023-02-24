const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("get method");
});

app.post("/", (req, res) => {
  res.json("post method");
});

app.delete("/user", (req, res) => {
  res.json("delete method");
});

app.put("/user", (req, res) => {
  res.json("put method");
});

app.put("/tansaction", (req, res) => {
  const option = {
    // 잔액 조회 api 요청
    method: "GET",
    url: "https://testapi.openbanking.or.kr/v2.0/account/transaction_list/fin_num",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      bank_tran_id: genTransId(),
      fintech_use_num: 120230040288951020830774, // 핀테크 번호
      inquiry_type: "A",
      inquiry_base: "D",
      from_date: "20230223",
      to_date: "20230223",
      sort_order: "D",
      tran_dtime: "20230223121100",
    },
  };
  axios(option).then(({ data }) => {
    console.log(data);
    // mysql 데이터 입력 쿼리
    setTrasactionList(data);
  });
});

const genTransId = () => {
  let countnum = Math.floor(Math.random() * 1000000000) + 1;
  const clientNo = "M202300402";
  let transId = clientNo + "U" + countnum; //이용기관번호 본인것 입력
  return transId;
};

app.listen(port);
console.log(`http://localhost:${port}`);
