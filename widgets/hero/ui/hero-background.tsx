'use client';

interface HeroBackgroundProps {
    className?: string;
}

export const HeroBackground = ({ className = '' }: HeroBackgroundProps) => {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {/* Placeholder background with gradient - replace with actual image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop')`,
                }}
            />

            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-olive-600/50 to-transparent" />
        </div>
    );
};
