import { DEFAULT_THEME } from "./constants"
import { SemanticColor, SemanticColors, TextColors, CurrentTheme } from "./types"

/**
 * Метод возвращает семантический цвет из темы.
 * Если не передана текущая тема то возвращает цвет из базовой темы.
 * 
 * @param type - Семантическая группа
 * @param color - Цвет
 * @param currentTheme - Текущая тема, по умолчанию undefined
 * @returns string
 */
export const  getSemanticColor = (type: keyof SemanticColors, color: keyof SemanticColor, currentTheme?: CurrentTheme): string => (
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
export const getTextColor = (color: keyof TextColors, currentTheme?: CurrentTheme): string => (
    (currentTheme && currentTheme?.textColors?.[color]) || DEFAULT_THEME.textColors[color]
)