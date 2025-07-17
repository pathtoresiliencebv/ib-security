import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  Music,
  Target,
  Eye,
  CheckCircle,
  Phone,
  Clock,
  AlertTriangle,
  UserX,
  Camera,
  Radio,
  FileText,
  Award,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

const serviceFeatures = [
  {
    icon: Users,
    title: "Crowd Control",
    description:
      "Professioneel publieksbeheer voor veilige en gecontroleerde massa bewegingen",
  },
  {
    icon: Shield,
    title: "Toegangscontrole",
    description:
      "Strikte controle van tickets, legitimatie en verboden voorwerpen",
  },
  {
    icon: Eye,
    title: "Surveillance & Monitoring",
    description:
      "Continue bewaking van het evenemententerrein en publieke ruimtes",
  },
  {
    icon: UserX,
    title: "VIP & Artist Security",
    description:
      "Discrete persoonlijke beveiliging voor artiesten en VIP-gasten",
  },
  {
    icon: AlertTriangle,
    title: "Incident Management",
    description:
      "Snelle en professionele afhandeling van noodsituaties en incidenten",
  },
  {
    icon: Radio,
    title: "Communicatie Systemen",
    description: "Geavanceerde communicatie tussen alle beveiligingsteams",
  },
];

const eventTypes = [
  {
    type: "Festivals & Concerten",
    description: "Grote muziekfestivals en concerten tot 50.000+ bezoekers",
    features: [
      "Stage security",
      "Artist beveiliging",
      "Camping bewaking",
      "Alcohol & drugs controle",
    ],
  },
  {
    type: "Zakelijke Evenementen",
    description: "Conferenties, beurzen en corporate events",
    features: [
      "Discrete beveiliging",
      "VIP bescherming",
      "Netwerk events",
      "Product launches",
    ],
  },
  {
    type: "Sportevenementen",
    description: "Voetbalwedstrijden, marathons en sporttornooien",
    features: [
      "Crowd segregatie",
      "Fan management",
      "Doping controle",
      "Media beveiliging",
    ],
  },
  {
    type: "Privé Evenementen",
    description: "Bruiloften, feesten en exclusieve gatherings",
    features: [
      "Discrete aanwezigheid",
      "Guest list management",
      "Privacy bescherming",
      "Locatie beveiliging",
    ],
  },
];

const whyChooseIB = [
  {
    icon: Award,
    title: "Event Specialisten",
    description:
      "Jaren van ervaring met alle soorten evenementen, van intiem tot mega-events",
  },
  {
    icon: Zap,
    title: "Snelle Deployment",
    description:
      "Binnen 24 uur kunnen wij een volledig beveiligingsteam op locatie hebben",
  },
  {
    icon: Star,
    title: "Onzichtbare Beveiliging",
    description:
      "Professionele beveiliging die de sfeer en beleving van uw event niet verstoort",
  },
  {
    icon: Clock,
    title: "24/7 Event Support",
    description: "Voor, tijdens en na uw evenement staan wij voor u klaar",
  },
];

const packages = [
  {
    name: "Klein Evenement",
    capacity: "Tot 500 personen",
    price: "€30",
    unit: "per beveiliger/uur",
    features: [
      "2-4 beveiligingsmedewerkers",
      "Basis toegangscontrole",
      "Crowd monitoring",
      "Incident rapportage",
      "Basis communicatie",
    ],
    popular: false,
  },
  {
    name: "Medium Evenement",
    capacity: "500-2000 personen",
    price: "€35",
    unit: "per beveiliger/uur",
    features: [
      "5-15 beveiligingsmedewerkers",
      "Geavanceerde toegangscontrole",
      "Dedicated crowd control",
      "Live incident monitoring",
      "Radio communicatie netwerk",
      "Event coordinator",
    ],
    popular: true,
  },
  {
    name: "Groot Evenement",
    capacity: "2000+ personen",
    price: "Op maat",
    unit: "totaalprijs",
    features: [
      "15+ beveiligingsmedewerkers",
      "Complete security operations",
      "VIP & artist security",
      "Command & control center",
      "Emergency response team",
      "Security risk assessment",
    ],
    popular: false,
  },
];

