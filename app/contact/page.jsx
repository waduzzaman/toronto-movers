// app/contact/page.jsx
"use client"; // This page uses client-side state for the form

import { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

// This metadata will be used for SEO
// export const metadata = {
//   title: "Contact Us - Toronto Movers",
//   description: "Get in touch with Toronto Movers for a free quote or any inquiries about our moving services in Toronto and the GTA. Call us or fill out our contact form.",
// };

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    // Simulate form submission
    console.log("Form data submitted:", formData);
    // In a real application, you would send this data to a backend API:
    // try {
    //   const response = await fetch('/api/contact', { // You'd create this API route
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setIsSubmitted(true);
    //     setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    //   } else {
    //     const errorData = await response.json();
    //     setError(errorData.message || 'Something went wrong. Please try again.');
    //   }
    // } catch (err) {
    //   setError('Failed to send message. Please check your connection and try again.');
    // }

    // For this example, we just simulate success
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-heading text-gray-900 sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to book your move? Contact Toronto Movers today!
            We're here to help make your relocation smooth and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold font-heading text-gray-800 mb-3">Contact Directly</h2>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <address className="not-italic text-gray-700">
                  123 Moving Lane<br />
                  Toronto, ON, M1A 1A1
                </address>
              </div>
            </div>
            <div>
              <div className="flex items-start space-x-3 mt-4">
                <PhoneIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <a href="tel:+14165551234" className="text-gray-700 hover:text-primary">(416) 555-1234</a>
              </div>
            </div>
            <div>
              <div className="flex items-start space-x-3 mt-4">
                <EnvelopeIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <a href="mailto:info@torontomovers.ca" className="text-gray-700 hover:text-primary">info@torontomovers.ca</a>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold font-heading text-gray-800 mt-8 mb-3">Business Hours</h2>
              <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Saturday: 9:00 AM - 3:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 shadow-xl rounded-lg">
            <h2 className="text-2xl font-semibold font-heading text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number (Optional)
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {isSubmitted && (
                <p className="text-sm text-green-600">
                  Thank you for your message! We'll get back to you soon.
                </p>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Optional: Map Section
        <div className="mt-16">
          <h2 className="text-2xl font-semibold font-heading text-gray-800 mb-6 text-center">Find Us Here</h2>
          <div className="aspect-[16/9] w-full bg-gray-300 rounded-lg shadow-md">
             You would embed a Google Map iframe here or use a library like react-leaflet or google-maps-react
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368957.5890750258!2d-79.3831843!3d43.7001113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1678886472000!5m2!1sen!2sca" // Replace with your actual business map link
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Toronto Movers Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}

// Note: To make the metadata object work in a client component (`"use client"`),
// you would typically define it in a parent Server Component (like layout.js or page.js if this was nested)
// or use the `generateMetadata` function if this page itself was a Server Component.
// Since we've marked this as "use client" for form interactivity, the `export const metadata`
// might not be picked up as expected for static generation in some Next.js versions/configurations for client components.
// For simple cases it often works, but for robust SEO with client components, consider generating metadata
// in a parent server component or using the `use client` directive more granularly on the form component itself,
// keeping the page as a Server Component.
// For now, we'll keep it as is, as Next.js has improved its handling of this.