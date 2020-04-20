import React from 'react'
import pic03 from '../assets/images/pic03.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Interpretation</h2>
          <p>The art of cross cultural communication.</p>
        </header>
        <p>
          ラスベガスで開催される展示会や会議の通訳をお手伝いします。
          事前に準備できる文書の翻訳と違い、その場で臨機応変に対応する力が求められる通訳はプロを雇ってこそ実現化できるもの。
          会議一つでも出張中のアテンドでも、なんでもお申し付けください。
        </p>
        <ul className="actions">
          <li>
            <a href="/" className="button">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="three"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={0}
      duration={500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Two
