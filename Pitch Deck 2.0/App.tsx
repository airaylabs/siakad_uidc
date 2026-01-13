
import React, { useState } from 'react';
import VersionSelector from './components/VersionSelector';
import MobileView from './components/MobileView';
import DesktopView from './components/DesktopView';

type PresentationMode = 'selector' | 'mobile' | 'desktop';

const App: React.FC = () => {
    const [presentationMode, setPresentationMode] = useState<PresentationMode>('selector');

    const handleSelectMode = (mode: 'mobile' | 'desktop') => {
        setPresentationMode(mode);
    };

    const renderContent = () => {
        switch (presentationMode) {
            case 'mobile':
                return <MobileView />;
            case 'desktop':
                return <DesktopView />;
            case 'selector':
            default:
                return <VersionSelector onSelect={handleSelectMode} />;
        }
    };

    return (
        <div className="w-screen h-screen bg-gray-50 font-sans">
            {renderContent()}
        </div>
    );
};

export default App;
