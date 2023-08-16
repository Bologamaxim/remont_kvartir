import "./employe.css";
function Employe(props) {
  return (
    <>
      <div className="employe">
        <div className="employe__employe">
          <div className="employe__photo">
            <h2 className="employe__title">Наши сотрудники</h2>
            <img src={props.img} alt="" />
            <div className="employe__choise">
              <div
                onClick={() => {
                  props.count([0, "Главный инжинер"]);
                }}
                className="employe__click"
              ></div>
              <div
                onClick={() => {
                  props.count([900, "Cлесарь"]);
                }}
                className="employe__click"
              ></div>
              <div
                onClick={() => {
                  props.count([1800, "Сметчик"]);
                }}
                className="employe__click "
              ></div>
              <div
                onClick={() => {
                  props.count([2700, "Прораб"]);
                }}
                className="employe__click"
              ></div>
              <div
                onClick={() => {
                  props.count([3600, "Дизайнер"]);
                }}
                className="employe__click "
              ></div>
            </div>
          </div>
          <div className="employe__info">
            <h2 className="employe__name">{props.name}</h2>
            <div className="employe__spec">
              {" "}
              <span>
                Спецификация: <br />
              </span>
              {props.spec}
            </div>
            <div className="employe__stash">
              <span>Стаж</span>
              <h2>{props.stash}</h2>
            </div>

            <div className="employe__descr">{props.descr}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Employe;