export default function Evenementenbeveiliging() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:80px_80px] animate-pulse opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll-left mb-8">
            <Breadcrumb
              items={[
                { label: "Diensten", href: "/diensten" },
                { label: "Evenementenbeveiliging" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-left">
              <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-red-400 to-orange-500 text-white">
                <Music className="mr-2 h-5 w-5" />
                Event Security Experts
              </Badge>
              <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-shadow-xl">
                <span className="bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                  EVENEMENTEN
                </span>
                <span className="block text-red-300 font-heavy text-4xl md:text-5xl mt-2">
                  BEVEILIGING
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 font-medium leading-relaxed mb-8">
                Van intimate gatherings tot mega-festivals - wij zorgen voor
                <span className="font-bold text-white">
                  {" "}
                  veilige en onvergetelijke evenementen
                </span>
                waar iedereen zorgeloos kan genieten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-red-900 hover:bg-red-50 shadow-xl text-lg px-8 py-4 font-bold"
                >
                  <Link to="/offerte-opvragen">
                    <Target className="mr-2 h-5 w-5" />
                    Event Offerte
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-red-900 text-lg px-8 py-4 font-bold"
                >
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Event Planning
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll-right">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Waarom Event Security?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <span>Veiligheid voor alle bezoekers gegarandeerd</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <span>Lagere verzekeringspremies voor organisatoren</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <span>Compliance met wettelijke vereisten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <span>Professionale reputatie en vertrouwen</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-red-600 text-white px-6 py-3 text-lg font-bold">
              Volledige Event Security
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Alles Voor Een
              <span className="block text-red-600">Veilig Evenement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van planning tot afbraak - wij verzorgen alle aspecten van
              evenementenbeveiliging zodat u zich kunt focussen op een geweldig
              event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-orange-600 text-white px-6 py-3 text-lg font-bold">
              Event Specialisaties
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Ervaring Met Alle
              <span className="block text-orange-600">Event Types</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((type, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {type.type}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IB Security */}
      <section className="py-32 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 text-lg px-8 py-4 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              <Award className="mr-2 h-5 w-5" />
              Waarom IB Security
            </Badge>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                EVENT SECURITY
              </span>
              <span className="block text-yellow-300 font-heavy text-3xl md:text-4xl mt-4">
                PROFESSIONALS
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Van kleine besloten evenementen tot mega-festivals met 50.000+
              bezoekers -
              <span className="font-bold text-white">
                {" "}
                wij hebben de ervaring en expertise
              </span>
              om elk evenement veilig en succesvol te laten verlopen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseIB.map((reason, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll-scale"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <reason.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-orange-200 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-purple-600 text-white px-6 py-3 text-lg font-bold">
              Event Security Pakketten
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Passende Beveiliging
              <span className="block text-purple-600">Voor Elk Evenement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ongeacht de grootte van uw evenement - wij hebben het juiste
              beveiligingspakket voor u.
            </p>
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
                      POPULAIR
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-4">
                    {pkg.capacity}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-red-600">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2 text-sm">
                      {pkg.unit}
                    </span>
                  </div>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`w-full ${pkg.popular ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400" : "bg-red-600 hover:bg-red-700 text-white"} shadow-xl text-lg py-3 font-bold`}
                  >
                    <Link to="/offerte-opvragen">Event Offerte</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
            Maak Uw Evenement
            <span className="block text-yellow-200">Onvergetelijk Veilig</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Van planning tot uitvoering - laat ons de beveiliging regelen zodat
            u zich kunt focussen op een fantastisch evenement. Vraag vandaag nog
            een offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 shadow-2xl text-xl px-12 py-6 font-bold transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/offerte-opvragen">
                <Target className="mr-3 h-6 w-6" />
                EVENT OFFERTE
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-xl px-12 py-6 font-bold"
            >
              <a href="tel:+31881234567">
                <Phone className="mr-3 h-6 w-6" />
                EVENT HOTLINE
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
