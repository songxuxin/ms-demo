import React from 'react';
import Product from './components/product';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Products Available</h2>
      <Product />
      <Footer />
    </div>
  );
}

export default App;
