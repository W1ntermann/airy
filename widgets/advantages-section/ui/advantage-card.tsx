'use client';

import { Advantage } from '../lib/types';

interface AdvantageCardProps {
    advantage: Advantage;
    index: number;
}

const IconComponent = ({ icon }: { icon: Advantage['icon'] }) => {
    const icons = {
        location: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        income: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v12M9 9h6M9 15h6" strokeLinecap="round" />
            </svg>
        ),
        control: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="3" width="18" height="18" rx="4" />
            </svg>
        ),
        exit: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M9 9h6v6H9z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    };

    return icons[icon] || null;
};

export const AdvantageCard = ({ advantage, index }: AdvantageCardProps) => {
    return (
        <div
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-olive-600 text-white flex items-center justify-center mb-6">
                <IconComponent icon={advantage.icon} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
                {advantage.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
                {advantage.description}
            </p>
        </div>
    );
};
