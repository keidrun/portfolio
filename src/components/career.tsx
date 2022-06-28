import useResize from './hooks/useResize'
// @ts-expect-error
import * as careerStyles from './career.module.scss'

function Career() {
  const { height } = useResize()

  return (
    <section id="career" className={`${careerStyles.career} ${height}`}>
      <div className="container">
        <div className="col-md-6 ms-auto">
          <div className={careerStyles.career__text}>
            <h2>Career</h2>
            <p className="lead">
              I got a master&#39;s degree of computer science in a Japanese university. After I graduated from the
              university, I&#39;ve worked in a Japanese tech companey as a full-stack web developer and a project leader
              for 6 years. After I quit the companey, I decided to invest my time to learn English. In the beginning, I
              moved to Philippines and stayed to learn English for several months, then moved to Canada and stayed to
              improve my English for about a year and a half. Then, I returned to work in Tokyo. Now, I&#39;m seeking
              opportunities of a developer job around the world.
            </p>
            <ul>
              <li>
                <span className="p-link">
                  <a href="https://www.corp-sansan.com/" target="_blank" rel="noopener noreferrer">
                    <strong>Sansan, Inc (Tokyo, Japan)</strong>
                  </a>
                </span>
                , JavaScript and .NET Developer, Mar. 2020 - Feb. 2022
              </li>
              <li>
                <span className="p-link">
                  <a href="https://www.nttdata.com/global/en/" target="_blank" rel="noopener noreferrer">
                    <strong>NTT DATA Corporation (Tokyo, Japan)</strong>
                  </a>
                </span>
                , JavaScript and Java Developer, Apr. 2011 - Mar. 2017
              </li>
              <li>
                <span className="p-link">
                  <a href="https://www.tsukuba.ac.jp/en/" target="_blank" rel="noopener noreferrer">
                    <strong>University of Tsukuba (Ibaraki, Japan)</strong>
                  </a>
                </span>
                , Master of Computer Science, Apr. 2009 - Mar. 2011
              </li>
              <li>
                <span className="p-link">
                  <a href="https://www.yamagata-u.ac.jp/en/" target="_blank" rel="noopener noreferrer">
                    <strong>Yamagata University (Yamagata, Japan)</strong>
                  </a>
                </span>
                , Bachelor of Computer Science, Apr. 2005 - Mar. 2009
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
