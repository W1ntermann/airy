export const NAV_ITEMS = [
    { id: 1, title: 'Про проєкт', href: '#project' },
    { id: 2, title: 'Переваги', href: '#advantages' },
    { id: 3, title: '3D-Простір', href: '#3d-space' },
    { id: 4, title: 'Котеджі', href: '#cottages' },
    { id: 5, title: 'Контакти', href: '#contacts' },
] as const;

export type NavItem = typeof NAV_ITEMS[number];
