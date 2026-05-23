import './Card.css';

function Card({ name, price, shortDesc, fullDesc, image }) {
    return (
        <div className="card">
            <img src={image} alt={name} className="card__image" />
            <h3 className="card__title">{name}</h3>
            <p className="card__desc">{shortDesc}</p>
            <p className="card__fullDesc">{fullDesc}</p>
            <p className="card__price">{price}</p>
        </div>
    );
}

export default Card;
