import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    let apiUrl = 'https://dummyjson.com/products';

    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      apiUrl = `https://dummyjson.com/products/search?q=${searchQuery}`;
    } else if (category && category !== 'all') {
      apiUrl = `https://dummyjson.com/products/category/${category}`;
    }

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        const productArray = data.products || [];
        const uniqueProducts = productArray.reduce((acc, product) => {
          if (!acc.some(p => p.id === product.id)) {
            acc.push(product);
          }
          return acc;
        }, []);
        
        setProducts(uniqueProducts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [category, searchParams]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <div 
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>Rating: {product.rating}</p>
              <button>View Details</button>
            </div>
          </div>
        ))
      ) : (
        <div className="no-products">No products found</div>
      )}
    </div>
  );
};

export default ProductList;