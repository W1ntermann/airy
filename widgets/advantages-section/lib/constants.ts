import { Advantage } from './types';

export const ADVANTAGES_DATA = {
    label: 'ПЕРЕВАГИ',
    title: 'ОСНОВНІ ПЕРЕВАГИ AIRY',
} as const;

export const ADVANTAGES: Advantage[] = [
    {
        id: 1,
        icon: 'location',
        title: 'Локація та потік гостей',
        description: 'Близько до великих міст — стабільний трафік цілий рік. Змішаний попит вихідних знижує сезонну волатильність.',
    },
    {
        id: 2,
        icon: 'income',
        title: 'Диверсифікований дохід',
        description: 'Апартаменти + котеджі для різних сегментів. Динамічне ціноутворення вирівнює дохід у піки та міжсезоння.',
    },
    {
        id: 3,
        icon: 'control',
        title: 'Контроль і звітність',
        description: 'Щомісячні P&L, KPI (ADR, RevPAR, OCC) та доступ до CRM/BI. Аудит і план-факт забезпечують прозорість управління.',
    },
    {
        id: 4,
        icon: 'exit',
        title: 'Вихідні сценарії',
        description: 'Довгострокове володіння, рефінансування — все прописано. Викуп/переуступки підвищують ліквідність інвестиції.',
    },
] as const;
