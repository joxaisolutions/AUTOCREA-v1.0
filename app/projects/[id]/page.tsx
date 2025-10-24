'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { MonacoEditor } from '@/components/editor/MonacoEditor';
import { Terminal } from '@/components/editor/Terminal';
import { 
  Code, 
  Play, 
  Square, 
  Download, 
  Share2, 
  Settings, 
  FileCode,
  FolderTree,
  Terminal as TerminalIcon,
  Layout,
  Zap
} from 'lucide-react';

const DEFAULT_CODE = `import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          ¡Hola desde AUTOCREA!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Edita este código y observa los cambios en tiempo real
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Comenzar
        </button>
      </div>
    </div>
  );
}
`;

export default function ProjectIDEPage() {
  const params = useParams();
  const [code, setCode] = useState(DEFAULT_CODE);
  const [isRunning, setIsRunning] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [selectedFile, setSelectedFile] = useState('App.tsx');

  const fileTree = [
    { name: 'src', type: 'folder', children: [
      { name: 'App.tsx', type: 'file' },
      { name: 'index.tsx', type: 'file' },
      { name: 'styles.css', type: 'file' },
    ]},
    { name: 'public', type: 'folder', children: [
      { name: 'index.html', type: 'file' },
    ]},
    { name: 'package.json', type: 'file' },
  ];

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-surface/50 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">AUTOCREA</span>
            </Link>
            
            <div className="h-6 w-px bg-primary/20" />
            
            <div>
              <div className="text-sm font-medium">Proyecto #{params.id}</div>
              <div className="text-xs text-gray-400">Última edición hace 2 min</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowTerminal(!showTerminal)}
              className="border-primary/50"
            >
              <TerminalIcon className="w-4 h-4 mr-2" />
              Terminal
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-primary/50"
            >
              <Layout className="w-4 h-4 mr-2" />
              Vista Previa
            </Button>

            <div className="h-6 w-px bg-primary/20" />

            <Button
              onClick={handleRun}
              disabled={isRunning}
              className={isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-primary to-secondary'}
            >
              {isRunning ? (
                <>
                  <Square className="w-4 h-4 mr-2" />
                  Detener
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Ejecutar
                </>
              )}
            </Button>

            <Button variant="outline" size="sm" className="border-primary/50">
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>

            <Button variant="outline" size="sm" className="border-primary/50">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>

            <div className="h-6 w-px bg-primary/20" />

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">12,567 tokens</span>
            </div>

            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main IDE */}
      <div className="flex-1 flex overflow-hidden">
        {/* File Explorer */}
        <div className="w-64 border-r border-primary/20 bg-surface/30 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <FolderTree className="w-4 h-4 text-primary" />
              <span className="font-medium">Explorador</span>
            </div>

            <div className="space-y-1">
              {fileTree.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-primary/10 cursor-pointer">
                    {item.type === 'folder' ? (
                      <FolderTree className="w-4 h-4 text-accent" />
                    ) : (
                      <FileCode className="w-4 h-4 text-gray-400" />
                    )}
                    <span className="text-sm">{item.name}</span>
                  </div>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <button
                          key={childIndex}
                          onClick={() => setSelectedFile(child.name)}
                          className={`flex items-center gap-2 w-full px-2 py-1.5 rounded hover:bg-primary/10 text-left ${
                            selectedFile === child.name ? 'bg-primary/20 text-primary' : ''
                          }`}
                        >
                          <FileCode className="w-4 h-4" />
                          <span className="text-sm">{child.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/20 bg-surface/20">
            <FileCode className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{selectedFile}</span>
          </div>

          <div className="flex-1">
            <MonacoEditor
              value={code}
              onChange={(value) => setCode(value || '')}
              language="typescript"
              theme="vs-dark"
            />
          </div>

          {/* Terminal */}
          {showTerminal && (
            <div className="h-64 border-t border-primary/20 bg-background">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/20 bg-surface/20">
                <TerminalIcon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Terminal</span>
              </div>
              <div className="h-[calc(100%-40px)]">
                <Terminal />
              </div>
            </div>
          )}
        </div>

        {/* Preview */}
        <div className="w-1/3 border-l border-primary/20 bg-background overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/20 bg-surface/20">
            <Layout className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Vista Previa</span>
          </div>
          <div className="h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <Play className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Ejecuta el proyecto para ver la vista previa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
