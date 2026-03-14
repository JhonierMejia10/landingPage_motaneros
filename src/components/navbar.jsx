import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Precios imperdibles", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
                <a href="#inicio" className="flex items-center gap-2">
                    <span
                        className="text-xl font-bold tracking-tight text-foreground"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Los Montañeros
                    </span>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="https://wa.me/3106068080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                    <Phone className="h-4 w-4" />
                    Contactar
                </a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-foreground"
                    aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <ul className="flex flex-col gap-1 px-6 py-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                <Phone className="h-4 w-4" />
                                Contactar por WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
