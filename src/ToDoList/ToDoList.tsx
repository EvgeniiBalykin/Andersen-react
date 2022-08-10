import { Routes, Route } from "react-router-dom";
import NamePage from "./Pages/NamePage/NamePage";
import ListPage from "./Pages/ListPage/ListPage";

function ToDoList() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NamePage />} />
        <Route path="listpage" element={<ListPage />} />
      </Routes>
    </>
  );
}

export default ToDoList;
