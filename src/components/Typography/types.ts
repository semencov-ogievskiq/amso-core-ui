import { MouseEventHandler, PointerEventHandler, CSSProperties } from "react";
import { Values } from "../../types";
import { TYPOGRAPHY_ALIGN, TYPOGRAPHY_COLORS, TYPOGRAPHY_COMPONENTS, TYPOGRAPHY_TRANSFORMS, TYPOGRAPHY_VARIANTS } from "./constants";

export type TypographyAlign = Values<typeof TYPOGRAPHY_ALIGN>
export type TypographyColors = Values<typeof TYPOGRAPHY_COLORS>
export type TypographyVariants = Values<typeof TYPOGRAPHY_VARIANTS>
export type TypographyComponents = Values<typeof TYPOGRAPHY_COMPONENTS>
export type TypographyTransforms = Values<typeof TYPOGRAPHY_TRANSFORMS>

export type TypographyStyledState = {
    align: TypographyAlign
    color: TypographyColors
    variant: TypographyVariants
    transform: TypographyTransforms
    noWrap: boolean
    fullWidth: boolean
    fullHeight: boolean
}

export type TypographyThemeConfig = {
    colors?: Record<TypographyColors,string>
}

export type TypographyCurrentThemeConfig = Partial<TypographyThemeConfig>

export type TypographyProps = {
    /**
     * Id для тестирования
     */
    testId?: string
    /**
     * Выравнивание текста
     */
    align?: TypographyAlign
    /**
     * Цвет текста
     */
    color?: TypographyColors
    /**
     * Вариант текста
     */
    variant?: TypographyVariants
    /**
     * Используемый html тег
     */
    component?: TypographyComponents
    /**
     * Отключение переноса строки
     * Если будет указан ширина блока то текст будет обрезан с троеточием
     */
    noWrap?: boolean
    /**
     * Нативный стиль text-transform
     */
    transform?: TypographyTransforms
    /**
     * Текст
     */
    children?: string
    /**
     * Перечисление css класов
     */
    className?: string
    /**
     * Объект стилей 
     */
    style?: CSSProperties
    /**
     * Растянуть блок на всю ширину
     */
    fullWidth?: boolean
    /**
     * Растянуть блок на всю высоту
     */
    fullHeight?: boolean
    /**
     * Событие клика по иконке
     */
    onClick?: MouseEventHandler<HTMLElement>
    /**
     * Событие наведения мышки на иконку
     */
    onMouseEnter?: MouseEventHandler<HTMLElement>
    /**
     * Событие потери наведения мышки на иконку
     */
    onMouseLeave?: MouseEventHandler<HTMLElement>
    /**
     * Событие нажатия по иконке
     */
    onMouseUp?: MouseEventHandler<HTMLElement>
    /**
     * Событие отпуска нажатия по иконке
     */
    onMouseDown?: MouseEventHandler<HTMLElement>
    /**
     * Pointer событие наведения на иконку
     */
    onPointerEnter?: PointerEventHandler<HTMLElement>
    /**
     * Pointer событие потери наведение на иконку
     */
    onPointerLeave?: PointerEventHandler<HTMLElement>
    /**
     * Событие двойного нажатия по иконке
     */
    onDoubleClick?: MouseEventHandler<HTMLElement>
}