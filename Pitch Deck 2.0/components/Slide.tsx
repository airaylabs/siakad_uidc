import React from 'react';
import { SlideData, Stat, Item } from '../types';

interface SlideProps {
    data: SlideData;
}

const themeClasses = {
    problem: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        title: 'text-red-800',
    },
    solution: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        title: 'text-green-800',
    },
    tech: {
        bg: 'bg-[var(--brand-gold-soft)]',
        border: 'border-[var(--brand-gold-border)]',
        title: 'text-yellow-900',
    },
    default: {
        bg: 'bg-white',
        border: 'border-gray-200',
        title: 'text-[var(--brand-green-dark)]',
    },
};

const StatCard: React.FC<{ stat: Stat; delay: string }> = ({ stat, delay }) => (
    <div className={`text-center animate-fade-in ${delay}`}>
        <span className="text-5xl md:text-6xl font-extrabold text-[var(--brand-green)]">{stat.value}</span>
        <div className="text-sm text-gray-500 mt-2">
            {stat.label.map((line, i) => <span key={i} className="block">{line}</span>)}
        </div>
    </div>
);

const InfoCard: React.FC<{ item: Item; delay: string }> = ({ item, delay }) => {
    const theme = themeClasses[item.theme || 'default'];
    return (
        <div className={`p-5 rounded-xl border ${theme.border} ${theme.bg} flex items-start gap-4 animate-fade-in ${delay} shadow-sm`}>
            {item.icon && <span className="text-4xl mt-1 text-[var(--brand-green)]">{item.icon}</span>}
            <div>
                <h4 className={`font-bold ${theme.title}`}>{item.title}</h4>
                <p className="text-base text-gray-600">{item.description}</p>
            </div>
        </div>
    );
};

const FeatureListItem: React.FC<{ item: Item; delay: string }> = ({ item, delay }) => {
    return (
        <div className={`p-5 bg-white rounded-xl border border-gray-200 flex items-center gap-5 animate-fade-in ${delay} shadow-sm`}>
            {item.icon && <span className="text-5xl text-[var(--brand-green)]">{item.icon}</span>}
            <div>
                <h4 className={`font-bold text-[var(--brand-green-dark)]`}>{item.title}</h4>
                <p className="text-base text-gray-600">{item.description}</p>
            </div>
        </div>
    );
};

const SlideHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
     <div className="text-center animate-fade-in mb-8 md:mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ color: 'var(--brand-green-dark)' }}>{title}</h2>
        {subtitle && <p className="text-base text-gray-500 mt-3 max-w-prose mx-auto">{subtitle}</p>}
    </div>
);

const HighlightBlock: React.FC<{ highlight: SlideData['highlight'], delay?: string }> = ({ highlight, delay = 'delay-100' }) => {
    if (!highlight) return null;
    return (
        <div className={`bg-[var(--brand-green)] text-white rounded-2xl p-8 text-center shadow-lg animate-fade-in ${delay}`}>
            <h3 className="font-bold text-xl md:text-2xl">{highlight.title}</h3>
            <p className="text-base opacity-90 mt-2">{highlight.text}</p>
        </div>
    );
};


// LAYOUTS
const DefaultLayout: React.FC<{ data: SlideData }> = ({ data }) => (
    <div>
        <SlideHeader title={data.title} subtitle={data.subtitle} />
        
        {data.highlight && <HighlightBlock highlight={data.highlight} />}

        {data.mainText && (
            <p className="text-center text-[var(--brand-green-dark)] font-semibold italic my-8 text-lg max-w-prose mx-auto animate-fade-in delay-200">
                {data.mainText}
            </p>
        )}

        {data.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                {data.stats.map((stat, index) => <StatCard key={index} stat={stat} delay={`delay-${200 + index * 50}`} />)}
            </div>
        )}

        {data.items && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {data.items.map((item, index) => <InfoCard key={index} item={item} delay={`delay-${200 + index * 50}`} />)}
            </div>
        )}
         {data.cta && (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center space-y-4 animate-fade-in delay-200 mt-8">
                <h3 className="font-bold text-xl text-[var(--brand-green-dark)]">{data.cta.title}</h3>
                <p className="text-base text-gray-600 max-w-md mx-auto">{data.cta.text}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
                    {data.cta.buttons.map((btn, i) => (
                        <button key={i} className="bg-[var(--brand-green)] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[var(--brand-green-dark)] transition-colors text-base">
                            {btn}
                        </button>
                    ))}
                </div>
                {data.cta.offer && <p className="text-sm text-gray-500 pt-3">{data.cta.offer}</p>}
            </div>
        )}
         {data.timeline && (
            <div className="bg-[var(--brand-gold-soft)] border border-[var(--brand-gold-border)] rounded-2xl p-8 space-y-3 animate-fade-in delay-300 mt-8">
                <h4 className="font-semibold text-lg text-yellow-900">{data.timeline.title}</h4>
                <ul className="text-base text-yellow-800 list-disc list-inside space-y-2">
                    {data.timeline.steps.map((step, i) => <li key={i}>{step}</li>)}
                </ul>
            </div>
        )}

    </div>
);

const SplitLayout: React.FC<{ data: SlideData }> = ({ data }) => (
    <div>
        <SlideHeader title={data.title} subtitle={data.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mt-6">
            <div className="animate-fade-in delay-100">
                {data.highlight && (
                     <div className="bg-[var(--brand-green)] text-white rounded-2xl p-10 shadow-xl">
                        <h3 className="font-bold text-3xl">{data.highlight.title}</h3>
                        <p className="text-lg opacity-90 mt-3">{data.highlight.text}</p>
                    </div>
                )}
            </div>
            <div className="space-y-5">
                {data.items?.map((item, index) => <InfoCard key={index} item={item} delay={`delay-${200 + index * 100}`} />)}
            </div>
        </div>
    </div>
);

const FeatureListLayout: React.FC<{ data: SlideData }> = ({ data }) => (
    <div>
        <SlideHeader title={data.title} subtitle={data.subtitle} />
         {data.stats && (
            <div className="grid grid-cols-3 gap-4 py-8 border-b-2 border-gray-200 mb-8">
                {data.stats.map((stat, index) => <StatCard key={index} stat={stat} delay={`delay-${100 + index * 100}`} />)}
            </div>
        )}
        <div className="space-y-5">
            {data.items?.map((item, index) => <FeatureListItem key={index} item={item} delay={`delay-${300 + index * 50}`} />)}
        </div>
    </div>
);


const Slide: React.FC<SlideProps> = ({ data }) => {
    const renderLayout = () => {
        switch (data.layout) {
            case 'split':
                return <SplitLayout data={data} />;
            case 'feature-list':
                return <FeatureListLayout data={data} />;
            default:
                return <DefaultLayout data={data} />;
        }
    };
    
    return (
        <div className="w-full h-full px-6 sm:px-8 lg:px-10 overflow-y-auto no-scrollbar">
            {renderLayout()}
        </div>
    );
};

export default Slide;