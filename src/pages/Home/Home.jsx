import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="container hero__container">
                    <h1 className="hero__title">KISÉTI</h1>
                    <p className="hero__subtitle">Твоё сияние в каждой грани</p>
                    <Link to="/catalog" className="hero__btn">Каталог</Link>
                </div>
            </section>

            <section className="categories">
                <div className="container">
                    <h2 className="section-title">Коллекции</h2>
                    <div className="categories__grid">
                        <Link to="/catalog?category=necklaces" className="category-card">
                            <img src="src/assets/necklace1.jpg" alt="Ожерелья" className="category-card__image" />
                            <h3 className="category-card__title">Ожерелья</h3>
                            <p>Элегантность линий</p>
                        </Link>
                        <Link to="/catalog?category=bracelets" className="category-card">
                            <img src="src/assets/bracelet1.jpg" alt="Браслеты" className="category-card__image" />
                            <h3 className="category-card__title">Браслеты</h3>
                            <p>Изящность мысли</p>
                        </Link>
                        <Link to="/catalog?category=earrings" className="category-card">
                            <img src="src/assets/earrings1.jpg" alt="Серьги" className="category-card__image" />
                            <h3 className="category-card__title">Серьги</h3>
                            <p>Гармоничность образа</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="quote">
                <div className="container quote__container">
                    <p>«Каждое украшение — это маленькая история, которую вы носите с собой»</p>
                    <span>Мастерская KISÉTI</span>
                </div>
            </section>
        </div>
    );
}

export default Home;