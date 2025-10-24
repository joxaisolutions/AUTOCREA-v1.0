# Guía de Configuración de AUTOCREA

## 📋 Requisitos Previos

- Cuenta de [Clerk](https://clerk.com) (para autenticación)
- Cuenta de [Stripe](https://stripe.com) (para pagos) - Opcional

## 🔐 Configuración de Clerk

### 1. Crear Aplicación en Clerk

1. Ve a [Clerk Dashboard](https://dashboard.clerk.com)
2. Crea una nueva aplicación
3. Selecciona las opciones de autenticación que desees (Email, Google, GitHub, etc.)

### 2. Obtener las API Keys

En el dashboard de Clerk:

1. Ve a **API Keys**
2. Copia las siguientes claves:
   - `Publishable key`
   - `Secret key`

### 3. Configurar Variables de Entorno

Edita el archivo `.env.local` y reemplaza los valores:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
```

### 4. Configurar URLs de Redirect

En Clerk Dashboard, ve a **Paths** y configura:

- Sign-in path: `/sign-in`
- Sign-up path: `/sign-up`
- After sign-in redirect: `/dashboard`
- After sign-up redirect: `/dashboard`

## 💳 Configuración de Stripe (Opcional)

### 1. Crear Cuenta en Stripe

1. Ve a [Stripe Dashboard](https://dashboard.stripe.com)
2. Completa la configuración de tu cuenta

### 2. Obtener API Keys

En Stripe Dashboard:

1. Ve a **Developers** → **API keys**
2. Copia las claves de **test mode**:
   - `Publishable key`
   - `Secret key`

### 3. Configurar Variables de Entorno

Añade a `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
```

### 4. Crear Productos y Precios

1. En Stripe Dashboard, ve a **Products**
2. Crea productos para cada plan:
   - **Pro Plan**: $20/mes, 500 créditos
   - **Enterprise Plan**: $99/mes, 5000 créditos

## 🚀 Iniciar la Aplicación

Una vez configuradas las variables de entorno:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5000`

## ✅ Verificar la Configuración

1. **Clerk**: Intenta registrarte en `/sign-up`. Deberías ser redirigido a `/dashboard` después del registro.
2. **Stripe**: Ve a `/settings/billing`. Los planes deberían mostrarse correctamente.

## 🔧 Troubleshooting

### Error: "Publishable key not valid"

- Verifica que hayas copiado correctamente las claves de Clerk
- Asegúrate de que el archivo `.env.local` esté en la raíz del proyecto
- Reinicia el servidor de desarrollo después de modificar `.env.local`

### Los estilos no se cargan correctamente

- Ejecuta `npm install` para asegurar que todas las dependencias estén instaladas
- Reinicia el servidor

## 📚 Recursos Adicionales

- [Documentación de Clerk](https://clerk.com/docs)
- [Documentación de Stripe](https://stripe.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
