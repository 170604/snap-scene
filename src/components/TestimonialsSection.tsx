import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Neha & Rohan",
    avatar: "/lovable-uploads/rohit.png",
    review: "We booked Snaps & Scenes for our wedding in Jaipur, and it was the best decision ever! The team was so professional yet friendly, and they captured every emotion perfectly. We look at our album every day and relive those moments.",
    location: "Jaipur, Rajasthan, India",
    rating: 5
  },
  {
    name: "Aarav Malhotra", 
    avatar: "/lovable-uploads/neha.png",
    review: "As a corporate client, I needed product shots at scale for our e-commerce brand. Snaps & Scenes delivered on time with world-class quality. The consistency across hundreds of images was outstanding",
    location: "Bangalore, Karnataka, India",
    rating: 5
  },
  {
    name: "Simran Kaur", 
    avatar: "/lovable-uploads/amit-pooja.png",
    review: "Our maternity shoot was beyond magical. The photographers made me feel so comfortable and the pictures are something I’ll treasure forever.",
    location: "Delhi NCR, India",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-creative rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-creative rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-creative rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-foreground/80 text-lg mb-4">
            Memories Are All You Would Need To Live Happy Forever.
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            People Who<br />
            Chose Snaps & Scenes<span className="text-creative">.</span>
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Snaps & Scenes is trusted <Heart className="inline h-5 w-5 text-red-500 fill-current mx-1" />by couples, families, and brands across India. Every picture is a story, every frame a memory you’ll cherish for years. Here’s what our happy clients say about their experiences with us:
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-muted text-foreground border-0 ${
                index === 2 ? "md:col-span-2 md:mx-auto max-w-xl" : ""
              }`}
            >
              <CardContent className="p-6">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-creative rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-creative fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {testimonial.review}
                </p>

                {/* Location */}
                <p className="text-sm text-muted-foreground/70">
                  {testimonial.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
      
      </div>
    </section>
  );
};

export default TestimonialsSection;