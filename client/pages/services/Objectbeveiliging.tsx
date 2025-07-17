import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Shield,
  Clock,
  Eye,
  Users,
  CheckCircle,
  Phone,
  Mail,
  Target,
  Award,
  Lock,
  Camera,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

const serviceFeatures = [
  {
    icon: Clock,
    title: "24/7 Aanwezigheid",
    description:
      "Continue bewaking van uw pand door professionele beveiligingsmedewerkers",
  },
  {
    icon: Eye,
    title: "Toegangscontrole",
    description:
      "Strikte controle van bezoekers en medewerkers met registratie",
  },
  {
    icon: Shield,
    title: "Patrouilles & Rondes",
    description: "Regelmatige controlerondes binnen en rondom uw object",
  },
  {
    icon: Camera,
    title: "Camerabewaking",
    description: "Professionele monitoring van beveiligingscamera's",
  },
  {
    icon: AlertTriangle,
    title: "Incident Management",
    description: "Snelle respons en professionele afhandeling van incidenten",
  },
  {
    icon: FileText,
    title: "Rapportage",
    description: "Uitgebreide dagelijkse rapporten van alle activiteiten",
  },
];

const objectTypes = [
  {
    type: "Kantoorpanden",
    description:
      "Professionele beveiliging voor kantoorgebouwen en business centers",
    features: [
      "Receptie service",
      "Toegangscontrole",
      "Parkeergarage bewaking",
    ],
  },
  {
    type: "Industriële Locaties",
    description:
      "Gespecialiseerde beveiliging voor fabrieken en industrieterreinen",
    features: [
      "Perimeter beveiliging",
      "Gevaarlijke stoffen",
      "Machinebeveiliging",
    ],
  },
  {
    type: "Winkelcentra",
    description: "Retail security voor een veilige winkelervaring",
    features: [
      "Crowd control",
      "Winkeldiefstal preventie",
      "Evenementen support",
    ],
  },
  {
    type: "Onderwijsinstellingen",
    description: "Veilige leeromgeving voor scholen en universiteiten",
    features: [
      "Toegangsbeheer",
      "Conflict preventie",
      "Evenementen beveiliging",
    ],
  },
];

const packages = [
  {
    name: "Basis Objectbeveiliging",
    price: "€25/uur",
    features: [
      "1 beveiligingsmedewerker",
      "Dagdienst (08:00-18:00)",
      "Basis toegangscontrole",
      "Dagelijkse rapportage",
      "Telefonische bereikbaarheid",
    ],
    popular: false,
  },
  {
    name: "Premium 24/7 Beveiliging",
    price: "€30/uur",
    features: [
      "24/7 bewaking",
      "Meerdere beveiligingsmedewerkers",
      "Geavanceerde toegangscontrole",
      "Live rapportage",
      "Directe alarmopvolging",
      "Mobiele surveillance",
    ],
    popular: true,
  },
  {
    name: "Enterprise Beveiliging",
    price: "Op maat",
    features: [
      "Volledig beveiligingsteam",
      "Dedicated security manager",
      "Geïntegreerde technologie",
      "Real-time monitoring",
      "Crisismanagement",
      "Maandelijkse evaluaties",
    ],
    popular: false,
  },
];

export default function Objectbeveiliging() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-left">
              <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-white">
                <Building className="mr-2 h-5 w-5" />
                Premium Objectbeveiliging
              </Badge>
              <h1 className="font-display text-3xl md:text-5xl font-black mb-6 text-shadow-xl">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  OBJECT
                </span>
                <span className="block text-blue-300 font-heavy text-2xl md:text-4xl mt-2">
                  BEVEILIGING
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed mb-8">
                24/7 professionele beveiliging van uw bedrijfspand door
                <span className="font-bold text-white">
                  {" "}
                  gecertificeerde professionals
                </span>
                . Uw veiligheid, onze prioriteit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 text-white shadow-xl text-lg px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300 overflow-hidden group"
                >
                  <Link to="/offerte-opvragen">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      Offerte Opvragen
                    </div>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 font-bold"
                >
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Direct Contact
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-4xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F18e64066d3874f39ae16c8e50727ae4d%2F47505c58700145a59c9d563899e2f6a4?format=webp&width=800"
                    alt="IB Security beveiliger bij toegangscontrole en auto inspectie"
                    className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-2xl animate-bounce-subtle">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>OBJECTBEVEILIGING</span>
                  </div>
                </div>
              </div>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl mt-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Waarom Objectbeveiliging?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Preventie van inbraak en vandalisme</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Bescherming van waardevolle assets</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Veilige werkomgeving voor personeel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Lagere verzekeringspremies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-blue-600 text-white px-6 py-3 text-lg font-bold">
              Onze Dienstverlening
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Complete
              <span className="block text-blue-600">Beveiliging</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Object Types */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-green-600 text-white px-6 py-3 text-lg font-bold">
              Specialisaties
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Ervaring Met Alle
              <span className="block text-green-600">Object Types</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectTypes.map((object, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {object.type}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {object.description}
                  </p>
                  <div className="space-y-2">
                    {object.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Packages */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-purple-600 text-white px-6 py-3 text-lg font-bold">
              Prijspakketten
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Kies Het Juiste
              <span className="block text-purple-600">Pakket</span>
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
                      POPULAIR
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-black text-blue-600 mb-6">
                    {pkg.price}
                  </div>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`w-full ${pkg.popular ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400" : "bg-blue-600 hover:bg-blue-700 text-white"} shadow-xl text-lg py-3 font-bold`}
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
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
            Klaar Voor
            <span className="block text-yellow-400">
              Premium Objectbeveiliging?
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Bescherm uw bedrijfspand met de meest betrouwbare objectbeveiliging
            van Nederland. Ontvang binnen 24 uur een persoonlijke offerte.
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
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-6 font-bold"
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
