import React from "react";

function PricingPage() {
  return (
    <div className="container mt-5 text-center">

      <h1>Pricing</h1>

      <p>
        Simple and transparent pricing for all your investments.
      </p>

      <div className="row mt-5">

        <div className="col-md-4">
          <h3>Free Equity Delivery</h3>
          <p>₹0</p>
          <p>No brokerage on equity delivery trades.</p>
        </div>

        <div className="col-md-4">
          <h3>Intraday</h3>
          <p>₹20 or 0.03%</p>
          <p>Per executed order, whichever is lower.</p>
        </div>

        <div className="col-md-4">
          <h3>Direct Mutual Funds</h3>
          <p>₹0</p>
          <p>Invest in direct mutual funds with zero commission.</p>
        </div>

      </div>

    </div>
  );
}

export default PricingPage;