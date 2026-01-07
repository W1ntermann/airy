export const COTTAGE_TYPES = {
    'apartment-hotel': {
        label: 'Апарт‑готель',
        description: 'Номерний фонд з професійним управлінням',
        color: 'blue',
    },
    'cottage-a': {
        label: 'Котедж А',
        description: '2 поверхи · тераса з джакузі · панорамні вікна',
        color: 'green',
    },
    'cottage-b': {
        label: 'Котедж B',
        description: 'Компактний формат · до 4 гостей',
        color: 'purple',
    },
    'cottage-c': {
        label: 'Котедж C',
        description: '3 спальні · збільшена тераса',
        color: 'orange',
    },
    'cottage-d': {
        label: 'Котедж D',
        description: 'Президентський люкс · приватний басейн',
        color: 'red',
    },
} as const;

export const COTTAGE_FEATURES_ICONS = {
    'area': '📐',
    'bedrooms': '🛏️',
    'guests': '👥',
    'floors': '🏢',
    'terrace': '🌅',
    'jacuzzi': '🛁',
    'panoramic': '🪟',
    'wifi': '📶',
    'parking': '🅿️',
    'kitchen': '🍳',
} as const;