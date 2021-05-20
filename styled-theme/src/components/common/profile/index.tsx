import * as React from 'react';
import 'components/common/profile/index.scss';
import styled from 'styled-components';

const Profile: React.FC = () => {
  return (
    <ProfileBlock>
      {/*<img src={""} />*/}

      <IntroduceContainer>
        <Title>
          <a href="https://github.com/pius712">
            <Chips>@pius712</Chips>
          </a>
          {` 의 기술 블로그`}
        </Title>
        <Desc className={'description'}>FE 개발자.</Desc>
      </IntroduceContainer>
    </ProfileBlock>
  );
};

export default Profile;

const ProfileBlock = styled.div`
  display: flex;
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor};
`;
const Chips = styled.div`
  display: inline-block;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  padding: 0.25em 0.5em;
  background-color: #2edac3;
  border-radius: 16px;
`;

const Desc = styled.p`
  color: ${(props) => props.theme.fontColor};
`;
const Title = styled.div``;
