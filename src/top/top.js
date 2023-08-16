import "./top.css";

function Top() {
  return (
    <>
      <div className="top">
        <div className="top__contact">
          <div className="top__numbers">
            <div className="top__number">
              8-902-423-84-43
              <div className="top__info">Ежедневно с 9:00 до 22:00</div>
            </div>

            <div className="top__email">bologa93@mail.ru</div>
          </div>
          <div className="top__bottons">
            <button className="botton">Заказать звонок</button>
            <button className="botton">Написать нам</button>
          </div>
        </div>
        <div className="top__logo">
          <img className="top__img" src="./images.jpg" alt="" />
        </div>
        <div className="top__adress">
          <h3 className="top__where">
            Ремонт квартир и дизайн интерьера <br /> в Калининграде от Компании
            №1
          </h3>
          <div className="top__since">Работаем с 2005 года</div>
        </div>
      </div>
    </>
  );
}
export default Top;
