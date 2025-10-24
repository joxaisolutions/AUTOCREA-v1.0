'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Book, Zap, Terminal, FileCode, Settings, HelpCircle } from 'lucide-react';

export default function DocsPage() {
  const sections = [
    {
      title: 'Primeros Pasos',
      icon: Zap,
      articles: [
        { title: 'Introducción a AUTOCREA', href: '#intro' },
        { title: 'Tu primer proyecto', href: '#first-project' },
        { title: 'Entendiendo los créditos', href: '#credits' },
      ],
    },
    {
      title: 'Escribir Prompts',
      icon: FileCode,
      articles: [
        { title: 'Guía de prompts efectivos', href: '#prompts' },
        { title: 'Ejemplos de prompts', href: '#examples' },
        { title: 'Mejores prácticas', href: '#best-practices' },
      ],
    },
    {
      title: 'Usar el IDE',
      icon: Terminal,
      articles: [
        { title: 'Navegación del IDE', href: '#ide-nav' },
        { title: 'Editor de código', href: '#editor' },
        { title: 'Terminal integrada', href: '#terminal' },
        { title: 'Vista previa en vivo', href: '#preview' },
      ],
    },
    {
      title: 'Configuración',
      icon: Settings,
      articles: [
        { title: 'Gestión de cuenta', href: '#account' },
        { title: 'Planes y facturación', href: '#billing' },
        { title: 'Exportar proyectos', href: '#export' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-surface/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">AUTOCREA</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-gray-400 hover:text-white transition">
              Dashboard
            </Link>
            <Link href="/docs" className="text-accent font-medium">
              Documentación
            </Link>
            <Link href="/sign-in">
              <Button className="bg-gradient-to-r from-primary to-secondary">
                Iniciar Sesión
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-background to-background-light">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Book className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Documentación Completa</span>
          </div>

          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
              Centro de Ayuda
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Todo lo que necesitas saber para crear aplicaciones increíbles con AUTOCREA
          </p>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Card key={section.title} className="p-6 glassmorphism glow hover:border-primary/50 transition">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>

                <ul className="space-y-3">
                  {section.articles.map((article) => (
                    <li key={article.title}>
                      <a
                        href={article.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-accent transition p-2 rounded hover:bg-primary/5"
                      >
                        <span>→</span>
                        <span>{article.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-24 bg-gradient-to-t from-background to-background-light" id="intro">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Guía Rápida</h2>

            <Card className="p-8 glassmorphism mb-8">
              <h3 className="text-2xl font-bold mb-4">¿Qué es AUTOCREA?</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                AUTOCREA es una plataforma revolucionaria que transforma tus ideas en aplicaciones web funcionales
                mediante el poder de JoxCoder v1, nuestro modelo de IA especializado en generación de código.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Con AUTOCREA, no necesitas ser un experto en programación. Simplemente describe lo que quieres crear
                en lenguaje natural, y nuestra IA generará código limpio, profesional y listo para producción.
              </p>
            </Card>

            <Card className="p-8 glassmorphism mb-8" id="first-project">
              <h3 className="text-2xl font-bold mb-4">Crear tu Primer Proyecto</h3>
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <div>
                    <strong className="text-white">Regístrate</strong> - Crea tu cuenta gratuita y obtén 100 créditos de bienvenida
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <div>
                    <strong className="text-white">Describe tu idea</strong> - Ve a "Nuevo Proyecto" y escribe qué quieres crear
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <div>
                    <strong className="text-white">Genera el código</strong> - JoxCoder creará tu aplicación en segundos
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <div>
                    <strong className="text-white">Edita y personaliza</strong> - Usa nuestro IDE integrado para ajustar el código
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                    5
                  </span>
                  <div>
                    <strong className="text-white">Publica</strong> - Exporta tu código o despliega directamente desde AUTOCREA
                  </div>
                </li>
              </ol>
            </Card>

            <Card className="p-8 glassmorphism mb-8" id="prompts">
              <h3 className="text-2xl font-bold mb-4">Guía de Prompts Efectivos</h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Para obtener los mejores resultados con JoxCoder, sigue estas recomendaciones al escribir tus prompts:
                </p>
                
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                    <h4 className="font-semibold text-white mb-2">✓ Sé Específico</h4>
                    <p className="text-sm">En lugar de "una tienda online", escribe "una tienda de ropa con filtros por categoría, tallas y colores, carrito de compras y checkout con Stripe".</p>
                  </div>

                  <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                    <h4 className="font-semibold text-white mb-2">✓ Incluye Detalles Visuales</h4>
                    <p className="text-sm">Menciona colores, estilos y layouts: "diseño minimalista con colores pastel, tipografía sans-serif moderna, grid de 3 columnas".</p>
                  </div>

                  <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                    <h4 className="font-semibold text-white mb-2">✓ Define Funcionalidades</h4>
                    <p className="text-sm">Lista las características importantes: "formulario de contacto con validación, mapa interactivo, galería de imágenes con lightbox".</p>
                  </div>

                  <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                    <h4 className="font-semibold text-white mb-2">✓ Menciona Tecnologías</h4>
                    <p className="text-sm">Si tienes preferencias: "usando React y Tailwind CSS" o "con animaciones usando Framer Motion".</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 glassmorphism mb-8" id="ide-nav">
              <h3 className="text-2xl font-bold mb-4">Navegación del IDE</h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  El IDE de AUTOCREA está diseñado para ser intuitivo y poderoso. Aquí te explicamos sus componentes principales:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Explorador de Archivos (Izquierda)</h4>
                    <p className="text-sm">Navega por todos los archivos de tu proyecto. Haz click en cualquier archivo para abrirlo en el editor.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Editor de Código (Centro)</h4>
                    <p className="text-sm">Editor Monaco con syntax highlighting, autocompletado y múltiples pestañas. Soporta atajos de teclado estándar.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Vista Previa (Derecha)</h4>
                    <p className="text-sm">Ve los cambios en tiempo real mientras editas. La preview se actualiza automáticamente.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Terminal (Abajo)</h4>
                    <p className="text-sm">Ejecuta comandos, instala dependencias y ve los logs de tu aplicación.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 glassmorphism" id="credits">
              <h3 className="text-2xl font-bold mb-4">Sistema de Créditos</h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  AUTOCREA usa un sistema de créditos para generar código. Cada generación consume créditos según la complejidad:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-lg bg-background/50 border border-primary/20 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">~5,000</div>
                    <div className="text-sm">Landing Page Simple</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-primary/20 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">~12,000</div>
                    <div className="text-sm">Dashboard Completo</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-primary/20 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">~20,000</div>
                    <div className="text-sm">App con Backend</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p><strong className="text-white">Plan Gratis:</strong> 100 créditos mensuales</p>
                  <p><strong className="text-white">Plan Pro:</strong> 500 créditos mensuales ($20/mes)</p>
                  <p><strong className="text-white">Plan Enterprise:</strong> 5,000 créditos mensuales ($99/mes)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="text-4xl font-bold mb-4">¿Necesitas más ayuda?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Nuestro equipo de soporte está aquí para ayudarte
          </p>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Contactar Soporte
          </Button>
        </div>
      </section>
    </div>
  );
}
