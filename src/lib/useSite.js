import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { DEFAULTS, DEFAULT_DOCTORS } from '@/lib/site';

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
    queryFn: async () => {
      try {
        const rows = await base44.entities.Doctor.list('order');
        const list = rows && rows.length > 0 ? rows : DEFAULT_DOCTORS;
        return list.map((doc, idx) => {
          const fallback = DEFAULT_DOCTORS.find((d) => d.name === doc.name || d.id === doc.id) || DEFAULT_DOCTORS[idx] || {};
          const merged = { ...fallback, ...doc };
          return {
            ...merged,
            title: '',
            name: (merged.name || '').replace(/Dr\.\s*med\.\s*/gi, '').replace(/Dr\.\s*/gi, '').trim(),
            focus: (merged.focus || fallback.focus || ['Faltenbehandlung', 'Hyaluronsäure', 'Biostimulation', 'Skin Quality']).map((f) =>
              f.replace(/Botulinumtoxin/gi, 'Faltenbehandlung')
            ),
            focus_en: (merged.focus_en || fallback.focus_en || ['Wrinkle Treatment', 'Hyaluronic Acid', 'Biostimulation', 'Skin Quality']).map((f) =>
              f.replace(/Botulinum\s*Toxin/gi, 'Wrinkle Treatment')
            ),
            qualifications: (merged.qualifications || fallback.qualifications || []).map((q) =>
              q.replace(/Botulinumtoxin/gi, 'Faltenbehandlung')
            ),
            qualifications_en: (merged.qualifications_en || fallback.qualifications_en || []).map((q) =>
              q.replace(/Botulinum\s*Toxin/gi, 'Wrinkle Treatment')
            ),
          };
        });
      } catch (e) {
        return DEFAULT_DOCTORS.map((doc) => ({
          ...doc,
          title: '',
          name: (doc.name || '').replace(/Dr\.\s*med\.\s*/gi, '').replace(/Dr\.\s*/gi, '').trim(),
        }));
      }
    },
    staleTime: 60_000,
  });
}