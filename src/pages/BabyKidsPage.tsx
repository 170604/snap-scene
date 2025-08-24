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
      id: "Insta Shoot",
      title: "Insta Shoot",
      color: "text-blue-600",
      desc: "Photography",
      oldPrice: "₹29000",
      price: "₹17999",
      features: [
        "2 Setups & 2 Dress Changes with 2 hours of shoot",
        "12 Edited Baby Images",
        "Photographer with Full Frame Camera, Prime lenses, and lights",
      ],
    },
    {
      id: "Luxury Shoot",
      title: "Luxury Shoot",
      color: "text-pink-600",
      desc: "Birthday Event Photography",
      oldPrice: "₹39999",
      price: "₹29999",
      features: [
        "3 Setup & Dress Changes with 3 hours of Shoot",
        "30 Edited Images of Baby + 3 Reels of 30 sec Each",
        "Senior Photographer with Full Frame Camera, Prime lenses, and lights.",
      ],
    },
    {
      id: "milestone",
      title: "Milestone Package",
      color: "text-green-600",
      desc: "Monthly Baby Growth Shoots",
      oldPrice: "₹59999",
      price: "₹44999",
      features: [
        "3 Theme Based Setup & Dress Change with 6 hours of Shoot",
        "35 Edited Images of the Baby, Siblings & Parents + 3 reels of 30 sec each Cake Smash",
        "Full Frame Cameras, Prime and Wide Lenses, Gimbal, and Lights",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
     <section
        className="py-32 bg-cover bg-center text-center relative"
        style={{ backgroundImage: "url('assets/IMG_7013.JPEG')" }} // 🔥 Replace with your image path
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* overlay for text readability */}
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Baby & Kids<span className="text-creative">.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
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
          {[
            "assets/IMG_7013.JPEG",
            "assets/IMG_7016.JPEG",
            "assets/IMG_7017.JPEG",
            "assets/IMG_7018.JPEG",
            "assets/IMG_7019.JPEG",
            "assets/IMG_7020.JPEG",
            "assets/IMG_7021.JPEG",
            "assets/IMG_7022.JPEG",
          ].map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`Maternity inspiration ${index + 1}`}
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
