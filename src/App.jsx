import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import About from "./components/About";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <div className="text-3xl font-bold py-5 bg-black text-white text-center">
        My Meme World!
        <nav className="p-2 m-2 flex justify-between w-96 text-lg">
          <a href="/">Home</a>
          <a href="/about">about</a>
          <a href="/team">Teams</a>
          <a href="/login">login</a>
        </nav>
        <select
          className="bg-green-500 text-white"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            {/* //!about,team  component is the childrent of the protectroute  */}

            <Route path="/about" element={<About lang={lang} />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
