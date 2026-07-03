import { useState } from 'react';
import { candleProducts, type CandleProduct } from './products';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<CandleProduct | null>(null);
  const [fragrance, setFragrance] = useState('Jasmine');
  const [color, setColor] = useState('Red');
  const [quantity, setQuantity] = useState(1);
  const [orderSummary, setOrderSummary] = useState<string | null>(null);
  
  // Custom states to handle the dynamic text link updates
  const [finalDetails, setFinalDetails] = useState<{
    name: string;
    fragrance: string;
    color: string;
    qty: number;
    price: number;
  } | null>(null);

  const closeModal = () => {
    setSelectedProduct(null);
    setFragrance('Jasmine');
    setColor('Red');
    setQuantity(1);
  };

  const handleConfirmOrder = () => {
    if (selectedProduct) {
      const totalPrice = selectedProduct.price * quantity;
      
      // Save details for generating the dynamic link
      setFinalDetails({
        name: selectedProduct.name,
        fragrance,
        color,
        qty: quantity,
        price: totalPrice
      });

      setOrderSummary(
        `Customized ${quantity}x ${selectedProduct.name} with ${fragrance} fragrance and ${color} color. Total: ₹${totalPrice}`
      );
      closeModal();
    }
  };

  // Generating a text structure for smooth checkout communication
  const messageText = finalDetails 
    ? encodeURIComponent(`Hi Fineline! I want to order ${finalDetails.qty}x ${finalDetails.name} customized in ${finalDetails.color} color and ${finalDetails.fragrance} fragrance. Total Price: ₹${finalDetails.price}.`)
    : encodeURIComponent("Hi Fineline! I am interested in ordering handcrafted soy wax candles.");

  return (
    <>
      <header>
        <h1>Fineline Crafts & Candles</h1>
        <p>Handcrafted Soy Wax Art Candles</p>
      </header>

      <section className="hero">
        <h2>Elegant Handmade Candles</h2>
        <p>Every 100% natural soy wax candle is a carefully crafted work of art designed to bring calm, beauty, and elegance to your space.</p>
        <a className="btn" href="#products">View Collection</a>
      </section>

      {orderSummary && (
        <div className="summary-toast">
          <p>✨ <strong>Customization Saved!</strong> {orderSummary}</p>
          <button onClick={() => setOrderSummary(null)}>×</button>
        </div>
      )}

      <section className="section">
        <h2>About Us</h2>
        <p>Welcome to Fineline, where decorative candles meet artistic craftsmanship. Our collection features sculptural, floral, and designer candles made with natural ingredients and attention to detail. Perfect for gifts, décor, celebrations, and relaxation.</p>
      </section>

      <section className="section" id="products">
        <h2>Our Candles</h2>
        <div className="grid">
          {candleProducts.map((candle, index) => (
            <div className="card" key={index}>
              <div className="img-container">
                <img 
                  className="product-img" 
                  src={`/${candle.image}`} 
                  alt={candle.name} 
                />
              </div>
              <h3>{candle.name}</h3>
              <p>{candle.description}</p>
              <div className="price">₹{candle.price}</div>
              <div className="burn-time">Burn Time: {candle.burnTime}</div>
              <button 
                className="customize-btn"
                onClick={() => setSelectedProduct(candle)}
              >
                Customize & Order
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-x" onClick={closeModal}>×</button>
            
            <h2>Configure Your Candle</h2>
            <h3>{selectedProduct.name}</h3>
            <p className="modal-base-price">Base Price: ₹{selectedProduct.price}</p>

            <div className="form-group">
              <label>Select Fragrance:</label>
              <select value={fragrance} onChange={(e) => setFragrance(e.target.value)}>
                <option value="Jasmine">Jasmine</option>
                <option value="Rose">Rose</option>
                <option value="Lavender">Lavender</option>
                <option value="Lemongrass">Lemongrass</option>
                <option value="Fresh Lime">Fresh Lime</option>
                <option value="Fruit Basket">Fruit Basket</option>
              </select>
            </div>

            <div className="form-group">
              <label>Select Color:</label>
              <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="Red">Red</option>
                <option value="Violet">Violet</option>
                <option value="Orange">Orange</option>
                <option value="Yellow">Yellow</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
              </select>
            </div>

            <div className="form-group">
              <label>Quantity:</label>
              <div className="quantity-counter">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="price-calculator">
              <span>Total Price:</span>
              <strong>₹{selectedProduct.price * quantity}</strong>
            </div>

            <button className="submit-custom-btn" onClick={handleConfirmOrder}>
              Confirm Customization
            </button>
          </div>
        </div>
      )}

      <section className="section">
        <h2>Customization Options</h2>
        <div className="features">
          <div className="feature">Choose your fragrance: Jasmine, Rose, Lavender, Lemongrass, Fresh Lime, Fruit Basket</div>
          <div className="feature">Select custom colors: Red, Violet, Orange, Yellow, Blue, Green</div>
          <div className="feature">Bulk orders available for events & gifting</div>
          <div className="feature">Gift packaging available (charges apply)</div>
        </div>
      </section>

      <section className="section" id="checkout-section" style={{ textAlign: 'center' }}>
        <h2>Order Now</h2>
        {finalDetails ? (
          <p style={{ color: '#e89cae', fontWeight: '500' }}>
            Ready to purchase: {finalDetails.qty}x {finalDetails.name} (₹{finalDetails.price})
          </p>
        ) : (
          <p>Place your order and customize your candle today.</p>
        )}
        
        {/* The link is dynamic, appending user inputs automatically */}
        <a 
          className="btn" 
          href={`https://instagram.com/fineline_candles?text=${messageText}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {finalDetails ? "Send Custom Order" : "Order via Instagram"}
        </a>
      </section>

      <footer>
        <p>© 2026 Fineline Crafts & Candles</p>
        <p>Follow us @fineline_candles</p>
      </footer>
    </>
  );
}

export default App;