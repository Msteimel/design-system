export interface ColorTokens {
  background: string
  surface: string
  border: string
  text: { primary: string; secondary: string; muted: string }
  accent: string
  destructive: string
}
export interface Theme {
  light: ColorTokens
  dark: ColorTokens
}
