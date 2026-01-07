'use client';

import { ReactNode, useState } from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    iconName?: string;
    className?: string;
}

export const FeatureCard = ({
                                title,
                                description,
                                icon,
                                iconName,
                                className = ''
                            }: FeatureCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const getIcon = (name?: string) => {
        switch (name) {
            case 'location':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                );
            case 'revenue':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'analytics':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                );
            case 'exit':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                );
            default:
                return icon;
        }
    };

    return (
        <div
            className={`
        group relative p-6 rounded-2xl
        bg-white border border-gray-200
        hover:border-blue-200 hover:shadow-xl
        transition-all duration-300
        ${isHovered ? 'transform -translate-y-1' : ''}
        ${className}
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Акцентна смужка зліва */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-l-2xl" />

            {/* Іконка */}
            <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-600 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
                    {getIcon(iconName)}
                </div>
            </div>

            {/* Контент */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>

            {/* Ховер-ефект */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-100 transition-all duration-300 pointer-events-none" />
        </div>
    );
};