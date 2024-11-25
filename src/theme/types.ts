import { IconCurrentThemeConfig, IconThemeConfig } from "../components/Icon/types"
import { TypographyCurrentThemeConfig, TypographyThemeConfig } from "../components/Typography/types"
import { BASE_TYPOGRAPHY_VARIANTS } from "../constants"
import { Values } from "../types"

export type ThemeTypographyVariants = Values<typeof BASE_TYPOGRAPHY_VARIANTS>

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

export type TypographyParams = {
    fontFamily?: string
    fontWeight?: string
    fontSize: string
    lineHeight?: string
    letterSpacing?: string
}

export type ThemeComponents = {
    Icon: IconThemeConfig
    Typography: TypographyThemeConfig
}

export type CurrentThemeComponents = {
    Icon?: IconCurrentThemeConfig
    Typography?: TypographyCurrentThemeConfig
}

export type Theme = {
    semanticColors: SemanticColors
    textColors: TextColors
    typography: Record<ThemeTypographyVariants,TypographyParams>
    components: ThemeComponents
}

export type CurrentTheme = {
    semanticColors?: Partial<SemanticColors<Partial<SemanticColor>>>
    textColors?: Partial<TextColors>
    typography?: Partial<Record<ThemeTypographyVariants,TypographyParams>>
    components?: CurrentThemeComponents
}