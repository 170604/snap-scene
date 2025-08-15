import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";   

const ProductPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const navigate = useNavigate();

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  const packages = [
    {
      id: "ecommerce",
      title: "E-commerce Package",
      color: "text-blue-600",
      desc: "Professional Product Photography",
      oldPrice: "₹25000",
      price: "₹18000",
      features: [
        "100+ Product Images",
        "White Background & Lifestyle Shots",
        "360° Product Views Available",
        "Studio Setup with Professional Lighting",
      ],
    },
    {
      id: "luxury",
      title: "Luxury Product Package",
      color: "text-purple-600",
      desc: "Premium Styling + High-End Editing",
      oldPrice: "₹50000",
      price: "₹40000",
      features: [
        "200+ Product Images",
        "Creative Backdrops & Props",
        "Advanced Retouching & Color Grading",
        "Multiple Lighting Styles",
      ],
    },
    {
      id: "celebrity",
      title: "Celebrity Product Shoot",
      color: "text-red-600",
      desc: "Full Crew + Models + Cinematic Experience",
      oldPrice: "₹120000",
      price: "₹95000",
      features: [
        "Unlimited Products",
        "Professional Models & Makeup Artists",
        "Full Video Ads + BTS Coverage",
        "On-Location & Studio Options",
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
            Product Shoot<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            What is seen, sells - and we make sure it looks fantastic!
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
            High-quality product photography that drives sales. 100% refunds on cancellation within 48 hrs of booking*.
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
            Creative product photography styles that sell more -
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
              >
                <img
                  src={`/lovable-uploads/95265f7d-82d8-407b-8778-9bccfdd6ce23.png`}
                  alt={`Product inspiration ${index}`}
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

export default ProductPage;
