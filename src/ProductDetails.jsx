import { useParams, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'MacBook Pro',
    price: 2499,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: '14-inch, M1 Pro chip, 16GB RAM, 512GB SSD',
    specs: 'CPU: 10-core, GPU: 16-core, Battery: up to 17 hours'
  },
  {
    id: 2,
    name: 'iPhone 14',
    price: 999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: '6.1-inch Super Retina XDR display',
    specs: 'A16 Bionic chip, 128GB storage, 12MP camera system'
  },
  {
    id: 3,
    name: 'AirPods Pro',
    price: 249,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: 'Active Noise Cancellation with Transparency mode',
    specs: 'Battery: up to 4.5 hours, Case: Wireless charging'
  },
  {
    id: 4,
    name: 'iPad Pro',
    price: 799,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: '11-inch Liquid Retina display, M2 chip',
    specs: '8-core CPU, 10-core GPU, 256GB storage'
  },
  {
    id: 5,
    name: 'Apple Watch',
    price: 399,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s',
    description: 'Always-On Retina display, Blood Oxygen app',
    specs: 'GPS, Water resistant 50m, S8 chip'
  },
  {
    id: 6,
    name: 'Mac Mini',
    price: 699,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aCkFdAE3w5BZhekfWIL0X0QlZvCO1Sr_hA&s', 
    description: 'M2 chip, 8GB RAM, 256GB SSD',
    specs: '8-core CPU, 10-core GPU, WiFi 6E, Thunderbolt 4'
  }
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>პროდუქტი ვერ მოიძებნა</h2>
        <Link to="/" className="back-btn">უკან დაბრუნება</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <div className="details-container">
        <div className="detail-image-container">
          <img 
            src={product.image} 
            alt={product.name}
            className="detail-image"
          />
        </div>
        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="detail-price">{product.price} ლარი</p>
          <p className="detail-description">{product.description}</p>
          <div className="specs">
            <h3>ტექნიკური მონაცემები:</h3>
            <p>{product.specs}</p>
          </div>
          <Link to="/" className="back-btn">უკან დაბრუნება</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;