import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Calculator,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Building,
  Phone,
  Mail,
  FileText,
  Target,
  Award,
  Zap,
  Calendar,
  MapPin,
  Euro,
  TrendingUp,
} from "lucide-react";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const serviceOptions = [
  {
    id: "object",
    name: "Objectbeveiliging",
    description: "24/7 beveiliging van uw bedrijfspand",
  },
  {
    id: "receptie",
    name: "Receptie beveiliging",
    description: "Professionele receptie met beveiligingstaak",
  },
  {
    id: "evenement",
    name: "Evenementenbeveiliging",
    description: "Veilige en succesvolle evenementen",
  },
  {
    id: "alarm",
    name: "Alarmopvolging",
    description: "24/7 monitoring en alarmopvolging",
  },
  {
    id: "mobiel",
    name: "Mobiele Surveillance",
    description: "Flexibele rondes en controles",
  },
  {
    id: "zorg",
    name: "Zorgbeveiliging",
    description: "Gespecialiseerde zorgbeveiliging",
  },
  {
    id: "ggz",
    name: "GGZ Beveiliging",
    description: "Empathische GGZ-beveiliging",
  },
  {
    id: "uitzend",
    name: "Uitzendbureau beveiliging",
    description: "Tijdelijk beveiligingspersoneel",
  },
];

const quoteBenefits = [
  {
    icon: CheckCircle,
    title: "100% Vrijblijvend",
    description: "Geen verplichtingen, volledig gratis advies",
  },
  {
    icon: Clock,
    title: "Binnen 24 uur",
    description: "Snelle reactie en uitgebreide offerte",
  },
  {
    icon: Target,
    title: "Op Maat Gemaakt",
    description: "Persoonlijk advies voor uw situatie",
  },
  {
    icon: Euro,
    title: "Transparante Prijzen",
    description: "Geen verborgen kosten, alles duidelijk",
  },
];

