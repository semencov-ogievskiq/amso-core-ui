import { DIMENSION, SIZES } from "../../constants";
import { TEXT_COLORS } from "../../theme";
import { IconThemeConfig } from "./types";

export const ICON_DEFAULT_TEST_ID = "icon"
export const ICON_COLORS = {
    ...TEXT_COLORS,
} as const 

export const ICON_SIZES = {
    ...SIZES
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