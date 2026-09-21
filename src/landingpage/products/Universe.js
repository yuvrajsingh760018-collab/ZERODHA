import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      <h1>Products</h1>

      <p>
        Explore all Zerodha products and services.
      </p>

      <div className="row mt-5">

        <div className="col-md-4">
          <h3>Kite</h3>
          <p>Trading platform for stocks, mutual funds and more.</p>
        </div>

        <div className="col-md-4">
          <h3>Console</h3>
          <p>Track your investments and portfolio.</p>
        </div>

        <div className="col-md-4">
          <h3>Coin</h3>
          <p>Invest in direct mutual funds.</p>
        </div>

      </div>
    </div>
  );
}

export default Universe;