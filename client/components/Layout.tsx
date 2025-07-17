import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin, Shield } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Over IB Security", href: "/over-ibsecurity" },
  {
    name: "Diensten",
    href: "/diensten",
    submenu: [
      {
        name: "Uitzendbureau beveiliging",
        href: "/diensten/uitzendbureau-beveiliging",
      },
      { name: "Receptie beveiliging", href: "/diensten/receptie-beveiliging" },
      {
        name: "Evenementenbeveiliging",
        href: "/diensten/evenementenbeveiliging",
      },
      { name: "Alarmopvolging", href: "/diensten/alarmopvolging" },
      { name: "Mobiele Surveillance", href: "/diensten/mobiele-surveillance" },
      { name: "Objectbeveiliging", href: "/diensten/objectbeveiliging" },
      { name: "Zorgondersteuning", href: "/diensten/zorgondersteuning" },
      {
        name: "Beveiligingsopvanglocatie",
        href: "/diensten/beveiligingsopvanglocatie",
      },
      { name: "GGZ Beveiliging", href: "/diensten/ggz-beveiliging" },
      { name: "Zorgbeveiliging", href: "/diensten/zorgbeveiliging" },
    ],
  },
  { name: "Contact", href: "/contact" },
  { name: "Offerte opvragen", href: "/offerte-opvragen" },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F18e64066d3874f39ae16c8e50727ae4d%2F03446dedafa7410c8db314002c1a0664?format=webp&width=800"
                alt="IB Security"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                      location.pathname === item.href
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.href}
                              className="block text-sm text-gray-600 hover:text-blue-600"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Logo Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Erkende Kwaliteit & Certificeringen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              IB Security is gecertificeerd en erkend door de meest
              vooraanstaande instanties in de beveiligingsbranche
            </p>
          </div>
          <div className="flex justify-center items-center space-x-12 md:space-x-20">
            <div className="flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F18e64066d3874f39ae16c8e50727ae4d%2Fa9ed7ea673354e5cbce2bba0c7ca862a?format=webp&width=800"
                alt="Erkend leerbedrijf - Wij leiden vakmensen op"
                className="h-20 md:h-24 w-auto object-contain filter hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F18e64066d3874f39ae16c8e50727ae4d%2F0946bd263c3b477eb4dbe300dc0006b7?format=webp&width=800"
                alt="Beveiligingscertificering"
                className="h-20 md:h-24 w-auto object-contain filter hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F18e64066d3874f39ae16c8e50727ae4d%2F788e4f5624204391b7602ede98f7fee8?format=webp&width=800"
                alt="Justitie certificering"
                className="h-20 md:h-24 w-auto object-contain filter hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F18e64066d3874f39ae16c8e50727ae4d%2F03446dedafa7410c8db314002c1a0664?format=webp&width=800"
                  alt="IB Security"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Professionele beveiligingsdiensten voor Nederland. Wij zorgen
                voor uw veiligheid met betrouwbare en deskundige beveiliging.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Kroevenlaan 31, 4707 BJ Roosendaal</span>
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400 font-semibold">
                    Open 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <a
                    href="tel:0854013192"
                    className="hover:text-white transition-colors"
                  >
                    085 401 31 92
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:info@ib-security.nl"
                    className="hover:text-white transition-colors"
                  >
                    info@ib-security.nl
                  </a>
                </div>
                <div className="text-gray-400">
                  <a
                    href="https://ib-security.nl"
                    className="hover:text-white transition-colors"
                  >
                    ib-security.nl
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Snelle links</h3>
              <div className="space-y-2">
                <Link
                  to="/over-ibsecurity"
                  className="block text-gray-400 hover:text-white"
                >
                  Over IB Security
                </Link>
                <Link
                  to="/diensten"
                  className="block text-gray-400 hover:text-white"
                >
                  Onze Diensten
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  to="/offerte-opvragen"
                  className="block text-gray-400 hover:text-white"
                >
                  Offerte opvragen
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IB Security. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
