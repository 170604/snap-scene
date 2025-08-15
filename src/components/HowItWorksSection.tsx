import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, Calendar, Camera, Download, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Search",
    description: "Find photographers in your city based on style, budget, and availability",
    step: "01"
  },
  {
    icon: Users,
    title: "View Profiles",
    description: "Check portfolios, reviews, and pricing from verified photographers",
    step: "02"
  },
  {
    icon: Calendar,
    title: "Book & Pay",
    description: "Select your date, confirm booking, and make secure payment",
    step: "03"
  },
  {
    icon: Camera,
    title: "Photo Shoot",
    description: "Professional photographer arrives on time with live shoot updates",
    step: "04"
  },
  {
    icon: Download,
    title: "Digital Delivery",
    description: "Receive edited photos digitally through our platform within 48-72 hours",
    step: "05"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent process from booking to delivery. Professional photography made easy.
          </p>
        </div>

        <div className="relative">
          {/* Process Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-elegant transition-all duration-300 border-0 bg-warm-gray">
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-creative text-creative-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4 mt-4">
                      <div className="p-4 bg-primary/10 rounded-2xl">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-creative/30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-creative mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Verified Photographers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-creative mb-2">48-72h</div>
            <div className="text-sm text-muted-foreground">Photo Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-creative mb-2">4.8/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-creative mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;