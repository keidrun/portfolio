import React from 'react';
import SocialBtn from './SocialBtn';

const EmailBtn = () => (
  <SocialBtn title="E-mail" link="mailto:contact@keisukesasaki.com" />
);
const GithubBtn = () => (
  <SocialBtn title="Github" link="https://github.com/keidrun" target="_blank" />
);
const LinkedinBtn = () => (
  <SocialBtn
    title="Linkedin"
    link="https://www.linkedin.com/in/keisukesasaki"
    target="_blank"
  />
);
const FacebookBtn = () => (
  <SocialBtn
    title="Facebook"
    link="https://www.facebook.com/keisuke.sasaki.sky"
    target="_blank"
  />
);
const TwitterBtn = () => (
  <SocialBtn
    title="Twitter"
    link="https://twitter.com/keidrun"
    target="_blank"
  />
);

type Props = {
  section: string,
};

const SocialBtnGroup = ({ section }: Props) => (
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

SocialBtnGroup.defaultProps = {
  section: 'nav',
};

export default SocialBtnGroup;
