'use client';

import { PROJECT_DATA } from '../lib/constants';

interface ProjectSectionProps {
    className?: string;
}

export const ProjectSection = ({ className = '' }: ProjectSectionProps) => {
    return (
        <section
            id="project"
            className={`relative py-20 md:py-28 bg-navy-900 overflow-hidden ${className}`}
        >
            {/* Decorative Pattern */}
            <div className="absolute top-0 left-0 w-full h-24">
                <div
                    className="w-full h-full opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                        backgroundSize: '12px 12px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 tracking-tight">
                            {PROJECT_DATA.title}
                        </h2>

                        <div className="space-y-6">
                            {PROJECT_DATA.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-white/80 text-lg leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Visual - Stacked Cards */}
                    <div className="relative h-[500px] lg:h-[600px]">
                        {/* Background Card */}
                        <div className="absolute top-0 right-0 w-[80%] h-[70%] rounded-3xl overflow-hidden shadow-2xl">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')`,
                                }}
                            />
                            {/* Logo Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute top-6 left-6">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    className="text-white/80"
                                >
                                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" />
                                    <path
                                        d="M24 10L32 34H28L26 28H22L20 34H16L24 10Z"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        fill="none"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Front Card */}
                        <div className="absolute bottom-0 left-0 w-[75%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-navy-900">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop')`,
                                }}
                            />
                            {/* Brand overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-olive-900/80 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6">
                                <div className="flex items-center gap-3">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        className="text-white"
                                    >
                                        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
                                        <path
                                            d="M24 10L32 34H28L26 28H22L20 34H16L24 10Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            fill="none"
                                        />
                                    </svg>
                                    <div className="text-white">
                                        <div className="text-xl font-light tracking-[0.2em]">AIRY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
