import * as React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

const Profile: React.FC = () => {
  return (
    <div className={cx("profile")}>
      <div className={cx("introduce")}>
        <p>
          <a href="https://github.com/pius712">
            <span className={cx("chips")}>@pius712</span>
          </a>
          {` 의 기술 블로그`}
        </p>
        <p className={cx("description")}>FE 개발자.</p>
      </div>
    </div>
  );
};

export default Profile;
