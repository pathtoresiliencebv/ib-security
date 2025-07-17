import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Car,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  Target,
  Route,
  AlertTriangle,
  FileText,
  Smartphone,
  Camera,
  Users,
  Award,
  TrendingUp,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

const serviceFeatures = [
  {
    icon: Route,
    title: "Onregelmatige Rondes",
    description:
      "Onvoorspelbare patrouilleschema's voor maximale afschrikking van criminelen",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time locatie tracking van onze surveillance voertuigen",
  },
  {
    icon: Smartphone,
    title: "Live Rapportage",
    description:
      "Directe melding van incidenten via mobiele app en online platform",
  },
  {
    icon: Clock,
    title: "Flexibele Schema's",
    description: "Aangepaste surveillance tijden gebaseerd op uw risicoprofiel",
  },
  {
    icon: Camera,
    title: "Foto Documentatie",
    description:
      "Uitgebreide fotodocumentatie van alle controles en bevindingen",
  },
  {
    icon: AlertTriangle,
    title: "Snelle Respons",
    description: "Directe reactie op alarmmeldingen en verdachte situaties",
  },
];

const surveillanceTypes = [
  {
    type: "Bedrijventerreinen",
    description: "Surveillance van grote industriële en commerciële complexen",
    features: [
      "Perimeter controle",
      "Parkeerplaats bewaking",
      "Toegangspunten check",
      "Gebouwen inspectie",
    ],
  },
  {
    type: "Bouwplaatsen",
    description: "Bescherming van bouwmaterialen en machines tegen diefstal",
    features: [
      "Materiaal controle",
      "Machine beveiliging",
      "Toegangsbewaking",
      "Vandalisme preventie",
    ],
  },
  {
    type: "Woonwijken",
    description:
      "Preventieve surveillance in woongebieden voor veiligheidsgevoel",
    features: [
      "Wijk patrouilles",
      "Hangplekken controle",
      "Parkeertoezicht",
      "Overlast preventie",
    ],
  },
  {
    type: "Retail Complexen",
    description: "Mobiele beveiliging voor winkelcentra en retail parks",
    features: [
      "Parkeergarage controle",
      "Buitenterrein surveillance",
      "Leveranciers toezicht",
      "After-hours bewaking",
    ],
  },
];

const whyChooseIB = [
  {
    icon: Award,
    title: "Gecertificeerde Chauffeurs",
    description:
      "Al onze mobile surveillance medewerkers hebben een geldige beveiligingsvergunning en rijbewijs",
  },
  {
    icon: Car,
    title: "Modern Wagenpark",
    description:
      "Goed onderhouden voertuigen uitgerust met de nieuwste communicatie- en veiligheidstechnologie",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Aanpak",
    description:
      "Wij analyseren patronen en passen onze routes aan voor optimale effectiviteit",
  },
  {
    icon: Users,
    title: "24/7 Operationeel",
    description:
      "Onze mobile surveillance is beschikbaar rond de klok, 365 dagen per jaar",
  },
];

const packages = [
  {
    name: "Basis Mobiele Surveillance",
    features: [
      "1-2 controlerondes per dag",
      "Standaard rapportage",
      "Basis fotodocumentatie",
      "Telefonische melding incidenten",
      "GPS tracking van routes",
    ],
    popular: false,
  },
  {
    name: "Intensieve Surveillance",
    features: [
      "3-5 controlerondes per dag",
      "Uitgebreide rapportage",
      "Foto en video documentatie",
      "Live incident melding",
      "Maandelijkse evaluatie",
      "Aangepaste route planning",
    ],
    popular: true,
  },
  {
    name: "Premium 24/7 Surveillance",
    features: [
      "Continue surveillance dekking",
      "Real-time monitoring",
      "Dedicated surveillance manager",
      "Geïntegreerde alarmsystemen",
      "Maandelijkse veiligheidsanalyse",
      "Emergency response protocol",
    ],
    popular: false,
  },
];

