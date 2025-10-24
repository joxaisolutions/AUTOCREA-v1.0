'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreVertical, Code, Clock, Zap, Play, Trash2, Archive } from 'lucide-react';
import type { Project } from '@/lib/stores/projectStore';
import { formatDate } from '@/lib/utils';

interface ProjectListItemProps {
  project: Project;
  onDelete?: (id: string) => void;
  onArchive?: (id: string) => void;
}

export function ProjectListItem({ project, onDelete, onArchive }: ProjectListItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-primary/20 bg-surface/50 hover:border-primary/50 transition-all hover:glow">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
        <Code className="w-6 h-6 text-white" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold truncate">{project.name}</h3>
        <p className="text-sm text-gray-400 truncate">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{formatDate(project.updatedAt)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-accent" />
          <span>{project.credits.toLocaleString()}</span>
        </div>
      </div>

      <Link href={`/projects/${project.id}`}>
        <Button className="bg-gradient-to-r from-primary to-secondary">
          <Play className="mr-2 h-4 w-4" />
          Abrir
        </Button>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-surface border-primary/20">
          <DropdownMenuItem onClick={() => onArchive?.(project.id)}>
            <Archive className="mr-2 h-4 w-4" />
            Archivar
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onDelete?.(project.id)}
            className="text-red-500"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
