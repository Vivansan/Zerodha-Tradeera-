import React from 'react';
import MarketData from './components/MarketData';
import OrderForm from './components/OrderForm';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Tradeera - Trading Platform</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <MarketData />
          </div>
          <div className="col-md-6">
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;