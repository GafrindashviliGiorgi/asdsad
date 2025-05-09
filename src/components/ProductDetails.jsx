import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-details">
      <button className="back-button" onClick={() => navigate(-1)}>← Back to Products</button>
      <div className="details-container">
        <div className="product-images">
          {product.images.map((image, index) => (
            <img 
              key={`${product.id}-${index}`}
              src={image} 
              alt={`${product.title} ${index + 1}`}
            />
          ))}
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="brand">Brand: {product.brand}</p>
          <p className="category">Category: {product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <p className="discount">Discount: {product.discountPercentage}%</p>
          <p className="rating">Rating: {product.rating}/5</p>
          <p className="stock">In Stock: {product.stock}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;