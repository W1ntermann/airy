import { Cottage, CottagesFilters } from './types';
import {COTTAGE_TYPES} from "@/entities/cottage/lib/constants";

export const mockCottages: Cottage[] = [
    {
        id: 1,
        type: 'apartment-hotel',
        title: 'Апарт‑готель',
        subtitle: 'Номерний фонд з професійним управлінням',
        description: 'Формат для інвесторів, які хочуть мінімальної залученості. Готельний сервіс, ресепшн, прибирання та керування бронюваннями.',
        features: [
            { id: 1, name: 'Площа', value: '35 м²', icon: 'area' },
            { id: 2, name: 'Спальні', value: '1', icon: 'bedrooms' },
            { id: 3, name: 'Гості', value: '2', icon: 'guests' },
            { id: 4, name: 'Поверхи', value: '1', icon: 'floors' },
            { id: 5, name: 'Wi-Fi', value: 'Так', icon: 'wifi' },
            { id: 6, name: 'Паркінг', value: 'Так', icon: 'parking' },
        ],
        price: { from: 4500, currency: 'UAH', period: 'night' },
        images: ['/cottages/apartment-hotel-1.jpg'],
        area: 35,
        bedrooms: 1,
        floors: 1,
        maxGuests: 2,
        hasTerrace: false,
        hasJacuzzi: false,
        hasPanoramicWindows: true,
        isAvailable: true,
        sortOrder: 1,
        tags: ['готель', 'управління', 'сервіс'],
        detailsUrl: '/cottages/apartment-hotel',
        bookingUrl: '/booking/apartment-hotel',
    },
    {
        id: 2,
        type: 'cottage-a',
        title: 'Котедж А',
        subtitle: '2 поверхи · тераса з джакузі · панорамні вікна',
        description: 'Просторий формат для сімейного відпочинку. Вітальня з каміном, дві спальні та затишна тераса з видом на гірські схили.',
        features: [
            { id: 1, name: 'Площа', value: '120 м²', icon: 'area' },
            { id: 2, name: 'Спальні', value: '2', icon: 'bedrooms' },
            { id: 3, name: 'Гості', value: '6', icon: 'guests' },
            { id: 4, name: 'Поверхи', value: '2', icon: 'floors' },
            { id: 5, name: 'Тераса', value: '35 м²', icon: 'terrace' },
            { id: 6, name: 'Джакузі', value: 'Так', icon: 'jacuzzi' },
        ],
        price: { from: 8500, currency: 'UAH', period: 'night' },
        images: ['/cottages/cottage-a-1.jpg'],
        area: 120,
        bedrooms: 2,
        floors: 2,
        maxGuests: 6,
        hasTerrace: true,
        hasJacuzzi: true,
        hasPanoramicWindows: true,
        isAvailable: true,
        sortOrder: 2,
        tags: ['сімейний', 'тераса', 'джакузі'],
        tour: {
            id: 1,
            url: 'https://3d-tour.com/cottage-a',
            type: 'iframe',
            thumbnail: '/cottages/cottage-a-3d.jpg',
        },
        detailsUrl: '/cottages/cottage-a',
        bookingUrl: '/booking/cottage-a',
    },
    {
        id: 3,
        type: 'cottage-b',
        title: 'Котедж B',
        subtitle: 'Компактний формат · до 4 гостей',
        description: 'Раціональне планування для пари або невеликої компанії. Максимум корисної площі без зайвих метрів.',
        features: [
            { id: 1, name: 'Площа', value: '65 м²', icon: 'area' },
            { id: 2, name: 'Спальні', value: '1', icon: 'bedrooms' },
            { id: 3, name: 'Гості', value: '4', icon: 'guests' },
            { id: 4, name: 'Поверхи', value: '1', icon: 'floors' },
            { id: 5, name: 'Тераса', value: '15 м²', icon: 'terrace' },
            { id: 6, name: 'Кухня', value: 'Повна', icon: 'kitchen' },
        ],
        price: { from: 5500, currency: 'UAH', period: 'night' },
        images: ['/cottages/cottage-b-1.jpg'],
        area: 65,
        bedrooms: 1,
        floors: 1,
        maxGuests: 4,
        hasTerrace: true,
        hasJacuzzi: false,
        hasPanoramicWindows: true,
        isAvailable: true,
        sortOrder: 3,
        tags: ['компактний', 'економ', 'пара'],
        tour: {
            id: 2,
            url: 'https://3d-tour.com/cottage-b',
            type: 'iframe',
            thumbnail: '/cottages/cottage-b-3d.jpg',
        },
        detailsUrl: '/cottages/cottage-b',
        bookingUrl: '/booking/cottage-b',
    },
    {
        id: 4,
        type: 'cottage-c',
        title: 'Котедж C',
        subtitle: '3 спальні · збільшена тераса',
        description: 'Формат для великої родини або компанії друзів. Три спальні, простора вітальня та розширена відкрита зона.',
        features: [
            { id: 1, name: 'Площа', value: '150 м²', icon: 'area' },
            { id: 2, name: 'Спальні', value: '3', icon: 'bedrooms' },
            { id: 3, name: 'Гості', value: '8', icon: 'guests' },
            { id: 4, name: 'Поверхи', value: '2', icon: 'floors' },
            { id: 5, name: 'Тераса', value: '45 м²', icon: 'terrace' },
            { id: 6, name: 'Панорамні вікна', value: 'Так', icon: 'panoramic' },
        ],
        price: { from: 12000, currency: 'UAH', period: 'night' },
        images: ['/cottages/cottage-c-1.jpg'],
        area: 150,
        bedrooms: 3,
        floors: 2,
        maxGuests: 8,
        hasTerrace: true,
        hasJacuzzi: false,
        hasPanoramicWindows: true,
        isAvailable: true,
        sortOrder: 4,
        tags: ['велика родина','тераса', 'простір'],
            tour: {
    id: 3,
        url: 'https://3d-tour.com/cottage-c',
        type: 'iframe',
        thumbnail: '/cottages/cottage-c-3d.jpg',
},
detailsUrl: '/cottages/cottage-c',
    bookingUrl: '/booking/cottage-c',
},
];

