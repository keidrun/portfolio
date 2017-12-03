// @flow
import React from 'react';
import SocialBtn from './SocialBtn';

const EmailBtn = () => <SocialBtn title="E-mail" link="/" />;
const GithubBtn = () => <SocialBtn title="Github" link="/" />;
const LinkedinBtn = () => <SocialBtn title="Linkedin" link="/" />;
const FacebookBtn = () => <SocialBtn title="Facebook" link="/" />;
const TwitterBtn = () => <SocialBtn title="Twitter" link="/" />;

type Props = {
  section: string,
};

const SocialBtnGroup = ({ section = 'nav' }: Props) => (
  <div>
    {(() => {
      switch (section) {
        case 'about':
          return (
            <div>
              <EmailBtn />
              <GithubBtn />
              <LinkedinBtn />
              <FacebookBtn />
              <TwitterBtn />
            </div>
          );
        case 'nav':
        default:
          return (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <EmailBtn />
              </li>
              <li className="nav-item">
                <GithubBtn />
              </li>
              <li className="nav-item">
                <LinkedinBtn />
              </li>
              <li className="nav-item">
                <FacebookBtn />
              </li>
              <li className="nav-item">
                <TwitterBtn />
              </li>
            </ul>
          );
      }
    })()}
  </div>
);

export default SocialBtnGroup;
