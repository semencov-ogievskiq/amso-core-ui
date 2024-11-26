import { SIZES } from "../../constants"
import { SEMANTIC_COLORS_GROUPS } from "../../theme"
import { ICON_DEFAULT_THEME_CONFIG } from "../Icon/constants"
import { LoaderThemeConfig } from "./types"

export const LOADER_DEFAULT_TEST_ID = "loader"

export const LOADER_COLORS = {
    ...SEMANTIC_COLORS_GROUPS,
} as const 

export const LOADER_SIZES = {
    ...SIZES
} as const

export const LOADER_DEFAULT_THEME_CONFIG: LoaderThemeConfig = {
    ...ICON_DEFAULT_THEME_CONFIG
} as const