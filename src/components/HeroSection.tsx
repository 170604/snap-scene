import { Button } from "@/components/ui/button";
import { Camera, Play, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const videoSrc = "/videos/WEB_LOOP.mp4"; // ✅ Place your video in public/videos

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Moments Into
            <span className="text-creative block">Timeless Frames</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            From casual portraits to grand events, we make your memories last
            forever with world-class photography.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-white">
              <div className="text-3xl font-bold text-creative">10000+</div>
              <div className="text-sm opacity-90">Shoots Done</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-creative">2000+</div>
              <div className="text-sm opacity-90">Photographers</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="creative"
              size="lg"
              className="group"
              onClick={() => navigate("/contact")}
            >
              <Camera className="mr-2 h-5 w-5" />
              Talk to an Expert
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline-hero"
              size="lg"
              className="group"
              onClick={() => {
                const gallerySection = document.getElementById("photographers");
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: "smooth" });
                } else {
                  alert("Sample Shoots gallery coming soon!");
                }
              }}
            >
              <Play className="mr-2 h-4 w-4" />
              Sample Shoots
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Element */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 shadow-elegant">
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-creative"></div>
              <div className="w-8 h-8 rounded-full bg-primary"></div>
              <div className="w-8 h-8 rounded-full bg-creative/60"></div>
            </div>
            <div>
              <div className="text-sm font-semibold">500k+ Images</div>
              <div className="text-xs text-muted-foreground">
                Delivered digitally
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
