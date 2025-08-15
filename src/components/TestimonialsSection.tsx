import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Priyanka Jain",
    avatar: "/lovable-uploads/dc3b6175-5789-450d-901b-a0c095da2fe3.png",
    review: "I and my husband had went for post wedding shoot with Snaps & Scenes which had tie up with Hyatt centric... it was a wonderful shoot.. and life time memories... Afsana, adil nester... they were awesome... they made us comfortable before every click and gave there best.",
    location: "Hyatt Centric, Goa, India",
    rating: 5
  },
  {
    name: "Surbhi Jain", 
    avatar: "/lovable-uploads/dc3b6175-5789-450d-901b-a0c095da2fe3.png",
    review: "We met Atik in The Leela Goa. He was very kind and dedicated such a beautiful shots with perfect angles. He knew we wanted to get captured. It was an icing on the cake.",
    location: "The Leela Goa, India",
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
            Believed In Us<span className="text-creative">.</span>
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Snaps & Scenes is loved <Heart className="inline h-5 w-5 text-red-500 fill-current mx-1" /> by many, in fact all of them who have been with us on their trips. Images are the only way to rewind your memories of the most important moments in your life. Read what People who preserved their memories with us, say 😊
            </p>
          </div>
          <Button variant="destructive" size="lg" className="bg-red-600 hover:bg-red-700">
            Tripadvisor Reviews
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted text-foreground border-0">
              <CardContent className="p-6">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-creative rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
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

        {/* Shark Tank Section */}
        <div className="text-center">
          <div className="inline-flex items-center bg-background/10 rounded-full px-6 py-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">IN</span>
            </div>
            <span className="text-primary-foreground">INSTAGRAM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;