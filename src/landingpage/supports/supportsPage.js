import React from "react";

function SupportPage() {
  return (
    <div className="container mt-5 text-center">

      <h1>Support</h1>

      <p>
        Have questions? We are here to help you.
      </p>

      <div className="row mt-5">

        <div className="col-md-4">
          <h3>Trading Support</h3>
          <p>
            Get help with your trading and investment-related queries.
          </p>
        </div>

        <div className="col-md-4">
          <h3>Account Support</h3>
          <p>
            Get assistance with your account and profile.
          </p>
        </div>

        <div className="col-md-4">
          <h3>Contact Us</h3>
          <p>
            Reach out to our support team for further assistance.
          </p>
        </div>

      </div>

    </div>
  );
}

export default SupportPage;