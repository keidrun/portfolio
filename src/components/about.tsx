import SocialBtnGroup from './common/socialBtnGroup'
import useResize from './hooks/useResize'
// @ts-expect-error
import * as aboutStyles from './about.module.scss'

function About() {
  const { height } = useResize()

  return (
    <section id="about" className={`${aboutStyles.about} ${height}`}>
      <div className="container">
        <div className="col-md-6">
          <div className={aboutStyles.about__text}>
            <h2>About me</h2>
            <p className="lead">
              I&#39;m seeking opportunities of a full-stack web developer job in Tokyo, San Francisco Bay Area,
              Vancouver or any interesting city in the world. If you&#39;re looking for a developer like Full-Stack Web
              Developer, Front-End React Developer or Back-End Developer, feel free to contact me!
            </p>
            <p>
              I have worked as a Full-Stack Web Developer specialized in JavaScript, Java, C# and Node.js since 2011.
              (See{' '}
              <span className="p-link">
                <a href="/#skills">
                  <strong>Skills</strong>
                </a>
              </span>{' '}
              and{' '}
              <span className="p-link">
                <a href="/#work">
                  <strong>Experience</strong>
                </a>
              </span>{' '}
              sections) My current goal is to further master the most modern full-stack technologies around JavaScript
              and to extend my knowledge of Web3 technologies. And my next goal is to found my outstanding company and
              change people&#39;s lives in the world. I&#39;m thinking of starting my own business several years later
              but I&#39;ll focus on an application development so far because intesting technologies such as AI and
              Blockchain come into being recently and I&#39;d like to be involved in a project that use them. Finally, I
              would provide value to any company from my committed work to achieve any project&#39;s aim.
            </p>
            <h3 className="fs-4">Feel free to contact me!</h3>
            <SocialBtnGroup section="about" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
