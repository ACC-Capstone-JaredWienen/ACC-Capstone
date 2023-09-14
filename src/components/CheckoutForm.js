// CheckoutForm.js
import React, { useState } from 'react';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        paymentMethod: 'creditCard'
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // In a real-world scenario, you'd send this data to your backend.
        console.log(formData);
        alert('Order placed successfully!');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                    <label>Address:</label>
                    <textarea value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
                </div>
                <div>
                    <label>Payment Method:</label>
                    <select value={formData.paymentMethod} onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })}>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Place Order</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
