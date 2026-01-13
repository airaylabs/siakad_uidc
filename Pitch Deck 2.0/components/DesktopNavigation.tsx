
import React from 'react';

interface DesktopNavigationProps {
    current: number;
    total: number;
    onNext: () => void;
    onPrev: () => void;
}

const NavButton: React.FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode, position: 'left' | 'right' }> = ({ onClick, disabled, children, position }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`absolute top-1/2 -translate-y-1/2 ${position === 'left' ? 'left-4' : 'right-4'} w-12 h-12 flex items-center justify-center bg-white/50 hover:bg-white text-gray-700 rounded-full shadow-lg disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm`}
        aria-label={position === 'left' ? 'Previous Slide' : 'Next Slide'}
    >
        {children}
    </button>
);

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ current, total, onNext, onPrev }) => {
    return (
        <>
            {/* Navigation Buttons */}
            <NavButton onClick={onPrev} disabled={current === 0} position="left">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </NavButton>

            <NavButton onClick={onNext} disabled={current === total - 1} position="right">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </NavButton>

            {/* Progress Indicator */}
            <footer className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="text-sm font-semibold text-gray-700 bg-white/50 backdrop-blur-sm py-1 px-3 rounded-full shadow">
                    {`${current + 1} / ${total}`}
                </div>
            </footer>
        </>
    );
};

export default DesktopNavigation;
