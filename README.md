# 📱 Evaluación 1 Desarrollo Mobile Sección 50 - 2026

[![Expo](https://img.shields.io/badge/Expo-54.0.33-000020?logo=expo)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?logo=react)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)

- Profesor: Boris Belmar Muñoz
- Alumno: Patricio Aliste Salas 

Aplicación móvil desarrollada con **[Expo](https://expo.dev/)** y **[Expo Router](https://docs.expo.dev/router/introduction/)**. El proyecto implementa un flujo básico de autenticación con login en memoria, navegación por tabs y visualización del email del usuario en la pantalla de perfil.

## ✨ Funcionalidades

- 🔐 Login con email y contraseña validados en memoria.
- 🏠 Pantalla de Home accesible después de un login exitoso.
- 👤 Pantalla de Profile que muestra el email ingresado.
- 🌗 Interfaz forzada en modo claro para mantener consistencia visual.
- 🧭 Navegación basada en rutas con **Expo Router**.

## 🛠️ Tecnologías utilizadas

- [Expo](https://expo.dev/) - Framework para desarrollar apps multiplataforma con React Native.
- [React Native](https://reactnative.dev/) - Librería para construir interfaces móviles nativas.
- [Expo Router](https://docs.expo.dev/router/introduction/) - Navegación basada en archivos para Expo.
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático para mejorar mantenibilidad y seguridad.
- [React Navigation](https://reactnavigation.org/) - Base de navegación utilizada por Expo Router.
- [@expo/vector-icons](https://icons.expo.fyi/) - Conjunto de iconos para la interfaz.

## 📁 Estructura principal

```text
app/
├── index.tsx          # Login
├── _layout.tsx        # Layout global de la app
├── +html.tsx
├── +not-found.tsx
├── modal.tsx
└── (tabs)/
    ├── _layout.tsx    # Navegación por pestañas
    ├── index.tsx      # Home
    └── profile.tsx    # Profile

components/
├── Themed.tsx         # Componentes con soporte de tema
├── useColorScheme.ts  # Tema forzado a claro
└── ...

constants/
└── Colors.ts         # Paleta de colores de la app
```

## 🚀 Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) LTS
- [Yarn](https://yarnpkg.com/) o npm
- [Expo Go](https://expo.dev/go) en tu dispositivo móvil, si vas a probar en físico
- [Android Studio](https://developer.android.com/studio) o [Xcode](https://developer.apple.com/xcode/) si quieres usar emulador/simulador

## ▶️ Ejecución

Con Yarn:

```bash
yarn install
```

Con npm:

```bash
npm install
```

### 3. Ejecutar la aplicación

Con Yarn:

```bash
yarn start
```

Con npm:

```bash
npm run start
```

## 🔑 Credenciales de prueba

Para ingresar correctamente al login, usa estas credenciales:

- **Email:** `usuario@correo.com`
- **Contraseña:** `1234`

## 🧪 Flujo de uso

1. Abre la app en Expo.
2. Ingresa el email y la contraseña de prueba.
3. Presiona **Login**.
4. La app navega a las tabs.
5. En **Profile** se muestra el email ingresado.

## 🎨 Tema visual

La aplicación está configurada para mostrarse en **modo claro** de forma consistente.
Esto se controla desde:

- `app.json` con `userInterfaceStyle: "light"`
- `components/useColorScheme.ts`, que retorna siempre `light`
- `constants/Colors.ts`, con la paleta visual de la app

## 🧾 Scripts disponibles

```json
{
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```

## 🎥 Video demostración

- [Ver video en YouTube](https://youtu.be/8Oc_VQlDXiI)

## 📌 Notas

- Si ves estilos antiguos en Expo, limpia la caché con:

```bash
yarn start --tunnel -c
```

- Si el dispositivo usa tema oscuro, la aplicación seguirá mostrándose en modo claro por configuración.
