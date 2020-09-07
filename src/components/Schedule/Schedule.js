import React, { Component } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Schedule extends Component {

  state = {
    date : new Date(),
  }
  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
      <style>{`
        html, body {
      background-color: white !important;
    }

    `}</style>

    
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />


      </div>
    );
  }
}
export default Schedule;
