import { Theme } from "./types"
import { ICON_DEFAULT_THEME_CONFIG } from "../components/Icon/constants"
import { TYPOGRAPHY_DEFAULT_THEME_CONFIG } from "../components/Typography/constants"

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
    typography: {
        h1: {
            fontFamily: "Roboto",
            fontWeight: "300",
            fontSize: "2.75rem",
        },
        h2: {
            fontFamily: "Roboto",
            fontWeight: "300",
            fontSize: "2.5rem",
        },
        h3: {
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "2.25rem",
        },
        h4: {
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "2rem",
        },
        h5: {
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "1.75rem",
        },
        h6: {
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "1.5rem",
        },
        caption: {
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "0.75rem",
            lineHeight: "1.66",
            letterSpacing: "0.03333em",
        },
        body1: {
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "1.50rem"
        },
        body2: {
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "1.25rem",
        },
        subtitle1: {
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "1rem",
        },
        subtitle2: {
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "0.75rem",
        },
        controlXLarge: {
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "1.75rem",
        },
        controlLarge: {
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "1.50rem",
        },
        controlMedium: {
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "1.25rem",
        },
        controlSmall: {
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "1rem",
        },
        controlXSmall: {
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "0.75rem",
        },
    },
    components: {
        Icon: ICON_DEFAULT_THEME_CONFIG,
        Typography: TYPOGRAPHY_DEFAULT_THEME_CONFIG
        
    }
}