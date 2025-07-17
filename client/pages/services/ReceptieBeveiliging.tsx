import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  UserCheck,
  Users,
  Phone,
  Shield,
  Clock,
  CheckCircle,
  Target,
  Smile,
  Headphones,
  FileText,
  Building,
  Award,
  Star,
  Languages,
  Coffee,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

const serviceFeatures = [
  {
    icon: Smile,
    title: "Gastvrije Ontvangst",
    description:
      "Professionele en vriendelijke ontvangst van alle bezoekers en klanten",
  },
  {
    icon: Shield,
    title: "Veiligheidscontrole",
    description:
      "Discrete maar effectieve beveiligingscontroles en toegangsbeheer",
  },
  {
    icon: Headphones,
    title: "Telefonie & Communicatie",
    description:
      "Professionele telefoonbeantwoording en doorverbinding van gesprekken",
  },
  {
    icon: FileText,
    title: "Bezoekerregistratie",
    description:
      "Nauwkeurige registratie van alle bezoekers met digitale logging",
  },
  {
    icon: Building,
    title: "Bedrijfsrepresentatie",
    description: "Representatieve uitstraling die past bij uw bedrijfsimago",
  },
  {
    icon: Clock,
    title: "Flexibele Uren",
    description: "Service aangepast aan uw openingstijden en bedrijfsbehoeften",
  },
];

const receptionTypes = [
  {
    type: "Kantoorgebouwen",
    description:
      "Complete receptie service voor professionele kantooromgevingen",
    features: [
      "Bezoekersregistratie",
      "Telefonie",
      "Post & pakketservice",
      "Informatie verstrekking",
    ],
  },
  {
    type: "Ziekenhuizen & Klinieken",
    description: "Empathische receptie voor medische instellingen",
    features: [
      "Patiënt begeleiding",
      "Afspraak ondersteuning",
      "Discrete communicatie",
      "Noodprotocollen",
    ],
  },
  {
    type: "Hotels & Leisure",
    description: "Gastvrije ontvangst voor hospitality sector",
    features: [
      "Check-in/out support",
      "Gastenservice",
      "Concierge taken",
      "Event ondersteuning",
    ],
  },
  {
    type: "Overheidsgebouwen",
    description: "Professionele receptie voor publieke instellingen",
    features: [
      "Identiteitscontrole",
      "Veiligheidsprotocollen",
      "Wachtruimte beheer",
      "Routebegeleiding",
    ],
  },
];

const whyChooseIB = [
  {
    icon: Languages,
    title: "Meertalig Personeel",
    description:
      "Onze receptionisten spreken Nederlands, Engels en vaak nog andere talen voor internationale bezoekers",
  },
  {
    icon: Award,
    title: "Professionele Training",
    description:
      "Uitgebreide training in zowel receptie etiquette als beveiligingsprotocollen",
  },
  {
    icon: Star,
    title: "Uitstekende Presentatie",
    description:
      "Representatief geklede medewerkers die perfect bij uw bedrijfsimago passen",
  },
  {
    icon: Coffee,
    title: "Extra Services",
    description:
      "Aanvullende diensten zoals post sorteer, meeting support en facilitair beheer",
  },
];

const packages = [
  {
    name: "Basis Receptie Service",
    price: "€22",
    unit: "per uur",
    features: [
      "Gastvrije ontvangst bezoekers",
      "Basis telefonie (5 lijnen)",
      "Bezoekerregistratie",
      "Informatie verstrekking",
      "Dagdienst (08:00-17:00)",
    ],
    popular: false,
  },
  {
    name: "Premium Receptie & Security",
    price: "€28",
    unit: "per uur",
    features: [
      "Volledige receptie service",
      "Geavanceerde telefonie (onbeperkt)",
      "Uitgebreide bezoekerregistratie",
      "Beveiligingscontroles",
      "Post & pakket afhandeling",
      "Flexibele uren",
    ],
    popular: true,
  },
  {
    name: "Executive Receptie Service",
    price: "Op maat",
    unit: "maandprijs",
    features: [
      "Dedicated receptie manager",
      "24/7 service beschikbaar",
      "Meertalige ondersteuning",
      "Concierge diensten",
      "Event & meeting support",
      "Maandelijkse service evaluatie",
    ],
    popular: false,
  },
];

