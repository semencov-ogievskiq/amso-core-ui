import { CSSProperties, MouseEventHandler, PointerEventHandler } from "react"
import { LOADER_COLORS, LOADER_SIZES } from "./constants"
import { Values } from "../../types"

export type LoaderColors = Values<typeof LOADER_COLORS>
export type LoaderSizes = Values<typeof LOADER_SIZES>

export type LoaderThemeConfig = {
    colors?: Record<LoaderColors,string>
    sizes:  Record<LoaderSizes,string | number>
}

export type LoaderCurrentThemeConfig = Partial<LoaderThemeConfig>

export type LoaderProps = {
    /**
     * Цвет по умолчанию "secondary"
     */
    color?: LoaderColors
    /**
     * Размер 
     */
    size?: LoaderSizes
    /**
     * Ширина иконки ( переопределяет значение из size )
     */
    width?: string | number
    /**
     * Высота иконки ( переопределяет значение из size )
     */
    height?: string | number
    /**
     * Перечисление css класов
     */
    className?: string
    /**
     * Объект стилей 
     */
    style?: CSSProperties
    /**
     * Цвет иконки (переопределяет color)
     * Loader красится не через fill или stroke
     */
    cssColor?: string
    /**
     * Id для тестирования
     */
    testId?: string
    /**
     * Событие клика по иконке
     */
    onClick?: MouseEventHandler<SVGElement>
    /**
     * Событие наведения мышки на иконку
     */
    onMouseEnter?: MouseEventHandler<SVGElement>
    /**
     * Событие потери наведения мышки на иконку
     */
    onMouseLeave?: MouseEventHandler<SVGElement>
    /**
     * Событие нажатия по иконке
     */
    onMouseUp?: MouseEventHandler<SVGElement>
    /**
     * Событие отпуска нажатия по иконке
     */
    onMouseDown?: MouseEventHandler<SVGElement>
    /**
     * Pointer событие наведения на иконку
     */
    onPointerEnter?: PointerEventHandler<SVGElement>
    /**
     * Pointer событие потери наведение на иконку
     */
    onPointerLeave?: PointerEventHandler<SVGElement>
    /**
     * Событие двойного нажатия по иконке
     */
    onDoubleClick?: MouseEventHandler<SVGElement>
}