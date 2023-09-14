import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you can send the formData to the backend or process it further.
    alert('Checkout complete!'); // Replace this with your desired action
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="fullName" 
          placeholder="Full Name" 
          value={formData.fullName}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <input 
          type="text" 
          name="cardNumber" 
          placeholder="Card Number" 
          maxLength="16"
          value={formData.cardNumber}
          onChange={handleChange}
          required 
        />
        <input 
          type="text" 
          name="expiryDate" 
          placeholder="Expiry MM/YY" 
          maxLength="5"
          value={formData.expiryDate}
          onChange={handleChange}
          required 
        />
        <input 
          type="text" 
          name="cvv" 
          placeholder="CVV" 
          maxLength="3"
          value={formData.cvv}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="billingAddress" 
          placeholder="Billing Address" 
          value={formData.billingAddress}
          onChange={handleChange}
          required 
        />
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
