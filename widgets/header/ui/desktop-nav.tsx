'use client';

import Link from 'next/link';
import { Logo } from '@/shared/ui/logo/logo';
import { NAV_ITEMS } from '@/shared/config/navigation';

export const DesktopNav = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="hidden lg:flex items-center justify-between w-full">
            {/* Logo */}
            <Logo variant="light" />

            {/* Center Navigation */}
            <nav className="flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="text-white/90 text-sm tracking-wide hover:text-white transition-colors duration-200"
                    >
                        {item.title.toUpperCase()}
                    </Link>
                ))}
            </nav>

            {/* Right side: CTA + Language */}
            <div className="flex items-center gap-4">
                {/* 3D Button */}
                <Link
                    href="#3d-space"
                    onClick={(e) => handleScroll(e, '#3d-space')}
                    className="flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-full text-sm hover:bg-white/10 transition-all duration-300"
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M4 2L10 6L4 10V2Z" />
                    </svg>
                    <span>ПЕРЕГЛЯНУТИ 3D</span>
                </Link>

                {/* Language Switcher */}
                <button className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <ellipse cx="12" cy="12" rx="4" ry="10" />
                        <path d="M2 12h20" />
                    </svg>
                    <span className="text-sm">UA</span>
                </button>
            </div>
        </div>
    );
};
