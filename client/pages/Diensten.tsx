import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Eye,
  Building,
  UserCheck,
  Zap,
  Camera,
  HeartHandshake,
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Building,
    title: "Objectbeveiliging",
    description:
      "24/7 beveiliging van uw bedrijfspand, kantoren en industriële locaties met gecertificeerde professionals.",
    features: [
      "24/7 aanwezigheid",
      "Toegangscontrole",
      "Patrouilles",
      "Incident rapportage",
    ],
    href: "/diensten/objectbeveiliging",
    price: "vanaf €25/uur",
    popular: true,
  },
  {
    icon: UserCheck,
    title: "Receptie beveiliging",
    description:
      "Professionele receptie gecombineerd met beveiligingstaak voor een gastvrije maar veilige ontvangst.",
    features: [
      "Gastvrije ontvangst",
      "Bezoekerregistratie",
      "Telefonie",
      "Bewaking",
    ],
    href: "/diensten/receptie-beveiliging",
    price: "vanaf €22/uur",
    popular: false,
  },
  {
    icon: Users,
    title: "Evenementenbeveiliging",
    description:
      "Gespecialiseerde beveiliging voor evenementen van klein tot groot, zorgt voor veilige en succesvolle events.",
    features: [
      "Crowd control",
      "VIP beveiliging",
      "Toegangscontrole",
      "Noodplanning",
    ],
    href: "/diensten/evenementenbeveiliging",
    price: "vanaf €30/uur",
    popular: false,
  },
  {
    icon: Zap,
    title: "Alarmopvolging",
    description:
      "24/7 monitoring van uw alarmsystemen met snelle respons en professionele opvolging van meldingen.",
    features: [
      "24/7 monitoring",
      "Snelle respons",
      "Sleutelservice",
      "Politie contact",
    ],
    href: "/diensten/alarmopvolging",
    price: "vanaf €150/maand",
    popular: false,
  },
  {
    icon: Eye,
    title: "Mobiele Surveillance",
    description:
      "Flexibele mobile surveillance met onregelmatige rondes voor optimale afschrikking.",
    features: [
      "Onregelmatige rondes",
      "GPS tracking",
      "Live rapportage",
      "Flexibele schema's",
    ],
    href: "/diensten/mobiele-surveillance",
    price: "vanaf €45/ronde",
    popular: false,
  },
  {
    icon: HeartHandshake,
    title: "Zorgbeveiliging",
    description:
      "Empathische beveiliging voor zorginstellingen met begrip voor de gevoelige omgeving.",
    features: [
      "Empathische aanpak",
      "Medische kennis",
      "Deëscalatie",
      "Familiecontact",
    ],
    href: "/diensten/zorgbeveiliging",
    price: "vanaf €28/uur",
    popular: true,
  },
  {
    icon: Shield,
    title: "GGZ Beveiliging",
    description:
      "Gespecialiseerde beveiliging voor GGZ-instellingen met empathie en deskundigheid.",
    features: [
      "GGZ ervaring",
      "Deëscalatie training",
      "Crisisinterventie",
      "Therapie ondersteuning",
    ],
    href: "/diensten/ggz-beveiliging",
    price: "vanaf €32/uur",
    popular: false,
  },
  {
    icon: Users,
    title: "Uitzendbureau beveiliging",
    description:
      "Tijdelijk en permanent beveiligingspersoneel voor al uw bemanning behoeften.",
    features: [
      "Flexibele inzet",
      "Gecertificeerd personeel",
      "Snelle beschikbaarheid",
      "Kwaliteitsgarantie",
    ],
    href: "/diensten/uitzendbureau-beveiliging",
    price: "vanaf €24/uur",
    popular: false,
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "15+ Jaar Ervaring",
    description:
      "Bewezen expertise in alle aspecten van professionele beveiliging",
  },
  {
    icon: CheckCircle,
    title: "Gecertificeerd Personeel",
    description: "Al onze medewerkers zijn volledig gecertificeerd en getraind",
  },
  {
    icon: Clock,
    title: "24/7 Beschikbaarheid",
    description: "Altijd bereikbaar voor noodgevallen en acute situaties",
  },
  {
    icon: Target,
    title: "Op Maat Gemaakt",
    description: "Elke beveiligingsoplossing wordt specifiek voor u ontworpen",
  },
];

export default function Diensten() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:80px_80px] animate-pulse opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <Badge className="mb-8 text-lg px-8 py-4 font-black bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-xl">
              <Shield className="mr-3 h-6 w-6" />
              COMPLETE BEVEILIGINGSOPLOSSINGEN
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl font-black mb-8 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                ONZE
              </span>
              <span className="block text-4xl md:text-6xl mt-4 text-blue-300 font-heavy">
                DIENSTEN
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-medium max-w-4xl mx-auto leading-relaxed">
              Van objectbeveiliging tot zorgbeveiliging -
              <span className="font-bold text-white">
                {" "}
                wij hebben de perfecte oplossing voor uw behoeften
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-blue-600 text-white px-6 py-3 text-lg font-bold">
              Professionele Dienstverlening
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Complete
              <span className="block text-blue-600">Beveiligingsportfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek ons complete aanbod van professionele beveiligingsdiensten,
              elk afgestemd op specifieke behoeften en industrieën.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-4xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-1 border-0 shadow-2xl bg-white relative overflow-hidden animate-on-scroll-scale ${
                  service.popular ? "ring-2 ring-yellow-400" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 text-sm font-bold rounded-bl-lg">
                    POPULAIR
                  </div>
                )}

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] rounded-2xl">
                  <div className="bg-white rounded-2xl h-full w-full"></div>
                </div>

                <Link to={service.href} className="block h-full">
                  <CardContent className="relative p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-glow">
                        <service.icon className="w-10 h-10 text-blue-600 group-hover:text-purple-600 transition-colors" />
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-800 transition-colors">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="bg-blue-50 rounded-lg p-3 mb-6">
                        <div className="text-blue-600 font-bold text-lg">
                          {service.price}
                        </div>
                      </div>

                      <div className="text-blue-600 font-bold group-hover:text-purple-600 transition-colors flex items-center justify-center">
                        <span className="mr-2">Meer informatie</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-green-600 text-white px-6 py-3 text-lg font-bold">
              Waarom IB Security
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Uw Vertrouwde
              <span className="block text-green-600">Partner</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
            Klaar Voor Premium
            <span className="block text-yellow-400">Beveiliging?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Ontdek welke beveiligingsoplossing het beste bij uw situatie past.
            Ontvang binnen 24 uur een persoonlijke offerte op maat.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 shadow-2xl text-xl px-12 py-6 font-bold transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/offerte-opvragen">
                <Target className="mr-3 h-6 w-6" />
                GRATIS OFFERTE OPVRAGEN
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Heeft u vragen over een specifieke dienst?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Onze experts staan klaar om al uw vragen te beantwoorden en u te
            adviseren over de beste beveiligingsoplossing.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl text-lg px-10 py-5 font-bold"
          >
            <Link to="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Spreek Een Expert
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
