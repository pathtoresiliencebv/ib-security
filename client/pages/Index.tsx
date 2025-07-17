import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Clock,
  Users,
  CheckCircle,
  Phone,
  Mail,
  Award,
  Eye,
  UserCheck,
  Building,
  HeartHandshake,
  Zap,
  Star,
  MapPin,
  TrendingUp,
  Target,
  Lock,
  Camera,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Flame,
  Cpu,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Users,
    title: "Uitzendbureau beveiliging",
    description:
      "Gekwalificeerd beveiligingspersoneel voor tijdelijke en permanente posities.",
    href: "/diensten/uitzendbureau-beveiliging",
  },
  {
    icon: UserCheck,
    title: "Receptie beveiliging",
    description:
      "Professionele receptie- en beveiligingsdiensten voor uw bedrijf.",
    href: "/diensten/receptie-beveiliging",
  },
  {
    icon: Users,
    title: "Evenementenbeveiliging",
    description:
      "Veilige en succesvolle evenementen met gespecialiseerde beveiliging.",
    href: "/diensten/evenementenbeveiliging",
  },
  {
    icon: Zap,
    title: "Alarmopvolging",
    description:
      "24/7 alarmopvolging voor optimale beveiliging van uw eigendommen.",
    href: "/diensten/alarmopvolging",
  },
  {
    icon: Eye,
    title: "Mobiele Surveillance",
    description:
      "Flexibele mobiele surveillance voor dynamische beveiligingsbehoeften.",
    href: "/diensten/mobiele-surveillance",
  },
  {
    icon: Building,
    title: "Objectbeveiliging",
    description: "Complete beveiliging van uw objecten en bedrijfspanden.",
    href: "/diensten/objectbeveiliging",
  },
  {
    icon: HeartHandshake,
    title: "Zorgbeveiliging",
    description:
      "Gespecialiseerde beveiliging voor zorginstellingen en zorgverleners.",
    href: "/diensten/zorgbeveiliging",
  },
  {
    icon: Shield,
    title: "GGZ Beveiliging",
    description:
      "Professionele beveiliging voor GGZ-instellingen met empathie en deskundigheid.",
    href: "/diensten/ggz-beveiliging",
  },
];

const features = [
  {
    icon: Clock,
    title: "24/7 Beschikbaarheid",
    description: "Wij zijn altijd voor u bereikbaar, dag en nacht.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Award,
    title: "Gecertificeerd Personeel",
    description:
      "Al onze beveiligingsmedewerkers zijn volledig gecertificeerd en getraind.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Shield,
    title: "Betrouwbare Service",
    description:
      "Jarenlange ervaring in de beveiligingsbranche met uitstekende reputatie.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Users,
    title: "Persoonlijke Aanpak",
    description:
      "Elk beveiligingsplan wordt op maat gemaakt voor uw specifieke situatie.",
    color: "bg-orange-100 text-orange-600",
  },
];

const statistics = [
  {
    number: "500+",
    label: "Tevreden Klanten",
    icon: Users,
    description: "Bedrijven vertrouwen op onze beveiliging",
  },
  {
    number: "15+",
    label: "Jaar Ervaring",
    icon: Award,
    description: "Bewezen expertise in de beveiligingsbranche",
  },
  {
    number: "24/7",
    label: "Service",
    icon: Clock,
    description: "Altijd bereikbaar voor noodgevallen",
  },
  {
    number: "99.8%",
    label: "Betrouwbaarheid",
    icon: Target,
    description: "Bijna perfecte bescherming record",
  },
];

const testimonials = [
  {
    name: "Jan Vermeulen",
    company: "Vermeulen Transport B.V.",
    text: "IB Security heeft ons transport bedrijf uitstekend geholpen met objectbeveiliging. Hun professionele aanpak en betrouwbaarheid zijn ongeëvenaard.",
    rating: 5,
  },
  {
    name: "Maria de Vries",
    company: "Zorgcentrum De Horizon",
    text: "Voor onze zorginstelling hebben we een partner gevonden die begrijpt wat er nodig is. Empathisch en vakkundig personeel.",
    rating: 5,
  },
  {
    name: "Peter Jansen",
    company: "Evenementen Organisatie Plus",
    text: "Al onze grote evenementen worden perfect beveiligd door IB Security. Geen stress meer over de veiligheid van onze gasten.",
    rating: 5,
  },
];

const companyValues = [
  {
    icon: Shield,
    title: "Veiligheid Voorop",
    description:
      "Uw veiligheid en die van uw bezittingen staat altijd op de eerste plaats in alles wat wij doen.",
  },
  {
    icon: Lock,
    title: "Discretie & Vertrouwelijkheid",
    description:
      "Wij werken met volledige discretie en respecteren de privacy van onze klanten ten alle tijde.",
  },
  {
    icon: TrendingUp,
    title: "Continue Verbetering",
    description:
      "Wij investeren voortdurend in training en nieuwe technologieën om de beste service te bieden.",
  },
];

// Counter hook for animated numbers
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasAnimated]);

  const startAnimation = () => setHasAnimated(true);

  return { count, startAnimation };
}

export default function Index() {
  useScrollAnimationMultiple();

  return (
    <Layout>
      {/* Ultra-Premium Hero Section */}
      <section className="relative min-h-screen bg-security-gradient text-white overflow-hidden flex items-center">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Floating Security Icons */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-10 left-10 animate-float">
              <Shield className="w-32 h-32 text-white/40" />
            </div>
            <div className="absolute top-40 right-20 animate-float-delay">
              <Lock className="w-24 h-24 text-white/30" />
            </div>
            <div className="absolute bottom-32 left-32 animate-float-slow">
              <Camera className="w-28 h-28 text-white/35" />
            </div>
            <div className="absolute bottom-20 right-16 animate-float animate-pulse">
              <Eye className="w-24 h-24 text-white/40" />
            </div>
            <div className="absolute top-1/2 left-1/4 animate-pulse-slow">
              <Cpu className="w-20 h-20 text-white/25" />
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float-delay">
              <Globe className="w-16 h-16 text-white/30" />
            </div>

            {/* Advanced Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] animate-pulse"></div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/20"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="mb-8 animate-fade-in-up">
              <Badge className="glass-effect border-white/30 text-white text-lg px-6 py-3 font-bold-pro animate-glow-pulse">
                <Sparkles className="mr-2 h-5 w-5" />
                🛡️ NEDERLAND'S PREMIUM BEVEILIGINGSPARTNER
              </Badge>
            </div>

            {/* Ultra-Bold Hero Title */}
            <h1 className="font-display text-6xl md:text-9xl font-black mb-8 animate-scale-in text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                PROFESSIONELE
              </span>
              <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent text-5xl md:text-7xl mt-4 font-heavy">
                BEVEILIGING
              </span>
              <span className="block text-3xl md:text-5xl mt-6 font-heading text-blue-200 opacity-90">
                voor heel Nederland
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed text-blue-50 font-medium animate-fade-in-up">
              IB Security levert{" "}
              <span className="font-bold text-white">
                24/7 premium beveiligingsdiensten
              </span>{" "}
              voor bedrijven, zorginstellingen en evenementen. Met{" "}
              <span className="font-bold text-white">
                meer dan 15 jaar expertise
              </span>{" "}
              zijn wij uw vertrouwde partner voor alle beveiligingsbehoeften.
            </p>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-in-left">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 shadow-4xl hover:shadow-glow-intense transition-all duration-300 transform hover:scale-110 text-xl px-12 py-6 font-bold-pro animate-bounce-subtle"
              >
                <Link to="/offerte-opvragen">
                  <Shield className="mr-3 h-6 w-6" />
                  GRATIS PREMIUM OFFERTE
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass-effect border-2 border-white text-white hover:bg-white hover:text-blue-900 text-xl px-12 py-6 font-bold backdrop-blur-xl shadow-3xl"
              >
                <Link to="/contact">
                  <Phone className="mr-3 h-6 w-6" />
                  DIRECT CONTACT
                </Link>
              </Button>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center animate-slide-in-right">
              <div className="glass-effect rounded-2xl p-6 group hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-black mb-2 font-display text-white">
                  500+
                </div>
                <div className="text-lg font-bold text-blue-200 uppercase tracking-wider">
                  Klanten
                </div>
                <div className="text-sm text-blue-300 mt-1">Vertrouwen ons</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 group hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-black mb-2 font-display text-white">
                  15+
                </div>
                <div className="text-lg font-bold text-blue-200 uppercase tracking-wider">
                  Jaar
                </div>
                <div className="text-sm text-blue-300 mt-1">Ervaring</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 group hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-black mb-2 font-display text-white">
                  24/7
                </div>
                <div className="text-lg font-bold text-blue-200 uppercase tracking-wider">
                  Service
                </div>
                <div className="text-sm text-blue-300 mt-1">
                  Altijd bereikbaar
                </div>
              </div>
              <div className="glass-effect rounded-2xl p-6 group hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-black mb-2 font-display text-white">
                  99.8%
                </div>
                <div className="text-lg font-bold text-blue-200 uppercase tracking-wider">
                  Succes
                </div>
                <div className="text-sm text-blue-300 mt-1">
                  Betrouwbaarheid
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Ultra-Professional Features Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-on-scroll">
            <Badge className="mb-8 text-lg px-6 py-3 font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
              <Flame className="mr-2 h-5 w-5" />
              WAAROM IB SECURITY DE BESTE KEUZE IS
            </Badge>
            <h2 className="font-display text-5xl md:text-8xl font-black text-gray-900 mb-8 text-shadow-lg">
              UW VERTROUWDE
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                BEVEILIGINGSPARTNER
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto font-medium leading-relaxed">
              Wij onderscheiden ons door{" "}
              <span className="font-bold text-blue-600">
                ongeëvenaarde kwaliteit
              </span>
              , absolute betrouwbaarheid en een persoonlijke aanpak die perfect
              aansluit bij uw specifieke behoeften.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`text-center group hover:shadow-4xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-1 border-0 shadow-2xl bg-white/80 backdrop-blur-lg animate-on-scroll-scale overflow-hidden relative`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] rounded-2xl">
                  <div className="bg-white rounded-2xl h-full w-full"></div>
                </div>

                <CardContent className="relative pt-12 pb-8 px-6">
                  <div
                    className={`mx-auto w-24 h-24 ${feature.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-glow`}
                  >
                    <feature.icon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors font-heading">
                    {feature.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium group-hover:text-gray-900 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Statistics Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400 rounded-full blur-3xl opacity-30"></div>
          </div>

          {/* Animated Grid */}
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:80px_80px] animate-pulse opacity-30"></div>
        </div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-on-scroll">
            <Badge className="mb-8 text-lg px-8 py-4 font-black bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-xl animate-bounce-subtle">
              <TrendingUp className="mr-3 h-6 w-6" />
              BEWEZEN RESULTATEN
            </Badge>
            <h2 className="font-display text-6xl md:text-9xl font-black mb-8 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                EXCELLENTIE
              </span>
              <span className="block text-4xl md:text-6xl mt-4 text-blue-300 font-heavy">
                IN CIJFERS
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-blue-100 font-medium max-w-4xl mx-auto leading-relaxed">
              Deze{" "}
              <span className="font-bold text-white">
                indrukwekkende statistieken
              </span>{" "}
              spreken voor zich en tonen ons onwrikbare commitment aan{" "}
              <span className="font-bold text-yellow-400">
                absolute excellentie
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className={`text-center group animate-on-scroll-scale`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-dark rounded-3xl p-10 group-hover:shadow-glow-intense transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-2 border border-white/20 relative overflow-hidden">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-glow">
                      <stat.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-6xl md:text-7xl font-black mb-4 text-white font-display group-hover:text-yellow-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-2xl font-bold mb-3 text-blue-200 uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                    <p className="text-blue-300 text-lg font-medium group-hover:text-blue-100 transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                    <div className="bg-slate-900/80 rounded-3xl h-full w-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 animate-on-scroll">
            <p className="text-2xl text-blue-200 mb-8 font-medium">
              Sluit u aan bij onze{" "}
              <span className="font-bold text-white">
                500+ tevreden klanten
              </span>
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 shadow-2xl hover:shadow-glow-intense transition-all duration-300 transform hover:scale-110 text-xl px-12 py-6 font-black"
            >
              <Link to="/offerte-opvragen">
                <Target className="mr-3 h-6 w-6" />
                WORD OOK EEN TEVREDEN KLANT
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ultra-Premium Services Section with Professional Photo */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-8 text-xl px-8 py-4 font-black bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
              <Shield className="mr-3 h-6 w-6" />
              PROFESSIONELE BEVEILIGINGSDIENSTEN
            </Badge>
            <h2 className="font-display text-5xl md:text-8xl font-black text-gray-900 mb-8 text-shadow-lg">
              ONZE
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                SPECIALITEITEN
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto font-medium leading-relaxed">
              Van objectbeveiliging tot zorgbeveiliging - wij leveren{" "}
              <span className="font-bold text-blue-600">
                premium beveiligingsoplossingen
              </span>
              die perfect aansluiten bij uw unieke behoeften en eisen.
            </p>
          </div>

          {/* Main Content Grid with Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Professional Security Photo */}
            <div className="relative group animate-on-scroll-left">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-4xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F18e64066d3874f39ae16c8e50727ae4d%2Fdf08b781620e4762bee954e4ebc22c39?format=webp&width=800"
                  alt="Professionele IB Security beveiliger in actie"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-black text-lg shadow-2xl animate-bounce-subtle">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <span>15+ JAAR ERVARING</span>
                </div>
              </div>
            </div>

            {/* Services Content */}
            <div className="animate-on-scroll-right">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
                  <h3 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                    Waarom kiezen voor IB Security?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          Gecertificeerde Professionals
                        </h4>
                        <p className="text-gray-600">
                          Volledig getraind en gecertificeerd personeel
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          24/7 Beschikbaarheid
                        </h4>
                        <p className="text-gray-600">
                          Altijd bereikbaar voor noodgevallen
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          Op Maat Gemaakte Oplossingen
                        </h4>
                        <p className="text-gray-600">
                          Elk plan aangepast aan uw specifieke behoeften
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-glow-intense transition-all duration-300 transform hover:scale-105 text-xl py-6 font-bold"
                >
                  <Link to="/contact">
                    <Phone className="mr-3 h-6 w-6" />
                    DIRECT CONTACT OPNEMEN
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Services Grid */}
          <div className="animate-on-scroll">
            <h3 className="font-heading text-4xl font-bold text-center text-gray-900 mb-16">
              Onze Complete Dienstverlening
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-4xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-0 shadow-2xl bg-white/90 backdrop-blur-lg overflow-hidden relative animate-on-scroll-scale`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] rounded-2xl">
                    <div className="bg-white rounded-2xl h-full w-full"></div>
                  </div>

                  <Link to={service.href} className="block h-full">
                    <CardContent className="relative p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-glow">
                          <service.icon className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">
                          {service.description}
                        </p>
                        <div className="mt-4 text-blue-600 font-medium group-hover:text-purple-600 transition-colors flex items-center justify-center">
                          <span className="mr-2">Meer info</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Hover Effect Line */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>

            {/* Premium CTA Button */}
            <div className="text-center mt-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 text-white shadow-4xl hover:shadow-glow-intense transition-all duration-300 transform hover:scale-110 text-2xl px-16 py-8 font-black"
              >
                <Link to="/diensten">
                  <Shield className="mr-4 h-8 w-8" />
                  BEKIJK ALLE PREMIUM DIENSTEN
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge
                variant="outline"
                className="mb-6 border-white/30 text-white bg-white/10"
              >
                Over IB Security
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meer dan 15 jaar
                <span className="block text-blue-300">
                  ervaring in beveiliging
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                IB Security is ontstaan uit de overtuiging dat beveiliging meer
                is dan alleen bewaking. Het gaat om vertrouwen,
                professionaliteit en een persoonlijke aanpak die past bij uw
                situatie.
              </p>

              <div className="space-y-6 mb-8">
                {companyValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50"
              >
                <Link to="/over-ibsecurity">
                  Lees meer over ons
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-white mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">
                    Uw veiligheid, onze prioriteit
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Met state-of-the-art technologie en het best getrainde
                    personeel zorgen wij ervoor dat u zich altijd veilig kunt
                    voelen.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold">ISO 27001</div>
                    <div className="text-sm text-blue-200">Gecertificeerd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Wat onze klanten zeggen
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vertrouwd door
              <span className="text-blue-600"> honderden bedrijven</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ontdek waarom onze klanten al jaren op ons vertrouwen voor hun
              beveiligingsbehoeften.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/3 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Klaar om uw beveiliging
              <span className="block text-blue-200">te verbeteren?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte
              en ontdek hoe IB Security uw veiligheid naar een hoger niveau kan
              tillen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 text-lg px-8 py-4"
              >
                <Link to="/offerte-opvragen">
                  <Shield className="mr-2 h-5 w-5" />
                  Gratis Offerte Opvragen
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm bg-white/10 text-lg px-8 py-4"
              >
                <a href="tel:+31881234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Direct bellen: 088 123 4567
                </a>
              </Button>
            </div>

            <div className="text-blue-200 text-sm">
              ⏰ Binnen 24 uur reactie gegarandeerd
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meerdere manieren om
              <span className="text-blue-600"> contact op te nemen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Kies de manier die het beste bij u past
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <Card className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-green-500 group-hover:to-green-600 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                  Bel Direct
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  24/7 bereikbaar voor noodgevallen en directe hulp
                </p>
                <a
                  href="tel:+31881234567"
                  className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors block mb-2"
                >
                  088 123 4567
                </a>
                <div className="text-sm text-gray-500">
                  Gemiddelde reactietijd: &lt; 5 minuten
                </div>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  E-mail Contact
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Stuur ons een gedetailleerd bericht over uw behoeften
                </p>
                <a
                  href="mailto:info@ib-security.nl"
                  className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors block mb-2"
                >
                  info@ib-security.nl
                </a>
                <div className="text-sm text-gray-500">
                  Reactie binnen 24 uur
                </div>
              </CardContent>
            </Card>

            {/* Quote Request */}
            <Card className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-500 group-hover:to-purple-600 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  Offerte op Maat
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Vraag een vrijblijvende offerte aan die perfect past bij uw
                  situatie
                </p>
                <Button
                  asChild
                  className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/offerte-opvragen">
                    <Target className="mr-2 h-4 w-4" />
                    Offerte Aanvragen
                  </Link>
                </Button>
                <div className="text-sm text-gray-500 mt-3">
                  Geen verplichtingen
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-0 shadow-lg">
              <CardContent className="pt-8 pb-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Landelijk Actief</h3>
                <p className="text-gray-600 leading-relaxed">
                  IB Security is actief in heel Nederland. Of u nu in Amsterdam,
                  Rotterdam, Den Haag, Utrecht of elders bent - wij kunnen u
                  helpen met al uw beveiligingsbehoeften.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
