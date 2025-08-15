import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BabyKidsPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);
   const navigate = useNavigate();

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  const packages = [
    {
      id: "premium",
      title: "Premium Baby Shoot",
      color: "text-blue-600",
      desc: "Photography + Video",
      oldPrice: "₹15000",
      price: "₹10000",
      features: [
        "2-3 Hour Session",
        "1 Photographer + 1 Assistant",
        "100+ Edited Photos + 1 Min Video",
        "Props and Costumes Included",
      ],
    },
    {
      id: "birthday",
      title: "Birthday Special",
      color: "text-pink-600",
      desc: "Birthday Event Photography",
      oldPrice: "₹20000",
      price: "₹15000",
      features: [
        "Full Birthday Coverage",
        "Photography + Short Highlight Video",
        "Custom Theme Props",
        "Unlimited Edited Photos",
      ],
    },
    {
      id: "milestone",
      title: "Milestone Package",
      color: "text-green-600",
      desc: "Monthly Baby Growth Shoots",
      oldPrice: "₹50000",
      price: "₹40000",
      features: [
        "12 Monthly Sessions",
        "Themed Shoots Every Month",
        "All Photos Edited",
        "Final Album + Video Compilation",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
     <section className="py-32 bg-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Baby & Kids<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Kids grow up fast, make sure every month is captured for years.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-5xl mx-auto">
        {/* Pricing Plans Section */}
        <section className="mb-15 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Pricing Plans<span className="text-creative">.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Capture precious moments at affordable prices. 100% refunds on cancellation within 48 hrs of booking*.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Get Custom Pricing<span className="text-creative">.</span>
            </h3>
            <Button variant="creative" size="lg" onClick={() => navigate("/contact")}>
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
                      <Button className="mt-4 bg-black text-white hover:bg-black/90" onClick={() => navigate("/contact")}>
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
            Adorable ideas to capture your little ones' precious moments -
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
              >
                <img
                  src={`/lovable-uploads/5e4221d8-0834-4435-9ac3-27638edaea57.png`}
                  alt={`Baby & Kids inspiration ${index}`}
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

export default BabyKidsPage;
