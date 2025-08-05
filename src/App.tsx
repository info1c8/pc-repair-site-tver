
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Prices from "./pages/Prices";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Diagnostics from "./pages/Diagnostics";
import DataRecovery from "./pages/DataRecovery";
import Repair from "./pages/Repair";
import Upgrade from "./pages/Upgrade";
import Maintenance from "./pages/Maintenance";
import Installation from "./pages/Installation";
import VirusRemoval from "./pages/VirusRemoval";
import NetworkSetup from "./pages/NetworkSetup";
import Gaming from "./pages/Gaming";
import Business from "./pages/Business";
import Emergency from "./pages/Emergency";
import Training from "./pages/Training";
import Consultation from "./pages/Consultation";
import RemoteSupport from "./pages/RemoteSupport";
import Warranty from "./pages/Warranty";
import Accessories from "./pages/Accessories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/virus-removal" element={<VirusRemoval />} />
          <Route path="/network-setup" element={<NetworkSetup />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/business" element={<Business />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/training" element={<Training />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/remote-support" element={<RemoteSupport />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/accessories" element={<Accessories />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
