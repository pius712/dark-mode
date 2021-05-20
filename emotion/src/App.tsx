import React from 'react';
import './App.css';
import Profile from 'components/profile';
import { css, Global, ThemeProvider } from '@emotion/react';
import ResetStyle from 'styles/Reset';
import GlobalStyle from 'styles/GlobalStyle';
import { default as THEME } from 'styles/Theme';
import useTheme from 'hooks/useTheme';
import ThemeSwitch from 'components/theme-switch';

const App = () => {
  const [theme, onToggle] = useTheme();

  return (
    <>
      <ThemeProvider theme={THEME[theme]}>
        <Global styles={GlobalStyle(THEME[theme])} />
        <Global styles={ResetStyle} />
        <div css={MainContainer}>
          <ThemeSwitch checked={theme === 'dark'} toggleSwitch={onToggle} />
          <div css={ProfileContainer}>
            <Profile />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;

const MainContainer = css`
  margin: 0 auto;
  max-width: 780px;
`;
const ProfileContainer = css`
  margin: 1rem;
`;
