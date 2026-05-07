import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  productos: [
    { label: "Membranas Tensadas", href: "/productos/membranas-tensadas" },
    { label: "Domos Geodésicos", href: "/productos/domos-geodesicos" },
    { label: "Cubiertas ETFE", href: "/productos/cubiertas-etfe" },
    { label: "Cubiertas Retráctiles", href: "/productos/cubiertas-retractiles" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none">
                  Tensomembranas
                </span>
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase leading-none mt-0.5 opacity-60">
                  Ibero
                </span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Líderes en diseño, ingeniería y construcción de estructuras tensadas y cubiertas ligeras en la Península Ibérica.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 opacity-40">
              Productos
            </h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 opacity-40">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 opacity-40">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 opacity-50 shrink-0" />
                <span className="text-sm opacity-70">
                  Calle Industria 42, 28001 Madrid, España
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-50 shrink-0" />
                <span className="text-sm opacity-70">+34 91 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-50 shrink-0" />
                <span className="text-sm opacity-70">info@tensomembranas.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} Tensomembranas Ibero. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-xs opacity-40 hover:opacity-70 transition-opacity cursor-pointer">
              Política de Privacidad
            </span>
            <span className="text-xs opacity-40 hover:opacity-70 transition-opacity cursor-pointer">
              Aviso Legal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}