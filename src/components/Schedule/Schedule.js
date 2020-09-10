import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Divider } from 'semantic-ui-react'

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
    p1{
      align-content: center;
      background-color: #AFC99F;
      color: #FFFFFF;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height : 20em;
    }
    `}</style>
    <Grid textAlign='center'>
    <Grid.Row>
      <p1>
      <Calendar
        onChange={this.onChange}
        value={this.state.date}
      />
      </p1>
      {/*
      <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '4em 0em', textTransform: 'uppercase' }}
        >
        </Divider>*/}
        </Grid.Row>
      </Grid>


      </div>
    );
  }
}
export default Schedule;
