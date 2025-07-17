import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HeartHandshake,
  Shield,
  Users,
  Heart,
  Phone,
  Target,
  CheckCircle,
  Clock,
  UserCheck,
  Stethoscope,
  Award,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

const serviceFeatures = [
  {
    icon: Heart,
    title: "Empathische Benadering",
    description:
      "Begrijpvolle en respectvolle omgang met patiënten, bewoners en hun families",
  },
  {
    icon: Stethoscope,
    title: "Medische Kennis",
    description:
      "Basis medische kennis en begrip van zorgprocessen en protocollen",
  },
  {
    icon: Users,
    title: "Deëscalatie Expertise",
    description:
      "Gespecialiseerde training in het omgaan met stress en emotionele situaties",
  },
  {
    icon: Clock,
    title: "24/7 Zorgondersteuning",
    description:
      "Continue beschikbaarheid aangepast aan de zorgplanning en -behoeften",
  },
];

const whyChooseIB = [
  {
    icon: Award,
    title: "Zorg Specialisten",
    description:
      "Onze beveiligingsmedewerkers hebben specifieke training voor de zorgsector",
  },
  {
    icon: Heart,
    title: "Empathische Aanpak",
    description:
      "Begrip voor de gevoelige aard van zorgomgevingen en kwetsbare personen",
  },
  {
    icon: Star,
    title: "Bewezen Resultaten",
    description:
      "Meer dan 50 zorginstellingen vertrouwen op onze zorggerichte beveiliging",
  },
  {
    icon: UserCheck,
    title: "Gecertificeerd Team",
    description:
      "VOG-gescreend personeel met aanvullende zorg-specifieke certificeringen",
  },
];

export default function Zorgbeveiliging() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-teal-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll-left mb-8">
            <Breadcrumb
              items={[
                { label: "Diensten", href: "/diensten" },
                { label: "Zorgbeveiliging" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll-left">
              <Badge className="mb-6 text-lg px-6 py-3 font-bold bg-gradient-to-r from-green-400 to-teal-500 text-white">
                <HeartHandshake className="mr-2 h-5 w-5" />
                Zorggerichte Beveiliging
              </Badge>
              <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-shadow-xl">
                <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                  ZORG
                </span>
                <span className="block text-green-300 font-heavy text-4xl md:text-5xl mt-2">
                  BEVEILIGING
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 font-medium leading-relaxed mb-8">
                Gespecialiseerde beveiliging voor zorginstellingen met
                <span className="font-bold text-white">
                  {" "}
                  empathie, respect en professionele zorg
                </span>
                voor patiënten en hun families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-green-900 hover:bg-green-50 shadow-xl text-lg px-8 py-4 font-bold"
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
                  className="border-white text-white hover:bg-white hover:text-green-900 text-lg px-8 py-4 font-bold"
                >
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Zorg Contact
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll-right">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Waarom Zorgbeveiliging?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Veilige omgeving voor kwetsbare personen</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Bescherming van medische apparatuur</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Ondersteuning bij agressie en onrust</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span>Gemoedsrust voor zorgmedewerkers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-green-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-green-600 text-white px-6 py-3 text-lg font-bold">
              Zorggerichte Aanpak
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Beveiliging Met
              <span className="block text-green-600">Hart Voor Zorg</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze zorgbeveiliging combineert professionele beveiliging met
              empathie en begrip voor de unieke uitdagingen in zorginstellingen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Why Choose IB Security */}
      <section className="py-32 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 text-lg px-8 py-4 font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              <Award className="mr-2 h-5 w-5" />
              Waarom IB Security
            </Badge>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                ZORG EXPERTS
              </span>
              <span className="block text-yellow-300 font-heavy text-3xl md:text-4xl mt-4">
                MET HART EN ZIEL
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Meer dan 50 zorginstellingen vertrouwen op onze
              <span className="font-bold text-white">
                {" "}
                empathische en professionele zorgbeveiliging
              </span>
              . Wij begrijpen de unieke uitdagingen in de zorg.
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
                  <p className="text-green-200 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8">
            Bescherm Uw
            <span className="block text-yellow-200">Zorginstelling</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Geef uw patiënten, bewoners en medewerkers de veiligheid en rust die
            zij verdienen. Vraag vandaag nog een offerte aan voor empathische
            zorgbeveiliging.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 shadow-2xl text-xl px-12 py-6 font-bold transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/offerte-opvragen">
                <HeartHandshake className="mr-3 h-6 w-6" />
                ZORG OFFERTE
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
