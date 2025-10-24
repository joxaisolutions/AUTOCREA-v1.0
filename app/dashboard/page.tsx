'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { ProjectListItem } from '@/components/dashboard/ProjectListItem';
import { useProjectStore } from '@/lib/stores/projectStore';
import { Code, Plus, Search, Grid3x3, List, Zap, FolderOpen } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const { projects, credits, deleteProject } = useProjectStore();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'recent' | 'name' | 'credits'>('recent');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects
    .filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'credits':
          return b.credits - a.credits;
        case 'recent':
        default:
          return b.updatedAt.getTime() - a.updatedAt.getTime();
      }
    });

  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      deleteProject(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-surface/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AUTOCREA</span>
            </Link>

            <nav className="flex gap-6">
              <Link href="/dashboard" className="text-accent font-medium">
                Proyectos
              </Link>
              <Link href="/docs" className="text-gray-400 hover:text-white transition">
                Documentación
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                {credits.toLocaleString()} créditos
              </span>
            </div>
            
            <Link href="/settings/billing">
              <Button variant="outline" size="sm" className="border-primary/50">
                <Plus className="w-4 h-4 mr-2" />
                Comprar
              </Button>
            </Link>
            
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mis Proyectos</h1>
            <p className="text-gray-400">{projects.length} proyectos creados</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-surface border-primary/20 rounded-lg focus:border-primary w-64"
              />
            </div>
            
            {/* View Toggle */}
            <div className="flex gap-2 p-1 bg-surface rounded-lg border border-primary/20">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid' ? 'bg-primary/20 text-primary' : 'hover:bg-primary/10'
                }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list' ? 'bg-primary/20 text-primary' : 'hover:bg-primary/10'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            
            {/* Sort */}
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-40 bg-surface border-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-surface border-primary/20">
                <SelectItem value="recent">Más recientes</SelectItem>
                <SelectItem value="name">Nombre A-Z</SelectItem>
                <SelectItem value="credits">Créditos usados</SelectItem>
              </SelectContent>
            </Select>
            
            {/* New Project Button */}
            <Link href="/projects/new">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                <Plus className="w-5 h-5 mr-2" />
                Nuevo Proyecto
              </Button>
            </Link>
          </div>
        </div>

        {/* Projects Grid/List */}
        {filteredProjects.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <ProjectListItem 
                  key={project.id} 
                  project={project}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-24">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <FolderOpen className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {searchQuery ? 'No se encontraron proyectos' : 'No tienes proyectos aún'}
            </h3>
            <p className="text-gray-400 mb-6">
              {searchQuery 
                ? 'Intenta con otros términos de búsqueda' 
                : 'Comienza creando tu primera aplicación'
              }
            </p>
            {!searchQuery && (
              <Link href="/projects/new">
                <Button className="bg-gradient-to-r from-primary to-secondary">
                  <Plus className="mr-2" />
                  Crear Primer Proyecto
                </Button>
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
