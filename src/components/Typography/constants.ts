import { TEXT_COLORS, TYPOGRAPHY_TYPES } from "../../theme"
import { TypographyThemeConfig } from "./types"

export const TYPOGRAPHY_DEFAULT_TEST_ID = "typography"

export const TYPOGRAPHY_ALIGN = {
    CENTER: 'center',
    INHERIT: 'inherit',
    JUSTIFY: 'justify',
    LEFT: 'left',
    RIGHT: 'right'
} as const

export const TYPOGRAPHY_COLORS = {
    ...TEXT_COLORS,
} as const

export const TYPOGRAPHY_VARIANTS = {
    ...TYPOGRAPHY_TYPES,
    INHERIT: 'inherit',
} as const

export const TYPOGRAPHY_COMPONENTS = {
    SPAN: "span",
    P: "p",
    H1:'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
} as const

export const TYPOGRAPHY_TRANSFORMS = {
    NONE: "none",
    CAPITALIZE: "capitalize",
    UPPERCASE: "uppercase",
    LOWERCASE: "lowercase",
    INHERIT: "inherit",
    INITIAL: "initial",
} as const

export const TYPOGRAPHY_DEFAULT_THEME_CONFIG: TypographyThemeConfig = {}