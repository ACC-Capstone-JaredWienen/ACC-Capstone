import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from './AppStateContext';

function generateRandomInvoiceId() {
  return Math.floor(100000000 + Math.random() * 900000000);
}

function InvoicePage() {
  const { cart, checkoutInfo } = useAppState();
  const [productsDetails, setProductsDetails] = useState([]);
  const [error, setError] = useState(null);
  const [generatedInvoiceId, setGeneratedInvoiceId] = useState(generateRandomInvoiceId());

  useEffect(() => {
    // Check if cart and checkout info are valid
    if (!cart.length || !checkoutInfo) {
      setError('There was an error generating the invoice. Please try again.');
    }

    // Fetch product details for all items in the cart
    Promise.all(cart.map(item => fetch(`https://fakestoreapi.com/products/${item.productId}`)
      .then(res => res.json())
    )).then(products => setProductsDetails(products));

  }, [cart, checkoutInfo]);

  const sendEmail = () => {
    console.log('Sending email...');
    // Implement email sending logic here
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const product = productsDetails.find(p => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>Invoice ID: {generatedInvoiceId}</div>
      <div>Email: {checkoutInfo.email}</div>
      <div>Shipping Address: {checkoutInfo.shippingStreet}, {checkoutInfo.shippingCity}, {checkoutInfo.shippingState}, {checkoutInfo.shippingZip}</div>
      <div>
        <h3>Products Purchased:</h3>
        <ul>
          {cart.map((item, index) => {
            const product = productsDetails.find(p => p.id === item.productId);
            return (
              <li key={item.id || index}>
                {product ? product.title : 'Loading...'} - ${product ? product.price : 0} x {item.quantity || 0} = ${product ? product.price * item.quantity : 0}
              </li>
            );
          })}
        </ul>
      </div>
      <div>Total Amount: ${calculateTotal()}</div>
      <button onClick={() => window.print()}>Print</button>
      <button onClick={sendEmail}>Send to Email</button>
    </div>
  );
}

export default InvoicePage;
