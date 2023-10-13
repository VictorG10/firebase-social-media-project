import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import CreatePost from "./pages/create-post/CreatePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
