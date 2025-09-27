import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LaptopRental from "./pages/LaptopRental";
import DesktopRental from "./pages/DesktopRental";
import WorkstationRental from "./pages/WorkstationRental";
import GamingLaptopRental from "./pages/GamingLaptopRental";
import ServerRental from "./pages/ServerRental";
import ProjectorRental from "./pages/ProjectorRental";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/laptop-rental" element={<LaptopRental />} />
          <Route path="/desktop-rental" element={<DesktopRental />} />
          <Route path="/workstation-rental" element={<WorkstationRental />} />
          <Route path="/gaming-laptop-rental" element={<GamingLaptopRental />} />
          <Route path="/server-rental" element={<ServerRental />} />
          <Route path="/projector-rental" element={<ProjectorRental />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
