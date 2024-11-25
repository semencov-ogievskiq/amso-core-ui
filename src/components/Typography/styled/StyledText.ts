import styled from "@emotion/styled";
import { TypographyStyledState } from "../types";
import { getTextColor, getTypographyParams } from "../../../theme";
import { TYPOGRAPHY_VARIANTS } from "../constants";

export const StyledText = styled("span")<{ styledState: TypographyStyledState }>(({ theme, styledState }) => {
    const {
        align,
        color,
        variant,
        fullWidth,
        fullHeight,
        transform,
        noWrap
    } = styledState

    const computedColor = theme?.components?.Typography?.colors?.[color] || getTextColor(color,theme)

    return {
        display: "inline-block",
        textAlign: align,
        textTransform: transform,
        color: computedColor,
        width: fullWidth? "100%" : "initial",
        height: fullHeight? "100%" : "initial",
        ...(variant !== TYPOGRAPHY_VARIANTS.INHERIT && getTypographyParams(variant,theme)),
        ...(noWrap && {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        })
    }
})