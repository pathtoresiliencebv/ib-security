import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Brain,
  Heart,
  Users,
  Phone,
  Target,
  CheckCircle,
  UserCheck,
  Clock,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

export default function GGZBeveiliging() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll-left mb-8">
            <Breadcrumb
              items={[
                { label: "Diensten", href: "/diensten" },
                { label: "GGZ Beveiliging" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-left">
              <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-indigo-400 to-purple-500 text-white">
                <Brain className="mr-2 h-5 w-5" />
                GGZ Specialisten
              </Badge>
              <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-shadow-xl">
                <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                  GGZ
                </span>
                <span className="block text-indigo-300 font-heavy text-4xl md:text-5xl mt-2">
                  BEVEILIGING
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 font-medium leading-relaxed mb-8">
                Gespecialiseerde beveiliging voor GGZ-instellingen met
                <span className="font-bold text-white">
                  {" "}
                  empathie, deskundigheid en respect
                </span>
                voor alle cliënten en hun behandeling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-indigo-900 hover:bg-indigo-50 shadow-xl text-lg px-8 py-4 font-bold"
                >
                  <Link to="/offerte-opvragen">
                    <Target className="mr-2 h-5 w-5" />
                    GGZ Offerte
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-indigo-900 text-lg px-8 py-4 font-bold"
                >
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Specialist Contact
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll-right">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    GGZ Beveiliging Voordelen
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                      <span>Veilige therapeutische omgeving</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                      <span>Ondersteuning bij crisis interventies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                      <span>Bescherming van kwetsbare cliënten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                      <span>Gemoedsrust voor behandelteams</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
            Professionele GGZ
            <span className="block text-yellow-200">Beveiliging</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Creëer een veilige en therapeutische omgeving voor uw
            GGZ-instelling. Onze specialisten begrijpen de unieke uitdagingen in
            de geestelijke gezondheidszorg.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-2xl text-xl px-12 py-6 font-bold transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/offerte-opvragen">
                <Brain className="mr-3 h-6 w-6" />
                GGZ OFFERTE
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 text-xl px-12 py-6 font-bold"
            >
              <a href="tel:+31881234567">
                <Phone className="mr-3 h-6 w-6" />
                088 123 4567
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
