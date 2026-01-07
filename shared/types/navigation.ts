export interface NavItem {
    id: number;
    title: string;
    href: string;
    scroll?: boolean;
}

export interface CTAButton {
    id: number;
    title: string;
    variant: 'primary' | 'secondary' | 'outline';
    href: string;
}