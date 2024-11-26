'use client'

import { FC, useMemo } from "react";
import { IconProps, IconStyledState } from "./types";
import { ICON_COLORS, ICON_SIZES, ICON_FILL_TYPES, ICON_DEFAULT_TEST_ID } from "./constants";
import { StyledSVG } from "./styled";

export const Icon: FC<IconProps> = props => {
    const {
        children,
        viewBox,
        height,
        width,
        className,
        style,
        fill,
        stroke,
        testId = ICON_DEFAULT_TEST_ID,
        fillType = ICON_FILL_TYPES.FILL,
        color = ICON_COLORS.TEXT,
        size = ICON_SIZES.MEDIUM,
        onClick,
        onMouseDown,
        onMouseEnter,
        onMouseLeave,
        onMouseUp,
        onPointerEnter,
        onPointerLeave,
        onDoubleClick
    } = props

    const styledState: IconStyledState = useMemo(()=>({
        color,
        size,
        fillType,
        isSetFillProps: !!fill,
        isSetStrokeProps: !!stroke,
        isSetHeightProps: !!height,
        isSetWidthProps: !!width
    }),[color,size,fillType,fill,stroke,height,width])

    return (
        <StyledSVG
            data-test-id={testId}
            styledState={styledState}
            height={height}
            width={width}
            viewBox={viewBox}
            className={className}
            style={style}
            fill={fill}
            stroke={stroke}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onDoubleClick={onDoubleClick}
        >
            {children}
        </StyledSVG>
    )
}