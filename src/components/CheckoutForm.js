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
  const [errors, setErrors] = useState({}); // For validation messages

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let validationErrors = {};

    if (formData.cardNumber.length !== 16) {
      validationErrors.cardNumber = 'Card number should be 16 digits';
    }

    if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      validationErrors.expiryDate = 'Expiry should be in MM/YY format';
    }

    if (formData.cvv.length !== 3) {
      validationErrors.cvv = 'CVV should be 3 digits';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      console.log('Form data submitted:', formData);
      alert('Checkout complete!'); // Replace with your desired action
    }
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
        {errors.cardNumber && <p>{errors.cardNumber}</p>}
        <input 
          type="text" 
          name="expiryDate" 
          placeholder="Expiry MM/YY" 
          maxLength="5"
          value={formData.expiryDate}
          onChange={handleChange}
          required 
        />
        {errors.expiryDate && <p>{errors.expiryDate}</p>}
        <input 
          type="text" 
          name="cvv" 
          placeholder="CVV" 
          maxLength="3"
          value={formData.cvv}
          onChange={handleChange}
          required 
        />
        {errors.cvv && <p>{errors.cvv}</p>}
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
