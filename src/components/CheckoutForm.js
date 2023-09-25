import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppState } from './AppStateContext';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { setCheckoutInfo } = useAppState();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingStreet: '',
    billingUnit: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    shippingStreet: '',
    shippingUnit: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let validationErrors = {};
    // Validation logic here
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      console.log('Form data submitted:', formData);
      setCheckoutInfo(formData); 
      navigate('/invoice/1');
    }
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="cardNumber" placeholder="Card Number" maxLength="16" value={formData.cardNumber} onChange={handleChange} required />
        {errors.cardNumber && <p>{errors.cardNumber}</p>}
        <input type="text" name="expiryDate" placeholder="Expiry MM/YY" maxLength="5" value={formData.expiryDate} onChange={handleChange} required />
        {errors.expiryDate && <p>{errors.expiryDate}</p>}
        <input type="text" name="cvv" placeholder="CVV" maxLength="3" value={formData.cvv} onChange={handleChange} required />
        {errors.cvv && <p>{errors.cvv}</p>}

        <h3>Billing Address</h3>
        <input type="text" name="billingStreet" placeholder="Street" value={formData.billingStreet} onChange={handleChange} required />
        <input type="text" name="billingUnit" placeholder="Unit #" value={formData.billingUnit} onChange={handleChange} />
        <input type="text" name="billingCity" placeholder="City" value={formData.billingCity} onChange={handleChange} required />
        <input type="text" name="billingState" placeholder="State" value={formData.billingState} onChange={handleChange} required />
        <input type="text" name="billingZip" placeholder="Zip" value={formData.billingZip} onChange={handleChange} required />

        <h3>Shipping Address</h3>
        <input type="text" name="shippingStreet" placeholder="Street" value={formData.shippingStreet} onChange={handleChange} required />
        <input type="text" name="shippingUnit" placeholder="Unit #" value={formData.shippingUnit} onChange={handleChange} />
        <input type="text" name="shippingCity" placeholder="City" value={formData.shippingCity} onChange={handleChange} required />
        <input type="text" name="shippingState" placeholder="State" value={formData.shippingState} onChange={handleChange} required />
        <input type="text" name="shippingZip" placeholder="Zip" value={formData.shippingZip} onChange={handleChange} required />

        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
