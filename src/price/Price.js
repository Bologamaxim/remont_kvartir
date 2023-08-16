import "./price.css";
import React from "react";
import { useState } from "react";
import Wall from "./wall/Wall";
import Ceiling from "./ceiling/Ceiling";
import Floor from "./floor/Floor";
import Calc from "./calc/calc";
const Price = function () {
  const [f, setF] = useState(Wall);
  function f1() {
    setF(Wall);
  }
  function f2() {
    setF(Floor);
  }
  function f3() {
    setF(Ceiling);
  }

  return (
    <>
      <div className="price">
        <Calc></Calc>

        <div className="price__all">
          <div className="price__text">
            <h2 className="price__title">
              Цены на ремонт квартир и отделочные работы в Калининграде
            </h2>
            <h3 className="price__descr">
              В прайс-листе представлены цены на ремонт квартир в Калининграде.
              Наша компания предлагает полный комплекс услуг по ремонту и
              отделке помещений разных площадей в Калининграде или области с
              профессиональным качеством. На весь перечень работ гарантия 3
              года. В бригаде работают как узкоспециализированные мастера, так
              разнорабочие и все процессы контролируются прорабом - это
              гарантирует слаженность работы и выполнение сроков. Мы несем
              гарантийные обязательства перед клиентом по договору, поэтому к
              исполнению взятых обязательств относимся серьезно. Обновлено:
              01/2023
            </h3>
          </div>
          <div className="price__btns">
            <button onClick={f1} className="botton price__botton">
              Стены
            </button>
            <button onClick={f2} className="botton price__botton">
              Пол
            </button>
            <button onClick={f3} className="botton price__botton">
              Потолок
            </button>
          </div>
          {f}
        </div>
      </div>
    </>
  );
};
export default Price;
