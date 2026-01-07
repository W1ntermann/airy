'use client';

import { useState, useEffect } from 'react';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { Logo } from '@/shared/ui/logo/logo';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-300
                ${isScrolled
                    ? 'bg-olive-600/95 backdrop-blur-md shadow-lg py-3'
                    : 'bg-olive-600 py-4'
                }
            `}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Navigation */}
                <DesktopNav />

                {/* Mobile Navigation */}
                <MobileNav
                    isOpen={isMobileMenuOpen}
                    onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    onClose={closeMobileMenu}
                />
            </div>
        </header>
    );
};