export default function MobieleSurveillance() {
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
          <div className="animate-on-scroll-left mb-8">
            <Breadcrumb
              items={[
                { label: "Diensten", href: "/diensten" },
                { label: "Mobiele Surveillance" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-left">
              <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-green-400 to-blue-500 text-white">
                <Eye className="mr-2 h-5 w-5" />
                Flexibele Surveillance
              </Badge>
              <h1 className="font-display text-3xl md:text-5xl font-black mb-6 text-shadow-xl">
                <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                  MOBIELE
                </span>
                <span className="block text-green-300 font-heavy text-2xl md:text-4xl mt-2">
                  SURVEILLANCE
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed mb-8">
                Flexibele mobiele surveillance met{" "}
                <span className="font-bold text-white">
                  onregelmatige controlerondes
                </span>
                voor optimale afschrikking en beveiliging van uw eigendommen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="relative bg-gradient-to-r from-green-600 via-blue-600 to-green-800 hover:from-green-700 hover:via-blue-700 hover:to-green-900 text-white shadow-xl text-lg px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300 overflow-hidden group"
                >
                  <Link to="/offerte-opvragen">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              <div className="relative group mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-600 via-blue-600 to-green-800 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-4xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F18e64066d3874f39ae16c8e50727ae4d%2F04dab4720ad84c7e81af8f15a7912456?format=webp&width=800"
                    alt="IB Security mobiele surveillance team op nachtelijke patrol"
                    className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-2xl animate-bounce-subtle">
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5" />
                    <span>MOBIELE UNITS</span>
                  </div>
                </div>
              </div>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Voordelen Mobiele Surveillance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Kosteneffectiever dan statische beveiliging</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Afschrikking door onvoorspelbaarheid</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Flexibele inzet op meerdere locaties</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Real-time rapportage en documentatie</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-green-600 text-white px-6 py-3 text-lg font-bold">
              Onze Werkwijze
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Slimme & Effectieve
              <span className="block text-green-600">Surveillance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze mobiele surveillance is gebaseerd op bewezen methoden en
              moderne technologie voor maximale effectiviteit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Surveillance Types */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-blue-600 text-white px-6 py-3 text-lg font-bold">
              Toepassingsgebieden
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Surveillance Voor Elke
              <span className="block text-blue-600">Locatie Type</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surveillanceTypes.map((type, index) => (
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

      {/* Why Choose IB Security */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 text-lg px-8 py-4 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              <Award className="mr-2 h-5 w-5" />
              Waarom IB Security
            </Badge>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                DE BESTE KEUZE
              </span>
              <span className="block text-yellow-300 font-heavy text-3xl md:text-4xl mt-4">
                VOOR MOBIELE SURVEILLANCE
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meer dan 500 tevreden klanten vertrouwen op onze{" "}
              <span className="font-bold text-white">
                professionele mobiele surveillance
              </span>
              . Ontdek waarom wij de juiste partner voor u zijn.
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
                  <p className="text-blue-200 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-purple-600 text-white px-6 py-3 text-lg font-bold">
              Surveillance Pakketten
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Kies Het Juiste
              <span className="block text-purple-600">Surveillance Pakket</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van enkele controlerondes tot 24/7 surveillance - wij hebben het
              passende pakket voor uw behoeften.
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
                    <span className="text-4xl font-black text-green-600">
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
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`w-full ${pkg.popular ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400" : "bg-green-600 hover:bg-green-700 text-white"} shadow-xl text-lg py-3 font-bold`}
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
      <section className="py-32 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
            Start Vandaag Met
            <span className="block text-yellow-400">Mobiele Surveillance</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Bescherm uw eigendommen met flexibele en kosteneffectieve mobiele
            surveillance. Ontvang binnen 24 uur een persoonlijke offerte.
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
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-xl px-12 py-6 font-bold"
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
