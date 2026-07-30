import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { DEFAULTS } from '@/lib/site';

export function useSettings() {
  const { data, isLoading } = useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const rows = await base44.entities.SiteSettings.list();
      return rows[0] || null;
    },
    staleTime: 60_000,
  });
  return { settings: { ...DEFAULTS, ...(data || {}) }, raw: data, isLoading };
}

export function useTreatments() {
  return useQuery({
    queryKey: ['treatments'],
    queryFn: () => base44.entities.Treatment.filter({ published: true }, 'order'),
    staleTime: 60_000,
  });
}

export function useDoctors() {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: () => base44.entities.Doctor.list('order'),
    staleTime: 60_000,
  });
}