import React from 'react'
import Fade from 'react-reveal/Fade'

const Four = props => (
  <Fade up>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Services Offered</h2>
          <p>
            Avalible In Person and Online 
          </p>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-chart-area"></span>
              <h3>Executive Guide</h3>
              <p>
                Market Research Tours in Las Vegas and the United States.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-file"></span>
              <h3>Production Assistant</h3>
              <p>
                Television, Movies, Documentaries, Events, and Team Coordination. 
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-lock"></span>
              <h3>Lead Generation</h3>
              <p>
                Bilingual Customer Aquisition and Consumer Interest Development.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-comment"></span>
              <h3>Interviewer</h3>
              <p>
                On Camera / Off Camera <br />  
                In English and Japanese.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-flask"></span>
              <h3>Your Need Here</h3>
              <p>
                I can do pretty much anything.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-paper-plane"></span>
              <h3>Voice Over</h3>
              <p>
                Commercials, Radio Shows, Podcasts, Staff Training, Documnentation.
              </p>
            </section>
          </div>
        </div>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="/read-more" className="button">
                Read More
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </Fade>
)

export default Four
