import { ChevronRight, ShieldCheck } from "lucide-react"
import heroBackground from "../assets/hero-tires.jpg"

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 bg-zinc-900">
                <img src={heroBackground} alt="Llantas de alta calidad en exhibición — Los Montañeros Medellín" width={1024} height={1024} fetchPriority="high" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-6">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">
                            Calidad garantizada
                        </span>
                    </div>

                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground text-balance"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Las mejores{" "}
                        <span className="text-primary">llantas</span>{" "}
                        al mejor precio
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                        Ofrecemos las mejores marcas del mercado con asesoramiento profesional
                        y precios que no vas a encontrar en otro lugar.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#precios"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Ver ofertas
                            <ChevronRight className="h-5 w-5" />
                        </a>
                        <a
                            href="#servicios"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                        >
                            Nuestros servicios
                        </a>
                    </div>
                    {/* Trust stats */}
                    <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8">
                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>+20</p>
                            <p className="text-sm text-muted-foreground mt-1">Marcas disponibles</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>5+</p>
                            <p className="text-sm text-muted-foreground mt-1">{"Años de experiencia"}</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>100%</p>
                            <p className="text-sm text-muted-foreground mt-1">{"Tasa de recomendación de nuestros clientes"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}