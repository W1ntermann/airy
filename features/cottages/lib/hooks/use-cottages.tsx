'use client';

import { useState, useEffect } from 'react';
import { Cottage, CottagesFilters } from '@/entities/cottage/model/types';
import { apiClient, cottagesEndpoints } from '@/shared/api/client';

export const useCottages = (initialFilters?: CottagesFilters) => {
    const [cottages, setCottages] = useState<Cottage[]>([]);
    const [filteredCottages, setFilteredCottages] = useState<Cottage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState<CottagesFilters>(initialFilters || {});

    useEffect(() => {
        fetchCottages();
    }, [filters]);

    const fetchCottages = async () => {
        try {
            setLoading(true);
            setError(null);

            // Використовуємо реальний API
            const data = await apiClient.get<Cottage[]>(cottagesEndpoints.getAll, filters);

            // Або тимчасово використовуємо мок-дані
            // const data = await cottagesApi.getCottages(filters);

            setCottages(data);
            setFilteredCottages(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch cottages');
            console.error('Error fetching cottages:', err);
        } finally {
            setLoading(false);
        }
    };

    const updateFilters = (newFilters: Partial<CottagesFilters>) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    const resetFilters = () => {
        setFilters(initialFilters || {});
    };

    return {
        cottages,
        filteredCottages,
        loading,
        error,
        filters,
        updateFilters,
        resetFilters,
        refetch: fetchCottages,
    };
};

// Хук для окремого котеджу
export const useCottage = (id: number) => {
    const [cottage, setCottage] = useState<Cottage | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchCottage();
    }, [id]);

    const fetchCottage = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await apiClient.get<Cottage>(cottagesEndpoints.getById(id));
            setCottage(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch cottage');
        } finally {
            setLoading(false);
        }
    };

    return {
        cottage,
        loading,
        error,
        refetch: fetchCottage,
    };
};