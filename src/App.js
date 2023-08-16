import React from "react";
import Header from "./header/Header";
import Futer from "./futer/Futer";
import Special from "./special/Special";
import Contacts from "./contacts/Contacts";
import Portfolio from "./portfolio/Portfolio";
import Price from "./price/Price";
import Top from "./top/top";
import { BrowserRouter as Routr, Routes, Route, Link } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <Top></Top>
      <Header></Header>
      <h1 className="title">
        Ремонт квартир Калининград <br />
        <span>Glodiator</span>
      </h1>

      <Routr>
        <Routes>
          <Route exact path="/" element={<Special />} />
          <Route path="/about" element={<Portfolio />} />
          <Route path="/price" element={<Price />} />

          <Route path="/user" element={<Contacts />} />
        </Routes>
      </Routr>
      <Futer />
    </div>
  );
};
export default App;
