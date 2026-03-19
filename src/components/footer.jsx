export default function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span
                            className="text-lg font-bold text-foreground"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Los Montañeros
                        </span>
                    </div>

                    <nav aria-label="Navegación del pie de página">
                        <ul className="flex flex-wrap items-center justify-center gap-6">
                            <li>
                                <a href="#inicio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#servicios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#precios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Precios
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <p className="text-sm text-muted-foreground">
                        {"2026 Los Montañeros. Todos los derechos reservados."}
                    </p>
                </div>
            </div>
        </footer>
    )
}
