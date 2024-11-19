import { BASE_SIZES, BASE_TEXT_COLOR, DIMENSION } from "../../constants";
import { IconThemeConfig } from "./types";

export const ICON_COLORS = {
    ...BASE_TEXT_COLOR,
} as const 

export const ICON_SIZES = {
    ...BASE_SIZES
} as const

export const ICON_FILL_TYPES = {
    FILL: "fill",
    STROKE: "stroke"
} as const

export const ICON_DEFAULT_THEME_CONFIG: IconThemeConfig = {
    sizes: {
        [ICON_SIZES.X_LARGE]: DIMENSION[32],
        [ICON_SIZES.LARGE]: DIMENSION[28],
        [ICON_SIZES.MEDIUM]: DIMENSION[24],
        [ICON_SIZES.SMALL]: DIMENSION[20],
        [ICON_SIZES.X_SMALL]: DIMENSION[16]
    }
}