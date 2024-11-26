import { FC } from "react";
import { useTheme } from "@emotion/react";
import { ICON_SIZES } from "../Icon";
import { getSemanticColor } from "../../theme";
import { LOADER_COLORS, LOADER_DEFAULT_TEST_ID, LOADER_DEFAULT_THEME_CONFIG } from "./constants";
import { LoaderProps } from "./types";

export const Loader: FC<LoaderProps> = props => {
    const {
        height,
        width,
        className,
        style,
        cssColor,
        color = LOADER_COLORS.SECONDARY,
        testId = LOADER_DEFAULT_TEST_ID,
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

    const currentTheme = useTheme()

    const colorCss = cssColor || getSemanticColor(color, "default", currentTheme)
    const sizeCss = currentTheme?.components?.Loader?.sizes?.[size] || LOADER_DEFAULT_THEME_CONFIG.sizes[size]

    return (
        <svg
            viewBox="0 0 200 200"
            data-test-id={testId}
            height={height || sizeCss}
            width={width || sizeCss}
            className={className}
            style={style}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onDoubleClick={onDoubleClick}
        >
            <radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
                <stop offset="0" stop-color={colorCss}></stop>
                <stop offset=".3" stop-color={colorCss} stop-opacity=".9"></stop>
                <stop offset=".6" stop-color={colorCss} stop-opacity=".6"></stop>
                <stop offset=".8" stop-color={colorCss} stop-opacity=".3"></stop>
                <stop offset="1" stop-color={colorCss} stop-opacity="0"></stop>
            </radialGradient>
            <circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="20" stroke-linecap="round" stroke-dasharray="200 2000" stroke-dashoffset="0" cx="100" cy="100" r="70">
                <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="1.5" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform>
            </circle>
            <circle transform-origin="center" fill="none" opacity=".2" stroke={colorCss} stroke-width="20" stroke-linecap="round" cx="100" cy="100" r="70"></circle>
        </svg>
    )
}