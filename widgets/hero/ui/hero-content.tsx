'use client';

import Link from 'next/link';
import { HERO_DATA } from '../lib/constants';

interface HeroContentProps {
    className?: string;
}

export const HeroContent = ({ className = '' }: HeroContentProps) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className={`max-w-3xl ${className}`}>
            {/* Label */}
            <p className="text-white/70 text-sm tracking-wider mb-6">
                {HERO_DATA.label}
            </p>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                {HERO_DATA.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
                {HERO_DATA.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Primary Button */}
                <Link
                    href={HERO_DATA.buttons.primary.href}
                    onClick={(e) => handleScroll(e, HERO_DATA.buttons.primary.href)}
                    className="inline-flex items-center justify-center bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    {HERO_DATA.buttons.primary.text}
                </Link>

                {/* Secondary Button */}
                <Link
                    href={HERO_DATA.buttons.secondary.href}
                    onClick={(e) => handleScroll(e, HERO_DATA.buttons.secondary.href)}
                    className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white/60 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10"
                >
                    {HERO_DATA.buttons.secondary.text}
                </Link>
            </div>
        </div>
    );
};
