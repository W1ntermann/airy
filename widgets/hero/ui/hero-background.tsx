'use client';

import Image from 'next/image';

interface HeroBackgroundProps {
    className?: string;
}

export const HeroBackground = ({ className = '' }: HeroBackgroundProps) => {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <Image
                src="/herobg.jpg"
                alt="AIRY Hero background"
                fill
                className="object-cover"
                priority
                sizes="100vw"
                quality={90}
            />
            
            {/* Градієнтні накладення для читабельності тексту */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

            {/* Плавний перехід до наступної секції */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-olive-600/50 to-transparent" />
        </div>
    );
};
