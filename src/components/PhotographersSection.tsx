import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Camera, Eye } from "lucide-react";

const photographers = [
  {
    name: "Rajesh Kumar",
    speciality: "Wedding Photography",
    location: "Mumbai, Maharashtra",
    rating: 4.9,
    reviews: 127,
    shoots: 250,
    price: "₹15,000",
    badges: ["Top Rated", "Fast Delivery"],
    avatar: "RK"
  },
  {
    name: "Priya Sharma",
    speciality: "Corporate Events",
    location: "Delhi, NCR",
    rating: 4.8,
    reviews: 89,
    shoots: 180,
    price: "₹12,000",
    badges: ["Expert", "Quick Response"],
    avatar: "PS"
  },
  {
    name: "Arjun Singh",
    speciality: "Product Photography",
    location: "Bangalore, Karnataka",
    rating: 4.9,
    reviews: 156,
    shoots: 320,
    price: "₹8,000",
    badges: ["Studio Expert", "E-commerce Pro"],
    avatar: "AS"
  },
  {
    name: "Meera Patel",
    speciality: "Food Photography",
    location: "Ahmedabad, Gujarat",
    rating: 4.7,
    reviews: 94,
    shoots: 210,
    price: "₹10,000",
    badges: ["Restaurant Pro", "Creative"],
    avatar: "MP"
  }
];

const PhotographersSection = () => {
  return (
    <section id="photographers" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured
            <span className="text-creative block">Photographers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover talented photographers in your city. All our professionals are verified and rated by real clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photographers.map((photographer, index) => (
            <Card key={index} className="group hover:shadow-creative transition-all duration-300 border-0 bg-background">
              <CardContent className="p-6">
                {/* Avatar & Basic Info */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-creative rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {photographer.avatar}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{photographer.name}</h3>
                  <p className="text-creative text-sm font-medium">{photographer.speciality}</p>
                </div>

                {/* Location & Rating */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className="truncate">{photographer.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-creative fill-current mr-1" />
                    <span className="font-medium">{photographer.rating}</span>
                    <span className="text-muted-foreground ml-1">({photographer.reviews})</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between mb-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-primary">{photographer.shoots}</div>
                    <div className="text-muted-foreground text-xs">Shoots</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-creative">{photographer.price}</div>
                    <div className="text-muted-foreground text-xs">Starting</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {photographer.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button variant="creative" size="sm" className="w-full">
                    <Camera className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" />
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Photographers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhotographersSection;