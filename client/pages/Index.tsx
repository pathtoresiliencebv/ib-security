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
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 animate-pulse">
              <Shield className="w-24 h-24 text-white/30" />
            </div>
            <div className="absolute top-32 right-20 animate-pulse delay-1000">
              <Lock className="w-16 h-16 text-white/20" />
            </div>
            <div className="absolute bottom-20 left-32 animate-pulse delay-500">
              <Camera className="w-20 h-20 text-white/25" />
            </div>
            <div className="absolute bottom-32 right-16 animate-pulse delay-700">
              <Eye className="w-18 h-18 text-white/30" />
            </div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-6">
              <Badge
                variant="outline"
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm mb-4"
              >
                🛡️ Uw Betrouwbare Beveiligingspartner
              </Badge>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Professionele Beveiliging
              <span className="block text-blue-200 text-3xl md:text-5xl mt-2">
                voor heel Nederland
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
              IB Security biedt 24/7 betrouwbare beveiligingsdiensten voor
              bedrijven, zorginstellingen en evenementen. Met meer dan 15 jaar
              ervaring zijn wij uw vertrouwde partner voor alle
              beveiligingsbehoeften.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
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
                className="border-white text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm bg-white/10"
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Direct Contact
                </Link>
              </Button>
            </div>

            {/* Quick Stats in Hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Klanten</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-blue-200">Jaar</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold">99.8%</div>
                <div className="text-sm text-blue-200">Succes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Waarom IB Security
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Uw vertrouwde
              <span className="text-blue-600"> beveiligingspartner</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij onderscheiden ons door kwaliteit, betrouwbaarheid en een
              persoonlijke aanpak die past bij uw specifieke behoeften.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="pt-8 pb-6">
                  <div
                    className={`mx-auto w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8" />
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

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className={
              'absolute top-0 left-0 w-full h-full bg-[url(\'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.1"%3E%3Cpath d="m0 40 40-40V0H0v40Z"/%3E%3C/g%3E%3C/svg%3E\')]'
            }
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bewezen resultaten in cijfers
            </h2>
            <p className="text-xl text-blue-100">
              Deze cijfers spreken voor zich en tonen ons commitment aan
              excellentie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group-hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-white">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold mb-2 text-blue-100">
                    {stat.label}
                  </div>
                  <p className="text-blue-200 text-sm">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-base px-4 py-2">
              🔐 Onze Specialiteiten
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete
              <span className="text-blue-600"> Beveiligingsoplossingen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Van objectbeveiliging tot zorgbeveiliging - wij bieden een breed
              scala aan professionele beveiligingsdiensten, elk afgestemd op uw
              unieke behoeften.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 shadow-lg overflow-hidden"
              >
                <Link to={service.href} className="block h-full">
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-md">
                          <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors mb-2">
                            {service.title}
                          </CardTitle>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {service.description}
                      </p>
                      <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                        Meer informatie →
                      </div>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Link to="/diensten">
                <Shield className="mr-2 h-5 w-5" />
                Alle Diensten Bekijken
              </Link>
            </Button>
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
