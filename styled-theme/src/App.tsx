import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import './App.css';
import Profile from 'components/profile';
import useTheme from 'hooks/useTheme';
import ThemeSwitch from 'components/theme-switch';
import styled, { ThemeProvider } from 'styled-components';
import { default as THEME } from 'styles/Theme';
import Reset from 'styles/Reset';

function App() {
  const [theme, onToggle] = useTheme();
  return (
    <>
      <ThemeProvider theme={THEME[theme]}>
        <GlobalStyle />
        <Reset />
        <MainContainer>
          <ThemeSwitch checked={theme === 'dark'} toggleSwitch={onToggle} />
          <ProfileContainer>
            <Profile />
          </ProfileContainer>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 780px;
`;
const ProfileContainer = styled.div`
  margin: 1rem;
`;
