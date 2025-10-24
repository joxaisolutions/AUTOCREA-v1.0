import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, Sparkles, Play, Users, Star, Shield, MessageSquare, Rocket, Zap } from 'lucide-react';

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
