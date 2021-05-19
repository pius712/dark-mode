import * as React from 'react';
import './index.scss';

const Profile: React.FC = () => {
    return (
        <div className={'profile'}>
            {/*<img src={""} />*/}

            <div className={'introduce'}>
                <p>
                    <a href="https://github.com/pius712">
                        <span className={'chips'}>@pius712</span>
                    </a>
                    {` 의 기술 블로그`}
                </p>
                <p className={'description'}>FE 개발자.</p>
            </div>
        </div>
    );
};

export default Profile;
