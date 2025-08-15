import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact: React.FC = () => {
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
            <form className="space-y-6 bg-yellow-50">
              <p className="text-red-500 text-sm">
                * The type field is required.
              </p>
              <p>Write to us, and we will get back to you asap.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Last"
                  className="border rounded px-3 py-2 w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="border rounded px-3 py-2 w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="91999xxxxx99"
                  className="border rounded px-3 py-2 w-full"
                  required
                />
                <select className="border rounded px-3 py-2 w-full" required>
                  <option value="">Select an option</option>
                  <option value="General Query">General Query</option>
                  <option value="Booking">Booking</option>
                  <option value="Support">Support</option>
                </select>
              </div>

              <textarea
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
