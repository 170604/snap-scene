import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxrC52odl-5gc0hFQnVR5BiRJbAhzMTb3K6muSTnRBo9IsXJNqe6uztQ0odTOMVhUAY/exec", // replace with your web app URL
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      );

      setStatus("✅ Your response has been recorded!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "",
        message: "",
      });
    } catch (error) {
      setStatus("❌ Failed to submit. Try again.");
    }
  };

  return (
    <div className="bg-yellow-50 text-gray-800 min-h-screen flex flex-col">
      {/* Site Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <section className="container mx-auto pt-36 pb-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900">
              Contact<span className="text-yellow-700">.</span>
            </h2>
            <p className="mt-2 text-lg">
              Quickly ⚡ let us know how can we help you.
            </p>

            <div className="mt-10">
              <h3 className="text-lg font-bold">CUSTOMER CARE:</h3>
              <p className="mt-2">
                <strong>Phone:</strong> +91 81092 78683
              </p>
              <p>
                <strong>Email:</strong> contact@snapsandscenes.com
              </p>
              <div className="mt-4">
                <a
                  href="https://wa.me/+918109278683"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="h-5 w-5 mr-2"
                  />
                  Send Message
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold">Our Offices</h3>
              <p className="mt-2">
                <strong>Bengaluru</strong>
              </p>
              <p>
                No.1095, 60 feet Road, Upkar Layout, Opposite RTO Office, Bangalore-560091.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form className="space-y-6 bg-yellow-50" onSubmit={handleSubmit}>
              <p className="text-red-500 text-sm">
                * The type field is required.
              </p>
              <p>Write to us, and we will get back to you asap.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Last"
                  className="border rounded px-3 py-2 w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className="border rounded px-3 py-2 w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="91999xxxxx99"
                  className="border rounded px-3 py-2 w-full"
                  required
                />
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-full"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="General Query">General Query</option>
                  <option value="Booking">Booking</option>
                  <option value="Support">Support</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your concern in details"
                className="border rounded px-3 py-2 w-full"
              ></textarea>

              <button
                type="submit"
                className="bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800"
              >
                Submit
              </button>

              {status && <p className="mt-2 text-sm">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
