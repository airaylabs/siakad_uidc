export interface Stat {
    value: string;
    label: string[];
}

export interface Item {
    title: string;
    description: string;
    icon?: string;
    theme?: 'problem' | 'solution' | 'default' | 'tech';
}

export interface SlideData {
    id: number;
    title: string;
    subtitle?: string;
    layout?: 'default' | 'split' | 'feature-list';
    highlight?: {
        title: string;
        text: string;
    };
    mainText?: string;
    items?: Item[];
    stats?: Stat[];
    cta?: {
        title: string;
        text: string;
        buttons: string[];
        offer?: string;
    };
    contactInfo?: {
        title: string;
        details: string[];
    };
    timeline?: {
        title: string;
        steps: string[];
    }
}