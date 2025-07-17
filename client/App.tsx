import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OverIBSecurity from "./pages/OverIBSecurity";
import Contact from "./pages/Contact";
import OfferteOpvragen from "./pages/OfferteOpvragen";
import Diensten from "./pages/Diensten";
import UitzendbureauBeveiliging from "./pages/services/UitzendbureauBeveiliging";
import ReceptieBeveiliging from "./pages/services/ReceptieBeveiliging";
import Evenementenbeveiliging from "./pages/services/Evenementenbeveiliging";
import Alarmopvolging from "./pages/services/Alarmopvolging";
import MobieleSurveillance from "./pages/services/MobieleSurveillance";
import Objectbeveiliging from "./pages/services/Objectbeveiliging";
import Zorgondersteuning from "./pages/services/Zorgondersteuning";
import Beveiligingsopvanglocatie from "./pages/services/Beveiligingsopvanglocatie";
import GGZBeveiliging from "./pages/services/GGZBeveiliging";
import Zorgbeveiliging from "./pages/services/Zorgbeveiliging";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/over-ibsecurity" element={<OverIBSecurity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offerte-opvragen" element={<OfferteOpvragen />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route
            path="/diensten/uitzendbureau-beveiliging"
            element={<UitzendbureauBeveiliging />}
          />
          <Route
            path="/diensten/receptie-beveiliging"
            element={<ReceptieBeveiliging />}
          />
          <Route
            path="/diensten/evenementenbeveiliging"
            element={<Evenementenbeveiliging />}
          />
          <Route path="/diensten/alarmopvolging" element={<Alarmopvolging />} />
          <Route
            path="/diensten/mobiele-surveillance"
            element={<MobieleSurveillance />}
          />
          <Route
            path="/diensten/objectbeveiliging"
            element={<Objectbeveiliging />}
          />
          <Route
            path="/diensten/zorgondersteuning"
            element={<Zorgondersteuning />}
          />
          <Route
            path="/diensten/beveiligingsopvanglocatie"
            element={<Beveiligingsopvanglocatie />}
          />
          <Route
            path="/diensten/ggz-beveiliging"
            element={<GGZBeveiliging />}
          />
          <Route
            path="/diensten/zorgbeveiliging"
            element={<Zorgbeveiliging />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
