import { Wrench, RotateCcw, Gauge, ShieldCheck, Truck, Settings } from "lucide-react"

const servicios = [
    {
        icon: Wrench,
        title: "Cambio de llantas",
        descripcion: "Instalación profesional de llantas para tu vehículo."
    },
    {
        icon: RotateCcw,
        title: "Alineación y balanceo",
        descripcion: "Servicio de alineación computarizada y balanceo."
    },
    {
        icon: Settings,
        title: "Servicio técnico",
        descripcion: "Diagnóstico completo del estado de tus llantas y recomendaciones profesionales."
    },
    {
        icon: Truck,
        title: "Envío a domicilio",
        descripcion: "Envío a domicilio para compras de 10 o más llantas."
    },
    {
        icon: ShieldCheck,
        title: "Garantía de calidad",
        descripcion: "Todos nuestros productos cuentan con garantía del fabricante y soporte postventa."
    }
]

export default function Services() {
    return (
        <section id="servicios" className="py-24 md:py-32 bg-secondary">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                        Lo que Ofrecemos
                    </span>
                    <h2
                        className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Nuestros servicios
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Contamos con un equipo de profesionales capacitados para brindarte el mejor servicio en llantas y mantenimiento vehicular.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicios.map((servicio) => (
                        <article
                            key={servicio.title}
                            className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                                <servicio.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3
                                className="text-xl font-bold text-foreground mb-3"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {servicio.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {servicio.descripcion}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}