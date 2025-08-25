import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Check,
  Star,
  Users,
  FileText,
  Shield,
  Headphones,
  Zap,
  Building,
  Calculator,
  CreditCard,
  Clock,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/sofgem-logo.png" alt="Sofgem Ltda Logo" width={32} height={32} className="rounded" />
              <span className="font-serif font-bold text-xl text-primary">Sofgem Ltda</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/portal-clientes" className="text-sm font-medium hover:text-primary transition-colors">
              Portal Clientes
            </Link>
            <Link href="/documentacion" className="text-sm font-medium hover:text-primary transition-colors">
              Documentación
            </Link>
            <Link href="#precios" className="text-sm font-medium text-primary">
              Precios
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
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Precios en UF (Unidad de Fomento)
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Software y Servicios Denarium</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Precios transparentes para nuestro sistema ERP Denarium y servicios especializados. Todos los precios
            incluyen soporte gratuito en horario comercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Comenzar Ahora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Hablar con Ventas
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <Tabs defaultValue="software" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="servicios">Servicios</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="software">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Denarium */}
                <Card className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Denarium</CardTitle>
                        <CardDescription>E-commerce</CardDescription>
                      </div>
                      <Building className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">0,5 UF</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Panel de Control Autónomo</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Páginas Autoadministrables</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Formulario de Contacto</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Productos Destacados</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Pago en Línea</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Configuración de Hosting y Dominio</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Soporte incluido en el servicio</span>
                      </div>
                      <div className="flex items-center space-x-2 text-orange-600">
                        <span className="text-sm font-medium">Requiere Licencia de DenariumERP</span>
                      </div>
                    </div>
                    <Button className="w-full">Solicitar Ahora</Button>
                  </CardContent>
                </Card>

                {/* DenariumERP */}
                <Card className="relative border-primary shadow-lg">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Más Popular
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">DenariumERP</CardTitle>
                        <CardDescription>Sistema ERP Completo</CardDescription>
                      </div>
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">0,5 UF</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Documentos Electrónicos (Facturas/Boletas/Notas de Crédito)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Punto de Venta</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Gestión de Clientes y Proveedores</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Gestión de Bodegas e Inventarios</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Múltiples Empresas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Múltiples Sucursales por Empresa</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Múltiples Usuarios</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Reportes de Gestión: Existencias, Costos, Utilidades</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">5 años de información siempre disponible</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Soporte incluido en el servicio</span>
                      </div>
                    </div>
                    <Button className="w-full">Solicitar Ahora</Button>
                  </CardContent>
                </Card>

                {/* PedidosAPP */}
                <Card className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">PedidosAPP</CardTitle>
                        <CardDescription>APP Android para Pedidos</CardDescription>
                      </div>
                      <Smartphone className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">0,2 UF</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">APP Android</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Realizar Pedidos de Forma Remota</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Funciona en Modo Offline</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Ver Stock y Precios</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Gestión de Productos y Clientes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Soporte incluido en el servicio</span>
                      </div>
                      <div className="flex items-center space-x-2 text-orange-600">
                        <span className="text-sm font-medium">Requiere Licencia de DenariumERP</span>
                      </div>
                    </div>
                    <Button className="w-full">Solicitar Ahora</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="servicios">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Certificación de Facturas */}
                <Card className="relative border-primary shadow-lg">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Certificación SII</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Certificación de Facturas</CardTitle>
                        <CardDescription>Certificación por Razón Social</CardDescription>
                      </div>
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">2,5 UF</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Certificación por Razón Social</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Factura</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Notas de Crédito</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Notas de Débito</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Guías de Despacho</span>
                      </div>
                    </div>
                    <Button className="w-full">Solicitar Certificación</Button>
                  </CardContent>
                </Card>

                {/* Cesión de Documentos */}
                <Card className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Cesión de Documentos</CardTitle>
                        <CardDescription>Valor por documento cedido</CardDescription>
                      </div>
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">0,01 UF</span>
                      <div className="text-sm text-muted-foreground">por documento</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Cesión de documentos electrónicos</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Proceso automatizado</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Soporte incluido</span>
                      </div>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline">
                      Más Información
                    </Button>
                  </CardContent>
                </Card>

                {/* Emisión de DTE */}
                <Card className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Emisión de DTE</CardTitle>
                        <CardDescription>Valor por documento emitido</CardDescription>
                      </div>
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">0,001 UF</span>
                      <div className="text-sm text-muted-foreground">por documento</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Valor por documento emitido</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Facturación al final del período</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Soporte incluido</span>
                      </div>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline">
                      Más Información
                    </Button>
                  </CardContent>
                </Card>

                {/* Emisión de Boleta */}
                <Card className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Emisión de Boleta</CardTitle>
                        <CardDescription>Valor por documento emitido</CardDescription>
                      </div>
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">0,0001 UF</span>
                      <div className="text-sm text-muted-foreground">por documento</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Valor por documento emitido</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Facturación al final del período</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Soporte incluido</span>
                      </div>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline">
                      Más Información
                    </Button>
                  </CardContent>
                </Card>

                {/* Instalación de Impresoras */}
                <Card className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Instalación de Impresoras</CardTitle>
                        <CardDescription>Instalación por impresora</CardDescription>
                      </div>
                      <Calculator className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">0,5 UF</span>
                      <div className="text-sm text-muted-foreground">por impresora</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Instalación por impresora</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Configuración completa</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Pruebas de funcionamiento</span>
                      </div>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline">
                      Solicitar Instalación
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Soporte Incluido</h2>
            <p className="text-xl text-muted-foreground">Soporte gratuito para ayudarte a crecer con nuestro sistema</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Horarios de Atención</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Lunes a Viernes</p>
                  <p className="text-muted-foreground">9:00 - 13:00 hrs</p>
                  <p className="font-semibold">Sábados</p>
                  <p className="text-muted-foreground">9:00 - 14:00 hrs</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Acompañamiento Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Te apoyamos antes, durante y después de la implementación</p>
                  <p className="text-muted-foreground">Nuestro objetivo es que crezcas e integres el sistema</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Retención de Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Nos interesa que el cliente crezca y se integre al sistema</p>
                  <p className="text-muted-foreground">Para que luego no se quiera ir</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Servicios Adicionales</h2>
            <p className="text-xl text-muted-foreground">
              Servicios complementarios para optimizar tu experiencia con Denarium
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Carga Inicial de Información */}
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Carga Inicial de Información</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">Sin Costo</p>
                  <p className="text-muted-foreground">Te ayudamos a cargar tu información inicial al sistema</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Incluye configuración básica de productos, clientes y datos principales
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Desarrollo de Mejoras */}
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Desarrollo de Mejoras</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">Según Necesidad</p>
                  <p className="text-muted-foreground">Desarrollamos módulos que sirven a todos nuestros clientes</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Las mejoras se implementan como parte del sistema general. Trabajos mayores pueden tener costo según
                    tiempo requerido.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Preguntas Frecuentes sobre Precios</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                pregunta: "¿Los precios están en UF?",
                respuesta:
                  "Sí, todos nuestros precios están expresados en UF (Unidad de Fomento) para mantener estabilidad ante las fluctuaciones del peso chileno.",
              },
              {
                pregunta: "¿Qué incluye el soporte gratuito?",
                respuesta:
                  "El soporte incluido funciona de lunes a viernes de 9:00 a 13:00 hrs y sábados de 9:00 a 14:00 hrs. Te acompañamos antes, durante y después de la implementación.",
              },
              {
                pregunta: "¿El sistema funciona en cualquier computador?",
                respuesta:
                  "Denarium funciona exclusivamente en sistemas Windows. La app PedidosAPP funciona en dispositivos Android y puede trabajar en modo offline.",
              },
              {
                pregunta: "¿Cómo funciona la certificación del SII?",
                respuesta:
                  "Te ayudamos con todo el proceso de certificación ante el SII para emitir documentos electrónicos. El costo es de 2,5 UF por razón social e incluye todos los tipos de documentos.",
              },
              {
                pregunta: "¿Qué pasa si necesito ayuda para cargar mi información?",
                respuesta:
                  "Te ayudamos sin costo a cargar la información inicial. Si requiere trabajo mayor por el tiempo que demande, puede tener un costo adicional que se evalúa caso a caso.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.pregunta}</h3>
                  <p className="text-muted-foreground">{faq.respuesta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a más de 500 empresas que ya transformaron sus procesos con nuestro ERP
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <CreditCard className="h-5 w-5 mr-2" />
              Comenzar Prueba Gratuita
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
    </div>
  )
}
