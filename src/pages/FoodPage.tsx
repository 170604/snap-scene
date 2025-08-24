import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FoodPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const navigate = useNavigate();

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  const packages = [
    {
      id: "Insta",
      title: "Insta Food Shoot",
      color: "text-blue-600",
      desc: "Professional Food Photography",
      oldPrice: "₹16999",
      price: "₹14999",
      features: [
        "15 Dishes - Styling and Photoshoot",
        "3 Shots per dish. Top Angle / Inclined/ Zero Angle",
        "Photographer plus Stylist",
        "Photographer plus Stylist",
      ],
    },
    {
      id: "Luxury",
      title: "Luxury Food Shoot",
      color: "text-green-600",
      desc: "Casual & Lifestyle Food Photography",
      oldPrice: "₹29999",
      price: "₹24999",
      features: [
        "15 Dishes",
        "15 Interior Photographs",
        "Photographer plus Stylist h",
        "Full Frame Camera with Prime and wide lenses plus lights",
      ],
    },
    {
      id: "premium",
      title: "Premium Food & Beverage Package",
      color: "text-red-600",
      desc: "High-End Food Photography + Video",
      oldPrice: "₹54999",
      price: "₹49999",
      features: [
        "15 Dishes",
        "15 Interior Photographs",
        "1 Minute Walkthrough Video",
        "3 Styled Shots per dish",
        "Expert in Photography and Styling",
        "8 Hours of Shoot",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center text-center relative"
        style={{ backgroundImage: "url('assets/spices.jpg')" }} // 🔥 Replace with your image path
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* overlay for text readability */}
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Food<span className="text-creative">.</span>
          </h1>
           <p className="text-lg text-gray-200 mb-8">
            You are able to taste a picture they say!
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
            Professional food photography that makes your dishes irresistible. 100% refunds on cancellation within 48 hrs of booking*.
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
            Mouth-watering food photography styles that sell -
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "assets/milk and biscuits on glass.jpg", 
                "assets/Ragavendra Cafe-2.jpg",
                "assets/Ragavendra Cafe-36.jpg",
                "assets/Ragavendra Cafe-42.jpg",
                "assets/Ragavendra Cafe-48.jpg",
                "assets/Ragavendra Cafe-66.jpg",
                "assets/Ragavendra Cafe-72.jpg",
                "assets/spices.jpg"
              ].map((src, index) => (
                <div
                  key={index}
                  className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Wedding inspiration ${index + 1}`}
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

export default FoodPage;
