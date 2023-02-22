import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<NewsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
