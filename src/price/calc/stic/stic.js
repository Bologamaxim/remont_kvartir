import React from "react";
import "./stic.css";
const Stic = (props) => {
  const outputUpdate = (event) => {
    props.setChengeCost(event.target.value);
  };
  return (
    <div className="stic">
      <h1 className="stic__descr">Укажите квадратуру вашей квартиры</h1>
      <div className="stic__cost">
        <div className="stic__inp">
          <output fors="fadeer" id="volume" value="5">
            {`${props.chengeCost} кв.`}
          </output>
          <input
            type="range"
            id="fadeer"
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
export default Stic;
