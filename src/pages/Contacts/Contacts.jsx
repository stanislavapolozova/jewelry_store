// страница контактов и форма обратной связи
import './Contacts.css';

function Contacts() {
    const handleSubmit = function(e) {
        e.preventDefault();
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        e.target.reset();
    };

    return (
        <div className="contacts container">
            <h1 className="contacts__title">Контакты</h1>
            <div className="contacts__content">
                <div className="contacts__info">
                    <p><strong>Телефон:</strong> +7 (988) 589-61-13</p>
                    <p><strong>Email:</strong> hello@kiseti.ru</p>
                    <p><strong>Адрес:</strong> г. Ростов-на-Дону, ул. Пушкинская, д. 157</p>
                    <p><strong>Режим работы:</strong> пн–вс 10:00–21:00</p>
                    <div className="contacts__social">
                        <a href="https://t.me/kiseti_jw" target="_blank" rel="noopener noreferrer">Telegram</a>
                    </div>
                </div>
                <form className="contacts__form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ваше имя" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Сообщение" rows="5" required></textarea>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;