import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const MaternityPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  const packages = [
    {
      id: "premium",
      title: "Premium Maternity",
      color: "text-blue-600",
      desc: "Photography + Video",
      oldPrice: "₹12000",
      price: "₹8000",
      features: [
        "2 Hour Session",
        "1 Professional Photographer",
        "80+ Edited Photos + Short Video",
        "Beautiful Maternity Gowns Included",
      ],
    },
    {
      id: "luxury",
      title: "Luxury Maternity Package",
      color: "text-purple-600",
      desc: "Premium Photography + Cinematic Video",
      oldPrice: "₹25000",
      price: "₹18000",
      features: [
        "4 Hour Session",
        "1 Photographer + 1 Videographer",
        "150+ Edited Photos + Cinematic Highlights",
        "Custom Props and Backgrounds",
      ],
    },
    {
      id: "celebrity",
      title: "Celebrity Maternity Experience",
      color: "text-red-600",
      desc: "Exclusive Studio + Outdoor Combo",
      oldPrice: "₹50000",
      price: "₹40000",
      features: [
        "Full Day Coverage",
        "Creative Director + Full Crew",
        "200+ Premium Retouched Images",
        "Drone Shots & Cinematic Behind-The-Scenes",
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
            Maternity<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Preserve the happiness of motherhood with some lovely pictures.
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
            Beautiful maternity shoots at affordable prices. 100% refunds on cancellation within 48 hrs of booking*.
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
            Beautiful maternity shoot ideas to celebrate this special time -
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
              >
                <img
                  src={`/lovable-uploads/bc8c5d8e-ba1b-49cb-8963-6a78fb7b5087.png`}
                  alt={`Maternity inspiration ${index}`}
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

export default MaternityPage;
