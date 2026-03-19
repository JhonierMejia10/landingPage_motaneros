import site from '../assets/site-photo.jpeg'
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contacto" className='py-24 md:py-32 bg-secondary'>
            <div className='mx-auto max-w-7xl px-6'>
                <div className='text-center max-w-2xl mx-auto mb-16'>
                    <span className='text-sm font-semibold text-primary tracking-wide uppercase'>
                        Estamos para servirte
                    </span>
                    <h2
                        className='mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance'
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Contáctanos
                    </h2>
                    <p className='mt-4 text-lg text-muted-foreground leading-relaxed'>
                        Escríbenos por WhatsApp o visítanos en nuestro local. Estamos listos para servirte.
                    </p>
                </div>

                <div className='grid gap-8 lg:grid-cols-2'>
                    {/* Información de contacto */}
                    <div className='flex flex-col gap-6'>
                        <div className='rounded-xl border-border bg-card p-8'>
                            <h3
                                className='text-xl font-bold text-foreground mb-6'
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Información de contacto
                            </h3>

                            <address className='flex flex-col gap-6 not-italic'>
                                <div className='flex items-start gap-4'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0'>
                                        <MapPin className='w-5 h-5 text-primary' />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Dirección</p>
                                        <p className="text-muted-foreground">Calle 64C # 75-30, Medellín</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                                        <Clock className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Horarios</p>
                                        <p className="text-muted-foreground">Lunes a Viernes: 8:00 - 18:00</p>
                                        <p className="text-muted-foreground">Sábados: 9:00 - 13:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Teléfono</p>
                                        <p className="text-muted-foreground">+57 310 825 2470</p>
                                    </div>
                                </div>
                            </address>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/573108252470?text=Hola%2C%20quiero%20consultar%20por%20llantas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 p-8 transition-all hover:bg-primary/10 hover:border-primary/50"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary shrink-0">
                                <MessageCircle className="h-7 w-7 text-primary-foreground" />
                            </div>
                            <div>
                                <p
                                    className="text-xl font-bold text-foreground"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    Escribinos por WhatsApp
                                </p>
                                <p className="text-muted-foreground mt-1">
                                    Respuesta rapida. Consultanos sin compromiso.
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Image */}
                    <div className="relative rounded-xl overflow-hidden border border-border min-h-[400px]">
                        <img
                            src={site}
                            alt="Local de llantas Los Montañeros en Medellín — Calle 64C # 75-30"
                            width={1440}
                            height={810}
                            loading="lazy"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <p
                                className="text-2xl font-bold text-foreground"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Visitanos en nuestro local
                            </p>
                            <p className="text-muted-foreground mt-2">
                                Contamos con un amplio stock y atencion personalizada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 