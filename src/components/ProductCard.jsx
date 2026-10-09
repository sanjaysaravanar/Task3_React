
function ProductCard({
  name,
  price,
  quantity,
  selectedColor,
  deliveryCity,
  setSelectedColor,
  setDeliveryCity,
  addToCart,
  removeOne,
  resetCart
}) {
  return (
    <section className="product-card">
      <h2>{name}</h2>

      <p><strong>Price:</strong> ₹{price}</p>

      <label htmlFor="color">Choose colour:</label>
      <select
        id="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
      </select>

      <p>
        <strong>Selected colour:</strong> {selectedColor}
      </p>

      <label htmlFor="city">Delivery city:</label>
      <input
        id="city"
        type="text"
        value={deliveryCity}
        onChange={(e) => setDeliveryCity(e.target.value)}
      />

      <p><strong>Delivery to:</strong> {deliveryCity || "Not entered"}</p>
      <p><strong>Quantity:</strong> {quantity}</p>
      <p><strong>Total:</strong> ₹{quantity * price}</p>

      <div className="button-group">
        <button onClick={addToCart}>Add to Cart</button>

        <button onClick={removeOne} disabled={quantity === 0}>
          Remove One
        </button>

        <button onClick={resetCart}>Reset Cart</button>
      </div>

      <p className="cart-message">
        {quantity === 0
          ? "Cart is empty"
          : "Product added to cart"}
      </p>
    </section>
  );
}

export default ProductCard;