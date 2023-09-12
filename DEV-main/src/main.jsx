import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/cart.jsx'
import { ProductPreviewProvider } from './context/ProductPreviewContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ProductPreviewProvider>
      <App />
    </ProductPreviewProvider>
  </CartProvider>

)
