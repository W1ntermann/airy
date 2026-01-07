import { HeroSection } from '@/widgets/hero';
import { AdvantagesSection } from '@/widgets/advantages-section';
import { ProjectSection } from '@/widgets/project-section';
import { CottagesSection } from '@/widgets/cottages-section';
import { ContactSection } from '@/widgets/contact-section';

export default function HomePage() {
    return (
        <>
            <HeroSection />

            <ProjectSection />
        
            <AdvantagesSection />

            <CottagesSection />

            {/* 3D простір - placeholder */}
            <section id="3d-space" className="py-20 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-500 text-sm tracking-[0.2em] mb-4">3D-ПРОСТІР</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Віртуальний тур
                    </h2>
                    <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto shadow-lg">
                        <p className="text-gray-600">
                            Тут буде інтегровано 3D тур по комплексу AIRY
                        </p>
                    </div>
                </div>
            </section>
            
            <ContactSection />
        </>
    );
}
