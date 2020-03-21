import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Typed from 'react-typed';

const Banner = props => (
  <section id="banner">
    <div className="content">
      <span className="image">
        <img src={pic01} alt="intro" />
      </span>
      <header>
                <Typed
                strings={["I'm Yukino Aoshima.", "青島礼乃です.", "I'm a translator.", "翻訳・通訳のお手伝いをします。"]}
                    typeSpeed={100}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input className="typed shadow" type="text"/>
                </Typed>
        <p>
          Japanese English translation, interpretation, narration, and transcription.  
          <br />
          Serving Las Vegas for 10 years.
        </p>
      </header>
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
