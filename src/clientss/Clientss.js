import "./clientss.css";
function Clientss(props) {
  return (
    <>
      <div className="clients">
        <div className="clients__clients">
          <div className="clients__photo">
            <h2 className="clients__title">Наши сотрудники</h2>
            <img src={props.img} alt="" />
            <div className="clients__choise">
              <div
                onClick={() => {
                  props.count(0);
                }}
                className="clients__click"
              ></div>
              <div
                onClick={() => {
                  props.count(900);
                }}
                className="clients__click"
              ></div>
              <div
                onClick={() => {
                  props.count(1800);
                }}
                className="clients__click "
              ></div>
              <div
                onClick={() => {
                  props.count(2700);
                }}
                className="clients__click"
              ></div>
              <div
                onClick={() => {
                  props.count(3600);
                }}
                className="clients__click "
              ></div>
            </div>
          </div>
          <div className="clients__info">
            <h2 className="clients__name">{props.name}</h2>
            <div className="clients__spec">{props.adress}</div>
            <div className="clients__stash"></div>
            <div className="clients__zvezda">★★★★★</div>
            <div className="clients__descr">{props.descr}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Clientss;
