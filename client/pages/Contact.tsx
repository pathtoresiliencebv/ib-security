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
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Users,
  Building,
  Calendar,
} from "lucide-react";
import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const contactMethods = [
  {
    icon: Phone,
    title: "Telefoon",
    description: "24/7 bereikbaar voor noodgevallen",
    value: "+31 (0)88 123 4567",
    action: "tel:+31881234567",
    color: "from-green-500 to-green-600",
    urgency: "Direct contact",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Reactie binnen 24 uur gegarandeerd",
    value: "info@ib-security.nl",
    action: "mailto:info@ib-security.nl",
    color: "from-blue-500 to-blue-600",
    urgency: "1 werkdag",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    description: "Snelle communicatie via chat",
    value: "+31 6 12 34 56 78",
    action: "https://wa.me/31612345678",
    color: "from-green-400 to-green-500",
    urgency: "Binnen enkele uren",
  },
];

const locations = [
  {
    city: "Amsterdam",
    address: "Hoofdkantoor",
    details: "Businesspark Amsterdam",
    phone: "+31 (0)20 123 4567",
  },
  {
    city: "Rotterdam",
    address: "Regionaal kantoor",
    details: "Maasstad Plaza",
    phone: "+31 (0)10 123 4567",
  },
  {
    city: "Den Haag",
    address: "Regionaal kantoor",
    details: "Haagse Beemden",
    phone: "+31 (0)70 123 4567",
  },
  {
    city: "Utrecht",
    address: "Regionaal kantoor",
    details: "De Meern Business Park",
    phone: "+31 (0)30 123 4567",
  },
];

const serviceTypes = [
  "Objectbeveiliging",
  "Receptie beveiliging",
  "Evenementenbeveiliging",
  "Alarmopvolging",
  "Mobiele Surveillance",
  "Zorgbeveiliging",
  "GGZ Beveiliging",
  "Uitzendbureau beveiliging",
  "Anders / Maatwerk",
];

export default function Contact() {
  useScrollAnimationMultiple();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    urgency: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Bedankt voor uw bericht! Wij nemen binnen 24 uur contact met u op.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
            <Badge className="mb-8 text-lg px-8 py-4 font-black bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-xl">
              <MessageCircle className="mr-3 h-6 w-6" />
              24/7 BEREIKBAAR
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl font-black mb-8 text-shadow-xl">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                CONTACT
              </span>
              <span className="block text-4xl md:text-6xl mt-4 text-blue-300 font-heavy">
                OPNEMEN
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-medium max-w-4xl mx-auto leading-relaxed">
              Heeft u vragen over onze beveiligingsdiensten?
              <span className="font-bold text-white">
                {" "}
                Wij staan voor u klaar!
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-6 bg-blue-600 text-white px-6 py-3 text-lg font-bold">
              Directe Communicatie
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Neem Direct
              <span className="block text-blue-600">Contact Op</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg animate-on-scroll-scale"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${method.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <method.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a
                    href={method.action}
                    className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors block mb-3"
                  >
                    {method.value}
                  </a>
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    {method.urgency}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-on-scroll-left">
              <Badge className="mb-6 bg-purple-600 text-white px-6 py-3 text-lg font-bold">
                Contactformulier
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Stuur Ons Een
                <span className="block text-purple-600">Bericht</span>
              </h2>

              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                          className="border-2 border-gray-200 focus:border-blue-500 text-lg py-3"
                          placeholder="Uw voor- en achternaam"
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
                          className="border-2 border-gray-200 focus:border-blue-500 text-lg py-3"
                          placeholder="uw.email@bedrijf.nl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-sm font-bold text-gray-700 mb-2 block"
                        >
                          Telefoonnummer
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="border-2 border-gray-200 focus:border-blue-500 text-lg py-3"
                          placeholder="+31 6 12 34 56 78"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="company"
                          className="text-sm font-bold text-gray-700 mb-2 block"
                        >
                          Bedrijfsnaam
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="border-2 border-gray-200 focus:border-blue-500 text-lg py-3"
                          placeholder="Uw bedrijfsnaam"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="service"
                          className="text-sm font-bold text-gray-700 mb-2 block"
                        >
                          Type Beveiliging
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 text-lg py-3">
                            <SelectValue placeholder="Kies een dienst" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
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
                          <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 text-lg py-3">
                            <SelectValue placeholder="Hoe urgent?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="spoed">
                              🚨 Spoed (binnen 24 uur)
                            </SelectItem>
                            <SelectItem value="week">📅 Deze week</SelectItem>
                            <SelectItem value="maand">📆 Deze maand</SelectItem>
                            <SelectItem value="planning">
                              💭 Oriëntatie/Planning
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-bold text-gray-700 mb-2 block"
                      >
                        Uw Bericht *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="border-2 border-gray-200 focus:border-blue-500 text-lg min-h-32"
                        placeholder="Beschrijf uw beveiligingsbehoeften, specifieke wensen, of vragen..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl text-xl py-6 font-bold transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="mr-3 h-6 w-6" />
                      VERSTUUR BERICHT
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Company Info & Locations */}
            <div className="animate-on-scroll-right">
              <Badge className="mb-6 bg-green-600 text-white px-6 py-3 text-lg font-bold">
                Onze Locaties
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Landelijk
                <span className="block text-green-600">Vertegenwoordigd</span>
              </h2>

              <div className="space-y-6 mb-12">
                {locations.map((location, index) => (
                  <Card
                    key={index}
                    className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {location.city}
                          </h3>
                          <p className="text-gray-600 mb-1">
                            {location.address}
                          </p>
                          <p className="text-gray-500 text-sm mb-2">
                            {location.details}
                          </p>
                          <a
                            href={`tel:${location.phone.replace(/\s/g, "")}`}
                            className="text-green-600 font-medium hover:text-green-700"
                          >
                            {location.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="shadow-xl border-2 border-red-200 bg-red-50">
                <CardContent className="p-8 text-center">
                  <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-900 mb-3">
                    Noodlijn 24/7
                  </h3>
                  <p className="text-red-700 mb-4">
                    Voor acute beveiligingssituaties
                  </p>
                  <a
                    href="tel:+31612345678"
                    className="text-3xl font-black text-red-600 hover:text-red-700 transition-colors"
                  >
                    +31 6 12 34 56 78
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Waarom Contact Opnemen
              <span className="block text-blue-600">Met IB Security?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg animate-on-scroll-scale">
              <CardContent className="p-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Gratis Advies
                </h3>
                <p className="text-gray-600">
                  Vrijblijvend beveiligingsadvies op maat voor uw situatie
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg animate-on-scroll-scale">
              <CardContent className="p-8">
                <Clock className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Snelle Reactie
                </h3>
                <p className="text-gray-600">
                  Binnen 24 uur persoonlijk contact voor uw vraag
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg animate-on-scroll-scale">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Persoonlijke Aanpak
                </h3>
                <p className="text-gray-600">
                  Elk beveiligingsplan volledig afgestemd op uw behoeften
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
