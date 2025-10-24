'use client';

import React from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Code, ArrowLeft, User, Mail, Shield } from 'lucide-react';

export default function AccountSettingsPage() {
  const { user } = useUser();

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
          <h1 className="text-3xl font-bold mb-2">Configuración de Cuenta</h1>
          <p className="text-gray-400 mb-8">Gestiona tu información personal y preferencias</p>

          <div className="space-y-6">
            <Card className="p-6 glassmorphism">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Información Personal</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                  <Input
                    value={user?.fullName || ''}
                    disabled
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    value={user?.primaryEmailAddress?.emailAddress || ''}
                    disabled
                    className="bg-background/50"
                  />
                </div>

                <p className="text-sm text-gray-400">
                  Para cambiar tu información personal, usa el botón de perfil en la esquina superior derecha.
                </p>
              </div>
            </Card>

            <Card className="p-6 glassmorphism">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Seguridad</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-primary/20">
                  <div>
                    <div className="font-medium">Autenticación de Dos Factores</div>
                    <div className="text-sm text-gray-400">Agrega una capa extra de seguridad</div>
                  </div>
                  <Button variant="outline" className="border-primary/50">
                    Configurar
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-primary/20">
                  <div>
                    <div className="font-medium">Cambiar Contraseña</div>
                    <div className="text-sm text-gray-400">Actualiza tu contraseña regularmente</div>
                  </div>
                  <Button variant="outline" className="border-primary/50">
                    Cambiar
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 glassmorphism border-red-500/20">
              <h2 className="text-xl font-semibold mb-4 text-red-500">Zona de Peligro</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div>
                    <div className="font-medium">Eliminar Cuenta</div>
                    <div className="text-sm text-gray-400">Elimina permanentemente tu cuenta y todos tus datos</div>
                  </div>
                  <Button variant="outline" className="border-red-500/50 text-red-500 hover:bg-red-500/10">
                    Eliminar
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
