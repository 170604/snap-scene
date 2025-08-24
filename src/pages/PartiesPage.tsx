import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PartiesPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);
   const navigate = useNavigate();

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  const packages = [
    {
      id: "Insta Shoot",
      title: "Insta Shoot",
      color: "text-blue-600",
      desc: "Photography Only",
      oldPrice: "₹8999",
      price: "₹6999",
      features: [
        "2-Hour Event Photography",
        "100 Edited Images",
        "Full Frame with Prime Lense",
      ],
    },
    {
      id: "luxury",
      title: "Luxury Party Package",
      color: "text-purple-600",
      desc: "Premium Coverage + Decor Shots",
      oldPrice: "₹15999",
      price: "₹12999",
      features: [
        "4-Hour Event Photography",
        "200 Edited Images",
        "Full Frame with Prime Lensed",
      ],
    },
    {
      id: "celebrity",
      title: "Celebrity Event Coverage",
      color: "text-red-600",
      desc: "photography + Videography",
      oldPrice: "₹24999",
      price: "₹19999",
      features: [
        "4 Hour Shoo",
        "200 Edited Images + 1-2 Min Edited Video",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
     <section
        className="py-32 bg-cover bg-center text-center relative"
        style={{ backgroundImage: "url('assets/ps edit-26.jpg')" }} // 🔥 Replace with your image path
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* overlay for text readability */}
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Parties<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            From Candids to Cheers — We Capture It All.
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
            Make your parties unforgettable with professional photography. 100% refunds on cancellation within 48 hrs of booking*.
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
            Creative party photography ideas to capture all the fun -
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
              >
                <img
                  src={`/lovable-uploads/c294df76-a5b5-4e46-9ed0-c1760cfcd09a.png`}
                  alt={`Party inspiration ${index}`}
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

export default PartiesPage;
