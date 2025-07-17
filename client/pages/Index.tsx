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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professionele Beveiliging
              <span className="block text-blue-200">voor Nederland</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              IB Security biedt betrouwbare beveiligingsdiensten voor bedrijven,
              zorginstellingen en evenementen. Uw veiligheid is onze prioriteit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50"
              >
                <Link to="/offerte-opvragen">Gratis Offerte Opvragen</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Direct Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor IB Security?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wij onderscheiden ons door kwaliteit, betrouwbaarheid en een
              persoonlijke aanpak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Onze Diensten
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Beveiligingsoplossingen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Van objectbeveiliging tot zorgbeveiliging - wij bieden een breed
              scala aan professionele beveiligingsdiensten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Link to={service.href} className="block">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <service.icon className="w-5 h-5 text-blue-600 group-hover:text-white" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/diensten">Alle Diensten Bekijken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om uw beveiliging te verbeteren?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op voor een vrijblijvende offerte
            en ontdek hoe IB Security u kan helpen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Link to="/offerte-opvragen">Offerte Opvragen</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <a href="tel:+31881234567">
                <Phone className="mr-2 h-4 w-4" />
                088 123 4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="mx-auto w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Bel Direct</h3>
                <p className="text-gray-600 mb-2">
                  24/7 bereikbaar voor noodgevallen
                </p>
                <a
                  href="tel:+31881234567"
                  className="text-blue-600 hover:underline font-medium"
                >
                  088 123 4567
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Mail className="mx-auto w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">E-mail Contact</h3>
                <p className="text-gray-600 mb-2">Stuur ons een bericht</p>
                <a
                  href="mailto:info@ib-security.nl"
                  className="text-blue-600 hover:underline font-medium"
                >
                  info@ib-security.nl
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="mx-auto w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Gratis Offerte</h3>
                <p className="text-gray-600 mb-4">
                  Vraag een vrijblijvende offerte aan
                </p>
                <Button asChild variant="outline">
                  <Link to="/offerte-opvragen">Offerte Aanvragen</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
