import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { jewelryData } from '../../data/jewelryData';
import Card from '../../components/Card/Card';
import './Catalog.css';

function Catalog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Все' },
        { id: 'necklaces', name: 'Ожерелья' },
        { id: 'bracelets', name: 'Браслеты' },
        { id: 'earrings', name: 'Серьги' }
    ];

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam && (categoryParam === 'necklaces' || categoryParam === 'bracelets' || categoryParam === 'earrings')) {
            setActiveCategory(categoryParam);
        } else {
            setActiveCategory('all');
        }
    }, [searchParams]);

    const handleCategoryChange = function(categoryId) {
        setActiveCategory(categoryId);
        if (categoryId === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ category: categoryId });
        }
    };

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
                            name={item.name}
                            price={item.price}
                            shortDesc={item.shortDesc}
                            fullDesc={item.fullDesc}
                            image={item.image}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Catalog;