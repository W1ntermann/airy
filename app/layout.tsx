import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import './globals.css';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'AIRY - Котеджі та апарт-готель в Карпатах | Славсько',
    description: 'AIRY — курортний комплекс в Карпатах. Інвестиційна можливість у курортній нерухомості з професійним управлінням та прозорою економікою.',
    keywords: 'котеджі карпати, апарт-готель славсько, інвестиції нерухомість, airy',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="uk" className={inter.variable}>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="font-sans antialiased">
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
