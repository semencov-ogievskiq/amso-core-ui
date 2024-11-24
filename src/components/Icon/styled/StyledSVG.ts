'use client'

import styled from "@emotion/styled";
import { StyledComponentsProps } from "../../../types";
import { IconStyledState } from "../types";
import { DEFAULT_THEME, getTextColor } from "../../../theme";
import { ICON_FILL_TYPES } from "../constants";

export const StyledSVG = styled("svg")<StyledComponentsProps<IconStyledState>>(({theme, styledState})=>{
    const {
        color,
        size,
        fillType,
        isSetFillProps,
        isSetStrokeProps
    } = styledState
    
    return {
        display: "inline-block",
        ...( fillType === ICON_FILL_TYPES.FILL && !isSetFillProps && {
            fill: getTextColor(color, theme)
        }),
        ...( fillType === ICON_FILL_TYPES.STROKE && !isSetStrokeProps && {
            stroke: getTextColor(color, theme)
        }),
        height: theme.components?.Icon?.sizes?.[size] || DEFAULT_THEME.components.Icon.sizes[size],
        width: theme.components?.Icon?.sizes?.[size] || DEFAULT_THEME.components.Icon.sizes[size],
    }
})