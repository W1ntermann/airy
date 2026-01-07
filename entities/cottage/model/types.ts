export interface CottageFeature {
    id: number;
    name: string;
    value: string;
    icon?: string;
}

export interface Cottage3DTour {
    id: number;
    url: string;
    type: 'iframe' | 'model' | 'video';
    thumbnail?: string;
}

export interface Cottage {
    id: number;
    type: 'apartment-hotel' | 'cottage-a' | 'cottage-b' | 'cottage-c' | 'cottage-d';
    title: string;
    subtitle: string;
    description: string;
    features: CottageFeature[];
    price: {
        from: number;
        currency: 'UAH' | 'USD' | 'EUR';
        period?: 'night' | 'month' | 'year';
    };
    images: string[];
    area: number; // м²
    bedrooms: number;
    floors: number;
    maxGuests: number;
    hasTerrace: boolean;
    hasJacuzzi: boolean;
    hasPanoramicWindows: boolean;
    isAvailable: boolean;
    sortOrder: number;
    tags: string[];
    tour?: Cottage3DTour;
    detailsUrl?: string;
    bookingUrl?: string;
}

export interface CottagesFilters {
    type?: Cottage['type'][];
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number[];
    hasTerrace?: boolean;
    hasJacuzzi?: boolean;
    isAvailable?: boolean;
    sortBy?: 'price' | 'area' | 'bedrooms' | 'popularity';
    sortOrder?: 'asc' | 'desc';
}