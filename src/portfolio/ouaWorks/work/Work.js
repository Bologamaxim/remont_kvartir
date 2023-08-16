import { useState } from "react";
import "./work.css";
function Work(props) {
  const [coin, setCoin] = useState(494);

  function f1(event) {
    setCoin(coin + 494);
    if (coin >= 988) {
      setCoin(0);
    }
    var elt = event.target.closest("div");
    elt.style.right = `${coin}px`;
    console.log(coin);
  }
  return (
    <>
      <div className="work">
        <div className="work__kw">{props.size}</div>
        <div className="work__info">
          <div className="work__place">{props.adres}</div>
          <div className="work__price">{props.price}Руб.</div>
        </div>

        <div onClick={f1} className="work__photo">
          <img className="work__img" src={props.imgOne} alt="kartinka" />
          <img className="work__img" src={props.imgTwo} alt="kartinka" />
          <img className="work__img" src={props.imgFree} alt="kartinka" />
        </div>
        <div className="work__descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum,
          vel ipsum suscipit a harum necessitatibus eum sint qui doloremque
          neque similique quaerat debitis quas molestiae. Quasi hic veritatis
          aliquid!
        </div>
        <div className="work__photos"></div>
      </div>
    </>
  );
}
export default Work;
