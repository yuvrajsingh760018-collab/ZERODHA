import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

// Pages
import HomePage from './landingpage/home/HomePage';
import Signup from './landingpage/signup/Signup';
import AboutPage from './landingpage/about/About';
import ProductPage from './landingpage/products/Universe';
import PricingPage from './landingpage/pricing/pricingPage';
import SupportPage from './landingpage/supports/supportsPage';
import NotFound from './landingpage/NotFound';

// Common Components
import Footer from './landingpage/Footer';
import Navbar from './landingpage/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>

    <Navbar />

    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<HomePage />}
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* About */}
      <Route
        path="/about"
        element={<AboutPage />}
      />

      {/* Products */}
      <Route
        path="/product"
        element={<ProductPage />}
      />

      {/* Pricing */}
      <Route
        path="/pricing"
        element={<PricingPage />}
      />

      {/* Support */}
      <Route
        path="/support"
        element={<SupportPage />}
      />

      {/* 404 - Page Not Found */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

    <Footer />

  </BrowserRouter>
);