export default function ReceptieBeveiliging() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:80px_80px] animate-pulse opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll-left mb-8">
            <Breadcrumb
              items={[
                { label: "Diensten", href: "/diensten" },
                { label: "Receptie Beveiliging" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-left">
              <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-white">
                <UserCheck className="mr-2 h-5 w-5" />
                Professionele Receptie
              </Badge>
              <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-shadow-xl">
                <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                  RECEPTIE
                </span>
                <span className="block text-pink-300 font-heavy text-4xl md:text-5xl mt-2">
                  BEVEILIGING
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 font-medium leading-relaxed mb-8">
                De perfecte combinatie van{" "}
                <span className="font-bold text-white">gastvrije receptie</span>
                en discrete beveiliging voor een professionele uitstraling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl text-lg px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/offerte-opvragen">
                    <Target className="mr-2 h-5 w-5" />
                    Offerte Opvragen
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 font-bold"
                >
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Direct Contact
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll-right">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Eerste Indruk Telt
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0" />
                      <span>Professionele uitstraling voor uw bedrijf</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0" />
                      <span>Veiligheid zonder hospitality in te leveren</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0" />
                      <span>Kosteneffectief: 2 functies in 1 persoon</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0" />
                      <span>Flexibele inzet en aangepaste service</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-pink-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-purple-600 text-white px-6 py-3 text-lg font-bold">
              Complete Service
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Receptie & Beveiliging
              <span className="block text-purple-600">
                In Perfecte Harmonie
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze receptie beveiligingsmedewerkers combineren gastvrijheid met
              professionele beveiliging voor de beste eerste indruk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Reception Types */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-pink-600 text-white px-6 py-3 text-lg font-bold">
              Specialisaties
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Ervaring In Elke
              <span className="block text-pink-600">Sector</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {receptionTypes.map((type, index) => (
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
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
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
      <section className="py-32 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 text-lg px-8 py-4 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              <Award className="mr-2 h-5 w-5" />
              Waarom IB Security
            </Badge>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                UITSTEKENDE SERVICE
              </span>
              <span className="block text-yellow-300 font-heavy text-3xl md:text-4xl mt-4">
                MAAKT HET VERSCHIL
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Onze receptie beveiliging staat bekend om de{" "}
              <span className="font-bold text-white">
                perfecte balans tussen gastvrijheid en professionaliteit
              </span>
              . Uw bezoekers voelen zich welkom én veilig.
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
                  <p className="text-purple-200 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-indigo-600 text-white px-6 py-3 text-lg font-bold">
              Service Pakketten
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              De Juiste Service
              <span className="block text-indigo-600">Voor Uw Receptie</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van basis ontvangst tot complete executive receptie service - wij
              passen ons aan uw behoeften aan.
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
                      MEEST GEKOZEN
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-purple-600">
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
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`w-full ${pkg.popular ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400" : "bg-purple-600 hover:bg-purple-700 text-white"} shadow-xl text-lg py-3 font-bold`}
                  >
                    <Link to="/offerte-opvragen">Offerte Aanvragen</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
            Upgrade Uw Receptie
            <span className="block text-yellow-400">
              Naar Het Volgende Niveau
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Combineer gastvrijheid met beveiliging voor de perfecte eerste
            indruk. Vraag vandaag nog een vrijblijvende offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 shadow-2xl text-xl px-12 py-6 font-bold transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/offerte-opvragen">
                <Target className="mr-3 h-6 w-6" />
                GRATIS OFFERTE
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-xl px-12 py-6 font-bold"
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
