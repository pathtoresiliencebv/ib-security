import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HeartHandshake,
  Users,
  Clock,
  Phone,
  Target,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

export default function Zorgondersteuning() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-green-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll-left mb-8">
            <Breadcrumb
              items={[
                { label: "Diensten", href: "/diensten" },
                { label: "Zorgondersteuning" },
              ]}
            />
          </div>

          <div className="text-center animate-on-scroll">
            <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-teal-400 to-green-500 text-white">
              <HeartHandshake className="mr-2 h-5 w-5" />
              Zorg & Ondersteuning
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent">
                ZORG
              </span>
              <span className="block text-teal-300 font-heavy text-4xl md:text-5xl mt-2">
                ONDERSTEUNING
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 font-medium leading-relaxed mb-8 max-w-4xl mx-auto">
              Gespecialiseerde beveiliging en ondersteuning in zorginstellingen
              met
              <span className="font-bold text-white">
                {" "}
                empathie en professionele zorg
              </span>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-teal-900 hover:bg-teal-50 shadow-xl text-lg px-8 py-4 font-bold"
              >
                <Link to="/offerte-opvragen">
                  <Target className="mr-2 h-5 w-5" />
                  Zorg Offerte
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-teal-900 text-lg px-8 py-4 font-bold"
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
