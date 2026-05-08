'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: MapPin, label: "Dirección", value: "C. del Cabo Guardia Civil Pedro Moreno Pérez, 41, 30007 Murcia, España" },
  { icon: Phone, label: "Teléfono", value: "+34 611 240 701" },
  { icon: Mail, label: "Email", value: "ventas@tensomembranasiberia.es" },
  { icon: Clock, label: "Horario", value: "Lunes a Viernes, 9:00 - 18:00" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
              Hablemos de su proyecto
            </h1>
            <p className="mt-6 text-lg opacity-60 leading-relaxed max-w-xl">
              Estamos listos para ayudarle a hacer realidad su próximo proyecto. Solicite un presupuesto sin compromiso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Mensaje enviado</h2>
                  <p className="mt-3 text-muted-foreground max-w-md">
                    Gracias por contactarnos. Nuestro equipo le responderá en un plazo de 24 horas laborables.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" placeholder="Su nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" placeholder="Nombre de empresa" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@empresa.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="+34 600 000 000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo de proyecto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tipo de proyecto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cubierta">Cubierta tensada</SelectItem>
                        <SelectItem value="domo">Domo geodésico</SelectItem>
                        <SelectItem value="etfe">Cubierta ETFE</SelectItem>
                        <SelectItem value="retractil">Cubierta retráctil</SelectItem>
                        <SelectItem value="fachada">Fachada textil</SelectItem>
                        <SelectItem value="velaria">Velaria</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Describa su proyecto, ubicación, superficie aproximada..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                    <Send className="w-4 h-4 mr-2" /> Enviar mensaje
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-muted/50 rounded-lg p-8 border border-border">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-8">
                  Información de contacto
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        <p className="mt-1 text-sm text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}