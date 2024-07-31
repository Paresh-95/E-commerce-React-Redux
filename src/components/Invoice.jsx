import React from 'react';

const InvoiceTemplate = ({ cartItems, totalItems, totalAmount }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Invoice</h1>
      <div className="mb-6">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center border-b border-gray-200 py-4">
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mr-6" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-green-600 font-bold mt-2">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right">
        <h2 className="text-2xl font-bold mb-2">Your Cart Summary</h2>
        <p className="text-lg">Total Items: {totalItems}</p>
        <p className="text-lg">Total Amount: ${totalAmount}</p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4">Checkout Now</button>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
