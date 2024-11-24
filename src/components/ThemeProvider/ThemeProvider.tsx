import { ThemeProvider as ThemeProviderEmotion } from "@emotion/react"
import { FC } from "react"
import { ThemeProviderProps } from "./types"

export const ThemeProvider: FC<ThemeProviderProps> = props => {
    const {
        children,
        theme = {},
    } = props

    return (
        <ThemeProviderEmotion theme={theme}>
            {children}
        </ThemeProviderEmotion>
    )
}