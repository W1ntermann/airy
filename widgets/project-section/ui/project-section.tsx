'use client';

import Image from 'next/image';
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
                        {/* Background Card - Landscape */}
                        <div className="absolute top-0 right-0 w-[85%] h-[70%] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="/IMG_0577 2.png"
                                alt="AIRY Landscape"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>

                        {/* Front Card - Pillar */}
                        <div className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded-3xl overflow-hidden shadow-2xl border-4 border-navy-900">
                            <Image
                                src="/IMG_0579 1.png"
                                alt="AIRY Logo Pillar"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
