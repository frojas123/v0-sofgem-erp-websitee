import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  BookOpen,
  FileText,
  Settings,
  Shield,
  GraduationCap,
  Clock,
  Download,
  ExternalLink,
  User,
  Bell,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortalClientesPage() {
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
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="#dashboard" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="#soporte" className="text-sm font-medium hover:text-primary transition-colors">
              Soporte
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              Mi Cuenta
            </Button>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="py-8 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-bold mb-2">Portal de Clientes</h1>
              <p className="text-muted-foreground">Bienvenido de vuelta. Accede a todos tus recursos y servicios.</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              Cliente Activo
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="pagos">Pagos</TabsTrigger>
              <TabsTrigger value="documentacion">Documentación</TabsTrigger>
              <TabsTrigger value="capacitaciones">Capacitaciones</TabsTrigger>
              <TabsTrigger value="certificaciones">Certificaciones</TabsTrigger>
              <TabsTrigger value="soporte">Soporte</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Estado de Cuenta</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">Al día</div>
                    <p className="text-xs text-muted-foreground">Último pago: 15 Nov 2024</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Licencias Activas</CardTitle>
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">Vencimiento: 30 Dic 2024</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tickets Abiertos</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">Tiempo promedio: 4h</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Capacitaciones</CardTitle>
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85%</div>
                    <p className="text-xs text-muted-foreground">Progreso completado</p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Gestión de Pagos</CardTitle>
                        <CardDescription>Facturas, pagos y historial</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Manuales y Guías</CardTitle>
                        <CardDescription>Documentación actualizada</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Settings className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Configuración</CardTitle>
                        <CardDescription>Ajustes y preferencias</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            {/* Pagos Tab */}
            <TabsContent value="pagos" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Facturación Actual</CardTitle>
                    <CardDescription>Resumen de tu plan y servicios activos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Plan ERP Profesional</span>
                      <span className="font-semibold">$299.000/mes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Licencias adicionales (3)</span>
                      <span className="font-semibold">$89.700/mes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Soporte Premium</span>
                      <span className="font-semibold">$49.000/mes</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center font-bold">
                        <span>Total Mensual</span>
                        <span>$437.700</span>
                      </div>
                    </div>
                    <Button className="w-full">Ver Detalle de Facturación</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Historial de Pagos</CardTitle>
                    <CardDescription>Últimas transacciones realizadas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { fecha: "15 Nov 2024", monto: "$437.700", estado: "Pagado" },
                        { fecha: "15 Oct 2024", monto: "$437.700", estado: "Pagado" },
                        { fecha: "15 Sep 2024", monto: "$437.700", estado: "Pagado" },
                      ].map((pago, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b">
                          <div>
                            <div className="font-medium">{pago.fecha}</div>
                            <div className="text-sm text-muted-foreground">{pago.monto}</div>
                          </div>
                          <Badge variant="secondary">{pago.estado}</Badge>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar Historial
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Servicios Adicionales</CardTitle>
                  <CardDescription>Amplía tu plan con servicios especializados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        servicio: "Capacitación Personalizada",
                        precio: "$150.000",
                        descripcion: "Sesiones 1:1 con expertos",
                      },
                      {
                        servicio: "Migración de Datos",
                        precio: "$200.000",
                        descripcion: "Transferencia segura de información",
                      },
                      { servicio: "Integración API", precio: "$300.000", descripcion: "Conecta con sistemas externos" },
                    ].map((servicio, index) => (
                      <Card key={index} className="border-dashed">
                        <CardContent className="pt-6">
                          <h4 className="font-semibold mb-2">{servicio.servicio}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{servicio.descripcion}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-primary">{servicio.precio}</span>
                            <Button size="sm">Contratar</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Documentación Tab */}
            <TabsContent value="documentacion" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { titulo: "Manual de Usuario ERP", tipo: "PDF", tamaño: "2.5 MB", actualizado: "10 Nov 2024" },
                  {
                    titulo: "Guía de Facturación Electrónica",
                    tipo: "PDF",
                    tamaño: "1.8 MB",
                    actualizado: "05 Nov 2024",
                  },
                  { titulo: "Políticas de Uso", tipo: "PDF", tamaño: "850 KB", actualizado: "01 Nov 2024" },
                  { titulo: "Requisitos Técnicos", tipo: "PDF", tamaño: "1.2 MB", actualizado: "28 Oct 2024" },
                  {
                    titulo: "Procedimientos de Certificación",
                    tipo: "PDF",
                    tamaño: "3.1 MB",
                    actualizado: "25 Oct 2024",
                  },
                  { titulo: "API Documentation", tipo: "HTML", tamaño: "Online", actualizado: "20 Oct 2024" },
                ].map((doc, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <Badge variant="outline">{doc.tipo}</Badge>
                      </div>
                      <h4 className="font-semibold mb-2">{doc.titulo}</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>Tamaño: {doc.tamaño}</div>
                        <div>Actualizado: {doc.actualizado}</div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Descargar
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Capacitaciones Tab */}
            <TabsContent value="capacitaciones" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mi Progreso de Capacitación</CardTitle>
                  <CardDescription>Completa tu formación para aprovechar al máximo el sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { modulo: "Introducción al Sistema ERP", progreso: 100, duracion: "2 horas", completado: true },
                      {
                        modulo: "Facturación Electrónica Básica",
                        progreso: 100,
                        duracion: "3 horas",
                        completado: true,
                      },
                      { modulo: "Gestión de Inventarios", progreso: 75, duracion: "4 horas", completado: false },
                      { modulo: "Reportes y Analytics", progreso: 0, duracion: "2.5 horas", completado: false },
                      { modulo: "Configuración Avanzada", progreso: 0, duracion: "3 horas", completado: false },
                    ].map((modulo, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold">{modulo.modulo}</h4>
                          <p className="text-sm text-muted-foreground">Duración: {modulo.duracion}</p>
                          <div className="w-full bg-muted rounded-full h-2 mt-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${modulo.progreso}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="ml-4 flex items-center space-x-2">
                          <span className="text-sm font-medium">{modulo.progreso}%</span>
                          <Button size="sm" variant={modulo.completado ? "secondary" : "default"}>
                            {modulo.completado ? "Revisar" : "Continuar"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Próximas Sesiones en Vivo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { titulo: "Nuevas Funcionalidades 2024", fecha: "25 Nov 2024", hora: "15:00" },
                        { titulo: "Optimización de Procesos", fecha: "02 Dic 2024", hora: "10:00" },
                      ].map((sesion, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded">
                          <div>
                            <h5 className="font-medium">{sesion.titulo}</h5>
                            <p className="text-sm text-muted-foreground">
                              {sesion.fecha} - {sesion.hora}
                            </p>
                          </div>
                          <Button size="sm">Registrarse</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certificaciones Disponibles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { certificacion: "ERP Specialist", requisito: "85% módulos completados", disponible: true },
                        { certificacion: "Advanced User", requisito: "100% módulos completados", disponible: false },
                      ].map((cert, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded">
                          <div>
                            <h5 className="font-medium">{cert.certificacion}</h5>
                            <p className="text-sm text-muted-foreground">{cert.requisito}</p>
                          </div>
                          <Button size="sm" disabled={!cert.disponible}>
                            {cert.disponible ? "Obtener" : "Bloqueado"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Certificaciones Tab */}
            <TabsContent value="certificaciones" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Certificación SII - Facturación Electrónica</CardTitle>
                  <CardDescription>
                    Proceso de certificación ante el Servicio de Impuestos Internos para emitir documentos electrónicos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Estado de Certificación</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <span className="font-medium">Factura Electrónica</span>
                            <p className="text-sm text-muted-foreground">Documento Tipo 33</p>
                          </div>
                          <Badge variant="default">Certificado</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <span className="font-medium">Boleta Electrónica</span>
                            <p className="text-sm text-muted-foreground">Documento Tipo 39</p>
                          </div>
                          <Badge variant="secondary">En Proceso</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <span className="font-medium">Nota de Crédito</span>
                            <p className="text-sm text-muted-foreground">Documento Tipo 61</p>
                          </div>
                          <Badge variant="outline">Pendiente</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <span className="font-medium">Nota de Débito</span>
                            <p className="text-sm text-muted-foreground">Documento Tipo 56</p>
                          </div>
                          <Badge variant="outline">Pendiente</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Requisitos Técnicos SII</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Certificado Digital:</span>
                          <Badge variant="secondary">Válido hasta 2025</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Resolución SII:</span>
                          <Badge variant="secondary">N° 12345/2024</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Ambiente:</span>
                          <Badge variant="secondary">Producción</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Última Validación:</span>
                          <Badge variant="secondary">15 Nov 2024</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Proceso de Certificación SII</CardTitle>
                  <CardDescription>
                    Pasos necesarios para obtener la certificación de facturación electrónica
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        paso: "1. Solicitud de Certificación",
                        estado: "completado",
                        descripcion: "Presentación de documentos ante el SII",
                        tiempo: "1-2 días hábiles",
                      },
                      {
                        paso: "2. Configuración Técnica",
                        estado: "completado",
                        descripcion: "Setup del sistema y certificados digitales",
                        tiempo: "2-3 días hábiles",
                      },
                      {
                        paso: "3. Pruebas de Certificación",
                        estado: "en-progreso",
                        descripcion: "Envío de documentos de prueba al SII",
                        tiempo: "3-5 días hábiles",
                      },
                      {
                        paso: "4. Validación SII",
                        estado: "pendiente",
                        descripcion: "Revisión y aprobación por parte del SII",
                        tiempo: "5-10 días hábiles",
                      },
                      {
                        paso: "5. Puesta en Producción",
                        estado: "pendiente",
                        descripcion: "Activación del ambiente productivo",
                        tiempo: "1 día hábil",
                      },
                    ].map((paso, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-medium">{paso.paso}</span>
                            <Badge
                              variant={
                                paso.estado === "completado"
                                  ? "default"
                                  : paso.estado === "en-progreso"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {paso.estado === "completado"
                                ? "Completado"
                                : paso.estado === "en-progreso"
                                  ? "En Progreso"
                                  : "Pendiente"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{paso.descripcion}</p>
                          <p className="text-xs text-muted-foreground">Tiempo estimado: {paso.tiempo}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Documentos Requeridos</CardTitle>
                  <CardDescription>Documentación necesaria para el proceso de certificación</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        documento: "Formulario 3230",
                        descripcion: "Solicitud de autorización para emitir documentos electrónicos",
                        estado: "Presentado",
                        fecha: "10 Nov 2024",
                      },
                      {
                        documento: "Certificado Digital",
                        descripcion: "Certificado de firma electrónica vigente",
                        estado: "Válido",
                        fecha: "Vence: 15 Dic 2025",
                      },
                      {
                        documento: "Resolución de Autorización",
                        descripcion: "Documento que autoriza la emisión electrónica",
                        estado: "En Trámite",
                        fecha: "Esperando SII",
                      },
                      {
                        documento: "Pruebas Técnicas",
                        descripcion: "Documentos de prueba enviados al SII",
                        estado: "En Revisión",
                        fecha: "18 Nov 2024",
                      },
                    ].map((doc, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">{doc.documento}</h4>
                          <Badge
                            variant={
                              doc.estado === "Válido" || doc.estado === "Presentado"
                                ? "default"
                                : doc.estado === "En Trámite" || doc.estado === "En Revisión"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {doc.estado}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{doc.descripcion}</p>
                        <p className="text-xs text-muted-foreground">{doc.fecha}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enlaces Útiles SII</CardTitle>
                  <CardDescription>Recursos oficiales del Servicio de Impuestos Internos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                      <a
                        href="https://www.sii.cl/e_contabilidad/pruebas_a_realizar.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-left">
                          <div className="font-medium">Pruebas de Certificación SII</div>
                          <div className="text-sm text-muted-foreground">Guía oficial de pruebas a realizar</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                      <a href="https://www.sii.cl/factura_electronica/" target="_blank" rel="noopener noreferrer">
                        <div className="text-left">
                          <div className="font-medium">Portal Facturación Electrónica</div>
                          <div className="text-sm text-muted-foreground">Información general del SII</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                      <a href="https://www4.sii.cl/consdcvinternetui/" target="_blank" rel="noopener noreferrer">
                        <div className="text-left">
                          <div className="font-medium">Consulta Estado DCV</div>
                          <div className="text-sm text-muted-foreground">Verificar documentos emitidos</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                      <a
                        href="https://www.sii.cl/servicios_online/1039-1208.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-left">
                          <div className="font-medium">Mesa de Ayuda SII</div>
                          <div className="text-sm text-muted-foreground">Soporte técnico oficial</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Soporte Tab */}
            <TabsContent value="soporte" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Crear Ticket de Soporte</CardTitle>
                    <CardDescription>Describe tu problema y te ayudaremos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Tipo de Problema</label>
                      <select className="w-full mt-1 p-2 border rounded-md">
                        <option>Seleccionar tipo</option>
                        <option>Error técnico</option>
                        <option>Consulta de facturación</option>
                        <option>Solicitud de capacitación</option>
                        <option>Problema de acceso</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Prioridad</label>
                      <select className="w-full mt-1 p-2 border rounded-md">
                        <option>Media</option>
                        <option>Alta</option>
                        <option>Crítica</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Descripción</label>
                      <textarea
                        className="w-full mt-1 p-2 border rounded-md"
                        rows={4}
                        placeholder="Describe detalladamente tu problema..."
                      ></textarea>
                    </div>
                    <Button className="w-full">Crear Ticket</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mis Tickets</CardTitle>
                    <CardDescription>Estado de tus solicitudes de soporte</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        {
                          id: "#2024-1156",
                          asunto: "Error en generación de reportes",
                          estado: "En progreso",
                          fecha: "18 Nov 2024",
                        },
                        {
                          id: "#2024-1142",
                          asunto: "Consulta sobre facturación",
                          estado: "Resuelto",
                          fecha: "15 Nov 2024",
                        },
                        {
                          id: "#2024-1138",
                          asunto: "Problema de sincronización",
                          estado: "Pendiente",
                          fecha: "12 Nov 2024",
                        },
                      ].map((ticket, index) => (
                        <div key={index} className="flex justify-between items-start p-3 border rounded">
                          <div>
                            <h5 className="font-medium">{ticket.id}</h5>
                            <p className="text-sm text-muted-foreground">{ticket.asunto}</p>
                            <p className="text-xs text-muted-foreground">{ticket.fecha}</p>
                          </div>
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
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recursos de Ayuda</CardTitle>
                  <CardDescription>Encuentra respuestas rápidas a preguntas comunes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { titulo: "Preguntas Frecuentes", descripcion: "Respuestas a consultas comunes", icono: "❓" },
                      { titulo: "Videos Tutoriales", descripcion: "Aprende paso a paso", icono: "🎥" },
                      { titulo: "Base de Conocimiento", descripcion: "Artículos detallados", icono: "📚" },
                      { titulo: "Contacto Directo", descripcion: "Habla con un experto", icono: "📞" },
                    ].map((recurso, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="pt-6 text-center">
                          <div className="text-2xl mb-2">{recurso.icono}</div>
                          <h4 className="font-semibold mb-1">{recurso.titulo}</h4>
                          <p className="text-sm text-muted-foreground">{recurso.descripcion}</p>
                        </CardContent>
                      </Card>
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
