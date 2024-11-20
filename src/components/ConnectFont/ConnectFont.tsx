
"use client"

import { css, Global } from "@emotion/react";
import { FC, useMemo } from "react";
import { ConnectFontProps } from "./types";
import { BASE_FONT } from "./constants";

export const ConnectFont: FC<ConnectFontProps> = props => {
    const {
        url,
        children,
        connectBaseFont = false
    } = props

    const urls = useMemo(()=>{
        const urls: string[] = []

        if ( connectBaseFont ) {
            urls.push(BASE_FONT)
        }

        if ( !!url ) {
            urls.push(
                ...(Array.isArray(url)? url : [url] )
            )
        }
        return urls
    },[url,connectBaseFont])
    return (
        <>
            <Global
                styles={css`
                    ${urls.map(url => (`
                        @import url('${url}');
                    `))}
                `}
            />
            {children}
        </>
    )
}