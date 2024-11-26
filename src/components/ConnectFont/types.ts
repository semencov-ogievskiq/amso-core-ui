import { ReactNode } from "react"

export type ConnectFontProps = {
    /**
     * Адрес или массив адресов с шрифтами подключаемыми через CDN
     */
    url?: string | string[]
    /**
     * Флаг подключения базового шрифта
     */
    connectBaseFont?: boolean
    
    children?: ReactNode
}