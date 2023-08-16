import { useState } from "react";
import "./fitback.css";
import Clientss from "../../clientss/Clientss";
const Fitback = function () {
  const [rightTwo, setRightTwo] = useState(0);

  const countTwo = (e) => {
    f2(e);
    return e;
  };
  function f2(e) {
    setRightTwo(() => e);
  }
  return (
    <>
      <div className="clients">
        <span className="boxes__titleFitback">НАШИ ОТЗЫВЫ</span>
        <div style={{ right: `${rightTwo}px` }} className="clients__box">
          <Clientss
            name="Наталья"
            count={countTwo}
            adress={"Олега кошевого 30"}
            img="./nataliya.jpg"
            descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
          ></Clientss>
          <Clientss
            name="oxana"
            count={countTwo}
            adress={"Олега кошевого 30"}
            img="./oxana.jpg"
            descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
          ></Clientss>
          <Clientss
            name="dmitriy"
            count={countTwo}
            adress={"Олега кошевого 30"}
            img="./dmitriy.jpg"
            descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
          ></Clientss>
          <Clientss
            name="sergey"
            adress={"Олега кошевого 30"}
            count={countTwo}
            img="./sergey.jpg"
            descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
          ></Clientss>
          <Clientss
            name="yuliya"
            adress={"Олега кошевого 30"}
            count={countTwo}
            img="./yuliya.jpg"
            descr="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum delectus error consequatur dolore iusto sequi reprehenderit soluta autem veritatis, facere maxime ab voluptas exercitationem minima itaque saepe quam dolores."
          ></Clientss>
        </div>
      </div>
    </>
  );
};
export default Fitback;
