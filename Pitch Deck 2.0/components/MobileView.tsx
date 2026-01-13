import React, { useState, useRef, useCallback } from 'react';
import { SLIDES_DATA } from '../constants';
import Slide from './Slide';
import Navigation from './Navigation';

const MobileView: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const slidesContainerRef = useRef<HTMLDivElement>(null);

    const totalSlides = SLIDES_DATA.length;

    const handleNext = useCallback(() => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    }, [currentSlide, totalSlides]);

    const handlePrev = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    }, [currentSlide]);


    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
        touchEndX.current = e.targetTouches[0].clientX; // Reset on new touch
        if (slidesContainerRef.current) {
            slidesContainerRef.current.style.transition = 'none';
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
        if (slidesContainerRef.current) {
            const dragOffset = touchEndX.current - touchStartX.current;
            // Immediate visual feedback while dragging
            slidesContainerRef.current.style.transform = `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`;
        }
    };

    const handleTouchEnd = () => {
        const threshold = 50; // Min swipe distance
        const movedBy = touchStartX.current - touchEndX.current;
        let finalSlide = currentSlide;

        if (movedBy > threshold && currentSlide < totalSlides - 1) {
            finalSlide++;
        } else if (movedBy < -threshold && currentSlide > 0) {
            finalSlide--;
        }
        
        setCurrentSlide(finalSlide);

        // Snap back to the correct slide position
        if (slidesContainerRef.current) {
            slidesContainerRef.current.style.transition = 'transform 0.3s ease-in-out';
            slidesContainerRef.current.style.transform = `translateX(-${finalSlide * 100}%)`;
        }
    };

    return (
        <div className="relative w-full h-full flex flex-col overflow-hidden">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center gap-3">
                <div className="bg-[var(--brand-green)] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">
                    🕌
                </div>
                <div>
                    <h1 className="font-bold text-sm text-gray-800">Proposal untuk UIDC</h1>
                    <p className="text-xs text-gray-500">All in One SIAKAD</p>
                </div>
            </header>

            {/* Main Content: Slides */}
            <main
                className="flex-grow w-full h-full overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    ref={slidesContainerRef}
                    className="flex h-full w-full"
                    style={{ 
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    {SLIDES_DATA.map((slideData, index) => (
                        <div key={slideData.id} className="w-full h-full flex-shrink-0 pt-24 pb-24">
                           {/* Render only current, previous and next slide for performance */}
                           {Math.abs(index - currentSlide) <= 1 && <Slide data={slideData} />}
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer: Navigation */}
            <footer className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent">
                <Navigation
                    current={currentSlide}
                    total={totalSlides}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            </footer>
        </div>
    );
};

export default MobileView;