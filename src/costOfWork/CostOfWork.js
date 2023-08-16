import React from "react";
import "./costOfWork.css";
const CostOfWork = (props) => {
  const outputUpdate = (event) => {
    props.setChengeCost(event.target.value);
  };
  return (
    <div>
      <h1 className="descr">Укажите квадратуру вашей квартиры</h1>
      <div className="cost">
        <div className="inp">
          <output fors="fader" id="volume" value="5">
            {`${props.chengeCost} кв.`}
          </output>
          <input
            type="range"
            id="fader"
            min={52}
            max={200}
            step={1}
            onInput={outputUpdate}
          />
        </div>
      </div>
    </div>
  );
};
export default CostOfWork;
