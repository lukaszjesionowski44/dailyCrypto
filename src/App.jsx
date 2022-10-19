import React, { useState } from "react";
import "./App.css";
import "./style.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import { Navbar } from "./components";
import News from "./pages/News";
import CryptoDetail from "./pages/CryptoDetail";
import Exchanges from "./pages/Exchanges";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const App = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const mobile = useMediaQuery("(max-width:750px)");

  return (
    <BrowserRouter>
      <div className="app">
        {mobile && (
          <div
            className="mobile__navbar"
            onClick={() => setMenuClicked(!menuClicked)}
          >
            {menuClicked && <CloseIcon />}
            {!menuClicked && <MenuIcon />}
          </div>
        )}
        {menuClicked && <div className="mobile__menu">
          <Link to='/' onClick={() => setMenuClicked(false)}>DailyCrypto</Link>
          <Link to='/cryptocurrencies' onClick={() => setMenuClicked(false)}>Cryptocurrencies</Link>
          <Link to='/news' onClick={() => setMenuClicked(false)} >News</Link>
          <Link to='/exchanges' onClick={() => setMenuClicked(false)}>Exchanges</Link>
          </div>}
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/news" element={<News />} />
          <Route path="/cryptocurrency/:id" element={<CryptoDetail />} />
          <Route path="/exchanges" element={<Exchanges />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
