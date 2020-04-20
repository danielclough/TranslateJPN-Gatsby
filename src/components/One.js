import React from 'react'
import pic02 from '../assets/images/pic02.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${pic02})` }}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>Translation</h2>
                <p>
                   Your words exactly, <br /> 
                   in another langauge.
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                Need Las Vegas local Japanese translator for tradeshows, conferences, TV production, private meetings? 
                Do you have documents needing to be trasnlated to Japanese? I am here to assist. 
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                ラスベガスで開催される展示会に行くのだけれど、英語ができなくて不安。現地の通訳さんにアテンドを頼みたい。
                海外にいるクライアントに英語でプレゼンしなきゃ、でもこの言い回しで合ってる？原稿誰かチェックしてー！
                初めての海外出張、英語の資料作らなきゃ！自力で翻訳した英文資料のファイナルチェックが必要。そんなあなたをお手伝いします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default One
