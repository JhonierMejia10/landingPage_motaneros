import { Tag, Star } from "lucide-react";

import llanta1 from "../assets/tire-photo.jpg"

const lista_ofertas = [
    {
        name: "Llanta Touring",
        brand: "ZEXTOUR",
        size: "165/65 R13",
        regularPrice: "$140.000",
        dealPrice: "$120.000",
        badge: "Oferta",
        raiting: "5",
        photo: llanta1
    },
    {
        name: "Llanta Touring",
        brand: "WILDHORSES",
        size: "165/65 R13",
        regularPrice: "$140.000",
        dealPrice: "$120.000",
        badge: "Oferta",
        raiting: "4.8",
        photo: llanta1
    },
    {
        name: "Llanta Touring",
        brand: "RODASHINE",
        size: "165/65 R13",
        regularPrice: "$140.000",
        dealPrice: "$115.000",
        badge: "Oferta",
        raiting: "4.8",
        photo: llanta1
    },
    {
        name: "Llanta Touring",
        brand: "RODASHINE",
        size: "165/65 R13",
        regularPrice: "$140.000",
        dealPrice: "$115.000",
        badge: "Oferta",
        raiting: "4.8",
        photo: llanta1
    }
]


export default function Ofertas() {
    return (
        <section id="precios" className="py-24 md:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                            No te los pierdas
                        </span>
                        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: "var(--font-heading)" }}>
                            Precios imperdibles
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            Aprovecha nuestras ofertas exclusivas en llantas de las mejores marcas
                            del mercado. Stock limitado.
                        </p>
                    </div>

                    <a
                        href="https://wa.me/3108252470?text=Hola%2C%20quiero%20consultar%20por%20las%20ofertas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 self-start"
                    >
                        <Tag className="h-4 w-4" />
                        Consultar ofertas
                    </a>
                </div>

                {/* Grid de ofertas */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {lista_ofertas.map((oferta) => (
                        <article
                            key={oferta.brand}
                            className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Imagen del producto */}
                            <div className="relative aspect-square bg-secondary overflow-hidden">
                                <img src={oferta.photo} alt={`Llanta ${oferta.brand} ${oferta.name} medida ${oferta.size}`} width={600} height={600} loading="lazy" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <span className="absolute top-3 left-3 rounded-md bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                                    {oferta.badge}
                                </span>
                            </div>

                            <div className="p-5">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">{oferta.brand}</p>
                                <h3
                                    className="mt-1 text-lg font-bold text-foreground"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    {oferta.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{oferta.size}</p>

                                <div className="flex items-center gap-1 mt-3">
                                    <Star className="h-3.5 w-3.5 fill-primary text-primary"></Star>
                                    <span className="text-sm font-medium text-foreground">{oferta.raiting}</span>
                                </div>

                                <div className="flex items-baseline gap-3 mt-4">
                                    <span
                                        className="text-2xl font-bold text-primary"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {oferta.dealPrice}
                                    </span>
                                    <span className="text-sm text-muted-foreground line-through">
                                        {oferta.regularPrice}
                                    </span>
                                </div>

                                <a
                                    href={`https://wa.me/3108252470?text=Hola%2C%20me%20interesa%20la%20llanta%20${encodeURIComponent(oferta.brand)}%20${encodeURIComponent(oferta.size)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                >
                                    Consultar
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}