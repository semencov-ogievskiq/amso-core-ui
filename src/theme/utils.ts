import { DEFAULT_THEME } from "./DEFAULT_THEME"
import { CurrentTheme, ThemeSemanticColors, ThemeSemanticColorsGroups, ThemeTextColors, ThemeTypographyStyles, ThemeTypographyTypes } from "./types"

/**
 * Метод возвращает семантический цвет из темы.
 * Если не передана текущая тема то возвращает цвет из базовой темы.
 * 
 * @param type - Семантическая группа
 * @param color - Цвет
 * @param currentTheme - Текущая тема, по умолчанию undefined
 * @returns string
 */
export const  getSemanticColor = (type: ThemeSemanticColorsGroups, color: ThemeSemanticColors, currentTheme?: CurrentTheme): string => (
    (currentTheme && currentTheme?.semanticColors?.[type]?.[color]) || DEFAULT_THEME.semanticColors[type][color]
) 

/**
 * Метод возвращает цвет текст из темы.
 * Если не передана текущая тема то возвращает цвет из базовой темы.
 * 
 * @param color - цвет
 * @param currentTheme - Текущая тема, по умолчанию undefined
 * @returns string
 */
export const getTextColor = (color: ThemeTextColors, currentTheme?: CurrentTheme): string => (
    (currentTheme && currentTheme?.textColors?.[color]) || DEFAULT_THEME.textColors[color]
)

/**
 * Метод возвращает объект стилей шрифтов.
 * Если не передана текущая тема то возвращает цвет из базовой темы.
 * 
 * @param variant - тип шрифта
 * @param currentTheme - Текущая тема, по умолчанию undefined
 * @returns string
 */
export const getTypographyParams = (variant: ThemeTypographyTypes, currentTheme?: CurrentTheme): ThemeTypographyStyles => (
    (currentTheme && currentTheme?.typography?.[variant]) || DEFAULT_THEME.typography[variant]
)