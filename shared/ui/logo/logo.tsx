'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
    onClick?: () => void;
}

export const Logo = ({ className = '', variant = 'light', onClick }: LogoProps) => {
    return (
        <Link
            href="/"
            className={`flex items-center gap-3 ${className}`}
            onClick={onClick}
            aria-label="На головну"
        >
            <div className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px]">
                <Image
                    src="/Logo.png"
                    alt="AIRY СЛАВСЬКО"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </Link>
    );
};
