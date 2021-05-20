import {css} from "@emotion/react";
import {Theme} from "styles/Theme";


const GlobalStyle = (theme :Theme) => (css`
  body {
    background-color: ${theme.bgColor}
  }
`)

export default GlobalStyle;