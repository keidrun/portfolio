import SocialBtn from './socialBtn'

const EmailBtn = () => <SocialBtn title="E-mail" link="mailto:contact@keisukesasaki.com" />
const GithubBtn = () => <SocialBtn title="Github" link="https://github.com/keidrun" target="_blank" />
const LinkedinBtn = () => (
  <SocialBtn title="Linkedin" link="https://www.linkedin.com/in/keisukesasaki" target="_blank" />
)
// const FacebookBtn = () => <SocialBtn title="Facebook" link="https://www.facebook.com/xxxxx" target="_blank" />
// const TwitterBtn = () => <SocialBtn title="Twitter" link="https://twitter.com/xxxxx" target="_blank" />

type Props = {
  section?: string
}

function SocialBtnGroup({ section = 'nav' }: Props) {
  return (
    <>
      {(() => {
        switch (section) {
          case 'about':
            return (
              <div>
                <EmailBtn />
                <GithubBtn />
                <LinkedinBtn />
                {/* <FacebookBtn />
              <TwitterBtn /> */}
              </div>
            )
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
                {/* <li className="nav-item">
                <FacebookBtn />
              </li>
              <li className="nav-item">
                <TwitterBtn />
              </li> */}
              </ul>
            )
        }
      })()}
    </>
  )
}

export default SocialBtnGroup
