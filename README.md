# 🍅 Pomodoro Timer Desktop

Una aplicación de escritorio moderna para la técnica Pomodoro, construida con Electron.

![Pomodoro Timer Screenshot](screenshot.png)

## ✨ Características

- ⏰ **Timer configurable** - Personaliza tiempos de trabajo y descanso
- 🎯 **Progreso visual** - Círculo de progreso animado
- 🔔 **Notificaciones nativas** - Alertas del sistema cuando termina cada sesión
- 📊 **Contador de sesiones** - Rastrea tu productividad
- 🎨 **Interfaz moderna** - Diseño limpio y atractivo
- 🖥️ **Tray integration** - Controla desde la barra de tareas
- 🚀 **Multiplataforma** - Windows, macOS y Linux

## 🚀 Instalación

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- npm o yarn

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/pomodoro-timer.git
cd pomodoro-timer
```

### Instalar dependencias
```bash
npm install
```

### Ejecutar en modo desarrollo
```bash
npm start
```

### Crear ejecutable
```bash
# Para tu sistema operativo actual
npm run dist

# Para Windows
npm run build:win

# Para macOS
npm run build:mac

# Para Linux
npm run build:linux
```

## 🎯 Uso

1. **Configurar tiempos**: Haz clic en el botón de configuración (⚙️) para ajustar los tiempos de trabajo y descanso
2. **Iniciar timer**: Presiona "Iniciar" para comenzar una sesión de trabajo
3. **Controlar desde tray**: Haz clic derecho en el ícono de la barra de tareas para acceder a controles rápidos
4. **Recibir notificaciones**: La app te avisará automáticamente cuando termine cada sesión

## ⚙️ Configuración

- **Tiempo de trabajo**: Por defecto 25 minutos (configurable 1-60 min)
- **Tiempo de descanso**: Por defecto 5 minutos (configurable 1-30 min)
- **Always on top**: Mantener ventana siempre visible (opcional)
- **Minimizar a tray**: La aplicación se oculta en lugar de cerrarse