import { useState } from "react";
import logo from "../assets/logo-montañeros.png"
import { Menu } from 'lucide-react'

{/* 
    text-sm: Tamaño de letra pequeño para tablets (md).
    lg:text-base: Tamaño normal para laptops (lg).
    xl:text-lg: Letra más grande para pantallas muy anchas (xl).
    Opcionalmente, cambiamos el gap para que respiren más en pantallas grandes.
*/}

const NavLinks = ({ customClasses }) => {
    return (
        <ul className={`font-google font-medium text-gray700 ${customClasses} text-sm lg:text-base xl:text-lg`}>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Servicios</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Precios imperdibles</a></li>
            <li className="bg-amber-200"><a href="#" className="hover:text-amber-500 transition-colors">Contáctanos</a></li>
        </ul>
    )
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="flex justify-between items-center px-8 py-4">

            {/* Botón hamburguesa para dispositivos móviles */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden block z-20"
            >
                <Menu />
            </button>

            {/* Contenedor del logo con flex-1 para empujar el centro */}
            <div className="flex-1 flex justify-center md:block z-20">
                <a href="">
                    <img src={logo} alt="Logo de la empresa" className="w-36 h-auto md:w-50 lg:w-52 object-contain" />
                </a>
            </div>

            {/* Navegación centrada */}
            <nav className="hidden md:block">
                <NavLinks customClasses="flex flex-row gap-8" />
            </nav>

            {/* Menú móvil */}
            {isMenuOpen && (
                <nav className="md:hidden absolute top-20 bg-white w-full left-0 p-4 shadow-md z-10">
                    <NavLinks customClasses="flex flex-col gap-4 text-center items-center" />
                </nav>
            )}

            {/* Div vacío con flex-1 para equilibrar el espacio a la derecha */}
            <div className="flex-1"></div>
        </header>
    )
}
