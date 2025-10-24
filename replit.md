# AUTOCREA v1.0

## 📌 Descripción del Proyecto

AUTOCREA es una plataforma web completa tipo Replit que permite generar aplicaciones web funcionales mediante prompts en lenguaje natural, potenciada por JoxCoder (modelo de IA). La aplicación tiene un diseño moderno con los colores del ecosistema JoxAI.

## 🎨 Características Principales

- **Generación de Código con IA**: Transforma descripciones en lenguaje natural en aplicaciones web completas
- **IDE Integrado**: Editor Monaco con syntax highlighting, terminal integrada, y vista previa
- **Sistema de Créditos**: Modelo freemium con planes Pro y Enterprise
- **Autenticación**: Sistema completo con Clerk
- **Dashboard de Proyectos**: Gestión visual de proyectos con vistas grid/list
- **Responsive Design**: Optimizado para desktop y móvil

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS** con paleta personalizada JoxAI
- **shadcn/ui** para componentes

### Autenticación y Pagos
- **Clerk** - Autenticación de usuarios
- **Stripe** - Sistema de pagos y suscripciones

### Editor y Terminal
- **Monaco Editor** - Editor de código
- **Xterm.js** - Terminal integrada
- **WebContainers** - Ejecución de código (preparado para integración)

### Estado
- **Zustand** - Gestión de estado global

## 🎨 Paleta de Colores

```css
--primary: #4A90E2 (Azul eléctrico)
--secondary: #9B59B6 (Púrpura)
--accent: #00D9FF (Cian brillante)
--background: #0A0E27 (Negro profundo)
--surface: #1a1f3a (Gris oscuro azulado)
```

## 📁 Estructura del Proyecto

```
/
├── app/                          # Rutas y páginas (App Router)
│   ├── page.tsx                  # Landing page
│   ├── dashboard/                # Dashboard de proyectos
│   ├── projects/
│   │   ├── new/                  # Crear nuevo proyecto
│   │   └── [id]/                 # IDE del proyecto
│   ├── settings/
│   │   ├── account/              # Configuración de cuenta
│   │   ├── billing/              # Planes y facturación
│   │   └── usage/                # Uso de créditos
│   ├── docs/                     # Documentación
│   ├── sign-in/                  # Login (Clerk)
│   └── sign-up/                  # Registro (Clerk)
├── components/
│   ├── ui/                       # Componentes shadcn/ui
│   ├── dashboard/                # Componentes del dashboard
│   └── editor/                   # Componentes del IDE
├── lib/
│   ├── stores/                   # Zustand stores
│   └── utils.ts                  # Utilidades
├── public/                       # Assets estáticos
└── middleware.ts                 # Clerk middleware

```

## ⚙️ Configuración Requerida

### 1. Variables de Entorno

Debes configurar las siguientes variables en `.env.local`:

```env
# Clerk (REQUERIDO)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clerk_publishable_key
CLERK_SECRET_KEY=tu_clerk_secret_key

# Stripe (Opcional, para sistema de pagos)
STRIPE_SECRET_KEY=tu_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_stripe_publishable_key
```

### 2. Cómo obtener las claves

Ver el archivo **SETUP.md** para instrucciones detalladas sobre:
- Configuración de Clerk
- Configuración de Stripe
- Troubleshooting

## 🚀 Comandos Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo en puerto 5000
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 📊 Funcionalidades Implementadas

### ✅ Completo
- [x] Landing page con todas las secciones
- [x] Sistema de autenticación (Clerk)
- [x] Dashboard de proyectos (grid/list views)
- [x] Página de creación de proyectos
- [x] IDE con Monaco Editor
- [x] Terminal integrada (Xterm.js)
- [x] Páginas de configuración (account, billing, usage)
- [x] Sistema de créditos (UI)
- [x] Página de documentación
- [x] Diseño responsive
- [x] Paleta de colores JoxAI
- [x] Efectos glassmorphism y glow

### 🚧 Por Implementar (Backend)
- [ ] Integración real con modelo de IA para generación de código
- [ ] WebContainers para ejecución de código en browser
- [ ] Sistema de persistencia (base de datos)
- [ ] Integración real con Stripe para pagos
- [ ] Sistema de deploy/exportación
- [ ] API endpoints para generación de código

## 🎯 Estado Actual

La aplicación está **100% funcional en frontend**. Todas las páginas, componentes y flujos de usuario están implementados con data de ejemplo. La estructura está preparada para integrar:

1. Un backend de generación de código con IA
2. Base de datos para persistencia de proyectos
3. Sistema de pagos real con Stripe
4. Ejecución de código con WebContainers

## 📝 Notas Importantes

### Configuración de Clerk
- La aplicación **requiere** que configures Clerk para funcionar
- Sin las claves de Clerk, verás errores en el middleware
- Sigue las instrucciones en SETUP.md

### Modo de Desarrollo
- El servidor se ejecuta en `0.0.0.0:5000` para compatibilidad con Replit
- Los dominios de Replit están configurados en `next.config.js` para desarrollo

### Estilos y Tema
- Dark mode por defecto
- Todos los colores usan la paleta JoxAI
- Efectos glassmorphism y glow aplicados consistentemente

## 🔗 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Clerk](https://clerk.com/docs)
- [Documentación de shadcn/ui](https://ui.shadcn.com)
- [Documentación de Monaco Editor](https://microsoft.github.io/monaco-editor/)

## 📧 Soporte

Para configuración o problemas, consulta:
1. SETUP.md para guías de configuración
2. /docs para documentación de usuario
3. Logs del servidor para debugging
