import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA } from '../constants';
import Slide from './Slide';
import DesktopNavigation from './DesktopNavigation';

const DesktopView: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = SLIDES_DATA.length;

    const handleNext = useCallback(() => {
        setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
    }, [totalSlides]);

    const handlePrev = useCallback(() => {
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleNext, handlePrev]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative p-4 md:p-8">
            <header className="absolute top-0 left-0 p-4 flex items-center gap-3">
                 <div className="bg-[var(--brand-green)] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    🕌
                </div>
                <div>
                    <h1 className="font-bold text-sm text-gray-800">Proposal untuk UIDC</h1>
                    <p className="text-xs text-gray-500">All in One SIAKAD</p>
                </div>
            </header>
            
            <main className="w-full h-full flex items-center justify-center">
                 <div className="w-full h-full max-h-[85vh] max-w-6xl">
                     <Slide key={currentSlide} data={SLIDES_DATA[currentSlide]} />
                 </div>
            </main>

            <DesktopNavigation
                current={currentSlide}
                total={totalSlides}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </div>
    );
};

export default DesktopView;