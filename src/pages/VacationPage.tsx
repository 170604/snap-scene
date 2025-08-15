import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VacationPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const navigate = useNavigate();

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  const packages = [
    {
      id: "vacation",
      title: "Vacation Memories",
      color: "text-blue-600",
      desc: "Photography + Video + Drone",
      oldPrice: "₹25000",
      price: "₹18000",
      features: [
        "Full Day Coverage",
        "1 Photographer + Drone Operator",
        "200+ Photos + Travel Video + Drone Footage",
        "Multiple Location Coverage",
      ],
    },
    {
      id: "luxury",
      title: "Luxury Vacation",
      color: "text-purple-600",
      desc: "Premium Photography + Cinematic Video + Drone",
      oldPrice: "₹40000",
      price: "₹32000",
      features: [
        "2 Days Coverage",
        "2 Photographers + 1 Drone Operator",
        "400+ Edited Photos + Cinematic Travel Film",
        "Premium Locations & Advanced Lighting",
      ],
    },
    {
      id: "celebrity",
      title: "Celebrity Vacation",
      color: "text-red-600",
      desc: "All-inclusive Luxury with Full Crew + Special Effects",
      oldPrice: "₹80000",
      price: "₹65000",
      features: [
        "Unlimited Days Coverage",
        "Full Crew + Multiple Drones + Cinematic Directors",
        "1000+ Edited Photos + Documentary Style Travel Film",
        "AR/VR Travel Experience + Special Effects",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Vacation<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Spent a bomb on travel? Freeze the scenes forever!
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
            Capture your vacation memories professionally. 100% refunds on cancellation within 48 hrs of booking*.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Get Custom Pricing<span className="text-creative">.</span>
            </h3>
            <Button
              variant="creative"
              size="lg"
              onClick={() => navigate("/contact")}
            >
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
                      <Button
                        className="mt-4 bg-black text-white hover:bg-black/90"
                        onClick={() => navigate("/contact")}
                      >
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
            Turn Your Getaway Into Timeless Memories.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
              >
                <img
                  src={`/lovable-uploads/ed39772f-0548-4cc0-b99b-bddc3d81a269.png`}
                  alt={`Vacation inspiration ${index}`}
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

export default VacationPage;
