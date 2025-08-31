import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Snaps & Scenes - Professional Photography & Videography Services</title>
        <meta
          name="description"
          content="Book professional photographers and videographers across 40+ cities in India. Wedding, corporate, maternity, baby & kids, product, and event photography made simple."
        />
        <meta
          name="keywords"
          content="photography, videography, wedding photographer, corporate events, maternity shoot, baby photography, product photography, event photographer India"
        />
        <meta name="author" content="Snaps & Scenes" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Snaps & Scenes - Professional Photography & Videography Services" />
        <meta
          property="og:description"
          content="Trusted photography and videography services across India. Capture weddings, events, babies, and more with Snaps & Scenes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://snapsandscenes.com/" />
        <meta property="og:image" content="https://snapsandscenes.com/assets/cover-home.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Snaps & Scenes - Professional Photography & Videography Services" />
        <meta
          name="twitter:description"
          content="Capture your special moments with Snaps & Scenes - professional photographers & videographers across 40+ Indian cities."
        />
        <meta name="twitter:image" content="https://snapsandscenes.com/assets/cover-home.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://snapsandscenes.com/" />
      </Helmet>

      <Header />
      <HeroSection />
      <ServicesSection /> {/* Contains both Occasions and Business sections */}
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
