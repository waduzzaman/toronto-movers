// app/quote/page.jsx
"use client"; // If you plan to add a form here with client-side logic

import { useState } from 'react';

// export const metadata = {
//   title: "Get a Free Moving Quote - Toronto Movers",
//   description: "Request a free, no-obligation quote for your upcoming move in Toronto. Fill out our quick form, and we'll get back to you promptly.",
// };

export default function QuotePage() {
  // Basic form state and handler (similar to ContactPage)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    fromAddress: '',
    toAddress: '',
    moveSize: 'studio', // e.g., studio, 1-bedroom, 2-bedroom, office
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);
    if (!formData.name || !formData.email || !formData.fromAddress || !formData.toAddress || !formData.moveDate) {
        setError('Please fill in all required fields.');
        return;
    }
    console.log("Quote Request:", formData);
    // TODO: Add actual API call to submit quote request
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', moveDate: '', fromAddress: '', toAddress: '', moveSize: 'studio', additionalInfo: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };


  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-heading text-gray-900 sm:text-5xl">
            Request Your Free Moving Quote
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-600 max-w-2xl mx-auto">
            Tell us about your move, and we'll provide a transparent, no-obligation estimate.
            Let's get you moving stress-free!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name, Email, Phone (similar to contact form) */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 px-3" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 px-3" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 px-3" />
            </div>

            {/* Moving Details */}
            <div>
              <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700">Preferred Move Date <span className="text-red-500">*</span></label>
              <input type="date" name="moveDate" id="moveDate" required value={formData.moveDate} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 px-3" />
            </div>
            <div>
              <label htmlFor="fromAddress" className="block text-sm font-medium text-gray-700">Moving From (Address) <span className="text-red-500">*</span></label>
              <input type="text" name="fromAddress" id="fromAddress" required value={formData.fromAddress} onChange={handleChange} placeholder="e.g., 123 Main St, Toronto, ON" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 px-3" />
            </div>
            <div>
              <label htmlFor="toAddress" className="block text-sm font-medium text-gray-700">Moving To (Address) <span className="text-red-500">*</span></label>
              <input type="text" name="toAddress" id="toAddress" required value={formData.toAddress} onChange={handleChange} placeholder="e.g., 456 Oak Ave, Toronto, ON" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 px-3" />
            </div>
            <div>
              <label htmlFor="moveSize" className="block text-sm font-medium text-gray-700">Size of Move</label>
              <select name="moveSize" id="moveSize" value={formData.moveSize} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 px-3">
                <option value="studio">Studio Apartment</option>
                <option value="1-bedroom">1 Bedroom</option>
                <option value="2-bedroom">2 Bedrooms</option>
                <option value="3-bedroom">3+ Bedrooms</option>
                <option value="small-office">Small Office</option>
                <option value="large-office">Large Office</option>
                <option value="other">Other (describe below)</option>
              </select>
            </div>
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information / Special Items</label>
              <textarea name="additionalInfo" id="additionalInfo" rows="3" value={formData.additionalInfo} onChange={handleChange} placeholder="e.g., Piano, heavy furniture, packing needed" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 px-3"></textarea>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            {isSubmitted && <p className="text-sm text-green-600">Thank you! Your quote request has been submitted. We'll contact you soon.</p>}

            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}