import * as React from 'react';

import { css, useTheme } from '@emotion/react';
import { Theme } from 'styles/Theme';

const Profile: React.FC = () => {
  const theme = useTheme();

  return (
    <div css={ProfileBlock}>
      {/*<img src={""} />*/}

      <div css={IntroduceContainer(theme)}>
        <div css={Title}>
          <a href="https://github.com/pius712">
            <div css={Chips(theme)}>@pius712</div>
          </a>
          {` 의 기술 블로그`}
        </div>
        <p css={Desc(theme)}>FE 개발자.</p>
      </div>
    </div>
  );
};

export default Profile;

const ProfileBlock = css`
  display: flex;
`;

const IntroduceContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  color: ${theme.fontColor};
`;
const Chips = (theme: Theme) => css`
  display: inline-block;
  color: ${theme.fontColor};
  cursor: pointer;
  padding: 0.25em 0.5em;
  background-color: #2edac3;
  border-radius: 16px;
`;

const Desc = (theme: Theme) => css`
  color: ${theme.fontColor};
`;
const Title = css``;
