'use client';

import Link from 'next/link';
import { Logo } from '@/shared/ui/logo/logo';
import { FOOTER_DATA } from '../lib/constants';

export const Footer = () => {
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
        <footer className="bg-olive-600 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* CTA Block */}
                    <div className="lg:col-span-4">
                        <Logo variant="light" className="mb-8" />

                        <p className="text-white/80 text-sm mb-2">
                            {FOOTER_DATA.cta.title}
                        </p>
                        <p className="text-white/70 text-sm whitespace-pre-line mb-6">
                            {FOOTER_DATA.cta.subtitle}
                        </p>

                        <Link
                            href="#contacts"
                            onClick={(e) => handleScroll(e, '#contacts')}
                            className="inline-block text-white text-sm font-medium underline underline-offset-4 hover:text-white/80 transition-colors"
                        >
                            {FOOTER_DATA.cta.button}
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <nav className="flex flex-col gap-3">
                            {FOOTER_DATA.navigation.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="text-white/80 text-sm hover:text-white transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <div className="space-y-4">
                            <a
                                href={`tel:${FOOTER_DATA.contacts.phone.replace(/\s/g, '')}`}
                                className="block text-white text-sm hover:text-white/80 transition-colors"
                            >
                                {FOOTER_DATA.contacts.phone}
                            </a>

                            <p className="text-white/70 text-sm whitespace-pre-line">
                                {FOOTER_DATA.contacts.address}
                            </p>

                            <a
                                href={`mailto:${FOOTER_DATA.contacts.email}`}
                                className="block text-white text-sm hover:text-white/80 transition-colors"
                            >
                                {FOOTER_DATA.contacts.email}
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="lg:col-span-3">
                        <div className="flex flex-col gap-3">
                            {FOOTER_DATA.social.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-sm underline underline-offset-4 hover:text-white/80 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-xs">
                            {FOOTER_DATA.legal.copyright}
                        </p>

                        <div className="flex items-center gap-6">
                            {FOOTER_DATA.legal.links.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className="text-white/60 text-xs hover:text-white/80 transition-colors"
                                >
                                    {link.title}
                                </a>
                            ))}

                            <span className="text-white/60 text-xs">
                                {FOOTER_DATA.legal.credits}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
