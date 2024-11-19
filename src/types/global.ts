import '@emotion/react'
import type { CurrentTheme } from '../index'

declare module '@emotion/react' {
  export interface Theme extends CurrentTheme {}
}