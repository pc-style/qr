import QRGenerator from "@/components/QRGenerator";
import { QrCode, Shield, Zap, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-[#ff00ff]/20 bg-black/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-[#ff00ff] flex items-center justify-center text-black font-black text-xl shadow-[0_0_15px_#ff00ff66]">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight uppercase group-hover:text-[#ff00ff] transition-colors">
                qr<span className="text-[#ff00ff]/40">.pcstyle.dev</span>
              </h1>
              <p className="text-xs text-gray-600 uppercase tracking-[0.3em]">
                QR_ENCODE_PROTOCOL
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs text-gray-500 uppercase tracking-wider">
            <span>v1.0.0-ALPHA</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1 bg-[#ff00ff]/10 border border-[#ff00ff]/30 text-[#ff00ff] text-[10px] font-bold uppercase tracking-[0.4em] rounded-full">
            CYBERNETIC • ENCODING • STANDARDS
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            <span className="text-white">ENCODE</span>
            <br />
            <span className="text-[#ff00ff]">THE SIGNAL</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed tracking-wider">
            Transform high-level protocols into compact terrestrial 2D matrices.
            Stylized, encrypted, and ready for high-speed transmission.
          </p>
        </div>
      </section>

      {/* Main Generator */}
      <section className="px-6 pb-20">
        <QRGenerator />
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 border-t border-[#ff00ff]/10 bg-gradient-to-b from-black to-[#0a000a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "ENCRYPTED_DATA",
                desc: "All generated signals conform to maximum density standards with Level-H error correction."
              },
              {
                icon: Zap,
                title: "HIGH_SPEED",
                desc: "Sub-millisecond local rendering via canvas acceleration for instant visual feedback."
              },
              {
                icon: Globe,
                title: "UNIVERSAL_SYNC",
                desc: "Globally recognized matrix protocols ensuring cross-platform compatibility."
              }
            ].map((feature, i) => (
              <div key={i} className="space-y-4 p-6 border border-white/5 bg-white/2 rounded-lg hover:border-[#ff00ff]/40 transition-all duration-300">
                <div className="p-3 bg-[#ff00ff]/10 w-fit rounded-lg">
                  <feature.icon className="w-5 h-5 text-[#ff00ff]" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest">{feature.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed font-bold tracking-wider">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#ff00ff]/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] text-gray-700 uppercase tracking-[0.5em] font-black">
            © 2025 pcstyle.dev // PROTOCOL: QR-777-BETA
          </p>
        </div>
      </footer>
    </main>
  );
}
