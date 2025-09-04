import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";

const EventPhotographersIndia: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50 text-gray-800">
      <Helmet>
        <title>Event Photographers in India | Snaps & Scenes</title>
        <meta
          name="description"
          content="Hire the best event photographers in India. Professional photography & videography for weddings, corporate events, parties, and more across major cities."
        />
        <meta
          name="keywords"
          content="event photographers in India, wedding photographers India, corporate photography, candid photography, best photographers India"
        />
        <meta property="og:title" content="Event Photographers in India | Snaps & Scenes" />
        <meta
          property="og:description"
          content="Book professional event photographers in India. Creative wedding, corporate, and party photography services across 40+ cities."
        />
        <meta property="og:image" content="/assets/event-cover.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snapsandscenes.com/event-photographers-india" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assets/event-cover.jpg" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/assets/event-cover.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Event Photographers in India<span className="text-yellow-400">.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Capture every unforgettable moment with Snaps & Scenes. Professional photography & videography for weddings, corporate events, and private celebrations across India.
          </p>
          <Button
            size="lg"
            variant="creative"
            className="mt-6"
            onClick={() => (window.location.href = "/contact")}
          >
            Book an Event Photographer
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Our Event Photography Services<span className="text-yellow-600">.</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
          From large-scale weddings to intimate corporate gatherings, we provide tailored photography services that highlight every detail of your event.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Weddings & Engagements",
              desc: "Traditional + candid photography, cinematic videography, and complete coverage of your special day.",
            },
            {
              title: "Corporate Events",
              desc: "Professional coverage for conferences, seminars, product launches, and award functions.",
            },
            {
              title: "Parties & Celebrations",
              desc: "From birthdays to anniversaries, capture fun, candid, and unforgettable memories.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Available Across India<span className="text-yellow-600">.</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Our team of skilled photographers and videographers are available in 40+ cities across India.
        </p>
        <p className="font-medium">
          📍 Delhi | Mumbai | Bangalore | Chennai | Hyderabad | Kolkata | Pune | Jaipur | Ahmedabad
        </p>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
          Frequently Asked Questions<span className="text-yellow-600">.</span>
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg">How do I book an event photographer?</h3>
            <p className="text-gray-600">
              Simply click the “Book Now” button above or fill in the contact form. Our team will get back to you with custom packages.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Do you provide videography services?</h3>
            <p className="text-gray-600">
              Yes, all packages include professional video coverage with cinematic and traditional edits.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Are you available in smaller towns?</h3>
            <p className="text-gray-600">
              Absolutely! We travel pan-India and can reach smaller towns for your event.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventPhotographersIndia;
