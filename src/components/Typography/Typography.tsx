import { FC, useMemo } from "react";
import { TypographyProps, TypographyStyledState } from "./types";
import { TYPOGRAPHY_ALIGN, TYPOGRAPHY_COLORS, TYPOGRAPHY_COMPONENTS, TYPOGRAPHY_DEFAULT_TEST_ID, TYPOGRAPHY_TRANSFORMS, TYPOGRAPHY_VARIANTS } from "./constants";
import { StyledText } from "./styled";

export const Typography: FC<TypographyProps> = props => {
    const {
        children,
        className,
        style,
        noWrap = false,
        fullWidth = false,
        fullHeight = false,
        testId = TYPOGRAPHY_DEFAULT_TEST_ID,
        component = TYPOGRAPHY_COMPONENTS.SPAN,
        variant = TYPOGRAPHY_VARIANTS.BODY1,
        align = TYPOGRAPHY_ALIGN.LEFT,
        transform = TYPOGRAPHY_TRANSFORMS.NONE,
        color = TYPOGRAPHY_COLORS.TEXT,
        onClick,
        onDoubleClick,
        onMouseDown,
        onMouseEnter,
        onMouseLeave,
        onMouseUp,
        onPointerEnter,
        onPointerLeave
    } = props

    const styledState: TypographyStyledState = useMemo(()=>({
        variant,
        align,
        transform,
        color,
        noWrap,
        fullWidth,
        fullHeight
    }),[variant,align,transform,color,noWrap, fullWidth])

    return (
        <StyledText
            data-test-id={testId}
            className={className}
            style={style}
            styledState={styledState}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            as={component}
        >
            {children}
        </StyledText>
    )
}