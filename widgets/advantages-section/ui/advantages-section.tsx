'use client';

import { ADVANTAGES, ADVANTAGES_DATA } from '../lib/constants';
import { AdvantageCard } from './advantage-card';

interface AdvantagesSectionProps {
    className?: string;
}

export const AdvantagesSection = ({ className = '' }: AdvantagesSectionProps) => {
    return (
        <section
            id="advantages"
            className={`relative py-20 md:py-28 bg-olive-600 overflow-hidden ${className}`}
        >
            {/* Circular Pattern Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Concentric circles */}
                <div className="relative w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]">
                    <div className="absolute inset-0 rounded-full border border-white/5" />
                    <div className="absolute inset-[15%] rounded-full border border-white/5" />
                    <div className="absolute inset-[30%] rounded-full border border-white/5" />
                    <div className="absolute inset-[45%] rounded-full border border-white/8 bg-olive-500/30" />
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-white/60 text-sm tracking-[0.2em] mb-4">
                        {ADVANTAGES_DATA.label}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        {ADVANTAGES_DATA.title}
                    </h2>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ADVANTAGES.map((advantage, index) => (
                        <AdvantageCard
                            key={advantage.id}
                            advantage={advantage}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
