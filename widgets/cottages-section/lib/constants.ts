import { Cottage } from './types';

export const COTTAGES_DATA = {
    label: 'ФОРМАТИ НЕРУХОМОСТІ',
    title: 'КОТЕДЖІ ТА АПАРТ-ГОТЕЛЬ AIRY',
} as const;

export const COTTAGES: Cottage[] = [
    {
        id: 1,
        slug: 'apart-hotel',
        title: 'Апарт-готель',
        subtitle: 'Номерний фонд з професійним управлінням',
        description: 'Формат для інвесторів, які хочуть мінімальної залученості. Готельний сервіс, ресепшн, прибирання та керування бронюваннями.',
        image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 2,
        slug: 'cottage-a',
        title: 'Котедж A',
        subtitle: '2 поверхи · тераса з джакузі · панорамні вікна',
        description: 'Просторий формат для сімейного відпочинку. Вітальня з каміном, дві спальні та затишна тераса з видом на гірські схили.',
        image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 3,
        slug: 'cottage-b',
        title: 'Котедж B',
        subtitle: 'Компактний формат · до 4 гостей',
        description: 'Раціональне планування для пари або невеликої компанії. Максимум корисної площі без зайвих метрів.',
        image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 4,
        slug: 'cottage-c',
        title: 'Котедж C',
        subtitle: '3 спальні · збільшена тераса',
        description: 'Формат для великої родини або компанії друзів. Три спальні, простора вітальня та розширена відкрита зона.',
        image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070&auto=format&fit=crop',
    },
] as const;
