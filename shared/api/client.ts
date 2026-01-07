class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string = process.env.NEXT_PUBLIC_API_URL || '/api') {
        this.baseUrl = baseUrl;
    }

    async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
        const url = new URL(`${this.baseUrl}${endpoint}`);

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    url.searchParams.append(key, String(value));
                }
            });
        }

        const response = await fetch(url.toString(), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return response.json();
    }

    async post<T>(endpoint: string, data: any): Promise<T> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return response.json();
    }
}

export const apiClient = new ApiClient();

// Endpoints для котеджів
export const cottagesEndpoints = {
    getAll: '/cottages',
    getById: (id: number) => `/cottages/${id}`,
    getTypes: '/cottages/types',
    book: '/cottages/book',
    getAvailability: '/cottages/availability',
};