export interface CottagesApi {
    getCottages: (filters?: CottagesFilters) => Promise<Cottage[]>;
    getCottageById: (id: number) => Promise<Cottage | null>;
    getCottageTypes: () => Promise<Array<{ type: string; label: string; count: number }>>;
}

// Тимчасова реалізація (замінити на реальний API)
export const cottagesApi: CottagesApi = {
    async getCottages(filters) {
        // Імітація затримки запиту
        await new Promise(resolve => setTimeout(resolve, 300));

        let filtered = [...mockCottages];

        if (filters?.type?.length) {
            filtered = filtered.filter(c => filters.type!.includes(c.type));
        }

        if (filters?.minPrice !== undefined) {
            filtered = filtered.filter(c => c.price.from >= filters.minPrice!);
        }

        if (filters?.maxPrice !== undefined) {
            filtered = filtered.filter(c => c.price.from <= filters.maxPrice!);
        }

        if (filters?.bedrooms?.length) {
            filtered = filtered.filter(c => filters.bedrooms!.includes(c.bedrooms));
        }

        if (filters?.hasTerrace !== undefined) {
            filtered = filtered.filter(c => c.hasTerrace === filters.hasTerrace);
        }

        if (filters?.hasJacuzzi !== undefined) {
            filtered = filtered.filter(c => c.hasJacuzzi === filters.hasJacuzzi);
        }

        if (filters?.isAvailable !== undefined) {
            filtered = filtered.filter(c => c.isAvailable === filters.isAvailable);
        }

        // Сортування
        if (filters?.sortBy) {
            filtered.sort((a, b) => {
                let aValue: number, bValue: number;

                switch (filters.sortBy) {
                    case 'price':
                        aValue = a.price.from;
                        bValue = b.price.from;
                        break;
                    case 'area':
                        aValue = a.area;
                        bValue = b.area;
                        break;
                    case 'bedrooms':
                        aValue = a.bedrooms;
                        bValue = b.bedrooms;
                        break;
                    default:
                        return 0;
                }

                return filters.sortOrder === 'desc' ? bValue - aValue : aValue - bValue;
            });
        }

        return filtered;
    },

    async getCottageById(id) {
        await new Promise(resolve => setTimeout(resolve, 200));
        return mockCottages.find(c => c.id === id) || null;
    },

    async getCottageTypes() {
        const types = mockCottages.reduce((acc, cottage) => {
            const type = cottage.type;
            if (!acc[type]) {
                acc[type] = 0;
            }
            acc[type]++;
            return acc;
        }, {} as Record<string, number>);

        return Object.entries(types).map(([type, count]) => ({
            type,
            label: COTTAGE_TYPES[type as keyof typeof COTTAGE_TYPES]?.label || type,
            count,
        }));
    },
};