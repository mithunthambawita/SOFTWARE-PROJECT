import React, { Component } from 'react';
import '../../Style/Feedback.css';
import axios from 'axios';
// import Checkbox from './Checkbox';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      feedback: '',
      selectedOption:'' ,
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
    .post('http://localhost:4000/api/feedback', this.state)
    .then((response) => {
      if (response.status === 200) {
        alert('Thank you');
      }
      
    })
    .catch((error) => {
      alert('Invalid feddback');
      console.log(error);
    });

  };

  render() {
    const { name, email, feedback, selectedOption } = this.state;

    return (
      <div className='m-container2'>
        <div className='container'>
          <header>Feedback Form</header>
          <div className='form-outer'>
            <form action='#' onSubmit={this.formSubmit}>
              <div className='page'>
                <div className='field'>
                  <input
                    type='text'
                    required
                    name='name'
                    onChange={this.changeHandler}
                    value={name}
                  />
                  <div className='label'>Enter Your Name</div>
                </div>
                <div className='field'>
                  <input
                    type='email'
                    required
                    name='email'
                    onChange={this.changeHandler}
                    value={email}
                  />
                  <div className='label'>Enter Your Email</div>
                </div>
                <div className='field'>
                  <textarea
                    type='text'
                    required
                    name='feedback'
                    onChange={this.changeHandler}
                    value={feedback}
                  />
                  <div className='label'>Enter Feedback</div>
                </div>

                {/* gfhrthdhujtrjhdrtjdrxjurt6 */}

                <span className='checked'>
                  <div className='radio'>
          <label>
            <input
                typ type='radio'
                value='excellent'
                checked={this.state.selectedOption === 'excellent'}
                onChange={this.onValueChange}
            />
            Excellent
          </label>
        </div>
        <div className='radio'>
          <label>
            <input
            type='radio'
            value='good'
            checked={this.state.selectedOption === 'good'}
            onChange={this.onValueChange}
            />
            Good
          </label>
        </div>
        <br />
        <div className='radio'>
          <label>
            <input
              type='radio'
              value='average'
              checked={this.state.selectedOption === 'average'}
              onChange={this.onValueChange}
            />
            Average
          </label>
        </div>
        <br />
        <div className='radio'>
          <label>
            <input
              type='radio'
              value='dissatisfied'
              checked={this.state.selectedOption === 'dissatisfied'}
              onChange={this.onValueChange}
            />
            Dissatisfied
          </label>
        </div>
        <br />
        <div>Selected option is : {this.state.selectedOption}</div>
                </span>

                <div className='field btns'>
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
