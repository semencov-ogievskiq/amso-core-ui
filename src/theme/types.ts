import { IconCurrentThemeConfig, IconThemeConfig } from "../components/Icon/types"
import { LoaderThemeConfig } from "../components/Loader/types"
import { TypographyCurrentThemeConfig, TypographyThemeConfig } from "../components/Typography/types"
import { Values } from "../types"
import { DISABLED_COLORS, SEMANTIC_COLORS, SEMANTIC_COLORS_GROUPS, TEXT_COLORS, TYPOGRAPHY_TYPES } from "./constants"

export type ThemeSemanticColorsGroups = Values<typeof SEMANTIC_COLORS_GROUPS>
export type ThemeSemanticColors = Values<typeof SEMANTIC_COLORS>
export type ThemeDisabledColors = Values<typeof DISABLED_COLORS>
export type ThemeTypographyTypes = Values<typeof TYPOGRAPHY_TYPES>
export type ThemeTextColors = Values<typeof TEXT_COLORS>

export type ThemeSemanticColor = string
export type ThemeDisabledColor = string
export type ThemeTextColor = string
export type ThemeSemanticColorsGroup = Record<ThemeSemanticColors,ThemeSemanticColor>

export type ThemeTypographyStyles = {
    fontFamily?: string
    fontWeight?: string
    fontSize: string
    lineHeight?: string
    letterSpacing?: string
}

export type ThemeComponents = {
    Icon: IconThemeConfig
    Typography: TypographyThemeConfig
    Loader: LoaderThemeConfig
}

export type CurrentThemeComponents = {
    Icon?: IconCurrentThemeConfig
    Typography?: TypographyCurrentThemeConfig
    Loader?: LoaderThemeConfig
}

export type Theme = {
    semanticColors: Record<ThemeSemanticColorsGroups,ThemeSemanticColorsGroup>
    textColors: Record<ThemeTextColors,ThemeTextColor>
    disabledColors: Record<ThemeDisabledColors,ThemeDisabledColor>
    typography: Record<ThemeTypographyTypes,ThemeTypographyStyles>
    components: ThemeComponents
}

export type CurrentTheme = {
    semanticColors?: Partial<Record<ThemeSemanticColorsGroups,Partial<ThemeSemanticColorsGroup>>>
    textColors?: Partial<Record<ThemeTextColors,ThemeTextColor>>
    disabledColors?: Partial<Record<ThemeDisabledColors,ThemeDisabledColor>>
    typography?: Partial<Record<ThemeTypographyTypes,ThemeTypographyStyles>>
    components?: CurrentThemeComponents
}