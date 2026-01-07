'use client';

import Link from 'next/link';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
    onClick?: () => void;
}

export const Logo = ({ className = '', variant = 'light', onClick }: LogoProps) => {
    const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
    const strokeColor = variant === 'light' ? '#ffffff' : '#1f2937';

    return (
        <Link
            href="/"
            className={`flex items-center gap-3 ${className}`}
            onClick={onClick}
            aria-label="На головну"
        >
            {/* Logo Icon - стилізована літера A в колі */}
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
            >
                <circle cx="24" cy="24" r="22" stroke={strokeColor} strokeWidth="1.5" fill="none" />
                <path
                    d="M24 10L32 34H28L26 28H22L20 34H16L24 10Z"
                    stroke={strokeColor}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinejoin="round"
                />
                <path
                    d="M22.5 24H25.5"
                    stroke={strokeColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>

            {/* Brand name */}
            <div className="flex flex-col">
                <span className={`text-2xl font-light tracking-[0.3em] ${textColor}`}>
                    AIRY
                </span>
                <span className={`text-[8px] tracking-[0.15em] ${textColor} opacity-70 uppercase`}>
                    СЛАВСЬКО
                </span>
            </div>
        </Link>
    );
};
