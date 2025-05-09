import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        // Ensure categories are strings
        const formattedCategories = data.map(item => 
          typeof item === 'object' ? item.slug || item.name : item
        );
        setCategories(formattedCategories);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="category-filter">
          <button 
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            All Products
          </button>
          {categories.map((category, index) => (
            <button
              key={`${category}-${index}`} // Fallback to index if category is not unique
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <Routes>
          <Route path="/" element={<ProductList category={selectedCategory} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;