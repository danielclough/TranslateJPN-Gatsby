import React from 'react'
import Fade from 'react-reveal/Fade'

const Five = props => (
  <section id="contact" className="wrapper style2 special fade inactive">
    <Fade duration={500}>
      <div className="form-background">
          <h3>Contact Me</h3>
          <form method="post" action="#">
            <div className="row gtr-uniform gtr-50">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <select name="category" id="interpreation">
                  <option value="">- Interpretation -</option>
                  <option value="1">Presenter</option>
                  <option value="1">Ear Prompter</option>
                  <option value="1">Convention Production</option>
                  <option value="1">Personal Tour Guide</option>
                  <option value="1">Personal Assistant</option>
                  <option value="1">Booth Management</option>
                  <option value="1">Interviewer</option>
                  <option value="1">Assistant Producer</option>
                  <option value="1">Consecutive Interpretation</option>
                  <option value="1">Conference Calls</option>
                  <option value="1">Pitch Deck Preparation</option>
                  <option value="1">Other Interpretation</option>
                </select>
                <select name="category" id="translation">   
                  <option value="">- Translation -</option>            
                  <option value="1">Documents</option>
                  <option value="1">Website</option>
                  <option value="1">Brochure</option>
                  <option value="1">Sales Kit</option>
                  <option value="1">Media Kit</option>
                  <option value="1">Other Translation</option>
                </select>
                <select name="category" id="assistance">   
                  <option value="">- Assistance -</option>            
                  <option value="1">Trip Arrangements</option>
                  <option value="1">Convention/ Expo</option>
                  <option value="1">Personal Assistance</option>
                  <option value="1">Executive Assistance</option>
                  <option value="1">Other Assistance</option>
                </select>
              </div>
              <div className="col-4 col-12-medium">
                <input
                  type="radio"
                  id="priority-low"
                  name="priority"
                  defaultChecked
                />
                <label htmlFor="priority-low">Low Priority</label>
              </div>
              <div className="col-4 col-12-medium">
                <input type="radio" id="priority-regular" name="priority" />
                <label htmlFor="regular-normal">Regular Priority</label>
              </div>
              <div className="col-4 col-12-medium">
                <input type="radio" id="priority-high" name="priority" />
                <label htmlFor="priority-high">High Priority</label>
              </div>
              <div className="col-6 col-12-medium">
                <input type="checkbox" id="copy" name="copy" />
                <label htmlFor="copy">Email me a copy of this message</label>
              </div>
              <div className="col-6 col-12-medium">
                <input type="checkbox" id="human" name="human" defaultChecked />
                <label htmlFor="human">I am a human and not a robot</label>
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Please provide a brief description of the service you are requesting. Date, location, budget, etc."
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
    </Fade>
  </section>
)
export default Five
