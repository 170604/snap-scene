import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Baby,
  Plane,
  Utensils,
  Home,
  Package,
  Calendar,
  Video,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const occasionsToCapture = [
  {
    icon: Heart,
    title: "Wedding",
    description: "Turning Your Big Day into Timeless Memories.",
    image: "assets/IMG_1934.jpg",
    route: "/wedding",
  },
  {
    icon: Heart,
    title: "Pre Wedding",
    description: "Celebrate your love story with timeless pre-wedding photography.",
    image: "assets/harsh (1).jpg",
    route: "/pre-wedding",
  },
  {
    icon: Baby,
    title: "Baby & Kids",
    description: "From First Smile to First Steps — Captured Forever.",
    image: "assets/IMG_7013.JPEG",
    route: "/baby-kids",
  },
  {
    icon: Heart,
    title: "Maternity",
    description: "Preserve the happiness of motherhood with some lovely pictures.",
    image: "assets/IMG_7002.JPEG",
    route: "/maternity",
  },
  {
    icon: Plane,
    title: "Vacation",
    description: "Spent a bomb on travel? Freeze the scenes forever!",
    image: "assets/IMG_2224.jpg",
    route: "/vacation",
  },
];

const businessOfferings = [
  {
    icon: Utensils,
    title: "Food",
    description: "You are able to taste a picture they say!",
    image: "assets/Ragavendra Cafe-42.jpg",
    route: "/food",
  },
  {
    icon: Home,
    title: "Interior",
    description: "Make the clients feel the comfort before they step in!",
    image: "/lovable-uploads/60448542-ae52-49da-a150-e09d2ca35d0a.png",
    route: "/interior",
  },
  {
    icon: Package,
    title: "Product Shoot",
    description: "What is seen, sells - and we make sure it looks fantastic!",
    image: "/lovable-uploads/95265f7d-82d8-407b-8778-9bccfdd6ce23.png",
    route: "/product",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Make sure your event reaches even to the people not attending it!",
    image: "/lovable-uploads/d5f41836-d0cd-4461-a46d-a4e08ffaed36.png",
    route: "/events",
  },
  {
    icon: Video,
    title: "Brand Video",
    description: "Make sure your business is understood visually!",
    image: "/lovable-uploads/c729c332-73ba-47e7-b2df-8ee27670fdc1.png",
    route: "/brand-video",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="py-20 bg-background">
      {/* Occasions Section */}
      <section id="occasions" className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-creative text-lg mb-4 font-medium">
              Your Life, Your Moments, Beautifully Captured.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Occasions To Capture<span className="text-creative">.</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {occasionsToCapture.map((occasion, index) => (
              <Card
                key={index}
                className="w-64 group border-0 bg-warm-gray overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => handleCardClick(occasion.route)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {occasion.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {occasion.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="bg-warm-gray py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-creative text-lg mb-4 font-medium">
              From Click to Conversion — We Make Products Shine.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Business Offerings<span className="text-creative">.</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {businessOfferings.map((offering, index) => (
              <Card
                key={index}
                className="w-64 group border-0 bg-background overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => handleCardClick(offering.route)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            All Our Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[...occasionsToCapture, ...businessOfferings].map(
              (service, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-2 px-4"
                >
                  {service.title}
                </Badge>
              )
            )}
          </div>
          <Button
            variant="creative"
            size="lg"
            className="group"
            onClick={() => navigate("/contact")}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;