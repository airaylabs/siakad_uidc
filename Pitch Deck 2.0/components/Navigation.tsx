import React from 'react';

interface NavigationProps {
    current: number;
    total: number;
    onNext: () => void;
    onPrev: () => void;
}

const NavButton: React.FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode }> = ({ onClick, disabled, children }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="w-10 h-10 flex items-center justify-center bg-white text-[var(--brand-green)] rounded-full shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
        aria-label={children ? 'Next' : 'Previous'}
    >
        {children}
    </button>
);

const Navigation: React.FC<NavigationProps> = ({ current, total, onNext, onPrev }) => {
    return (
        <div className="flex items-center justify-between">
            <NavButton onClick={onPrev} disabled={current === 0}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </NavButton>

            <div className="text-center">
                <div className="text-sm font-semibold text-gray-700">{`${current + 1} / ${total}`}</div>
                <div className="w-24 h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div
                        className="h-full bg-[var(--brand-green)] rounded-full transition-all duration-300"
                        style={{ width: `${((current + 1) / total) * 100}%` }}
                    ></div>
                </div>
            </div>

            <NavButton onClick={onNext} disabled={current === total - 1}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </NavButton>
        </div>
    );
};

export default Navigation;