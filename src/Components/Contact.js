import React, { Component } from 'react'
import axios from 'axios';

import Title from './Title';

const initialState =
{
  subject: "",
  message: "",
  email: "",
  successSubmit: false
}

class Contact extends Component {
  state = initialState

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    this.setState(initialState)
    e.preventDefault()

    axios.post('https://tzynhs3pn6.execute-api.us-east-1.amazonaws.com/dev/contact', this.state)

      .then(res => {

        console.log('success!,', res)
        this.setState({ successSubmit: true })

      })
      .catch(err => {
        console.log(err)
      });
  }
  enableButton = () => {
    return !(
      this.state.subject &&
      this.state.message &&
      this.state.email
    )
  }

  render() {
    return (
      <>
        <Title />
        <div className="contact">
          {this.state.successSubmit ?
            <div className="contact__success-message">
              <h2>Thank You!</h2>
              <p>Your message has been sent and I will respond as soon as possible.</p>
            </div>
            : <form onSubmit={this.handleSubmit}>
              <h1>Contact Me</h1>
              <div className="contact__subject">
                <label>Subject</label>
                <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
              </div>
              <div className="contact__message">
                <label>Message</label>
                <textarea name="message" value={this.state.message} onChange={this.handleChange} />
              </div>
              <div className="contact__email">
                <label>Your Email Address</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <button className="btn" disabled={this.enableButton()}>Submit</button>

            </form>
          }
        </div>
      </>
    )
  }
}
export default Contact;