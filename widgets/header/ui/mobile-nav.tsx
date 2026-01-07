'use client';

import Link from 'next/link';
import { Logo } from '@/shared/ui/logo/logo';
import { NAV_ITEMS } from '@/shared/config/navigation';

interface MobileNavProps {
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}

export const MobileNav = ({ isOpen, onToggle, onClose }: MobileNavProps) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        }
    };

    return (
        <div className="lg:hidden">
            {/* Mobile Header */}
            <div className="flex items-center justify-between">
                <Logo variant="light" />
                <button
                    onClick={onToggle}
                    className="p-2 text-white"
                    aria-label={isOpen ? 'Закрити меню' : 'Відкрити меню'}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-olive-600/98 backdrop-blur-md border-t border-white/10">
                    <div className="container mx-auto px-4 py-6">
                        <nav className="flex flex-col gap-4">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="text-white/90 text-lg py-2 hover:text-white transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <Link
                                href="#3d-space"
                                onClick={(e) => handleScroll(e, '#3d-space')}
                                className="flex items-center justify-center gap-2 border border-white/30 text-white px-5 py-3 rounded-full text-sm hover:bg-white/10 transition-all w-full"
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                    <path d="M4 2L10 6L4 10V2Z" />
                                </svg>
                                <span>ПЕРЕГЛЯНУТИ 3D</span>
                            </Link>
                        </div>

                        {/* Language */}
                        <div className="mt-4 flex justify-center">
                            <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <ellipse cx="12" cy="12" rx="4" ry="10" />
                                    <path d="M2 12h20" />
                                </svg>
                                <span className="text-sm">UA</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
