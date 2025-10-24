import { create } from 'zustand';

export interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  credits: number;
  status: 'active' | 'archived';
  tech: string[];
  preview?: string;
}

interface ProjectStore {
  projects: Project[];
  credits: number;
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  deleteProject: (id: string) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  setCredits: (credits: number) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [
    {
      id: '1',
      name: 'Landing Restaurante',
      description: 'Sitio web moderno para restaurante con menú digital',
      createdAt: new Date('2025-01-15'),
      updatedAt: new Date('2025-01-15'),
      credits: 5234,
      status: 'active',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      preview: '/examples/restaurant.png',
    },
    {
      id: '2',
      name: 'Dashboard Analytics',
      description: 'Panel de control con gráficos y métricas',
      createdAt: new Date('2025-01-18'),
      updatedAt: new Date('2025-01-20'),
      credits: 12567,
      status: 'active',
      tech: ['Next.js', 'Recharts', 'shadcn/ui'],
      preview: '/examples/dashboard.png',
    },
    {
      id: '3',
      name: 'E-commerce Store',
      description: 'Tienda online con carrito y pagos',
      createdAt: new Date('2025-01-22'),
      updatedAt: new Date('2025-01-24'),
      credits: 18923,
      status: 'active',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      preview: '/examples/ecommerce.png',
    },
  ],
  credits: 87500,
  addProject: (project) =>
    set((state) => ({
      projects: [
        {
          ...project,
          id: Date.now().toString(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ...state.projects,
      ],
    })),
  deleteProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== id),
    })),
  updateProject: (id, updates) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === id ? { ...p, ...updates, updatedAt: new Date() } : p
      ),
    })),
  setCredits: (credits) => set({ credits }),
}));
