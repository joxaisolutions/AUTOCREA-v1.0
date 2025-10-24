'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Code, ArrowLeft, Sparkles, Zap, Loader2 } from 'lucide-react';
import { useProjectStore } from '@/lib/stores/projectStore';

export default function NewProjectPage() {
  const router = useRouter();
  const { addProject, credits, setCredits } = useProjectStore();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [generatedProject, setGeneratedProject] = useState<any>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulación de generación de proyecto
    setTimeout(() => {
      const estimatedTokens = Math.floor(Math.random() * 10000) + 3000;
      const newProject = {
        name: prompt.split(' ').slice(0, 3).join(' ') || 'Nuevo Proyecto',
        description: prompt.substring(0, 100),
        credits: estimatedTokens,
        status: 'active' as const,
        tech: ['React', 'Next.js', 'Tailwind'],
      };

      addProject(newProject);
      setCredits(credits - estimatedTokens);
      setGeneratedProject(newProject);
      setIsGenerating(false);
      setShowSuccess(true);
    }, 3000);
  };

  const handleContinue = () => {
    setShowSuccess(false);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-surface/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
              <ArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </Link>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AUTOCREA</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                {credits.toLocaleString()} créditos
              </span>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-pulse">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Potenciado por JoxCoder v1</span>
            </div>

            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
                ¿Qué quieres crear hoy?
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Describe tu idea en lenguaje natural y JoxCoder la convertirá en código
            </p>
          </div>

          <Card className="p-8 glassmorphism glow">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Describe tu aplicación
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ejemplo: Crea una landing page para un restaurante moderno con sección hero, menú con categorías, galería de fotos y formulario de contacto. Usa colores cálidos y diseño minimalista."
                className="w-full h-48 p-4 bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none resize-none"
                disabled={isGenerating}
              />
            </div>

            <div className="bg-background/50 border border-primary/20 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p className="font-medium text-white mb-2">Tips para mejores resultados:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Sé específico sobre la funcionalidad que necesitas</li>
                    <li>Menciona el estilo visual y colores si tienes preferencias</li>
                    <li>Indica el tipo de usuarios que usarán la app</li>
                    <li>Especifica frameworks o tecnologías si es necesario</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Costo estimado: <span className="text-accent font-medium">3,000 - 15,000 tokens</span>
              </div>

              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generar Aplicación
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Examples */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Ejemplos de prompts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Landing Page',
                  prompt: 'Crea una landing page para una startup de IA con hero section, features, pricing y CTA.',
                },
                {
                  title: 'Dashboard',
                  prompt: 'Dashboard de analytics con gráficos de barras, líneas, métricas en tarjetas y tabla de datos.',
                },
                {
                  title: 'Portfolio',
                  prompt: 'Portfolio personal para desarrollador con sección de proyectos, skills, experiencia y contacto.',
                },
                {
                  title: 'Blog',
                  prompt: 'Blog minimalista con lista de artículos, categorías, búsqueda y vista de artículo individual.',
                },
              ].map((example) => (
                <button
                  key={example.title}
                  onClick={() => setPrompt(example.prompt)}
                  className="p-4 rounded-lg border border-primary/20 bg-surface/30 hover:border-primary/50 hover:bg-surface/50 transition-all text-left"
                  disabled={isGenerating}
                >
                  <h4 className="font-medium mb-2">{example.title}</h4>
                  <p className="text-sm text-gray-400">{example.prompt}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-surface border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              ¡Proyecto Generado!
            </DialogTitle>
          </DialogHeader>

          <div className="py-6 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-xl font-bold mb-2">{generatedProject?.name}</h3>
            <p className="text-gray-400 mb-6">{generatedProject?.description}</p>

            <div className="bg-background/50 border border-primary/20 rounded-lg p-4 mb-6">
              <div className="text-sm text-gray-400">
                Tokens utilizados: <span className="text-accent font-medium">{generatedProject?.credits.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={handleContinue}
                className="flex-1 border-primary/50"
              >
                Ver Dashboard
              </Button>
              <Button
                onClick={() => router.push(`/projects/${generatedProject?.id || '1'}`)}
                className="flex-1 bg-gradient-to-r from-primary to-secondary"
              >
                <Code className="mr-2" />
                Abrir en IDE
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
