// @flow
import React from 'react';
import SocialBtn from './SocialBtn';

const EmailBtn = () => <SocialBtn title="E-mail" link="mailto:contact@keisukesasaki.com" />;
const GithubBtn = () => <SocialBtn title="Github" link="https://github.com/keidrun" target="_blank" />;
const LinkedinBtn = () => <SocialBtn title="Linkedin" link="https://www.linkedin.com/in/keisuke-sasaki-03b124109/" target="_blank" />;
const FacebookBtn = () => <SocialBtn title="Facebook" link="https://www.facebook.com/keisuke.sasaki.sky" target="_blank" />;

type Props = {
  section: string
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
              <FacebookBtn />
              <LinkedinBtn />
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
                <FacebookBtn />
              </li>
              <li className="nav-item">
                <LinkedinBtn />
              </li>
            </ul>
          );
      }
    })()}
  </div>
);

export default SocialBtnGroup;
