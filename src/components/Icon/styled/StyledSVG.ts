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
        isSetStrokeProps,
        isSetHeightProps,
        isSetWidthProps
    } = styledState

    const computedColor = theme?.components?.Icon?.colors?.[color] || getTextColor(color, theme)
    const computedSize = theme.components?.Icon?.sizes?.[size] || DEFAULT_THEME.components.Icon.sizes[size]
    
    return {
        display: "inline-block",
        ...( fillType === ICON_FILL_TYPES.FILL && !isSetFillProps && {
            fill: computedColor
        }),
        ...( fillType === ICON_FILL_TYPES.STROKE && !isSetStrokeProps && {
            stroke: computedColor
        }),
        ...( !isSetHeightProps && {
            height: computedSize,
        }),
        ...( !isSetWidthProps && {
            width: computedSize,
        })
    }
})