import { Link } from 'react-router-dom';

// უნიკალური პროდუქტების სია გასწორებული ID-ებით
const products = [
  {
    id: 1,
    name: 'MacBook Pro',
    price: 2499,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: '14-inch, M1 Pro chip, 16GB RAM, 512GB SSD'
  },
  {
    id: 2,
    name: 'iPhone 14',
    price: 999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: '6.1-inch Super Retina XDR display'
  },
  {
    id: 3,
    name: 'AirPods Pro',
    price: 249,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: 'Active Noise Cancellation with Transparency mode'
  },
  {
    id: 4,
    name: 'iPad Pro',
    price: 799,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: '11-inch Liquid Retina display, M2 chip'
  },
  {
    id: 5,
    name: 'Apple Watch',
    price: 399,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: 'Always-On Retina display, Blood Oxygen app'
  },
  {
    id: 6,
    name: 'Mac Mini',
    price: 699,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s', 
    description: 'M2 chip, 8GB RAM, 256GB SSD'
  }
];

function ProductList() {
  return (
    <div className="product-list">
      <h2 className="section-title">პროდუქტები</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price} ლარი</p>
              <Link to={`/product/${product.id}`} className="details-btn">
                დეტალები
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;