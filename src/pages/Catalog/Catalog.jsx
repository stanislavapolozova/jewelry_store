// страница каталога с фильтром по категориям и модальным окном
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { jewelryData } from '../../data/jewelryData';
import Card from '../../components/Card/Card';
import ModalPage from '../../components/ModalPage/ModalPage';
import './Catalog.css';

function Catalog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Все' },
        { id: 'necklaces', name: 'Ожерелья' },
        { id: 'bracelets', name: 'Браслеты' },
        { id: 'earrings', name: 'Серьги' }
    ];

    // чтение параметра категории из URL при загрузке
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam && (categoryParam === 'necklaces' || categoryParam === 'bracelets' || categoryParam === 'earrings')) {
            setActiveCategory(categoryParam);
        } else {
            setActiveCategory('all');
        }
    }, [searchParams]);

    // обновление URL при смене категории
    const handleCategoryChange = function(categoryId) {
        setActiveCategory(categoryId);
        if (categoryId === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ category: categoryId });
        }
    };

    // фильтрация товаров
    let filteredItems;
    if (activeCategory === 'all') {
        filteredItems = jewelryData;
    } else {
        filteredItems = jewelryData.filter(function(item) {
            return item.category === activeCategory;
        });
    }

    return (
        <div className="catalog container">
            <h1 className="catalog__title">Наши украшения</h1>

            <div className="catalog__tabs">
                {categories.map(function(cat) {
                    const isActive = (activeCategory === cat.id);
                    return (
                        <button
                            key={cat.id}
                            className={'catalog__tab ' + (isActive ? 'catalog__tab--active' : '')}
                            onClick={() => handleCategoryChange(cat.id)}
                        >
                            {cat.name}
                        </button>
                    );
                })}
            </div>

            <div className="catalog__grid">
                {filteredItems.map(function(item) {
                    return (
                        <Card
                            key={item.id}
                            {...item}
                            onOpen={() => setSelectedItem(item)}
                        />
                    );
                })}
            </div>

            {selectedItem ? (
                <ModalPage isOpen={true} onClose={() => setSelectedItem(null)}>
                    <img src={selectedItem.image} alt={selectedItem.name} className="modal__image" />
                    <h2 className="modal__title">{selectedItem.name}</h2>
                    <p className="modal__fullDesc">{selectedItem.fullDesc}</p>
                    <p className="modal__price">{selectedItem.price}</p>
                </ModalPage>
            ) : null}
        </div>
    );
}

export default Catalog;