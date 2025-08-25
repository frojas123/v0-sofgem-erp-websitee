import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, FileText, HeadphonesIcon, BookOpen, Star, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/sofgem-logo.png" alt="Sofgem Ltda Logo" width={32} height={32} className="rounded" />
            <span className="font-serif font-bold text-2xl text-primary">Sofgem Ltda</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/documentacion" className="text-sm font-medium hover:text-primary transition-colors">
              Documentación
            </Link>
            <Link href="/precios" className="text-sm font-medium hover:text-primary transition-colors">
              Precios
            </Link>
            <Link href="/onboarding" className="text-sm font-medium hover:text-primary transition-colors">
              Cómo Empezar
            </Link>
            <Link href="/soporte" className="text-sm font-medium hover:text-primary transition-colors">
              Soporte
            </Link>
            <Link href="/portal-clientes" className="text-sm font-medium hover:text-primary transition-colors">
              Portal Clientes
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Iniciar Sesión
            </Button>
            <Button size="sm">Solicitar Demo</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                Líder en Facturación Electrónica
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Denarium ERP - Sistema Integral con Facturación Electrónica
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Centraliza toda la información de tu empresa con Denarium, nuestro sistema ERP completo para Windows.
                Incluye app móvil offline para pedidos en terreno, facturación electrónica certificada y gestión
                integral.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8">
                  Comenzar Ahora
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Ver Demo en Vivo
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/denarium-dashboard.png"
                alt="Sistema Denarium ERP - Dashboard Principal"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Uptime Garantizado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Empresas que confían en Sofgem</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "Empresa Constructora ABC",
              "Retail Solutions SA",
              "Manufacturas del Sur",
              "Servicios Integrales Ltda",
              "Comercial Norte",
              "Distribuidora Central",
            ].map((company, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/generic-company-logo.png?key=8wr2g&height=60&width=120&query=company logo ${company}`}
                  alt={`Logo ${company}`}
                  width={120}
                  height={60}
                  className="mx-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="servicios" className="py-20 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Todo lo que necesitas en una sola plataforma
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desde onboarding hasta soporte continuo, te acompañamos en cada paso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Facturación Electrónica</CardTitle>
                <CardDescription>
                  Sistema certificado para facturación electrónica con cumplimiento normativo completo del SII
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>App Móvil Offline</CardTitle>
                <CardDescription>
                  App de pedidos en terreno que funciona sin conexión. Ver stock, precios, productos y crear pedidos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Gestión de Clientes</CardTitle>
                <CardDescription>
                  Portal diferenciado para clientes existentes y prospectos con acceso personalizado
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Certificación SII</CardTitle>
                <CardDescription>
                  Proceso completo de certificación del SII para documentos electrónicos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Capacitaciones</CardTitle>
                <CardDescription>
                  Programas de capacitación completos con manuales y políticas actualizadas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Soporte Gratuito</CardTitle>
                <CardDescription>
                  Soporte técnico gratuito L-V 9:00-13:00, Sáb 9:00-14:00. Te acompañamos antes, durante y después
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Conoce Denarium en acción</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interfaz intuitiva y funcionalidades completas para gestionar tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Image
                src="/denarium-factura-electronica.png"
                alt="Módulo de Facturación Electrónica Denarium"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <h3 className="font-serif text-xl font-semibold">Facturación Electrónica</h3>
              <p className="text-muted-foreground">
                Genera facturas, boletas y documentos tributarios con certificación SII
              </p>
            </div>

            <div className="space-y-4">
              <Image
                src="/denarium-reportes-detallados.png"
                alt="Reportes Detallados Denarium"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <h3 className="font-serif text-xl font-semibold">Reportes Detallados</h3>
              <p className="text-muted-foreground">Informes completos de ventas, utilidades y documentos emitidos</p>
            </div>

            <div className="space-y-4">
              <Image
                src="/denarium-utilidad-grafico.png"
                alt="Análisis de Utilidades Denarium"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <h3 className="font-serif text-xl font-semibold">Análisis de Utilidades</h3>
              <p className="text-muted-foreground">Gráficos y análisis detallados de rentabilidad por período</p>
            </div>

            <div className="space-y-4">
              <Image
                src="/denarium-dashboard.png"
                alt="Dashboard Principal Denarium"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <h3 className="font-serif text-xl font-semibold">Dashboard Integral</h3>
              <p className="text-muted-foreground">
                Vista completa de todos los módulos: ventas, inventario, contabilidad, finanzas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-muted-foreground">
              Testimonios reales de empresas que transformaron sus procesos con Denarium
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardDescription className="text-base italic mb-6">
                  "Implementar Denarium fue la mejor decisión para nuestra empresa. La facturación electrónica funciona
                  perfectamente y el soporte técnico es excepcional. Redujimos los tiempos de facturación en un 70%."
                </CardDescription>
                <div className="flex items-center justify-center space-x-4">
                  <Image src="/avatar-1.png" alt="María González" width={50} height={50} className="rounded-full" />
                  <div className="text-left">
                    <CardTitle className="text-sm">María González</CardTitle>
                    <p className="text-xs text-muted-foreground">Gerente General, Constructora ABC</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardDescription className="text-base italic mb-6">
                  "El proceso de certificación con el SII fue muy sencillo gracias al equipo de Denarium. Nos guiaron
                  paso a paso y ahora tenemos toda nuestra facturación electrónica funcionando sin problemas."
                </CardDescription>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src="/professional-businessman-headshot.png"
                    alt="Carlos Mendoza"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <CardTitle className="text-sm">Carlos Mendoza</CardTitle>
                    <p className="text-xs text-muted-foreground">Director Financiero, Retail Solutions</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardDescription className="text-base italic mb-6">
                  "Llevamos 3 años usando Denarium y no podríamos estar más satisfechos. La integración entre todos los
                  módulos es perfecta y las capacitaciones del equipo fueron muy completas. Altamente recomendado."
                </CardDescription>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src="/professional-business-woman-headshot.png"
                    alt="Ana Rodríguez"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <CardTitle className="text-sm">Ana Rodríguez</CardTitle>
                    <p className="text-xs text-muted-foreground">Administradora, Manufacturas del Sur</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Empresas Certificadas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime Garantizado</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">L-S</div>
              <p className="text-muted-foreground">Soporte Gratuito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Cómo empezar con Denarium</h2>
            <p className="text-xl text-muted-foreground">
              Proceso simple y transparente para implementar tu sistema ERP
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Evaluación Inicial",
                description: "Analizamos tus requisitos técnicos Windows y necesidades específicas",
              },
              {
                step: "2",
                title: "Instalación y Configuración",
                description: "Instalamos Denarium en tus equipos Windows y configuramos según tus procesos",
              },
              {
                step: "3",
                title: "Certificación SII",
                description: "Te acompañamos en todo el proceso de certificación para facturación electrónica",
              },
              {
                step: "4",
                title: "Soporte Continuo",
                description: "Acompañamiento permanente gratuito para que crezcas con el sistema",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar tu empresa?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a cientos de empresas que ya confían en nuestro sistema ERP Denarium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Solicitar Cotización
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/sofgem-logo.png" alt="Sofgem Ltda Logo" width={32} height={32} className="rounded" />
                <span className="font-serif font-bold text-xl text-primary">Sofgem Ltda</span>
              </div>
              <p className="text-muted-foreground">
                Soluciones ERP integrales con más de 10 años de experiencia en el mercado.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Sistema Denarium ERP
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Facturación Electrónica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    App Móvil Offline
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Certificación SII
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/portal-clientes" className="hover:text-primary transition-colors">
                    Portal de Clientes
                  </Link>
                </li>
                <li>
                  <Link href="/documentacion" className="hover:text-primary transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="/documentacion" className="hover:text-primary transition-colors">
                    Manuales
                  </Link>
                </li>
                <li>
                  <Link href="/soporte" className="hover:text-primary transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Políticas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Sofgem Ltda. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
