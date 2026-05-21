// карточка товара в каталоге
import './Card.css';

function Card({ name, price, shortDesc, image, onOpen }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <h3 className="card__title">{name}</h3>
      <p className="card__desc">{shortDesc}</p>
      <p className="card__price">{price}</p>
      <button className="card__btn" onClick={onOpen}>Подробнее</button>
    </div>
  );
}
export default Card;