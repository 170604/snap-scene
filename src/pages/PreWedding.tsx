import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PreWeddingPage = () => {
  const [activePackage, setActivePackage] = useState<string | null>("grand");
  const navigate = useNavigate();

  const togglePackage = (packageName: string) => {
    setActivePackage((prev) => (prev === packageName ? null : packageName));
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-background text-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            PreWedding<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Make sure the moment of a lifetime is captured for eternity
          </p>
        </div>
      </section>

      <main className="flex flex-col items-center px-4">
        <div className="w-full max-w-4xl">
          {/* Pricing Plans Section */}
          <section className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Pricing Plans<span className="text-creative">.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Plans at a bargain 🤩 price, no need of a second opinion. 100% refunds on cancellation within 48 hrs of booking*.
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
            {[
              {
                id: "grand",
                title: "Grand Wedding",
                color: "text-blue-600",
                desc: "Photography + Video + Drone",
                oldPrice: "₹200000",
                price: "₹150000",
                features: [
                  "3 Functions - 4 Member Team",
                  "1 Traditional + 1 Candid Photographer, 1 Traditional + 1 Cinematic Videographer",
                  "1 Minute Teaser, 4 Min Trailer, 1 Full-Length Traditional Video, 1000 Images",
                  "Full Frame Cameras, Prime and Wide Lenses, Gimbal, and Lights",
                ],
              },
              {
                id: "luxury",
                title: "Luxury Package",
                color: "text-purple-600",
                desc: "Premium Photography + 4K Cinematic Video + Drone",
                oldPrice: "₹300000",
                price: "₹250000",
                features: [
                  "4 Functions - 6 Member Team",
                  "2 Candid Photographers, 2 Cinematic Videographers, 1 Traditional Photographer",
                  "Premium Wedding Album, Highlight Film, 1500 Edited Images",
                  "Full Frame Cameras, Drone Shots, Steadicam, Advanced Lighting",
                ],
              },
              {
                id: "celebrity",
                title: "Celebrity Package",
                color: "text-red-600",
                desc: "All-inclusive Luxury with Multiple Crews + Special Effects",
                oldPrice: "₹500000",
                price: "₹400000",
                features: [
                  "Unlimited Functions - 10+ Member Team",
                  "Multiple Camera Crews, Multiple Drone Units, Live Streaming Setup",
                  "Luxury Album Box, Documentary Style Wedding Film, 2000+ Edited Images",
                  "AR/VR Wedding Experience, Special Lighting Effects, Fireworks Shots",
                ],
              },
            ].map((pkg) => (
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
                      <div className="flex justify-between mb-4">
                        <span className="line-through text-sm">{pkg.oldPrice}</span>
                        <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                      <Button className="mt-4 bg-black text-white hover:bg-black/90" onClick={() => navigate("/contact")}>
                        Book Now
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Ideas Section */}
          {/* Ideas Section */}
          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Ideas For Photoshoot<span className="text-creative">.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Some ideas 🤩 to inspire you, see how we have shot these high quality pictures -
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "assets/ps edit-67.jpg",
                "assets/harsh (54).jpg",
                "assets/harsh (12).jpg",
                "assets/harsh (1).jpg",
                "assets/lonavala (25).jpg",
                "assets/lonavala (43).jpg",
                "assets/lonavala (73).jpg",
                "assets/ps edit-26.jpg"
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PreWeddingPage;
