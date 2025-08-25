import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Search,
  Filter,
  BookOpen,
  Shield,
  Settings,
  GraduationCap,
  Clock,
  ExternalLink,
  Star,
  Eye,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DocumentacionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              {/* Reemplazando logo placeholder with imagen real de Sofgem */}
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
            <Link href="#documentacion" className="text-sm font-medium text-primary">
              Documentación
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
      <section className="py-12 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl font-bold mb-4">Centro de Documentación</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Accede a manuales, guías, políticas y toda la documentación necesaria para aprovechar al máximo nuestro
              sistema ERP
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar en la documentación..." className="pl-10 pr-4 py-3 text-lg" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" size="sm">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <Tabs defaultValue="todos" className="w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
              <TabsList className="grid grid-cols-6 w-full lg:w-auto">
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="manuales">Manuales</TabsTrigger>
                <TabsTrigger value="politicas">Políticas</TabsTrigger>
                <TabsTrigger value="tecnicos">Técnicos</TabsTrigger>
                <TabsTrigger value="capacitacion">Capacitación</TabsTrigger>
                <TabsTrigger value="certificacion">Certificación</TabsTrigger>
              </TabsList>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
                <select className="px-3 py-2 border rounded-md text-sm">
                  <option>Más recientes</option>
                  <option>Más populares</option>
                  <option>A-Z</option>
                  <option>Por categoría</option>
                </select>
              </div>
            </div>

            {/* Todos Tab */}
            <TabsContent value="todos" className="space-y-8">
              {/* Featured Documents */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Documentos Destacados</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      titulo: "Guía de Inicio Rápido",
                      descripcion: "Todo lo que necesitas para comenzar con el sistema ERP",
                      tipo: "PDF",
                      tamaño: "2.1 MB",
                      categoria: "Manual",
                      popular: true,
                      actualizado: "15 Nov 2024",
                    },
                    {
                      titulo: "Manual de Facturación Electrónica",
                      descripcion: "Guía completa para implementar facturación electrónica",
                      tipo: "PDF",
                      tamaño: "3.5 MB",
                      categoria: "Manual",
                      popular: true,
                      actualizado: "10 Nov 2024",
                    },
                    {
                      titulo: "Requisitos Técnicos del Sistema",
                      descripcion: "Especificaciones técnicas y requisitos de hardware",
                      tipo: "PDF",
                      tamaño: "1.8 MB",
                      categoria: "Técnico",
                      popular: false,
                      actualizado: "08 Nov 2024",
                    },
                  ].map((doc, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow relative">
                      {doc.popular && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        </div>
                      )}
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <Badge variant="outline">{doc.tipo}</Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{doc.titulo}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{doc.descripcion}</p>
                        <div className="space-y-2 text-xs text-muted-foreground mb-4">
                          <div className="flex justify-between">
                            <span>Categoría:</span>
                            <Badge variant="secondary" className="text-xs">
                              {doc.categoria}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Tamaño:</span>
                            <span>{doc.tamaño}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Actualizado:</span>
                            <span>{doc.actualizado}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All Documents Grid */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Toda la Documentación</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      titulo: "Políticas de Privacidad",
                      tipo: "PDF",
                      tamaño: "850 KB",
                      categoria: "Política",
                      actualizado: "05 Nov 2024",
                    },
                    {
                      titulo: "Términos de Servicio",
                      tipo: "PDF",
                      tamaño: "1.2 MB",
                      categoria: "Política",
                      actualizado: "05 Nov 2024",
                    },
                    {
                      titulo: "Manual de Configuración",
                      tipo: "PDF",
                      tamaño: "4.1 MB",
                      categoria: "Manual",
                      actualizado: "03 Nov 2024",
                    },
                    {
                      titulo: "Guía de Integración API",
                      tipo: "HTML",
                      tamaño: "Online",
                      categoria: "Técnico",
                      actualizado: "01 Nov 2024",
                    },
                    {
                      titulo: "Procedimientos de Certificación",
                      tipo: "PDF",
                      tamaño: "2.8 MB",
                      categoria: "Certificación",
                      actualizado: "30 Oct 2024",
                    },
                    {
                      titulo: "Manual de Capacitación Básica",
                      tipo: "PDF",
                      tamaño: "5.2 MB",
                      categoria: "Capacitación",
                      actualizado: "28 Oct 2024",
                    },
                    {
                      titulo: "Guía de Solución de Problemas",
                      tipo: "PDF",
                      tamaño: "3.1 MB",
                      categoria: "Manual",
                      actualizado: "25 Oct 2024",
                    },
                    {
                      titulo: "Especificaciones de Seguridad",
                      tipo: "PDF",
                      tamaño: "1.9 MB",
                      categoria: "Técnico",
                      actualizado: "22 Oct 2024",
                    },
                  ].map((doc, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-4">
                        <div className="flex items-center justify-between mb-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <Badge variant="outline" className="text-xs">
                            {doc.tipo}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-sm mb-2 line-clamp-2">{doc.titulo}</h4>
                        <div className="text-xs text-muted-foreground space-y-1 mb-3">
                          <div className="flex justify-between">
                            <span>{doc.categoria}</span>
                            <span>{doc.tamaño}</span>
                          </div>
                          <div>{doc.actualizado}</div>
                        </div>
                        <div className="flex gap-1">
                          <Button size="sm" className="flex-1 text-xs">
                            <Download className="h-3 w-3 mr-1" />
                            Descargar
                          </Button>
                          <Button size="sm" variant="outline" className="px-2 bg-transparent">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Manuales Tab */}
            <TabsContent value="manuales" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    titulo: "Manual del Usuario Final",
                    descripcion: "Guía completa para usuarios del sistema ERP",
                    tipo: "PDF",
                    tamaño: "6.2 MB",
                    paginas: "124 páginas",
                    actualizado: "15 Nov 2024",
                  },
                  {
                    titulo: "Manual del Administrador",
                    descripcion: "Configuración y administración del sistema",
                    tipo: "PDF",
                    tamaño: "8.1 MB",
                    paginas: "156 páginas",
                    actualizado: "12 Nov 2024",
                  },
                  {
                    titulo: "Manual de Facturación Electrónica",
                    descripcion: "Implementación y uso de facturación electrónica",
                    tipo: "PDF",
                    tamaño: "3.5 MB",
                    paginas: "78 páginas",
                    actualizado: "10 Nov 2024",
                  },
                  {
                    titulo: "Manual de Reportes",
                    descripcion: "Generación y personalización de reportes",
                    tipo: "PDF",
                    tamaño: "2.8 MB",
                    paginas: "65 páginas",
                    actualizado: "08 Nov 2024",
                  },
                  {
                    titulo: "Manual de Integración",
                    descripcion: "Conectar el ERP con otros sistemas",
                    tipo: "PDF",
                    tamaño: "4.3 MB",
                    paginas: "92 páginas",
                    actualizado: "05 Nov 2024",
                  },
                  {
                    titulo: "Manual de Migración de Datos",
                    descripcion: "Transferir datos desde otros sistemas",
                    tipo: "PDF",
                    tamaño: "3.1 MB",
                    paginas: "71 páginas",
                    actualizado: "03 Nov 2024",
                  },
                ].map((manual, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                        <Badge variant="outline">{manual.tipo}</Badge>
                      </div>
                      <CardTitle className="text-lg">{manual.titulo}</CardTitle>
                      <CardDescription>{manual.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex justify-between">
                          <span>Tamaño:</span>
                          <span>{manual.tamaño}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Páginas:</span>
                          <span>{manual.paginas}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Actualizado:</span>
                          <span>{manual.actualizado}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Descargar
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Políticas Tab */}
            <TabsContent value="politicas" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    titulo: "Política de Privacidad",
                    descripcion: "Cómo manejamos y protegemos tu información personal",
                    version: "v2.1",
                    vigencia: "Vigente desde Nov 2024",
                    tipo: "PDF",
                    tamaño: "850 KB",
                  },
                  {
                    titulo: "Términos y Condiciones de Servicio",
                    descripcion: "Condiciones legales para el uso de nuestros servicios",
                    version: "v3.0",
                    vigencia: "Vigente desde Nov 2024",
                    tipo: "PDF",
                    tamaño: "1.2 MB",
                  },
                  {
                    titulo: "Política de Seguridad de Datos",
                    descripcion: "Medidas de seguridad y protección de información",
                    version: "v1.8",
                    vigencia: "Vigente desde Oct 2024",
                    tipo: "PDF",
                    tamaño: "1.1 MB",
                  },
                  {
                    titulo: "Política de Uso Aceptable",
                    descripcion: "Normas para el uso apropiado del sistema",
                    version: "v2.3",
                    vigencia: "Vigente desde Oct 2024",
                    tipo: "PDF",
                    tamaño: "750 KB",
                  },
                  {
                    titulo: "Política de Retención de Datos",
                    descripcion: "Tiempos de conservación y eliminación de datos",
                    version: "v1.5",
                    vigencia: "Vigente desde Sep 2024",
                    tipo: "PDF",
                    tamaño: "680 KB",
                  },
                  {
                    titulo: "Política de Soporte y SLA",
                    descripcion: "Niveles de servicio y tiempos de respuesta garantizados",
                    version: "v2.0",
                    vigencia: "Vigente desde Sep 2024",
                    tipo: "PDF",
                    tamaño: "920 KB",
                  },
                ].map((politica, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">{politica.version}</Badge>
                          <p className="text-xs text-muted-foreground mt-1">{politica.vigencia}</p>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{politica.titulo}</CardTitle>
                      <CardDescription>{politica.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <span>Formato: {politica.tipo}</span>
                        <span>Tamaño: {politica.tamaño}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Descargar
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Técnicos Tab */}
            <TabsContent value="tecnicos" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    titulo: "Requisitos del Sistema",
                    descripcion: "Especificaciones técnicas mínimas y recomendadas",
                    tipo: "PDF",
                    tamaño: "1.8 MB",
                    categoria: "Infraestructura",
                  },
                  {
                    titulo: "Guía de Instalación",
                    descripcion: "Proceso paso a paso para instalar el sistema",
                    tipo: "PDF",
                    tamaño: "3.2 MB",
                    categoria: "Instalación",
                  },
                  {
                    titulo: "Documentación API REST",
                    descripcion: "Referencia completa de endpoints y métodos",
                    tipo: "HTML",
                    tamaño: "Online",
                    categoria: "API",
                  },
                  {
                    titulo: "Configuración de Base de Datos",
                    descripcion: "Setup y optimización de base de datos",
                    tipo: "PDF",
                    tamaño: "2.5 MB",
                    categoria: "Base de Datos",
                  },
                  {
                    titulo: "Guía de Seguridad",
                    descripcion: "Configuración de seguridad y mejores prácticas",
                    tipo: "PDF",
                    tamaño: "2.1 MB",
                    categoria: "Seguridad",
                  },
                  {
                    titulo: "Manual de Backup y Recuperación",
                    descripcion: "Procedimientos de respaldo y restauración",
                    tipo: "PDF",
                    tamaño: "1.9 MB",
                    categoria: "Backup",
                  },
                ].map((doc, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                          <Settings className="h-5 w-5 text-purple-600" />
                        </div>
                        <Badge variant="outline">{doc.categoria}</Badge>
                      </div>
                      <CardTitle className="text-lg">{doc.titulo}</CardTitle>
                      <CardDescription>{doc.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <span>Formato: {doc.tipo}</span>
                        <span>Tamaño: {doc.tamaño}</span>
                      </div>
                      <div className="flex gap-2">
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

            {/* Capacitación Tab */}
            <TabsContent value="capacitacion" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    titulo: "Programa de Capacitación Básica",
                    descripcion: "Curso introductorio para nuevos usuarios",
                    duracion: "8 horas",
                    modalidad: "Presencial/Virtual",
                    nivel: "Básico",
                    tipo: "PDF",
                    tamaño: "5.2 MB",
                  },
                  {
                    titulo: "Capacitación Avanzada en Reportes",
                    descripcion: "Creación y personalización de reportes complejos",
                    duracion: "12 horas",
                    modalidad: "Virtual",
                    nivel: "Avanzado",
                    tipo: "PDF",
                    tamaño: "4.8 MB",
                  },
                  {
                    titulo: "Taller de Facturación Electrónica",
                    descripcion: "Implementación completa de facturación electrónica",
                    duracion: "6 horas",
                    modalidad: "Presencial",
                    nivel: "Intermedio",
                    tipo: "PDF",
                    tamaño: "3.1 MB",
                  },
                  {
                    titulo: "Capacitación para Administradores",
                    descripcion: "Gestión y administración del sistema ERP",
                    duracion: "16 horas",
                    modalidad: "Presencial/Virtual",
                    nivel: "Avanzado",
                    tipo: "PDF",
                    tamaño: "7.3 MB",
                  },
                ].map((capacitacion, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
                          <GraduationCap className="h-5 w-5 text-orange-600" />
                        </div>
                        <Badge
                          variant={
                            capacitacion.nivel === "Básico"
                              ? "secondary"
                              : capacitacion.nivel === "Intermedio"
                                ? "default"
                                : "destructive"
                          }
                        >
                          {capacitacion.nivel}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{capacitacion.titulo}</CardTitle>
                      <CardDescription>{capacitacion.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex justify-between">
                          <span>Duración:</span>
                          <span>{capacitacion.duracion}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Modalidad:</span>
                          <span>{capacitacion.modalidad}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Material:</span>
                          <span>
                            {capacitacion.tipo} - {capacitacion.tamaño}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Descargar Material
                        </Button>
                        <Button size="sm" variant="outline">
                          Inscribirse
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Certificación Tab */}
            <TabsContent value="certificacion" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Proceso de Certificación SII - Facturación Electrónica</CardTitle>
                  <CardDescription>
                    Pasos para obtener la certificación ante el Servicio de Impuestos Internos para emitir documentos
                    electrónicos en Chile
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      {
                        paso: "1",
                        titulo: "Solicitud al SII",
                        descripcion: "Presentación del Formulario 3230 y documentos requeridos",
                        tiempo: "1-2 días",
                      },
                      {
                        paso: "2",
                        titulo: "Configuración Técnica",
                        descripcion: "Setup de certificados digitales y conexión con SII",
                        tiempo: "2-3 días",
                      },
                      {
                        paso: "3",
                        titulo: "Pruebas de Certificación",
                        descripcion: "Envío de documentos de prueba según protocolo SII",
                        tiempo: "3-5 días",
                      },
                      {
                        paso: "4",
                        titulo: "Autorización SII",
                        descripcion: "Aprobación y emisión de resolución de autorización",
                        tiempo: "5-10 días",
                      },
                    ].map((paso, index) => (
                      <div key={index} className="text-center">
                        <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                          {paso.paso}
                        </div>
                        <h4 className="font-semibold mb-2">{paso.titulo}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{paso.descripcion}</p>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {paso.tiempo}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tipos de Documentos Electrónicos SII</CardTitle>
                  <CardDescription>
                    Documentos tributarios electrónicos que puedes emitir una vez certificado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        tipo: "Factura Electrónica",
                        codigo: "Tipo 33",
                        descripcion: "Documento principal para ventas B2B",
                        estado: "Disponible",
                      },
                      {
                        tipo: "Boleta Electrónica",
                        codigo: "Tipo 39",
                        descripcion: "Para ventas a consumidores finales",
                        estado: "Disponible",
                      },
                      {
                        tipo: "Nota de Crédito",
                        codigo: "Tipo 61",
                        descripcion: "Anulaciones y devoluciones",
                        estado: "Disponible",
                      },
                      {
                        tipo: "Nota de Débito",
                        codigo: "Tipo 56",
                        descripcion: "Cargos adicionales",
                        estado: "Disponible",
                      },
                    ].map((doc, index) => (
                      <div key={index} className="p-4 border rounded-lg text-center">
                        <h4 className="font-semibold mb-1">{doc.tipo}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{doc.codigo}</p>
                        <p className="text-xs text-muted-foreground mb-3">{doc.descripcion}</p>
                        <Badge variant="secondary">{doc.estado}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    titulo: "Guía de Certificación SII",
                    descripcion: "Manual completo del proceso de certificación ante el SII",
                    tipo: "PDF",
                    tamaño: "2.8 MB",
                    requisitos: "Formulario 3230 completado",
                    actualizado: "15 Nov 2024",
                  },
                  {
                    titulo: "Formulario 3230 - SII",
                    descripcion: "Solicitud de autorización para emitir documentos electrónicos",
                    tipo: "PDF",
                    tamaño: "450 KB",
                    requisitos: "RUT de empresa válido",
                    actualizado: "10 Nov 2024",
                  },
                  {
                    titulo: "Pruebas de Certificación SII",
                    descripcion: "Documentos de prueba requeridos por el SII",
                    tipo: "PDF",
                    tamaño: "1.5 MB",
                    requisitos: "Certificado digital válido",
                    actualizado: "08 Nov 2024",
                  },
                  {
                    titulo: "Requisitos Técnicos SII",
                    descripcion: "Especificaciones técnicas para conexión con SII",
                    tipo: "PDF",
                    tamaño: "1.2 MB",
                    requisitos: "Ninguno",
                    actualizado: "05 Nov 2024",
                  },
                  {
                    titulo: "Certificados Digitales",
                    descripcion: "Guía para obtener y configurar certificados digitales",
                    tipo: "PDF",
                    tamaño: "900 KB",
                    requisitos: "Empresa constituida legalmente",
                    actualizado: "03 Nov 2024",
                  },
                  {
                    titulo: "Resolución de Autorización",
                    descripcion: "Modelo de resolución emitida por el SII",
                    tipo: "PDF",
                    tamaño: "350 KB",
                    requisitos: "Proceso de certificación completado",
                    actualizado: "01 Nov 2024",
                  },
                ].map((doc, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-indigo-600" />
                        </div>
                        <Badge variant="outline">{doc.tipo}</Badge>
                      </div>
                      <CardTitle className="text-lg">{doc.titulo}</CardTitle>
                      <CardDescription>{doc.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex justify-between">
                          <span>Tamaño:</span>
                          <span>{doc.tamaño}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Requisitos:</span>
                          <span className="text-right text-xs">{doc.requisitos}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Actualizado:</span>
                          <span>{doc.actualizado}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
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

              <Card>
                <CardHeader>
                  <CardTitle>Enlaces Oficiales del SII</CardTitle>
                  <CardDescription>
                    Recursos oficiales del Servicio de Impuestos Internos para facturación electrónica
                  </CardDescription>
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
                    <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                      <a href="https://www.sii.cl/normativa_legislacion/" target="_blank" rel="noopener noreferrer">
                        <div className="text-left">
                          <div className="font-medium">Normativa y Legislación</div>
                          <div className="text-sm text-muted-foreground">Marco legal de facturación electrónica</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4 bg-transparent" asChild>
                      <a href="https://www.sii.cl/certificacion_digital/" target="_blank" rel="noopener noreferrer">
                        <div className="text-left">
                          <div className="font-medium">Certificación Digital</div>
                          <div className="text-sm text-muted-foreground">Información sobre certificados digitales</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-muted/50">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-muted-foreground mb-6">
            Nuestro equipo de soporte está disponible para ayudarte a encontrar la documentación que necesitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contactar Soporte</Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              Solicitar Documento
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
