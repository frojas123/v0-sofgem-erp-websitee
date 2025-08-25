import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  HeadphonesIcon,
  MessageSquare,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Search,
  Plus,
  ExternalLink,
  Bot,
  Send,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SoportePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/sofgem-logo.png" alt="Sofgem Ltda Logo" width={32} height={32} className="rounded" />
              <span className="font-serif font-bold text-xl text-primary">Sofgem Ltda</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/documentacion" className="text-sm font-medium hover:text-primary transition-colors">
              Documentación
            </Link>
            <Link href="/precios" className="text-sm font-medium hover:text-primary transition-colors">
              Precios
            </Link>
            <Link href="/onboarding" className="text-sm font-medium hover:text-primary transition-colors">
              Onboarding
            </Link>
            <Link href="/portal-clientes" className="text-sm font-medium hover:text-primary transition-colors">
              Portal Clientes
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Iniciar Sesión
            </Button>
            <Button size="sm">Contactar</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Soporte Gratuito
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Centro de Soporte Sofgem</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Te acompañamos antes, durante y después de la implementación. Nuestro objetivo es que crezcas con nuestro
            sistema y no te quieras ir.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <Tabs defaultValue="chatbot" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="chatbot">Asistente IA</TabsTrigger>
              <TabsTrigger value="tickets">Tickets</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="contacto">Contacto</TabsTrigger>
              <TabsTrigger value="estado">Estado</TabsTrigger>
              <TabsTrigger value="recursos">Recursos</TabsTrigger>
            </TabsList>

            <TabsContent value="chatbot" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Chat Interface */}
                <div className="lg:col-span-2">
                  <Card className="h-[600px] flex flex-col">
                    <CardHeader className="border-b flex-shrink-0">
                      <CardTitle className="flex items-center gap-2">
                        <Bot className="h-5 w-5 text-primary" />
                        Asistente IA Denarium
                        <Badge variant="secondary" className="ml-2">
                          24/7 Disponible
                        </Badge>
                      </CardTitle>
                      <CardDescription>
                        Resuelve tus dudas sobre Denarium, facturación electrónica y certificación SII al instante
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 p-0 overflow-hidden">
                      {/* Chat Messages */}
                      <div className="h-full flex flex-col">
                        <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[400px]">
                          {/* Welcome Message */}
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Bot className="h-4 w-4 text-primary" />
                            </div>
                            <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                              <p className="text-sm">¡Hola! Soy el asistente IA de Sofgem. Puedo ayudarte con:</p>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• Dudas sobre el sistema Denarium</li>
                                <li>• Proceso de facturación electrónica</li>
                                <li>• Certificación SII</li>
                                <li>• Preguntas sobre precios y servicios</li>
                              </ul>
                              <p className="text-sm mt-2">¿En qué puedo ayudarte hoy?</p>
                            </div>
                          </div>

                          {/* Sample Conversation - Reducido */}
                          <div className="flex items-start gap-3 justify-end">
                            <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                              <p className="text-sm">¿Cómo genero una factura electrónica?</p>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-medium">TÚ</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Bot className="h-4 w-4 text-primary" />
                            </div>
                            <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                              <p className="text-sm">Para generar una factura electrónica:</p>
                              <ol className="text-sm mt-2 space-y-1 list-decimal list-inside">
                                <li>Ve a "Ventas" → "Facturación"</li>
                                <li>Selecciona "Nueva Factura Electrónica"</li>
                                <li>Completa datos del cliente</li>
                                <li>Agrega productos/servicios</li>
                                <li>Presiona "Generar y Enviar al SII"</li>
                              </ol>
                            </div>
                          </div>

                          {/* Ejemplo más corto */}
                          <div className="flex items-start gap-3 justify-end">
                            <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                              <p className="text-sm">¿Qué necesito para certificar en el SII?</p>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-medium">TÚ</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Bot className="h-4 w-4 text-primary" />
                            </div>
                            <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                              <p className="text-sm">Para la certificación SII necesitas:</p>
                              <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                                <li>Formulario 3230 completado</li>
                                <li>Certificado digital vigente</li>
                                <li>Sistema configurado según SII</li>
                                <li>Documentación técnica</li>
                              </ul>
                              <p className="text-sm mt-2">Te ayudamos con todo el proceso (2,5 UF por razón social).</p>
                            </div>
                          </div>
                        </div>

                        {/* Chat Input */}
                        <div className="border-t p-4 flex-shrink-0">
                          <div className="flex gap-2">
                            <Input
                              placeholder="Escribe tu pregunta sobre Denarium, facturación o certificación..."
                              className="flex-1"
                            />
                            <Button size="icon">
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            Presiona Enter para enviar • El asistente está disponible 24/7
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions & Info */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Consultas Rápidas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {[
                        "¿Cómo certificar mi empresa en el SII?",
                        "Configurar impresora fiscal",
                        "Error en facturación electrónica",
                        "Precios de servicios adicionales",
                        "Requisitos técnicos del sistema",
                        "Proceso de implementación",
                        "App móvil PedidosAPP",
                        "Migración de datos",
                      ].map((pregunta, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left h-auto p-2 text-sm"
                        >
                          {pregunta}
                        </Button>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ventajas del Asistente IA</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Disponible 24/7, todos los días</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Respuestas instantáneas</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Conocimiento actualizado del sistema</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Guías paso a paso</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Complementa el soporte humano</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>¿Necesitas Soporte Humano?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Si el asistente IA no puede resolver tu consulta, nuestro equipo humano está disponible:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Lun - Vie: 9:00 - 13:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Sáb: 9:00 - 14:00</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent" size="sm">
                        Crear Ticket de Soporte
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Sistema de Tickets */}
            <TabsContent value="tickets" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5" />
                      Crear Nuevo Ticket
                    </CardTitle>
                    <CardDescription>Reporta un problema o solicita ayuda técnica</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tipo de Consulta</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tecnico">Soporte Técnico</SelectItem>
                          <SelectItem value="facturacion">Facturación</SelectItem>
                          <SelectItem value="capacitacion">Capacitación</SelectItem>
                          <SelectItem value="certificacion">Certificación</SelectItem>
                          <SelectItem value="general">Consulta General</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Prioridad</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona prioridad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="baja">Baja</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                          <SelectItem value="alta">Alta</SelectItem>
                          <SelectItem value="critica">Crítica</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Asunto</label>
                      <Input placeholder="Describe brevemente el problema" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Descripción</label>
                      <Textarea placeholder="Describe detalladamente el problema o consulta" rows={4} />
                    </div>
                    <Button className="w-full">Crear Ticket</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Mis Tickets
                    </CardTitle>
                    <CardDescription>Revisa el estado de tus consultas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          id: "#2024-001",
                          asunto: "Error en facturación electrónica",
                          estado: "En progreso",
                          prioridad: "Alta",
                          fecha: "15 Ene 2024",
                        },
                        {
                          id: "#2024-002",
                          asunto: "Consulta sobre certificación",
                          estado: "Resuelto",
                          prioridad: "Media",
                          fecha: "12 Ene 2024",
                        },
                        {
                          id: "#2024-003",
                          asunto: "Capacitación módulo inventario",
                          estado: "Pendiente",
                          prioridad: "Baja",
                          fecha: "10 Ene 2024",
                        },
                      ].map((ticket, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{ticket.id}</span>
                            <Badge
                              variant={
                                ticket.estado === "Resuelto"
                                  ? "default"
                                  : ticket.estado === "En progreso"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {ticket.estado}
                            </Badge>
                          </div>
                          <p className="text-sm">{ticket.asunto}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Prioridad: {ticket.prioridad}</span>
                            <span>{ticket.fecha}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* FAQ */}
            <TabsContent value="faq" className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar en preguntas frecuentes..." className="pl-10" />
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    categoria: "Facturación Electrónica",
                    preguntas: [
                      {
                        pregunta: "¿Cómo genero una factura electrónica?",
                        respuesta:
                          "Para generar una factura electrónica, accede al módulo de facturación, completa los datos del cliente y productos, y presiona 'Generar Factura'. El sistema automáticamente enviará la factura al SII.",
                      },
                      {
                        pregunta: "¿Qué hacer si una factura es rechazada por el SII?",
                        respuesta:
                          "Si una factura es rechazada, revisa los errores en el log del sistema, corrige la información y vuelve a enviar. Los errores más comunes son RUT inválido o montos incorrectos.",
                      },
                    ],
                  },
                  {
                    categoria: "Sistema ERP",
                    preguntas: [
                      {
                        pregunta: "¿Cómo configuro los usuarios del sistema?",
                        respuesta:
                          "Ve a Configuración > Usuarios, donde puedes crear nuevos usuarios, asignar roles y permisos específicos según las necesidades de cada empleado.",
                      },
                      {
                        pregunta: "¿Puedo personalizar los reportes?",
                        respuesta:
                          "Sí, el sistema permite personalizar reportes existentes y crear nuevos según tus necesidades específicas. Contacta a soporte para configuraciones avanzadas.",
                      },
                    ],
                  },
                  {
                    categoria: "Capacitaciones",
                    preguntas: [
                      {
                        pregunta: "¿Cuánto dura el proceso de capacitación?",
                        respuesta:
                          "La capacitación básica dura 2-3 días, mientras que la capacitación completa puede tomar 1-2 semanas dependiendo del tamaño de tu empresa y módulos contratados.",
                      },
                      {
                        pregunta: "¿Las capacitaciones son presenciales o remotas?",
                        respuesta:
                          "Ofrecemos ambas modalidades. Las capacitaciones remotas son más populares y permiten mayor flexibilidad horaria.",
                      },
                    ],
                  },
                ].map((categoria, catIndex) => (
                  <Card key={catIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg">{categoria.categoria}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {categoria.preguntas.map((item, index) => (
                        <div key={index} className="border-l-4 border-primary/20 pl-4">
                          <h4 className="font-medium mb-2">{item.pregunta}</h4>
                          <p className="text-sm text-muted-foreground">{item.respuesta}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Contacto */}
            <TabsContent value="contacto" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de Contacto</CardTitle>
                    <CardDescription>Múltiples canales para comunicarte con nosotros</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-sm text-muted-foreground">+56 2 2345 6789</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">soporte@sofgem.cl</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Horarios de Atención</p>
                        <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 - 13:00</p>
                        <p className="text-sm text-muted-foreground">Sáb: 9:00 - 14:00</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-3">Nuestro Compromiso</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Te acompañamos en todo el proceso: antes de la implementación con asesoría personalizada,
                        durante la puesta en marcha con capacitación completa, y después con soporte continuo para que
                        tu empresa crezca junto a nuestro sistema.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Soporte gratuito incluido</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Acompañamiento integral</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Enfoque en tu crecimiento</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tiempos de Respuesta</CardTitle>
                    <CardDescription>Comprometidos con tu éxito y crecimiento empresarial</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        tipo: "Consulta General",
                        tiempo: "Mismo día",
                        descripcion: "Preguntas sobre funcionalidades y uso básico",
                      },
                      {
                        tipo: "Soporte Técnico",
                        tiempo: "2-4 horas",
                        descripcion: "Problemas técnicos y configuraciones",
                      },
                      {
                        tipo: "Capacitación",
                        tiempo: "24 horas",
                        descripcion: "Solicitudes de capacitación adicional",
                      },
                      {
                        tipo: "Implementación",
                        tiempo: "1 hora",
                        descripcion: "Consultas durante proceso de implementación",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{item.tipo}</p>
                          <p className="text-xs text-muted-foreground">{item.descripcion}</p>
                        </div>
                        <Badge variant="secondary">{item.tiempo}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Estado del Sistema */}
            <TabsContent value="estado" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Estado del Sistema
                  </CardTitle>
                  <CardDescription>Monitoreo en tiempo real de nuestros servicios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      servicio: "Sistema ERP Principal",
                      estado: "Operativo",
                      uptime: "99.9%",
                      icono: CheckCircle,
                      color: "text-green-500",
                    },
                    {
                      servicio: "Facturación Electrónica",
                      estado: "Operativo",
                      uptime: "99.8%",
                      icono: CheckCircle,
                      color: "text-green-500",
                    },
                    {
                      servicio: "Portal de Clientes",
                      estado: "Operativo",
                      uptime: "99.9%",
                      icono: CheckCircle,
                      color: "text-green-500",
                    },
                    {
                      servicio: "API de Integración",
                      estado: "Mantenimiento",
                      uptime: "98.5%",
                      icono: AlertCircle,
                      color: "text-yellow-500",
                    },
                  ].map((item, index) => {
                    const IconComponent = item.icono
                    return (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <IconComponent className={`h-5 w-5 ${item.color}`} />
                          <div>
                            <p className="font-medium">{item.servicio}</p>
                            <p className="text-sm text-muted-foreground">Uptime: {item.uptime}</p>
                          </div>
                        </div>
                        <Badge variant={item.estado === "Operativo" ? "default" : "secondary"}>{item.estado}</Badge>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mantenimientos Programados</CardTitle>
                  <CardDescription>Próximas ventanas de mantenimiento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Actualización Sistema ERP</p>
                        <p className="text-sm text-muted-foreground">Mejoras de rendimiento y nuevas funcionalidades</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">25 Ene 2024</p>
                        <p className="text-xs text-muted-foreground">02:00 - 04:00</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Mantenimiento Base de Datos</p>
                        <p className="text-sm text-muted-foreground">Optimización y respaldos</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">1 Feb 2024</p>
                        <p className="text-xs text-muted-foreground">01:00 - 03:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Recursos */}
            <TabsContent value="recursos" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Documentación
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link
                      href="/documentacion"
                      className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <span className="text-sm">Manuales de Usuario</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/documentacion"
                      className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <span className="text-sm">Guías Técnicas</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/documentacion"
                      className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <span className="text-sm">API Documentation</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HeadphonesIcon className="h-5 w-5" />
                      Capacitaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link
                      href="/portal-clientes"
                      className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <span className="text-sm">Videos Tutoriales</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/portal-clientes"
                      className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <span className="text-sm">Webinars</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/portal-clientes"
                      className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <span className="text-sm">Certificaciones</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Comunidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link
                      href="#"
                      className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <span className="text-sm">Foro de Usuarios</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <span className="text-sm">Blog Técnico</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <span className="text-sm">Newsletter</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Descargas Útiles</CardTitle>
                  <CardDescription>Herramientas y recursos para optimizar tu experiencia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        nombre: "Cliente de Escritorio",
                        descripcion: "Aplicación nativa para Windows y Mac",
                        tamaño: "45 MB",
                        version: "v2.1.0",
                      },
                      {
                        nombre: "App Móvil",
                        descripcion: "Acceso desde dispositivos móviles",
                        tamaño: "12 MB",
                        version: "v1.8.2",
                      },
                      {
                        nombre: "Plantillas Excel",
                        descripcion: "Formatos para importación de datos",
                        tamaño: "2 MB",
                        version: "v1.0",
                      },
                      {
                        nombre: "Certificados SSL",
                        descripcion: "Certificados para conexiones seguras",
                        tamaño: "1 MB",
                        version: "2024",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{item.nombre}</p>
                          <p className="text-sm text-muted-foreground">{item.descripcion}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.tamaño} • {item.version}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Descargar
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
