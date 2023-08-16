import React, { useEffect } from "react";
import { useState } from "react";
import "./cards.css";
const Cards = (props) => {
  const [coin, setCoin] = useState(400);
  function description() {}

  function f1(event) {
    setCoin(coin + 400);
    if (coin >= 800) {
      setCoin(0);
    }
    let elt = event.target.closest("div");
    elt.style.right = `${coin}px`;
  }
  return (
    <div>
      <div className="cards">
        <div className="cards__photo">
          <div className="cards__type">
            <h2 className="cards__typeText">{props.description}</h2>
          </div>
          <div className="cards__imges" onClick={f1}>
            <img className="cards__img" src={props.img[0]} alt="" />
            <img className="cards__img" src={props.img[1]} alt="" />
            <img className="cards__img" src={props.img[2]} alt="" />
          </div>
        </div>
        <div className="priceForMeterDescr textChenge">
          Цена за квадрат- <span>{props.price}руб.</span>
        </div>
        <div className="cards__goodsDescr textChenge">
          Черновые материалы- <span>{props.goods}руб.</span>
        </div>

        <div className="finishPrice">{props.finaliti}руб.</div>
      </div>
      <button onClick={description} className="btn">
        Описание
      </button>
      <div className="des"></div>
    </div>
  );
};
export default Cards;
