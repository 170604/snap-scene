import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const InteriorPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  const packages = [
    {
      id: "complete",
      title: "Complete Interior Shoot",
      color: "text-blue-600",
      desc: "Professional Interior Photography",
      oldPrice: "₹35000",
      price: "₹25000",
      features: [
        "3-4 Rooms Coverage",
        "Professional Architecture Photographer",
        "100+ High-res Images",
        "Wide-angle & Detail Shots Included",
      ],
    },
    {
      id: "luxury",
      title: "Luxury Interior Package",
      color: "text-purple-600",
      desc: "Premium Interior & Architectural Photography",
      oldPrice: "₹50000",
      price: "₹38000",
      features: [
        "Full Property Coverage",
        "Day & Night Shots",
        "150+ Edited Photos",
        "Cinematic Walkthrough Video Included",
      ],
    },
    {
      id: "commercial",
      title: "Commercial Interior Showcase",
      color: "text-red-600",
      desc: "Designed for Hotels, Offices & Showrooms",
      oldPrice: "₹80000",
      price: "₹65000",
      features: [
        "Multi-location Coverage",
        "360° Virtual Tour",
        "300+ High-Resolution Photos",
        "Drone Exterior Shots Included",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Interior<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Make the clients feel the comfort before they step in!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-5xl mx-auto">
        {/* Pricing Plans Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Pricing Plans<span className="text-creative">.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Showcase your interiors with stunning photography. 100% refunds on cancellation within 48 hrs of booking*.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Get Custom Pricing<span className="text-creative">.</span>
            </h3>
            <Button variant="creative" size="lg">
              Enquire Now
            </Button>
          </div>

          {/* Packages */}
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="mb-4 cursor-pointer text-center"
              onClick={() => togglePackage(pkg.id)}
            >
              <CardContent className="p-6">
                <h4 className={`text-2xl font-bold ${pkg.color}`}>{pkg.title}</h4>
                {activePackage === pkg.id && (
                  <div className="mt-4">
                    <p className="text-muted-foreground mb-4">{pkg.desc}</p>
                    <div className="mb-4">
                      <span className="line-through text-sm block">{pkg.oldPrice}</span>
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <ul className="space-y-2 text-sm text-left inline-block">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                    <div>
                      <Button className="mt-4 bg-black text-white hover:bg-black/90">
                        Book Now
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Ideas Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Ideas For Photoshoot<span className="text-creative">.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Beautiful interior photography styles that attract clients -
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
              >
                <img
                  src={`/lovable-uploads/60448542-ae52-49da-a150-e09d2ca35d0a.png`}
                  alt={`Interior inspiration ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InteriorPage;
