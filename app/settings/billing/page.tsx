'use client';

import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, ArrowLeft, CreditCard, Zap, Check, Crown } from 'lucide-react';

const PLANS = [
  {
    name: 'Gratis',
    price: 0,
    credits: 100,
    features: [
      '100 créditos mensuales',
      'Hasta 3 proyectos',
      'Generación básica de código',
      'Soporte comunitario',
    ],
    current: true,
  },
  {
    name: 'Pro',
    price: 20,
    credits: 500,
    features: [
      '500 créditos mensuales',
      'Proyectos ilimitados',
      'Generación avanzada',
      'Preview en tiempo real',
      'Soporte prioritario',
      'Exportación de código',
    ],
    current: false,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    credits: 5000,
    features: [
      '5,000 créditos mensuales',
      'Todo en Pro',
      'API privada',
      'Modelos personalizados',
      'SLA garantizado',
      'Soporte dedicado 24/7',
    ],
    current: false,
  },
];

export default function BillingSettingsPage() {
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Facturación y Planes</h1>
          <p className="text-gray-400 mb-8">Gestiona tu suscripción y método de pago</p>

          {/* Current Plan */}
          <Card className="p-6 glassmorphism glow mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">Plan Actual: Gratis</h2>
                <p className="text-gray-400">100 créditos mensuales incluidos</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-2xl font-bold">87,500</span>
                <span className="text-gray-400">créditos disponibles</span>
              </div>
            </div>
          </Card>

          {/* Plans */}
          <h2 className="text-2xl font-bold mb-6">Planes Disponibles</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 relative ${
                  plan.popular
                    ? 'border-accent glow-accent'
                    : 'border-primary/20'
                } ${plan.current ? 'bg-primary/5' : 'bg-surface/50'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-accent to-primary text-xs font-bold rounded-bl-lg rounded-tr-lg">
                    POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400">/mes</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="font-medium">{plan.credits.toLocaleString()} créditos/mes</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.current
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? 'Plan Actual' : 'Mejorar'}
                </Button>
              </Card>
            ))}
          </div>

          {/* Payment Method */}
          <Card className="p-6 glassmorphism">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Método de Pago</h2>
            </div>

            <div className="text-center py-12 text-gray-400">
              <CreditCard className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No hay métodos de pago configurados</p>
              <Button className="mt-4 bg-gradient-to-r from-primary to-secondary">
                Agregar Tarjeta
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
