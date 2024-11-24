import { CSSProperties, MouseEventHandler, PointerEventHandler, ReactNode } from "react"
import { ICON_COLORS, ICON_FILL_TYPES, ICON_SIZES } from "./constants"
import { Values } from "../../types"

export type IconColors = Values<typeof ICON_COLORS>
export type IconSizes = Values<typeof ICON_SIZES>
export type IconFillTypes = Values<typeof ICON_FILL_TYPES>

export type IconStyledState = {
    size: IconSizes
    color: IconColors
    fillType: IconFillTypes
    isSetFillProps: boolean
    isSetStrokeProps: boolean
}

export type IconThemeConfig = {
    colors?: Record<IconColors,string>
    sizes:  Record<IconSizes,string | number>
}

export type IconCurrentThemeConfig = Partial<IconThemeConfig>

export type IconProps = {
    /**
     * Цвет иконки по умолчанию "default"
     */
    color?: IconColors
    /**
     * Тип заливки
     * По стандарту иконки должны красится через fill, но на случай поддержки legacy иконок можно явно определить fill или stroke
     * по умолчанию "fill"
     */
    fillType?: IconFillTypes
    /**
     * Размер иеонки по умолчанию "medium"
     */
    size?: IconSizes
    /**
     * Содержимое иконки.
     * Требуется передавать теги содержимое svg, описывающие сами иконки
     */
    children: ReactNode
    /**
     * Расположение и размеры окна отображения svg
     */
    viewBox?: string
    /**
     * Ширина иконки ( переопределяет значение из size )
     */
    width?: string
    /**
     * Высота иконки ( переопределяет значение из size )
     */
    height?: string
    /**
     * Перечисление css класов
     */
    className?: string
    /**
     * Объект стилей 
     */
    style?: CSSProperties
    /**
     * Цвет заливки ( перебивает color c fillType равным "fill" )
     */
    fill?: string
    /**
     * Цвет контура ( перебивает color с fillType равным "stroke" )
     */
    stroke?: string
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