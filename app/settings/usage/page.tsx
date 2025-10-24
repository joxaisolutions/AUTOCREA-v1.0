'use client';

import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, ArrowLeft, Zap, TrendingUp, Calendar } from 'lucide-react';

export default function UsageSettingsPage() {
  const usageData = [
    { date: '24 Oct', credits: 5234, project: 'Landing Restaurante' },
    { date: '23 Oct', credits: 12567, project: 'Dashboard Analytics' },
    { date: '22 Oct', credits: 18923, project: 'E-commerce Store' },
    { date: '21 Oct', credits: 3421, project: 'Portfolio Personal' },
    { date: '20 Oct', credits: 8765, project: 'Blog Minimalista' },
  ];

  const totalUsed = usageData.reduce((acc, item) => acc + item.credits, 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-primary/20 bg-surface/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al Dashboard</span>
            </Link>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AUTOCREA</span>
            </div>
          </div>
          
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Uso de Créditos</h1>
          <p className="text-gray-400 mb-8">Monitorea tu consumo mensual de créditos</p>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 glassmorphism">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm text-gray-400">Disponibles</span>
              </div>
              <div className="text-3xl font-bold">87,500</div>
              <div className="text-sm text-gray-400 mt-1">de 100,000 totales</div>
            </Card>

            <Card className="p-6 glassmorphism">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-400">Usados este mes</span>
              </div>
              <div className="text-3xl font-bold">{totalUsed.toLocaleString()}</div>
              <div className="text-sm text-green-500 mt-1">↓ 15% vs mes anterior</div>
            </Card>

            <Card className="p-6 glassmorphism">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-secondary" />
                <span className="text-sm text-gray-400">Promedio diario</span>
              </div>
              <div className="text-3xl font-bold">1,658</div>
              <div className="text-sm text-gray-400 mt-1">créditos/día</div>
            </Card>
          </div>

          {/* Usage History */}
          <Card className="p-6 glassmorphism">
            <h2 className="text-xl font-semibold mb-6">Historial de Uso</h2>

            <div className="space-y-4">
              {usageData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/50 transition"
                >
                  <div className="flex-1">
                    <div className="font-medium">{item.project}</div>
                    <div className="text-sm text-gray-400">{item.date}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="text-xl font-bold">{item.credits.toLocaleString()}</span>
                    <span className="text-gray-400">créditos</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-primary/20">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total este mes</span>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span>{totalUsed.toLocaleString()} créditos</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Buy More Credits */}
          <Card className="p-6 glassmorphism glow-accent mt-6 border-accent/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">¿Necesitas más créditos?</h3>
                <p className="text-gray-400">Mejora tu plan o compra créditos adicionales</p>
              </div>
              <Link href="/settings/billing">
                <Button className="bg-gradient-to-r from-primary to-secondary">
                  <Zap className="mr-2" />
                  Comprar Créditos
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
