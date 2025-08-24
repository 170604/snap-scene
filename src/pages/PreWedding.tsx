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
     <section
        className="py-32 bg-cover bg-center text-center relative"
        style={{ backgroundImage: "url('assets/ps edit-26.jpg')" }} // 🔥 Replace with your image path
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* overlay for text readability */}
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            PreWedding<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
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
                id: "Insta Shoot",
                title: "PreWedding",
                color: "text-blue-600",
                desc: "Photography Only",
                oldPrice: "₹16999",
                price: "₹15999",
                features: [
                  "25 Edited images",
                  "4 hours shoot, 2 locations & 2 Dress Changes",
                  "Full Frame Camera & 1 Photographer with Prime lens",
                ],
              },
              {
                id: "luxury",
                title: "Luxury Package",
                color: "text-purple-600",
                desc: "Premium Photography + Videography",
                oldPrice: "₹35999",
                price: "₹33999",
                features: [
                  "35 Edited images",
                  "2-3 Minute Highlight Film",
                  "8 hours shoot, 3 locations & 3 Dress Changes",
                ],
              },
              {
                id: "celebrity",
                title: "Celebrity Package",
                color: "text-red-600",
                desc: "Photography + Videography + Drone",
                oldPrice: "₹49999",
                price: "₹43999",
                features: [
                  "35 Edited images",
                  "2-3 Minute Highlight Film",
                  "1 Teaser Video",
                  "8 hours shoot, 3 locations & 3 Dress Changes",
                ],
              },
              {
                id: "Permium",
                title: "Premium Package",
                color: "text-red-600",
                desc: "photography + Videography + Drone ",
                oldPrice: "₹64999",
                price: "₹59999",
                features: [
                  "35 Edited images",
                  "2-3 Minute Highlight Film",
                  "1 Teaser Video",
                  "8 hours shoot, 3 locations & 3 Dress Changes",
                  "3 Save the Date Images",
                  "1 Reel, 1 E-initation"
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
