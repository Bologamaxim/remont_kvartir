import React, { useState, useRef } from "react";
import "./calc.css";
import Stic from "./stic/stic";
function Calc() {
  const [chengeCost, setChengeCost] = useState(52);
  const [coficientOne, setCoficientOne] = useState(1);
  const [coficientTwo, setCoficientTwo] = useState(1);
  const [coficientFree, setCoficientFree] = useState(1);

  const [howRooms, setHowRooms] = useState(1);
  const [oldNewroom, setOldNewRoom] = useState(1);

  const newRoom = useRef(null);
  const oldRoom = useRef(null);

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refFree = useRef(null);
  const priceAll = Math.round(
    chengeCost *
      8000 *
      coficientOne *
      coficientTwo *
      coficientFree *
      howRooms *
      oldNewroom
  );

  const onOldRoom = (e) => {
    if (e.target.checked) {
      newRoom.current.checked = false;
      setOldNewRoom(1.3);
    }
  };
  const onNewRoom = (e) => {
    if (e.target.checked) {
      oldRoom.current.checked = false;
      setOldNewRoom(1);
    }
  };
  const oneRoom = (e) => {
    refTwo.current.classList.remove("activ");
    refFree.current.classList.remove("activ");
    setHowRooms(1.3);
    e.target.classList.add("activ");
  };

  const twoRoom = (e) => {
    refOne.current.classList.remove("activ");
    refFree.current.classList.remove("activ");
    setHowRooms(1.2);

    e.target.classList.add("activ");
  };

  const freeRoom = (e) => {
    refTwo.current.classList.remove("activ");
    refOne.current.classList.remove("activ");
    setHowRooms(1);

    e.target.classList.add("activ");
  };

  const f1 = (e) => {
    if (e.target.checked) {
      setCoficientOne(1.8);
    } else {
      setCoficientOne(1);
    }
  };
  const f2 = (e) => {
    if (e.target.checked) {
      setCoficientTwo(1.5);
    } else {
      setCoficientTwo(1);
    }
  };
  const f3 = (e) => {
    if (e.target.checked) {
      setCoficientFree(1.2);
    } else {
      setCoficientFree(1);
    }
  };

  return (
    <>
      <div className="calc">
        <div className="calc__canculate">
          <h2 className="calc__descr">Расчитать стоимость</h2>
          <div className="calc__plan">
            <div className="calc__title">
              <div className="calc__terminal">
                <Stic
                  chengeCost={chengeCost}
                  setChengeCost={setChengeCost}
                ></Stic>
              </div>
              <div className="calc__type">
                <h2>тип помещения</h2>
                <div className="calc__typeCheckBox">
                  <input
                    ref={oldRoom}
                    onClick={onOldRoom}
                    type="checkbox"
                    id="vtor"
                    name="vtor"
                  />
                  <label htmlFor="vtor"> Вторичка </label>
                  <input
                    onClick={onNewRoom}
                    ref={newRoom}
                    type="checkbox"
                    id="novost"
                    name="novost"
                  />
                  <label htmlFor="novost"> Новостройка</label>
                </div>
                <div className="calc__sele">
                  <h2>Скидка</h2>
                  <div className="">{Math.round(priceAll * 0.8)}</div>
                </div>
                <div className="calc__srok">
                  <h2>Срок выполнения</h2>
                  <div>{Math.round(chengeCost * 1.8)} Дней</div>
                </div>
              </div>
            </div>
            <div className="calc__kv">
              <div className="calc__forinRooms">
                <h2>количество комнат</h2>
                <div className="calc__checboxRooms">
                  <div
                    className="calc__rooms"
                    ref={refOne}
                    onClick={oneRoom}
                    id="roomOne"
                  >
                    1
                  </div>
                  <div
                    className="calc__rooms"
                    ref={refTwo}
                    onClick={twoRoom}
                    id="roomTwo"
                  >
                    2
                  </div>
                  <div
                    className="calc__rooms"
                    ref={refFree}
                    onClick={freeRoom}
                    id="roomFree"
                  >
                    3
                  </div>
                </div>
              </div>
              <h2>что включить в расчет</h2>
              <div className="calc__checkBox">
                <input
                  type="checkbox"
                  onClick={f1}
                  id="vehicle1"
                  name="vehicle1"
                />
                <label htmlFor="vehicle1"> черновые материалы </label>

                <input
                  type="checkbox"
                  onClick={f2}
                  id="vehicle2"
                  name="vehicle2"
                />
                <label htmlFor="vehicle2"> Чистовые материалы</label>
                <input
                  type="checkbox"
                  onClick={f3}
                  id="vehicle3"
                  name="vehicle3"
                />
                <label htmlFor="vehicle3"> Дизайн проект</label>
              </div>
            </div>
          </div>
          <div className="calc__futer">
            <h2>Примерная Стоимость {priceAll}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calc;
