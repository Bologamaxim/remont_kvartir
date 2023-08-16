import React, { useRef } from "react";
import { useState } from "react";
import CostOfWork from "../costOfWork/CostOfWork";
import Cards from "../cards/Cards";
import Employe from "../employe/employe";
import Clientss from "../clientss/Clientss";
import "./special.css";
import OuaWork from "../ouaWork/OuaWork";

const Special = function () {
  const [chengeCost, setChengeCost] = useState(52);
  const [right, setRight] = useState(0);
  const [des, setDes] = useState("Максим");

  const count = (e) => {
    f1(e);
    return e;
  };
  function f1(e) {
    setRight(() => e[0]);
    setDes(() => e[1]);
  }

  return (
    <>
      <div className="favorit">
        <CostOfWork chengeCost={chengeCost} setChengeCost={setChengeCost} />

        <div className="boxCards">
          <Cards
            fin={5}
            description={"Стандартный ремонт"}
            img={["img/cards/q.jpg", "img/cards/w.jpg", "img/cards/e.jpg"]}
            price={8000}
            goods={6000}
            descr={"укладка ламината, поклейка обоев, натяжные потолки "}
            finaliti={`Цена: ${8000 * chengeCost}`}
          />
          <Cards
            fin={5}
            description={"Ремонт бизнес-класса"}
            img={["img/cards/t.jpg", "img/cards/r.jpg", "img/cards/w.jpg"]}
            price={15000}
            goods={8000}
            descr={"демонтаж полов штукатурка стен "}
            finaliti={`Цена: ${15000 * chengeCost}`}
          />
          <Cards
            fin={5}
            description={"Эксклюзивный ремонт"}
            img={["img/cards/x.jpg", "img/cards/d.jpg", "img/cards/x.jpg"]}
            price={20000}
            goods={10000}
            descr={"Дизайн проект эксклюзивные штуки"}
            finaliti={`Цена: ${20000 * chengeCost}`}
          />
        </div>
        <div className="boxes">
          <span className="boxes__title">НАШИ СОТРУДНИКИ</span>

          <div style={{ right: `${right}px` }} className="favorit__employe">
            {" "}
            <Employe
              name="Максим"
              count={count}
              img="./fff.jpg"
              spec="Главный инжинер"
              stash="5 лет"
              descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
            ></Employe>
            <Employe
              name="Максон"
              count={count}
              img="./fff.jpg"
              spec="Прораб"
              stash="5 лет"
              descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
            ></Employe>
            <Employe
              name="Максимус"
              count={count}
              img="./fff.jpg"
              spec="Сметчик"
              stash="5 лет"
              descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
            ></Employe>
            <Employe
              name="Максимильян"
              count={count}
              img="./fff.jpg"
              spec="Замерщик"
              stash="5 лет"
              descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
            ></Employe>
            <Employe
              name="Эй ты"
              count={count}
              img="./fff.jpg"
              spec="Раб"
              stash="5 лет"
              descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
            ></Employe>
          </div>
        </div>

        <OuaWork />
      </div>
    </>
  );
};
export default Special;
