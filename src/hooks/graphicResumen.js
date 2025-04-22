import { useMemo } from 'react';

export function useGraphicDiseasesResumen(data) {
  return useMemo(() => {
    if (!data || data.length < 2) return null;

    const init = data[0];
    const final = data[data.length - 1];

    const diff = final.value - init.value;
    const percent = ((diff / init.value) * 100);

    const trend = diff > 0 ? 'aumentó' : 'disminuyó';

    return {
      trend,
      percent: Math.abs(percent.toFixed(2)),
      diff,
      initialYear: init.year,
      finalYear: final.year,
      initialValue: init.value,
      finalValue: final.value
    };
  }, [data]);
}

