import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const navigate = useNavigate();

  const togglePackage = (id: string) => {
    setActivePackage(activePackage === id ? null : id);
  };

  const packages = [
    {
      id: "corporate",
      title: "Corporate Event Package",
      color: "text-blue-600",
      desc: "Photography + Video + Live Streaming",
      oldPrice: "₹50000",
      price: "₹35000",
      features: [
        "Full Day Event Coverage",
        "3 Photographers + 2 Videographers",
        "Live Streaming Setup + Highlight Reel",
        "Professional Audio-Visual Equipment",
      ],
    },
    {
      id: "seminar",
      title: "Seminar & Conference Package",
      color: "text-green-600",
      desc: "Photography + Video",
      oldPrice: "₹30000",
      price: "₹22000",
      features: [
        "Half Day Coverage",
        "2 Photographers",
        "Edited Highlight Reel",
        "Professional Audio Setup",
      ],
    },
    {
      id: "premium",
      title: "Premium Event Coverage",
      color: "text-red-600",
      desc: "Full Event Photography & Cinematic Video",
      oldPrice: "₹70000",
      price: "₹55000",
      features: [
        "2-Day Coverage",
        "4 Photographers + 3 Videographers",
        "Full-Length Video + Social Media Reels",
        "Lighting & Stage Photography",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center text-center relative"
        style={{ backgroundImage: "url('/lovable-uploads/d5f41836-d0cd-4461-a46d-a4e08ffaed36.png')" }} // 🔥 Replace with your image path
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* overlay for text readability */}
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Events<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Make sure your event reaches even to the people not attending it!
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
            Professional event coverage that captures every moment. 100% refunds on cancellation within 48 hrs of booking*.
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
                      <Button className="mt-4 bg-black text-white hover:bg-black/90" onClick={() => navigate("/contact")} >
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
            Professional event photography styles that tell your story -
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
              >
                <img
                  src={`/lovable-uploads/d5f41836-d0cd-4461-a46d-a4e08ffaed36.png`}
                  alt={`Events inspiration ${index}`}
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

export default EventsPage;
