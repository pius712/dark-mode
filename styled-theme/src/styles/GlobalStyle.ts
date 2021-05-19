import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle<{
    theme :{
        bgColor: string;
    }
}>`

    body {
      background-color: ${( props) => props.theme.bgColor};
    }
`


export default GlobalStyle;
