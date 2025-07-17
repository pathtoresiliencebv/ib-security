import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Heart, Phone, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

export default function Beveiligingsopvanglocatie() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll-left mb-8">
            <Breadcrumb
              items={[
                { label: "Diensten", href: "/diensten" },
                { label: "Beveiligingsopvanglocatie" },
              ]}
            />
          </div>

          <div className="text-center animate-on-scroll">
            <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-white">
              <Shield className="mr-2 h-5 w-5" />
              Opvanglocatie Beveiliging
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
                OPVANG
              </span>
              <span className="block text-amber-300 font-heavy text-4xl md:text-5xl mt-2">
                BEVEILIGING
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 font-medium leading-relaxed mb-8 max-w-4xl mx-auto">
              Professionele beveiliging van opvanglocaties met
              <span className="font-bold text-white">
                {" "}
                zorg, respect en empathie
              </span>
              voor alle bewoners en hun situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-amber-900 hover:bg-amber-50 shadow-xl text-lg px-8 py-4 font-bold"
              >
                <Link to="/offerte-opvragen">
                  <Target className="mr-2 h-5 w-5" />
                  Opvang Offerte
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-amber-900 text-lg px-8 py-4 font-bold"
              >
                <a href="tel:+31881234567">
                  <Phone className="mr-2 h-5 w-5" />
                  088 123 4567
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
