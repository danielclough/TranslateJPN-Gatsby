import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Typed from 'react-typed';

const Banner = props => (
  <section id="banner">
    <div className="content">
      <span className="image left">
        <img src={pic01} alt="Picture of Yukino Aoshima" />
      </span>
        <p>
          日本語、英語の翻訳、通訳、ナレーション、文字起こし、エグゼクティブ、個人的なサポート。 <br />
          <br />
           ラスベガスで10年間サービスを提供しています。 <br />
          <br />
          Japanese English translation, interpretation, narration, transcription, executive, and personal assistance.  <br />
          <br />
          Serving Las Vegas for 10 years. <br />

        
        </p>
                <Typed
                strings={["I'm Yukino Aoshima.", "青島礼乃です.", "I'm a translator.", "通訳のお手伝いをします。"]}
                    typeSpeed={100}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input className="typed shadow" type="text"/>
                </Typed>
    </div>
    <ScrollLink
      to="one"
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

export default Banner
