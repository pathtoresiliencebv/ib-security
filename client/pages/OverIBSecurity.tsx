import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Award,
  Target,
  Clock,
  CheckCircle,
  TrendingUp,
  Eye,
  Lock,
  HeartHandshake,
  Zap,
  Globe,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

const milestones = [
  {
    year: "2008",
    title: "Oprichting IB Security",
    description:
      "Gestart met de visie om professionele beveiliging toegankelijk te maken voor iedereen.",
  },
  {
    year: "2012",
    title: "Uitbreiding naar Zorgbeveiliging",
    description:
      "Gespecialiseerd in beveiliging voor zorginstellingen en GGZ-faciliteiten.",
  },
  {
    year: "2016",
    title: "ISO 27001 Certificering",
    description:
      "Behaald internationale certificering voor informatiebeveiliging en kwaliteitsmanagement.",
  },
  {
    year: "2020",
    title: "500+ Tevreden Klanten",
    description:
      "Bereikt mijlpaal van meer dan 500 vaste klanten door heel Nederland.",
  },
  {
    year: "2024",
    title: "Marktleider in Premium Beveiliging",
    description:
      "Erkend als een van de meest betrouwbare beveiligingsbedrijven in Nederland.",
  },
];

const teamValues = [
  {
    icon: Shield,
    title: "Betrouwbaarheid",
    description:
      "Wij staan voor onze woord en leveren altijd wat we beloven. Uw vertrouwen is ons kostbaarste bezit.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: HeartHandshake,
    title: "Integriteit",
    description:
      "Eerlijkheid en transparantie staan centraal in alles wat wij doen, van planning tot uitvoering.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Excellentie",
    description:
      "Wij streven altijd naar de hoogste kwaliteit en continue verbetering van onze dienstverlening.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Samenwerking",
    description:
      "Samen met onze klanten werken wij aan de beste beveiligingsoplossingen voor elke situatie.",
    color: "from-orange-500 to-orange-600",
  },
];

const certifications = [
  { name: "ISO 27001", description: "Informatiebeveiliging" },
  { name: "ISO 9001", description: "Kwaliteitsmanagement" },
  { name: "VCA", description: "Veiligheid, Gezondheid & Milieu" },
  { name: "PSIB", description: "Private Security Industry Board" },
];

export default function OverIBSecurity() {
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
            <Badge className="mb-8 text-lg px-8 py-4 font-black bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-xl">
              <Shield className="mr-3 h-6 w-6" />
              15+ JAAR EXPERTISE
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl font-black mb-8 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                OVER
              </span>
              <span className="block text-4xl md:text-6xl mt-4 text-blue-300 font-heavy">
                IB SECURITY
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-medium max-w-4xl mx-auto leading-relaxed">
              Uw vertrouwde partner in professionele beveiliging sinds 2008. Wij
              zorgen voor{" "}
              <span className="font-bold text-white">
                veiligheid met een persoonlijk tintje
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll-left">
              <Badge className="mb-6 bg-blue-600 text-white px-6 py-3 text-lg font-bold">
                Ons Verhaal
              </Badge>
              <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-8">
                Van Klein Begin Tot
                <span className="block text-blue-600">Marktleider</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-blue-600">
                    IB Security werd in 2008 opgericht
                  </span>{" "}
                  met een duidelijke missie: professionele beveiliging
                  toegankelijk maken voor iedereen, van kleine bedrijven tot
                  grote zorginstellingen.
                </p>
                <p>
                  Wat begon als een klein team van gepassioneerde
                  beveiligingsprofessionals, is uitgegroeid tot
                  <span className="font-bold text-gray-900">
                    {" "}
                    een van de meest vertrouwde namen in de Nederlandse
                    beveiligingsbranche
                  </span>
                  .
                </p>
                <p>
                  Onze kracht ligt in onze persoonlijke aanpak. Elk
                  beveiligingsplan wordt op maat gemaakt, rekening houdend met
                  de unieke behoeften en uitdagingen van onze klanten.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl"
                >
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Neem Contact Op
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Link to="/offerte-opvragen">
                    <Mail className="mr-2 h-5 w-5" />
                    Vraag Offerte Aan
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30"></div>
                <Card className="relative bg-white shadow-2xl border-0">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-black text-blue-600 mb-2">
                          500+
                        </div>
                        <div className="text-gray-600 font-medium">
                          Tevreden Klanten
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-black text-blue-600 mb-2">
                          15+
                        </div>
                        <div className="text-gray-600 font-medium">
                          Jaar Ervaring
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-black text-blue-600 mb-2">
                          24/7
                        </div>
                        <div className="text-gray-600 font-medium">
                          Beschikbaar
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-black text-blue-600 mb-2">
                          99.8%
                        </div>
                        <div className="text-gray-600 font-medium">
                          Betrouwbaarheid
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-purple-600 text-white px-6 py-3 text-lg font-bold">
              Onze Geschiedenis
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Belangrijke
              <span className="block text-purple-600">Mijlpalen</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} animate-on-scroll-scale`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <Card
                    className={`w-full max-w-md shadow-xl border-0 ${index % 2 === 0 ? "mr-auto lg:mr-16" : "ml-auto lg:ml-16"}`}
                  >
                    <CardContent className="p-8">
                      <div className="text-3xl font-black text-blue-600 mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-green-600 text-white px-6 py-3 text-lg font-bold">
              Onze Waarden
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Wat Ons
              <span className="block text-green-600">Drijft</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deze kernwaarden vormen de basis van alles wat wij doen en bepalen
              hoe wij omgaan met onze klanten en medewerkers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale`}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge className="mb-6 bg-orange-600 text-white px-6 py-3 text-lg font-bold">
              Certificeringen & Kwaliteit
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Erkende
              <span className="block text-orange-600">Kwaliteit</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                    <Award className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600">{cert.description}</p>
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
            Klaar Om Samen Te Werken?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Ontdek waarom meer dan 500 bedrijven hun beveiliging toevertrouwen
            aan IB Security. Neem vandaag nog contact op voor een vrijblijvend
            gesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl text-xl px-12 py-6 font-bold"
            >
              <Link to="/contact">
                <Phone className="mr-3 h-6 w-6" />
                DIRECT CONTACT
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-6 font-bold"
            >
              <Link to="/offerte-opvragen">
                <Mail className="mr-3 h-6 w-6" />
                GRATIS OFFERTE
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
