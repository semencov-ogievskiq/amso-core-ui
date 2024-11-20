import { Theme } from "./types";
import { ICON_DEFAULT_THEME_CONFIG } from "../components/Icon/constants";

/**
 * Значение темы по умолчанию
 */
export const DEFAULT_THEME: Theme = {
    semanticColors: {
        primary: {
            default: "#1b63f2",
            light: "#3574f2",
            dark: "#0553f0",
            internal: "#ffffff"
        },
        secondary: {
            default: "#686869",
            light: "#949699",
            dark: "#555657",
            internal: "#ffffff"
        },
        warning: {
            default: "#c4c04b",
            light: "#c4c168",
            dark: "#c2bd30",
            internal: "#ffffff"
        },
        success: {
            default: "#5dc443",
            light: "#79c765",
            dark: "#3ebd1e",
            internal: "#ffffff"
        },
        error: {
            default: "#bf5041",
            light: "#bf6458",
            dark: "#bf4232",
            internal: "#ffffff"
        },
        info: {
            default: "#3cb2c2",
            light: "#71b6bf",
            dark: "#099cb0",
            internal: "#ffffff"
        },
    },
    textColors: {
        primary: "#0553f0",
        secondary: "#555657",
        warning: "#c2bd30",
        success: "#3ebd1e",
        error: "#bf4232",
        info: "#099cb0",
        text: "#0d0d0d",
        subtext: "#262626",
    },
    components: {
        Icon: ICON_DEFAULT_THEME_CONFIG
    }
}