'use client';

import { CONTACT_DATA } from '../lib/constants';
import { ContactForm } from './contact-form';

interface ContactSectionProps {
    className?: string;
}

export const ContactSection = ({ className = '' }: ContactSectionProps) => {
    return (
        <section
            id="contacts"
            className={`relative py-20 md:py-28 overflow-hidden ${className}`}
            style={{
                background: 'linear-gradient(135deg, #6b705c 0%, #565a4a 50%, #474a3e 100%)',
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Contact Info */}
                    <div>
                        <p className="text-olive-300 text-sm tracking-[0.2em] mb-6">
                            {CONTACT_DATA.label}
                        </p>

                        <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-10 font-light">
                            {CONTACT_DATA.title}
                        </p>

                        {/* Contact Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={`tel:${CONTACT_DATA.phone.replace(/\s/g, '')}`}
                                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                <span>{CONTACT_DATA.phone}</span>
                            </a>

                            <a
                                href={`mailto:${CONTACT_DATA.email}`}
                                className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-full hover:bg-white/30 transition-all duration-300"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 6l-10 7L2 6" />
                                </svg>
                                <span>{CONTACT_DATA.email}</span>
                            </a>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};
