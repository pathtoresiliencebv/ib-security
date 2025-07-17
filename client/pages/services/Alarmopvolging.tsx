import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Clock,
  Phone,
  Target,
  CheckCircle,
  AlertTriangle,
  Camera,
  Radio,
  Users,
  Award,
  Settings,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

const packages = [
  {
    name: "Basis Alarmopvolging",
    price: "€150",
    unit: "per maand",
    features: [
      "24/7 monitoring",
      "Politie contact",
      "2 contactpersonen",
      "Maandrapportage",
      "Basis response protocol",
    ],
    popular: false,
  },
  {
    name: "Premium Monitoring",
    price: "€250",
    unit: "per maand",
    features: [
      "24/7 monitoring",
      "Politie & brandweer",
      "5 contactpersonen",
      "Live app notificaties",
      "Mobiele surveillance",
      "Maandelijkse evaluatie",
    ],
    popular: true,
  },
  {
    name: "Enterprise Security",
    price: "Op maat",
    unit: "maandprijs",
    features: [
      "Dedicated monitoring",
      "Complete emergency response",
      "Onbeperkt contactpersonen",
      "Real-time dashboard",
      "Security consultancy",
      "SLA garanties",
    ],
    popular: false,
  },
];

export default function Alarmopvolging() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll-left mb-8">
            <Breadcrumb
              items={[
                { label: "Diensten", href: "/diensten" },
                { label: "Alarmopvolging" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-left">
              <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                <Zap className="mr-2 h-5 w-5" />
                24/7 Monitoring
              </Badge>
              <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-shadow-xl">
                <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                  ALARM
                </span>
                <span className="block text-yellow-300 font-heavy text-4xl md:text-5xl mt-2">
                  OPVOLGING
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 font-medium leading-relaxed mb-8">
                24/7 professionele monitoring van uw alarmsystemen met
                <span className="font-bold text-white">
                  {" "}
                  snelle respons en directe actie
                </span>
                bij elke melding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white shadow-xl text-lg px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/offerte-opvragen">
                    <Target className="mr-2 h-5 w-5" />
                    Monitoring Offerte
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-900 text-lg px-8 py-4 font-bold"
                >
                  <a href="tel:+31881234567">
                    <Phone className="mr-2 h-5 w-5" />
                    24/7 Hotline
                  </a>
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll-right">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Waarom Alarmopvolging?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span>Snellere respons dan DIY systemen</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span>Lagere verzekeringspremies tot 20%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span>Professioneel contact met hulpdiensten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span>Gemoedsrust: nooit meer alleen</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-yellow-50/30 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-orange-600 text-white px-6 py-3 text-lg font-bold">
              Monitoring Pakketten
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Kies Uw Ideale
              <span className="block text-orange-600">Monitoring Pakket</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border-0 shadow-lg animate-on-scroll-scale relative ${pkg.popular ? "ring-2 ring-yellow-400" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 text-sm font-bold">
                      MEEST GEKOZEN
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-orange-600">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">{pkg.unit}</span>
                  </div>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`w-full ${pkg.popular ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400" : "bg-orange-600 hover:bg-orange-700 text-white"} shadow-xl text-lg py-3 font-bold`}
                  >
                    <Link to="/offerte-opvragen">Start Monitoring</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
            Start Vandaag Met
            <span className="block text-yellow-200">24/7 Bescherming</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Laat uw alarmsysteem nooit meer nutteloos afgaan. Onze professionals
            staan klaar om direct actie te ondernemen bij elke melding.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white shadow-2xl text-xl px-12 py-6 font-bold transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/offerte-opvragen">
                <Zap className="mr-3 h-6 w-6" />
                START MONITORING
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-xl px-12 py-6 font-bold"
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
