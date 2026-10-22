export const SITE = {
  name: 'Tú Longevidad',
  description:
    'Revista editorial de longevidad: sueño, alimentación, movimiento y hábitos explicados con estudios, no con promesas.',
  lang: 'es',
  locale: 'es_ES',
};

export type SerieId = 'sueno' | 'alimentacion' | 'movimiento' | 'habitos' | 'analisis';

export const SERIES: Record<SerieId, { name: string; slug: string; kicker: string; intro: string; ghost: string }> = {
  sueno: {
    name: 'Sueño',
    slug: 'sueno',
    kicker: 'Lo que pasa de noche',
    intro: 'Por qué te despiertas, qué hace el cerebro mientras duermes y qué puedes cambiar esta misma noche.',
    ghost: 'Noche',
  },
  alimentacion: {
    name: 'Alimentación',
    slug: 'alimentacion',
    kicker: 'Lo que hay en el plato',
    intro: 'Proteína, fibra, horarios y lo que de verdad dicen los estudios sobre comer para vivir más y mejor.',
    ghost: 'Plato',
  },
  movimiento: {
    name: 'Movimiento',
    slug: 'movimiento',
    kicker: 'El estudio en 60 segundos',
    intro: 'Pasos, fuerza y capacidad aeróbica: el deporte como la intervención de longevidad mejor documentada.',
    ghost: 'Fuerza',
  },
  habitos: {
    name: 'Hábitos',
    slug: 'habitos',
    kicker: 'Lo que haces cada día',
    intro: 'Luz, vínculos, estrés y rutinas: lo pequeño que, sumado durante años, se asocia con vivir más.',
    ghost: 'Rutina',
  },
  analisis: {
    name: 'Análisis',
    slug: 'analisis',
    kicker: 'Productos con lupa',
    intro: 'Suplementos, dispositivos y tendencias, revisados con la evidencia en la mano. Sin afiliación que condicione el veredicto.',
    ghost: 'Lupa',
  },
};

export const SERIE_IDS = Object.keys(SERIES) as SerieId[];

export const DISCLAIMER = 'Contenido divulgativo, no sustituye consejo médico.';

export function formatDate(d: Date) {
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}
