// import "./App.css";
// import Welcome from "./components/Welcome";
// import InputComponents from "./components/InputComponent";
// import ListComponents from "./components/ListComponent";
// import StyledComponent from "./components/StyledComponent";

// function App() {
//   return (
//     <div className="App">
//       <Welcome userName="유관우" userAge={35} userHeight={175}></Welcome>
//       <Welcome userName="홍길동" userAge={20} userHeight={175}></Welcome>
//       <Welcome userName="고길동" userAge={48} userHeight={175}></Welcome>
//       <InputComponents></InputComponents>
//       <ListComponents></ListComponents>
//       <StyledComponent></StyledComponent>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputComponents from "./components/InputComponents";
import Welcome from "./components/Welcome";
import AxiosComponent from "./components/AxiosComponent";
import ListComponents from "./components/ListComponents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/input" element={<InputComponents />}></Route>
        <Route path="/list" element={<ListComponents />}></Route>
        <Route path="/axios" element={<AxiosComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
