'use client';

import { HeroBackground } from './hero-background';
import { HeroContent } from './hero-content';

interface HeroSectionProps {
    className?: string;
}

export const HeroSection = ({ className = '' }: HeroSectionProps) => {
    return (
        <section
            id="hero"
            className={`relative min-h-screen flex items-center overflow-hidden ${className}`}
        >
            {/* Background */}
            <HeroBackground />

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                <HeroContent />
            </div>
        </section>
    );
};
