import { IconCurrentThemeConfig, IconThemeConfig } from "../components/Icon/types"

export type SemanticColor = {
    default: string
    light: string
    dark: string
    internal: string
}

export type TextColors = {
    primary: string
    secondary: string
    warning: string
    success: string
    error: string
    info: string
    text: string
    subtext: string
}

export type SemanticColors<T = SemanticColor> = {
    primary: T
    secondary: T
    warning: T
    success: T
    error: T
    info: T
}

export type ThemeComponents = {
    Icon: IconThemeConfig
}

export type CurrentThemeComponents = {
    Icon?: IconCurrentThemeConfig
}

export type Theme = {
    semanticColors: SemanticColors
    textColors: TextColors
    components: ThemeComponents
}

export type CurrentTheme = {
    semanticColors?: Partial<SemanticColors<Partial<SemanticColor>>>
    textColors?: Partial<TextColors>
    components?: CurrentThemeComponents
}