'use client';

import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

export function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<XTerm | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const terminal = new XTerm({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: 'Fira Code, Menlo, Monaco, Courier New, monospace',
      theme: {
        background: '#0A0E27',
        foreground: '#ffffff',
        cursor: '#4A90E2',
        selectionBackground: '#4A90E2',
      },
    });

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);

    terminal.open(terminalRef.current);
    fitAddon.fit();

    xtermRef.current = terminal;
    fitAddonRef.current = fitAddon;

    terminal.writeln('Welcome to AUTOCREA Terminal');
    terminal.writeln('JoxCoder v1 - Ready to execute');
    terminal.writeln('');
    terminal.write('$ ');

    const handleResize = () => {
      fitAddon.fit();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      terminal.dispose();
    };
  }, []);

  return <div ref={terminalRef} className="h-full w-full" />;
}
