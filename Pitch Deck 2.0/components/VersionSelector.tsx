import React from 'react';

const MobileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[var(--brand-green)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const DesktopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[var(--brand-green)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


interface VersionSelectorProps {
    onSelect: (mode: 'mobile' | 'desktop') => void;
}

const VersionSelector: React.FC<VersionSelectorProps> = ({ onSelect }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ color: 'var(--brand-green-dark)'}}>Proposal Transformasi Digital</h1>
                    <p className="text-gray-500 mt-2">Pilih mode tampilan presentasi untuk pengalaman terbaik.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {/* Mobile Version Card */}
                    <button
                        onClick={() => onSelect('mobile')}
                        className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[var(--brand-green)] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-opacity-50"
                        aria-label="Pilih Versi Mobile"
                    >
                        <MobileIcon />
                        <h2 className="text-xl font-semibold text-gray-800">Versi Mobile</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Didesain khusus untuk tampilan optimal di perangkat smartphone Anda.
                        </p>
                    </button>

                    {/* Desktop Version Card */}
                    <button
                        onClick={() => onSelect('desktop')}
                        className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-[var(--brand-green)] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-opacity-50"
                        aria-label="Pilih Versi Desktop"
                    >
                        <DesktopIcon />
                        <h2 className="text-xl font-semibold text-gray-800">Versi Desktop</h2>
                        <p className="text-sm text-gray-500 mt-2">
                           Pengalaman layar lebar dengan navigasi intuitif via keyboard dan tombol di layar.
                        </p>
                    </button>
                </div>
                 <footer className="mt-12 text-xs text-gray-400">
                    <p>Proposal untuk Universitas Islam Darussalam Ciamis</p>
                </footer>
            </div>
        </div>
    );
};

export default VersionSelector;