export default function OfferteOpvragen() {
  useScrollAnimationMultiple();
  const [formData, setFormData] = useState({
    // Personal info
    name: "",
    email: "",
    phone: "",
    company: "",

    // Project details
    services: [] as string[],
    location: "",
    startDate: "",
    duration: "",
    hours: "",
    employees: "",

    // Specific requirements
    requirements: "",
    budget: "",
    urgency: "",

    // Additional
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    alert(
      "Bedankt voor uw offerte aanvraag! Wij nemen binnen 24 uur contact met u op met een gedetailleerde offerte.",
    );
  };

  const handleInputChange = (
    field: string,
    value: string | boolean | string[],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:80px_80px] animate-pulse opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <Badge className="mb-8 text-lg px-8 py-4 font-black bg-gradient-to-r from-green-400 to-yellow-500 text-black shadow-xl">
              <Calculator className="mr-3 h-6 w-6" />
              100% VRIJBLIJVEND
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl font-black mb-8 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                GRATIS
              </span>
              <span className="block text-4xl md:text-6xl mt-4 text-green-300 font-heavy">
                OFFERTE
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-medium max-w-4xl mx-auto leading-relaxed">
              Krijg binnen 24 uur een{" "}
              <span className="font-bold text-white">persoonlijke offerte</span>
              op maat voor uw beveiligingsbehoeften.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-yellow-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quoteBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge className="mb-6 bg-blue-600 text-white px-6 py-3 text-lg font-bold">
              Offerte Formulier
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Vertel Ons Over
              <span className="block text-blue-600">Uw Behoeften</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoe meer details u ons geeft, hoe nauwkeuriger wij uw offerte
              kunnen maken.
            </p>
          </div>

          <Card className="shadow-4xl border-0 animate-on-scroll">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Users className="mr-3 h-6 w-6 text-blue-600" />
                    Uw Gegevens
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        Volledige Naam *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="border-2 border-gray-200 focus:border-blue-500 text-lg py-4"
                        placeholder="Voor- en achternaam"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        E-mailadres *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="border-2 border-gray-200 focus:border-blue-500 text-lg py-4"
                        placeholder="uw.email@bedrijf.nl"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        Telefoonnummer *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="border-2 border-gray-200 focus:border-blue-500 text-lg py-4"
                        placeholder="+31 6 12 34 56 78"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        Bedrijfsnaam *
                      </Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="border-2 border-gray-200 focus:border-blue-500 text-lg py-4"
                        placeholder="Uw bedrijfsnaam"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-blue-600" />
                    Gewenste Diensten
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceOptions.map((service) => (
                      <Card
                        key={service.id}
                        className={`cursor-pointer transition-all duration-300 border-2 ${
                          formData.services.includes(service.id)
                            ? "border-blue-500 bg-blue-50 shadow-lg"
                            : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                        }`}
                        onClick={() => handleServiceToggle(service.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Checkbox
                              checked={formData.services.includes(service.id)}
                              onCheckedChange={() =>
                                handleServiceToggle(service.id)
                              }
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-gray-900 mb-1">
                                {service.name}
                              </h4>
                              <p className="text-gray-600 text-sm mb-2">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Building className="mr-3 h-6 w-6 text-blue-600" />
                    Project Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="location"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        Locatie/Adres *
                      </Label>
                      <Input
                        id="location"
                        required
                        value={formData.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        className="border-2 border-gray-200 focus:border-blue-500 text-lg py-4"
                        placeholder="Stad of volledige adres"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="startDate"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        Gewenste Startdatum
                      </Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) =>
                          handleInputChange("startDate", e.target.value)
                        }
                        className="border-2 border-gray-200 focus:border-blue-500 text-lg py-4"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="duration"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        Duur van de Opdracht
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("duration", value)
                        }
                      >
                        <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 text-lg py-4">
                          <SelectValue placeholder="Selecteer duur" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dag">1 dag</SelectItem>
                          <SelectItem value="week">1 week</SelectItem>
                          <SelectItem value="maand">1 maand</SelectItem>
                          <SelectItem value="kwartaal">3 maanden</SelectItem>
                          <SelectItem value="halfjaar">6 maanden</SelectItem>
                          <SelectItem value="jaar">1 jaar</SelectItem>
                          <SelectItem value="langdurig">
                            Langdurig (meer dan 1 jaar)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label
                        htmlFor="hours"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        Uren per Dag/Week
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("hours", value)
                        }
                      >
                        <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 text-lg py-4">
                          <SelectValue placeholder="Selecteer uren" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8">8 uur (dagdienst)</SelectItem>
                          <SelectItem value="12">
                            12 uur (uitgebreide dienst)
                          </SelectItem>
                          <SelectItem value="24">24 uur (24/7)</SelectItem>
                          <SelectItem value="variabel">Variabel</SelectItem>
                          <SelectItem value="evenement">
                            Per evenement
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Budget & Requirements */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Euro className="mr-3 h-6 w-6 text-blue-600" />
                    Budget & Specifieke Wensen
                  </h3>
                  <div className="mb-6">
                    <div>
                      <Label
                        htmlFor="urgency"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        Urgentie
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("urgency", value)
                        }
                      >
                        <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 text-lg py-4">
                          <SelectValue placeholder="Hoe urgent?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spoed">
                            🚨 Zeer urgent (vandaag)
                          </SelectItem>
                          <SelectItem value="snel">
                            ⚡ Snel (deze week)
                          </SelectItem>
                          <SelectItem value="normaal">
                            📅 Normaal (deze maand)
                          </SelectItem>
                          <SelectItem value="planning">
                            💭 Planning (over meer dan 1 maand)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="requirements"
                      className="text-sm font-bold text-gray-700 mb-2 block"
                    >
                      Specifieke Eisen & Wensen
                    </Label>
                    <Textarea
                      id="requirements"
                      value={formData.requirements}
                      onChange={(e) =>
                        handleInputChange("requirements", e.target.value)
                      }
                      className="border-2 border-gray-200 focus:border-blue-500 text-lg min-h-32"
                      placeholder="Beschrijf specifieke beveiligingseisen, gewenste certificeringen, speciale omstandigheden, etc..."
                    />
                  </div>
                </div>

                {/* Newsletter */}
                <div className="flex items-center space-x-3 p-6 bg-blue-50 rounded-lg">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      handleInputChange("newsletter", checked as boolean)
                    }
                  />
                  <Label htmlFor="newsletter" className="text-sm text-gray-700">
                    Ja, ik wil graag de IB Security nieuwsbrief ontvangen met
                    beveiligingstips en updates
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 text-white shadow-4xl text-2xl px-16 py-8 font-black transform hover:scale-105 transition-all duration-300"
                  >
                    <Calculator className="mr-4 h-8 w-8" />
                    ONTVANG MIJN GRATIS OFFERTE
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    🔒 Uw gegevens worden vertrouwelijk behandeld en niet
                    gedeeld met derden
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Wat Gebeurt Er
              <span className="block text-blue-600">Hierna?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-black text-2xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Binnen 24 uur
                </h3>
                <p className="text-gray-600">
                  Wij nemen persoonlijk contact met u op om uw aanvraag te
                  bespreken en eventuele vragen te stellen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-black text-2xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Persoonlijk Advies
                </h3>
                <p className="text-gray-600">
                  Een beveiligingsexpert bezoekt uw locatie voor een gratis
                  veiligheidsanalyse en advies op maat.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-on-scroll-scale">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-black text-2xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Gedetailleerde Offerte
                </h3>
                <p className="text-gray-600">
                  U ontvangt een transparante offerte met alle details, kosten
                  en een voorstel voor de beste beveiligingsoplossing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
