import React, { useState } from 'react';

const OrderForm = () => {
  const [order, setOrder] = useState({
    symbol: '',
    quantity: 0,
    orderType: 'buy',
  });

  const placeOrder = () => {
    // Implement order placement logic here
    console.log('Placing order:', order);
  };

  return (
    <form id="orderForm">
      <h2>Place Order</h2>
      <div className="form-group">
        <label htmlFor="symbol">Symbol:</label>
        <input
          type="text"
          className="form-control"
          id="symbol"
          value={order.symbol}
          onChange={(e) => setOrder({ ...order, symbol: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          value={order.quantity}
          onChange={(e) => setOrder({ ...order, quantity: parseInt(e.target.value, 10) })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="orderType">Order Type:</label>
        <select
          className="form-control"
          id="orderType"
          value={order.orderType}
          onChange={(e) => setOrder({ ...order, orderType: e.target.value })}
          required
        >
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </div>
      <button type="button" className="btn btn-dark" onClick={placeOrder}>
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;