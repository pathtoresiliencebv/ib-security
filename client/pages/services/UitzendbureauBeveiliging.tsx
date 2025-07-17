import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Clock,
  Award,
  Target,
  Phone,
  CheckCircle,
  Zap,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

export default function UitzendbureauBeveiliging() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll-left mb-8">
            <Breadcrumb
              items={[
                { label: "Diensten", href: "/diensten" },
                { label: "Uitzendbureau Beveiliging" },
              ]}
            />
          </div>

          <div className="text-center animate-on-scroll">
            <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
              <Users className="mr-2 h-5 w-5" />
              Flexibel Personeel
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                UITZEND
              </span>
              <span className="block text-cyan-300 font-heavy text-4xl md:text-5xl mt-2">
                BEVEILIGING
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed mb-8 max-w-4xl mx-auto">
              Gekwalificeerd beveiligingspersoneel voor
              <span className="font-bold text-white">
                {" "}
                tijdelijke en permanente posities
              </span>
              . Flexibele bemanning wanneer u het nodig heeft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-cyan-900 hover:bg-cyan-50 shadow-xl text-lg px-8 py-4 font-bold"
              >
                <Link to="/offerte-opvragen">
                  <Target className="mr-2 h-5 w-5" />
                  Personeel Aanvragen
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-cyan-900 text-lg px-8 py-4 font-bold"
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

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
            Het Juiste Personeel
            <span className="block text-yellow-200">Op Het Juiste Moment</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Of u nu tijdelijk extra hands nodig heeft of permanent personeel
            zoekt - wij leveren gekwalificeerde beveiligingsprofessionals die
            direct inzetbaar zijn.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-cyan-600 hover:bg-cyan-50 shadow-2xl text-xl px-12 py-6 font-bold transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/offerte-opvragen">
                <Users className="mr-3 h-6 w-6" />
                PERSONEEL AANVRAGEN
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 text-xl px-12 py-6 font-bold"
            >
              <a href="tel:+31881234567">
                <Phone className="mr-3 h-6 w-6" />
                DIRECT CONTACT
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
