'use client';

import React, { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';

interface MonacoEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  language?: string;
  theme?: string;
}

export function MonacoEditor({ value, onChange, language = 'javascript', theme = 'vs-dark' }: MonacoEditorProps) {
  return (
    <Editor
      height="100%"
      language={language}
      value={value}
      onChange={onChange}
      theme={theme}
      options={{
        minimap: { enabled: true },
        fontSize: 14,
        fontFamily: 'Fira Code, Menlo, Monaco, Courier New, monospace',
        lineNumbers: 'on',
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
        wordWrap: 'on',
      }}
    />
  );
}
