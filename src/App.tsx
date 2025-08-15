import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingPage from "./pages/WeddingPage";
import BabyKidsPage from "./pages/BabyKidsPage";
import MaternityPage from "./pages/MaternityPage";
import PartiesPage from "./pages/PartiesPage";
import VacationPage from "./pages/VacationPage";
import FoodPage from "./pages/FoodPage";
import InteriorPage from "./pages/InteriorPage";
import ProductPage from "./pages/ProductPage";
import EventsPage from "./pages/EventsPage";
import BrandVideoPage from "./pages/BrandVideoPage";

// ✅ Import your Contact page
import Contact from "./pages/contact"; // make sure file is named Contact.tsx

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wedding" element={<WeddingPage />} />
          <Route path="/baby-kids" element={<BabyKidsPage />} />
          <Route path="/maternity" element={<MaternityPage />} />
          <Route path="/parties" element={<PartiesPage />} />
          <Route path="/vacation" element={<VacationPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/interior" element={<InteriorPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/brand-video" element={<BrandVideoPage />} />

          {/* ✅ Contact route for Book Now button */}
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
