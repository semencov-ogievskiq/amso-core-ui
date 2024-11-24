import { ReactNode } from "react"
import { CurrentTheme } from "../../theme"

export type ThemeProviderProps = {
    theme?: CurrentTheme
    children?: ReactNode
}