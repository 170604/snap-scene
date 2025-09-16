import { Button } from "@/components/ui/button";
import { Camera, Play, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const videoSrc = "/videos/WEB_LOOP.mp4"; // ✅ Place your video in public/videos

// Count-up hook
const useCountUp = (end: number, duration: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

const HeroSection = () => {
  const navigate = useNavigate();

  // Count-up values
  const shootsCount = useCountUp(10000, 2000);
  const photographersCount = useCountUp(2000, 2000);

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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* ✅ Animated Title */}
          <motion.h1
            className="font-majorant text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Turn Moments Into
          </motion.h1>

          <motion.h1
            className="font-majorant text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-creative leading-tight mb-6"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          >
            Timeless Frames
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            From casual portraits to grand events, we make your memories last
            forever with world-class photography.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-white">
              <div className="text-2xl sm:text-3xl font-bold text-creative">
                {shootsCount}+
              </div>
              <div className="text-sm opacity-90">Shoots Done</div>
            </div>
            <div className="text-white">
              <div className="text-2xl sm:text-3xl font-bold text-creative">
                {photographersCount}+
              </div>
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
              onClick={() => navigate("/sample-shoots")}
            >
              <Play className="mr-2 h-4 w-4" />
              Sample Shoots
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Element */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div
          className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 shadow-elegant 
          transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        >
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
