import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Baby,
  PartyPopper,
  Plane,
  Utensils,
  Home,
  Package,
  Calendar,
  Video,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const occasionsToCapture = [
  {
    icon: Heart,
    title: "Wedding",
    description: "Turning Your Big Day into Timeless Memories.",
    image: "/lovable-uploads/c69b5ce7-8476-47b1-a75f-8e20d88710dd.png",
    category: "occasions",
    route: "/wedding",
  },
  {
    icon: Heart,
    title: "Pre Wedding",
    description:
      "Celebrate your love story before the big day with timeless pre-wedding photography.",
    image: "assets/harsh (1).jpg", // your image path
    category: "occasions",
    route: "/pre-wedding",
  },
  {
    icon: Baby,
    title: "Baby & Kids",
    description:
      "From First Smile to First Steps — Captured Forever.",
    image: "/lovable-uploads/5e4221d8-0834-4435-9ac3-27638edaea57.png",
    category: "occasions",
    route: "/baby-kids",
  },
  {
    icon: Heart,
    title: "Maternity",
    description:
      "Preserve the happiness of motherhood with some lovely pictures.",
    image: "/lovable-uploads/bc8c5d8e-ba1b-49cb-8963-6a78fb7b5087.png",
    category: "occasions",
    route: "/maternity",
  },
  {
    icon: PartyPopper,
    title: "Parties",
    description: "Special occasions demand special attention! Let's click!",
    image: "/lovable-uploads/c294df76-a5b5-4e46-9ed0-c1760cfcd09a.png",
    category: "occasions",
    route: "/parties",
  },
  {
    icon: Plane,
    title: "Vacation",
    description: "Spent a bomb on travel? Freeze the scenes forever!",
    image: "/lovable-uploads/ed39772f-0548-4cc0-b99b-bddc3d81a269.png",
    category: "occasions",
    route: "/vacation",
  },
];

const businessOfferings = [
  {
    icon: Utensils,
    title: "Food",
    description: "You are able to taste a picture they say!",
    image: "/lovable-uploads/07c333fa-82d6-4f18-b3e4-c1dd481719ad.png",
    category: "business",
    route: "/food",
  },
  {
    icon: Home,
    title: "Interior",
    description: "Make the clients feel the comfort before they step in!",
    image: "/lovable-uploads/60448542-ae52-49da-a150-e09d2ca35d0a.png",
    category: "business",
    route: "/interior",
  },
  {
    icon: Package,
    title: "Product Shoot",
    description:
      "What is seen, sells - and we make sure it looks fantastic!",
    image: "/lovable-uploads/95265f7d-82d8-407b-8778-9bccfdd6ce23.png",
    category: "business",
    route: "/product",
  },
  {
    icon: Calendar,
    title: "Events",
    description:
      "Make sure your event reaches even to the people not attending it!",
    image: "/lovable-uploads/d5f41836-d0cd-4461-a46d-a4e08ffaed36.png",
    category: "business",
    route: "/events",
  },
  {
    icon: Video,
    title: "Brand Video",
    description: "Make sure your business is understood visually!",
    image: "/lovable-uploads/c729c332-73ba-47e7-b2df-8ee27670fdc1.png",
    category: "business",
    route: "/brand-video",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  const scrollLeft = (id: string) => {
    document.getElementById(id)?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (id: string) => {
    document.getElementById(id)?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="py-20 bg-background">
      {/* Occasions To Capture Section */}
      <section id="occasions" className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-creative text-lg mb-4 font-medium">
              Your Life, Your Moments, Beautifully Captured.Stories to Cherish
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Occasions To Capture<span className="text-creative">.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
              onClick={() => scrollLeft("occasions-scroll")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Scrollable Cards */}
            <div
              id="occasions-scroll"
              className="flex gap-6 overflow-x-auto px-12 scrollbar-hide scroll-smooth"
            >
              {occasionsToCapture.map((occasion, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-64 group hover:shadow-creative transition-all duration-300 border-0 bg-warm-gray overflow-hidden cursor-pointer"
                  onClick={() => handleCardClick(occasion.route)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={occasion.image}
                      alt={occasion.title}
                      className="w-full h-full object-cover"
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

            {/* Right Arrow */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
              onClick={() => scrollRight("occasions-scroll")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Business Offerings Section */}
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

          <div className="relative">
            {/* Left Arrow */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
              onClick={() => scrollLeft("business-scroll")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Scrollable Cards */}
            <div
              id="business-scroll"
              className="flex gap-6 overflow-x-auto px-12 scrollbar-hide scroll-smooth"
            >
              {businessOfferings.map((offering, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-64 group hover:shadow-creative transition-all duration-300 border-0 bg-background overflow-hidden cursor-pointer"
                  onClick={() => handleCardClick(offering.route)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover"
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

            {/* Right Arrow */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
              onClick={() => scrollRight("business-scroll")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              All Our Services
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
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
          </div>

          <div className="text-center">
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
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
