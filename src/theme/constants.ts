/**
 * Группы семантических цветов
 */
export const SEMANTIC_COLORS_GROUPS = {
    /**
     * Используется на элементах несущие первостепенный характер
     */
    PRIMARY: "primary",
    /**
     * Используется на элементах несущие второстепенный характер
     */
    SECONDARY: "secondary",
    /**
     * Используется на элементах несущие предупреждающий характер
     */
    WARNING: "warning",
    /**
     * Используется на элементах несущие успешный характер
     */
    SUCCESS: "success",
    /**
     * Используется на элементах несущие опасный характер
     */
    ERROR: "error",
    /**
     * Используется на элементаах несущие информационный характер
     */
    INFO: "info"
} as const

/**
 * Семантические цвета
 */
export const SEMANTIC_COLORS = {
    /**
     * Основной цвет
     */
    DEFAULT: "default",
    /**
     * Второстепенный ( наведение, фон и т д)
     */
    LIGHT: "light",
    /**
     * Подчеркивающий ( совершение действия )
     */
    DARK: "dark",
    /**
     * Обратный цвет ( текст на основном цвете)
     */
    INTERNAL: "internal"
} as const

/**
 * Цвета используемые на отключенных элементах
 */
export const DISABLED_COLORS = {
    /**
     * Основной цвет
     */
    DEFAULT: "default",
    /**
     * Обратный цвет ( текст на основном цвете)
     */
    INTERNAL: "internal"
} as const

/**
 * Типы шрифтов
 */
export const TYPOGRAPHY_TYPES = {
    H1:'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    CAPTION: 'caption',
    BODY1: 'body1',
    BODY2: 'body2',
    SUBTITLE1: 'subtitle1',
    SUBTITLE2: 'subtitle2',
    CONTROL_XLARGE: 'controlXLarge',
    CONTROL_LARGE: 'controlLarge',
    CONTROL_MEDIUM: 'controlMedium',
    CONTROL_SMALL: 'controlSmall',
    CONTROL_XSMALL: 'controlXSmall',
} as const

/**
 * Цвета используемые для текста
 */
export const TEXT_COLORS = {
    /**
     * Используется на элементах несущие первостепенный характер
     */
    PRIMARY: "primary",
    /**
     * Используется на элементах несущие второстепенный характер
     */
    SECONDARY: "secondary",
    /**
     * Используется на элементах несущие предупреждающий характер
     */
    WARNING: "warning",
    /**
     * Используется на элементах несущие успешный характер
     */
    SUCCESS: "success",
    /**
     * Используется на элементах несущие опасный характер
     */
    ERROR: "error",
    /**
     * Используется на элементаах несущие информационный характер
     */
    INFO: "info",
    /**
     * Используется для обычного текста
     */
    TEXT: "text",
    /**
     * Используется для вспомогательного текста
     */
    SUBTEXT: "subtext"
} as const