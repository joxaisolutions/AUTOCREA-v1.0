import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Sparkles, Play, Users, Star, Shield, MessageSquare, Rocket, Zap, Terminal, FileCode, Globe, Lock, Gauge, Check } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-light to-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-surface/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">AUTOCREA</span>
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link href="/docs" className="text-gray-400 hover:text-white transition">
              Documentación
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="border-primary/50">
                Dashboard
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="bg-gradient-to-r from-primary to-secondary">
                Iniciar Sesión
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,144,226,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-pulse">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Potenciado por JoxCoder v1</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
              DE IDEA A LA
              <br />
              MATERIALIZACIÓN
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Transforma ideas en aplicaciones web completas con JoxCoder v1. 
            Desarrollo autónomo, código limpio, deploy instantáneo.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                <Sparkles className="mr-2" />
                Comenzar Gratis - 100 tokens
              </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Play className="mr-2" />
              Ver Demo
            </Button>
          </div>

          <div className="flex gap-8 justify-center mt-12 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>10,000+ usuarios activos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent" />
              <span>4.9/5 valoración</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>100% privado y seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Crea Apps en 3 Pasos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl glassmorphism glow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div className="text-5xl font-bold text-primary mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4">Describe tu aplicación</h3>
              <p className="text-gray-400">
                Explica qué quieres crear en lenguaje natural
              </p>
            </div>

            <div className="p-8 rounded-xl glassmorphism glow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="text-5xl font-bold text-primary mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4">JoxCoder la genera</h3>
              <p className="text-gray-400">
                Nuestra IA crea código limpio en segundos
              </p>
            </div>

            <div className="p-8 rounded-xl glassmorphism glow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8" />
              </div>
              <div className="text-5xl font-bold text-primary mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Edita y deploy</h3>
              <p className="text-gray-400">
                Personaliza en el IDE y publica en 1 click
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ejemplos Reales */}
      <section className="py-24 bg-gradient-to-b from-background to-background-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Aplicaciones Reales Generadas
          </h2>
          <p className="text-gray-400 text-center mb-16">
            Estos proyectos fueron creados con solo una descripción
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 glassmorphism glow hover:border-primary/50 transition">
              <div className="aspect-video mb-4 rounded-lg bg-background/50 border border-primary/20 flex items-center justify-center">
                <FileCode className="w-12 h-12 text-primary/30" />
              </div>
              <h3 className="text-xl font-bold mb-2">Landing de Restaurante</h3>
              <p className="text-sm text-gray-400 mb-4">
                Hero, menú con categorías, galería, formulario contacto
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-accent" />
                  5,234 tokens
                </span>
                <span>38 segundos</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind', 'Framer Motion'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 glassmorphism glow hover:border-primary/50 transition">
              <div className="aspect-video mb-4 rounded-lg bg-background/50 border border-primary/20 flex items-center justify-center">
                <Gauge className="w-12 h-12 text-primary/30" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dashboard Analytics</h3>
              <p className="text-sm text-gray-400 mb-4">
                Gráficos interactivos, tablas, filtros, exportación
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-accent" />
                  12,567 tokens
                </span>
                <span>1 minuto 12s</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Recharts', 'shadcn/ui'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 glassmorphism glow hover:border-primary/50 transition">
              <div className="aspect-video mb-4 rounded-lg bg-background/50 border border-primary/20 flex items-center justify-center">
                <Globe className="w-12 h-12 text-primary/30" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-commerce Store</h3>
              <p className="text-sm text-gray-400 mb-4">
                Grid de productos, carrito, checkout, panel admin
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-accent" />
                  18,923 tokens
                </span>
                <span>1 minuto 45s</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Stripe', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Todo lo que necesitas para crear
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 glassmorphism">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">IDE Completo</h3>
              <p className="text-gray-400">
                Editor Monaco, terminal integrada y vista previa en tiempo real
              </p>
            </Card>

            <Card className="p-6 glassmorphism">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ejecución Instantánea</h3>
              <p className="text-gray-400">
                Ejecuta tu código directamente en el navegador sin configuración
              </p>
            </Card>

            <Card className="p-6 glassmorphism">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Deploy en 1 Click</h3>
              <p className="text-gray-400">
                Publica tu aplicación con un solo click y compártela al mundo
              </p>
            </Card>

            <Card className="p-6 glassmorphism">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Seguro</h3>
              <p className="text-gray-400">
                Tus proyectos están protegidos con encriptación de nivel empresarial
              </p>
            </Card>

            <Card className="p-6 glassmorphism">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">IA Avanzada</h3>
              <p className="text-gray-400">
                JoxCoder v1 entiende tu intención y genera código profesional
              </p>
            </Card>

            <Card className="p-6 glassmorphism">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <FileCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Código Limpio</h3>
              <p className="text-gray-400">
                Genera código bien estructurado, comentado y listo para producción
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-t from-background to-background-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            ¿Listo para crear tu próxima app?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Únete a miles de creadores que confían en AUTOCREA
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
              <Zap className="mr-2" />
              Comenzar Ahora - Gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-surface/30 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; 2025 AUTOCREA - Parte del ecosistema JoxAI</p>
        </div>
      </footer>
    </div>
  );
}
