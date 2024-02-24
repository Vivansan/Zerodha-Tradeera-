import React, { useState, useEffect } from 'react';

const MarketData = () => {
  const [marketData, setMarketData] = useState({
    'TCS': 3500.0,
    'RELIANCE': 2450.0,
    'HDFCBANK': 1500.0,
  });

  useEffect(() => {
    // Fetch market data from API (replace with actual API call)
    // Update the state using setMarketData
  }, []);

  return (
    <div id="marketData">
      <h2>Market Data</h2>
      {Object.keys(marketData).map(symbol => (
        <p key={symbol} className="stock">
          {symbol}: ₹{marketData[symbol]}
        </p>
      ))}
    </div>
  );
};

export default MarketData;