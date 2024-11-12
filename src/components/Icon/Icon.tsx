import { FC } from "react";
import { IconProps } from "./types";

export const Icon: FC<IconProps> = props => {
    const {
        children,
        viewBox
    } = props

    return (
        <svg
            viewBox={viewBox}
        >
            {children}
        </svg>
    )
}