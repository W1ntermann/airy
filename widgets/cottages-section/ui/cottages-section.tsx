'use client';

import { COTTAGES, COTTAGES_DATA } from '../lib/constants';
import { CottageCard } from './cottage-card';

interface CottagesSectionProps {
    className?: string;
}

export const CottagesSection = ({ className = '' }: CottagesSectionProps) => {
    return (
        <section
            id="cottages"
            className={`relative py-20 md:py-28 bg-olive-600 ${className}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-white/60 text-sm tracking-[0.2em] mb-4">
                        {COTTAGES_DATA.label}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        {COTTAGES_DATA.title}
                    </h2>
                </div>

                {/* Cottages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {COTTAGES.map((cottage, index) => (
                        <CottageCard
                            key={cottage.id}
                            cottage={cottage}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
