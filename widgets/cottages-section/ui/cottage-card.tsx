'use client';

import Link from 'next/link';
import { Cottage } from '../lib/types';

interface CottageCardProps {
    cottage: Cottage;
    index: number;
}

export const CottageCard = ({ cottage, index }: CottageCardProps) => {
    return (
        <div
            className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image */}
            <div className="relative h-64 md:h-72 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url('${cottage.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {cottage.title}
                </h3>

                {/* Subtitle */}
                <p className="text-olive-600 text-sm font-medium mb-4">
                    {cottage.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {cottage.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                    <Link
                        href={`/cottages/${cottage.slug}`}
                        className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
                    >
                        Детальніше
                    </Link>

                    <Link
                        href="#3d-space"
                        className="inline-flex items-center gap-2 border border-olive-600 text-olive-700 px-4 py-2 rounded-full text-sm hover:bg-olive-50 transition-all duration-300"
                    >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M4 2L10 6L4 10V2Z" />
                        </svg>
                        <span>Переглянути 3D</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
