# Project Identity: qr (qr.pcstyle.dev)

This project follows the **pcstyle** high-performance stack and aesthetic.

## 🛠 Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Library**: qrcode (JS QR generator)
- **Styling**: Tailwind CSS v4
- **Runtime**: Bun
- **Visuals**: Canvas API for custom cyberpunk presets
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 🎨 Design System: "Matrix Sync"
- **Colors**: Absolute Black (#000000) & Neon Magenta (#ff00ff)
- **Effects**: Matrix Rain, CRT Overlays, Neural Cursor
- **Typography**: JetBrains Mono (Agreesive Tracking)
- **Identity**: Protocol: QR-777-BETA

## 📁 File Structure
```
qr/
├── app/
│   ├── globals.css          # Cyberpunk styles
│   ├── layout.tsx           # UI Wrappers (Matrix, CRT, Cursor)
│   └── page.tsx             # Main Landing UI
├── components/
│   ├── ui/
│   │   ├── CRTOverlay.tsx
│   │   ├── MatrixBackground.tsx
│   │   └── NeuralCursor.tsx
│   └── QRGenerator.tsx      # Main Logic & Canvas Renderer
└── AGENTS.MD                # System Intel
```

## 🚀 Commands
```bash
bun install     # Initialize Subsystems
bun dev         # Start Active Sync
bun build       # Final Compile
```

## 📊 Features
- Multi-style QR Rendering (Neon, Matrix, Glitch, Minimal)
- Real-time Link Encoding
- High-Speed Canvas Export (PNG)
- Clipboard Image Sync
- Color Customization
- Level-H Error Correction
