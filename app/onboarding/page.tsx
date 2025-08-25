import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  Circle,
  Clock,
  Users,
  FileText,
  Settings,
  Shield,
  Zap,
  Download,
  Phone,
  Mail,
  Calendar,
  AlertCircle,
  Laptop,
  Database,
  Server,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OnboardingPage() {
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
            <Link href="/portal-clientes" className="text-sm font-medium hover:text-primary transition-colors">
              Portal Clientes
            </Link>
            <Link href="/precios" className="text-sm font-medium hover:text-primary transition-colors">
              Precios
            </Link>
            <Link href="#onboarding" className="text-sm font-medium text-primary">
              Cómo Empezar
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
            Proceso de Implementación
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Cómo Empezar con Sofgem</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Te guiamos paso a paso desde la contratación hasta la implementación completa de tu sistema ERP. Un proceso
            claro, transparente y sin sorpresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Comenzar Ahora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Descargar Guía Completa
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Proceso de Implementación en 6 Pasos</h2>
            <p className="text-xl text-muted-foreground">
              Desde el primer contacto hasta el go-live, cada paso está diseñado para garantizar tu éxito
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                paso: "1",
                titulo: "Evaluación Inicial",
                descripcion: "Analizamos tus necesidades y requisitos específicos",
                duracion: "2-3 días",
                actividades: ["Reunión de descubrimiento", "Análisis de procesos actuales", "Definición de objetivos"],
                estado: "activo",
              },
              {
                paso: "2",
                titulo: "Propuesta y Contratación",
                descripcion: "Presentamos la solución personalizada para tu empresa",
                duracion: "3-5 días",
                actividades: ["Propuesta técnica", "Cotización detallada", "Firma de contrato"],
                estado: "pendiente",
              },
              {
                paso: "3",
                titulo: "Preparación Técnica",
                descripcion: "Verificamos requisitos y preparamos el entorno",
                duracion: "1-2 días",
                actividades: ["Verificación de infraestructura", "Preparación de servidores", "Configuración inicial"],
                estado: "pendiente",
              },
              {
                paso: "4",
                titulo: "Configuración y Personalización",
                descripcion: "Adaptamos el sistema a tus procesos empresariales",
                duracion: "5-10 días",
                actividades: ["Configuración de módulos", "Personalización de flujos", "Integración de datos"],
                estado: "pendiente",
              },
              {
                paso: "5",
                titulo: "Capacitación y Pruebas",
                descripcion: "Entrenamos a tu equipo y validamos el funcionamiento",
                duracion: "3-5 días",
                actividades: ["Capacitación de usuarios", "Pruebas integrales", "Ajustes finales"],
                estado: "pendiente",
              },
              {
                paso: "6",
                titulo: "Go-Live y Soporte",
                descripcion: "Lanzamiento oficial con acompañamiento continuo",
                duracion: "Ongoing",
                actividades: ["Puesta en producción", "Monitoreo inicial", "Soporte especializado"],
                estado: "pendiente",
              },
            ].map((paso, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${paso.estado === "activo" ? "border-primary" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                        paso.estado === "activo"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {paso.paso}
                    </div>
                    <Badge variant={paso.estado === "activo" ? "default" : "outline"}>
                      <Clock className="h-3 w-3 mr-1" />
                      {paso.duracion}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{paso.titulo}</CardTitle>
                  <CardDescription>{paso.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Actividades principales:</h4>
                    {paso.actividades.map((actividad, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        {paso.estado === "activo" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="text-sm">{actividad}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <Tabs defaultValue="requisitos" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-4xl grid-cols-4">
                <TabsTrigger value="requisitos">Requisitos Técnicos</TabsTrigger>
                <TabsTrigger value="documentacion">Documentación</TabsTrigger>
                <TabsTrigger value="timeline">Timeline Detallado</TabsTrigger>
                <TabsTrigger value="checklist">Checklist</TabsTrigger>
              </TabsList>
            </div>

            {/* Requisitos Técnicos Tab */}
            <TabsContent value="requisitos" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold mb-4">Requisitos Técnicos</h2>
                <p className="text-xl text-muted-foreground">
                  Asegúrate de que tu infraestructura cumple con estos requisitos mínimos
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Laptop className="h-6 w-6 text-primary" />
                      <CardTitle>Equipos Cliente</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sistema Operativo:</span>
                        <Badge variant="outline">Windows 10+ / macOS 10.15+</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Procesador:</span>
                        <Badge variant="outline">Intel i5 / AMD Ryzen 5</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Memoria RAM:</span>
                        <Badge variant="outline">8GB mínimo / 16GB recomendado</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Almacenamiento:</span>
                        <Badge variant="outline">256GB SSD disponible</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Navegador:</span>
                        <Badge variant="outline">Chrome 90+ / Firefox 88+</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Server className="h-6 w-6 text-primary" />
                      <CardTitle>Infraestructura de Red</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Conexión a Internet:</span>
                        <Badge variant="outline">50 Mbps mínimo</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Latencia:</span>
                        <Badge variant="outline">{"< 100ms"}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Disponibilidad:</span>
                        <Badge variant="outline">99.5% uptime</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Firewall:</span>
                        <Badge variant="outline">Puertos 80, 443 abiertos</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Backup:</span>
                        <Badge variant="outline">Respaldo diario recomendado</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Database className="h-6 w-6 text-primary" />
                      <CardTitle>Base de Datos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Motor:</span>
                        <Badge variant="outline">PostgreSQL 12+ / SQL Server 2019+</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Espacio inicial:</span>
                        <Badge variant="outline">10GB mínimo</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Usuarios concurrentes:</span>
                        <Badge variant="outline">Según plan contratado</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Backup automático:</span>
                        <Badge variant="outline">Configuración incluida</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-primary" />
                      <CardTitle>Seguridad</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Certificado SSL:</span>
                        <Badge variant="outline">Requerido</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Antivirus:</span>
                        <Badge variant="outline">Actualizado y activo</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Políticas de acceso:</span>
                        <Badge variant="outline">Definidas por usuario</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Auditoría:</span>
                        <Badge variant="outline">Logs automáticos</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Importante</h4>
                      <p className="text-yellow-700 text-sm">
                        Nuestro equipo técnico realizará una evaluación completa de tu infraestructura antes de la
                        implementación. Si algún requisito no se cumple, te ayudaremos a encontrar la mejor solución.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Documentación Tab */}
            <TabsContent value="documentacion" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold mb-4">Documentación Requerida</h2>
                <p className="text-xl text-muted-foreground">
                  Prepara estos documentos para acelerar el proceso de implementación
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Documentos Empresariales</CardTitle>
                    <CardDescription>Información legal y administrativa de tu empresa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "RUT de la empresa",
                        "Certificado de constitución",
                        "Representación legal vigente",
                        "Estados financieros (últimos 2 años)",
                        "Organigrama actualizado",
                        "Políticas internas existentes",
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Información Técnica</CardTitle>
                    <CardDescription>Detalles sobre tu infraestructura actual</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "Diagrama de red actual",
                        "Inventario de equipos",
                        "Sistemas existentes en uso",
                        "Bases de datos actuales",
                        "Políticas de seguridad IT",
                        "Contactos del equipo técnico",
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Settings className="h-4 w-4 text-primary" />
                          <span className="text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Procesos de Negocio</CardTitle>
                    <CardDescription>Documentación de tus procesos actuales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "Flujos de facturación actuales",
                        "Procesos de inventario",
                        "Procedimientos de ventas",
                        "Gestión de compras",
                        "Reportes utilizados",
                        "Integraciones requeridas",
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="h-4 w-4 text-primary" />
                          <span className="text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Equipo de Proyecto</CardTitle>
                    <CardDescription>Personas clave para la implementación</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "Sponsor ejecutivo del proyecto",
                        "Líder de proyecto interno",
                        "Usuarios clave por área",
                        "Responsable técnico/IT",
                        "Contacto administrativo",
                        "Usuario super administrador",
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Download className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Plantillas Disponibles</h4>
                      <p className="text-blue-700 text-sm mb-3">
                        Descarga nuestras plantillas para facilitar la recopilación de información:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" className="text-blue-700 border-blue-300 bg-transparent">
                          Inventario Técnico
                        </Button>
                        <Button size="sm" variant="outline" className="text-blue-700 border-blue-300 bg-transparent">
                          Mapeo de Procesos
                        </Button>
                        <Button size="sm" variant="outline" className="text-blue-700 border-blue-300 bg-transparent">
                          Equipo de Proyecto
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Timeline Tab */}
            <TabsContent value="timeline" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold mb-4">Timeline Detallado por Plan</h2>
                <p className="text-xl text-muted-foreground">Cronograma específico según el plan contratado</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    plan: "Plan Básico",
                    duracion: "5-7 días hábiles",
                    fases: [
                      {
                        nombre: "Kick-off y configuración inicial",
                        dias: "Día 1",
                        actividades: ["Reunión de inicio", "Configuración básica", "Creación de usuarios"],
                      },
                      {
                        nombre: "Personalización básica",
                        dias: "Días 2-3",
                        actividades: [
                          "Configuración de módulos",
                          "Carga de datos maestros",
                          "Configuración de reportes",
                        ],
                      },
                      {
                        nombre: "Capacitación y pruebas",
                        dias: "Días 4-5",
                        actividades: ["Capacitación de usuarios", "Pruebas de funcionalidad", "Ajustes menores"],
                      },
                      {
                        nombre: "Go-live",
                        dias: "Días 6-7",
                        actividades: ["Puesta en producción", "Monitoreo inicial", "Soporte post go-live"],
                      },
                    ],
                  },
                  {
                    plan: "Plan Profesional",
                    duracion: "10-15 días hábiles",
                    fases: [
                      {
                        nombre: "Análisis y diseño",
                        dias: "Días 1-3",
                        actividades: ["Workshop de procesos", "Diseño de solución", "Plan de implementación"],
                      },
                      {
                        nombre: "Configuración avanzada",
                        dias: "Días 4-8",
                        actividades: ["Configuración personalizada", "Desarrollo de reportes", "Integración básica"],
                      },
                      {
                        nombre: "Capacitación integral",
                        dias: "Días 9-12",
                        actividades: ["Capacitación por roles", "Simulacros de operación", "Documentación de procesos"],
                      },
                      {
                        nombre: "Pruebas y go-live",
                        dias: "Días 13-15",
                        actividades: ["Pruebas integrales", "Corrección de incidencias", "Puesta en producción"],
                      },
                    ],
                  },
                  {
                    plan: "Plan Empresarial",
                    duracion: "20-30 días hábiles",
                    fases: [
                      {
                        nombre: "Análisis detallado",
                        dias: "Días 1-7",
                        actividades: ["Análisis de procesos", "Arquitectura de solución", "Plan de migración"],
                      },
                      {
                        nombre: "Desarrollo personalizado",
                        dias: "Días 8-18",
                        actividades: ["Desarrollo de funcionalidades", "Integraciones complejas", "Migración de datos"],
                      },
                      {
                        nombre: "Capacitación especializada",
                        dias: "Días 19-25",
                        actividades: ["Capacitación avanzada", "Certificación de usuarios", "Documentación completa"],
                      },
                      {
                        nombre: "Implementación y estabilización",
                        dias: "Días 26-30",
                        actividades: ["Go-live supervisado", "Monitoreo intensivo", "Optimización inicial"],
                      },
                    ],
                  },
                ].map((timeline, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{timeline.plan}</CardTitle>
                      <div className="text-2xl font-bold text-primary">{timeline.duracion}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {timeline.fases.map((fase, idx) => (
                          <div key={idx} className="border-l-2 border-primary/20 pl-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-sm">{fase.nombre}</h4>
                              <Badge variant="outline" className="text-xs">
                                {fase.dias}
                              </Badge>
                            </div>
                            <div className="space-y-1">
                              {fase.actividades.map((actividad, actIdx) => (
                                <div key={actIdx} className="flex items-center space-x-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary/60"></div>
                                  <span className="text-xs text-muted-foreground">{actividad}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Checklist Tab */}
            <TabsContent value="checklist" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold mb-4">Checklist de Implementación</h2>
                <p className="text-xl text-muted-foreground">
                  Lista de verificación para asegurar una implementación exitosa
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Pre-Implementación</CardTitle>
                    <CardDescription>Tareas a completar antes del inicio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { tarea: "Contrato firmado y aprobado", completado: true },
                        { tarea: "Equipo de proyecto definido", completado: true },
                        { tarea: "Requisitos técnicos verificados", completado: false },
                        { tarea: "Documentación empresarial recopilada", completado: false },
                        { tarea: "Infraestructura preparada", completado: false },
                        { tarea: "Cronograma acordado con stakeholders", completado: false },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          {item.completado ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground" />
                          )}
                          <span className={`text-sm ${item.completado ? "line-through text-muted-foreground" : ""}`}>
                            {item.tarea}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Progress value={33} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">2 de 6 tareas completadas</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Durante la Implementación</CardTitle>
                    <CardDescription>Actividades clave durante el proceso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { tarea: "Reuniones de seguimiento semanales", completado: false },
                        { tarea: "Validación de configuraciones", completado: false },
                        { tarea: "Pruebas de funcionalidad por módulo", completado: false },
                        { tarea: "Capacitación de usuarios clave", completado: false },
                        { tarea: "Migración de datos de prueba", completado: false },
                        { tarea: "Documentación de procesos", completado: false },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Circle className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{item.tarea}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Progress value={0} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">0 de 6 tareas completadas</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pre Go-Live</CardTitle>
                    <CardDescription>Verificaciones antes del lanzamiento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { tarea: "Pruebas integrales completadas", completado: false },
                        { tarea: "Usuarios capacitados y certificados", completado: false },
                        { tarea: "Datos de producción migrados", completado: false },
                        { tarea: "Respaldos configurados", completado: false },
                        { tarea: "Plan de contingencia definido", completado: false },
                        { tarea: "Aprobación final del cliente", completado: false },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Circle className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{item.tarea}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Progress value={0} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">0 de 6 tareas completadas</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Post Go-Live</CardTitle>
                    <CardDescription>Actividades de estabilización</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { tarea: "Monitoreo intensivo (primera semana)", completado: false },
                        { tarea: "Resolución de incidencias menores", completado: false },
                        { tarea: "Capacitación de refuerzo", completado: false },
                        { tarea: "Optimización de rendimiento", completado: false },
                        { tarea: "Documentación final entregada", completado: false },
                        { tarea: "Cierre formal del proyecto", completado: false },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Circle className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{item.tarea}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Progress value={0} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">0 de 6 tareas completadas</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Tu Equipo de Implementación</h2>
            <p className="text-xl text-muted-foreground">
              Conoce a los especialistas que te acompañarán durante todo el proceso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                rol: "Gerente de Proyecto",
                nombre: "María González",
                descripcion: "Coordinación general y seguimiento del cronograma",
                contacto: "maria.gonzalez@sofgem.cl",
                telefono: "+56 9 8765 4321",
              },
              {
                rol: "Consultor Funcional",
                nombre: "Carlos Rodríguez",
                descripcion: "Configuración y personalización del sistema",
                contacto: "carlos.rodriguez@sofgem.cl",
                telefono: "+56 9 8765 4322",
              },
              {
                rol: "Especialista Técnico",
                nombre: "Ana Martínez",
                descripcion: "Infraestructura, integraciones y soporte técnico",
                contacto: "ana.martinez@sofgem.cl",
                telefono: "+56 9 8765 4323",
              },
            ].map((miembro, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{miembro.nombre}</h3>
                  <p className="text-primary font-medium mb-2">{miembro.rol}</p>
                  <p className="text-sm text-muted-foreground mb-4">{miembro.descripcion}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{miembro.contacto}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{miembro.telefono}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">¿Listo para comenzar tu implementación?</h2>
          <p className="text-xl mb-8 opacity-90">Nuestro equipo está preparado para guiarte en cada paso del proceso</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Reunión de Inicio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Descargar Guía Completa
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
