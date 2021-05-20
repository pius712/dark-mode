import {createGlobalStyle} from "styled-components";
import {Theme} from "styles/Theme";

const GlobalStyle = createGlobalStyle<{
    theme:Theme,
}>`
    body {
      background-color: ${( props) => props.theme.bgColor};
    }
`
export default GlobalStyle;
