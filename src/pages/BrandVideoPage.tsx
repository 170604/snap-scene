import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const BrandVideoPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  const packages = [
    {
      id: "complete",
      title: "Complete Brand Story",
      color: "text-blue-600",
      desc: "Professional Brand Video Production",
      oldPrice: "₹75000",
      price: "₹50000",
      features: [
        "3-5 Minute Brand Video",
        "Professional Video Crew + Equipment",
        "Script Writing + Pre-production",
        "Color Grading + Professional Audio",
      ],
    },
    {
      id: "promo",
      title: "Promotional Video Package",
      color: "text-green-600",
      desc: "High-impact short brand videos",
      oldPrice: "₹40000",
      price: "₹30000",
      features: [
        "60-90 Second Video",
        "1 Videographer + Editor",
        "Motion Graphics",
        "Optimized for Social Media",
      ],
    },
    {
      id: "premium",
      title: "Premium Video Package",
      color: "text-red-600",
      desc: "Full cinematic brand film",
      oldPrice: "₹100000",
      price: "₹75000",
      features: [
        "Up to 10-Minute Film",
        "Full Crew + Director",
        "Drone Footage",
        "Multiple Location Shoots",
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
            Brand Video<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Make sure your business is understood visually!
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
            Professional brand videos that tell your story effectively. 100% refunds on cancellation within 48 hrs of booking*.
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
            Ideas For Videos<span className="text-creative">.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Creative brand video concepts that engage your audience -
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
              >
                <img
                  src={`/lovable-uploads/c729c332-73ba-47e7-b2df-8ee27670fdc1.png`}
                  alt={`Brand video inspiration ${index}`}
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

export default BrandVideoPage;
