import React, { Component } from 'react'
import logo from 'image/WEBOARD.jpg';
import axios from 'axios'
import $ from 'jquery'
import {} from 'jquery.cookie'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
axios.defaults.withCredentials = true;
const headers = {withCredentials:true};

class Register extends Component {

  register = () => {
    const send_param = {
      headers,
      first_name: this.RegisterFirstname.value,
      last_name : this.RegisterLastname.value,
      email : this.RegisterEmail.value,
      password: this.RegisterPw.value,
    };
    axios
    .post("http;//localhost:8080/member/register(서버주소)", send_param)
    .then(returnData => {
      if(returnData.data.message){
        alert(returnData.data.message);
      }
      else{
        alert("회원가입 실패")
      }
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className='register-form'>

        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }

      `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 600}}>
            <Header as='h1' color='green' textAlign='center'>
              <Image src={logo} /> WE:BOARD 회원가입
            </Header>
            <Form size='large'>
              <Segment stacked>
                  <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='성'
                  type = 'text'
                  name = 'lastname'
                  ref = {ref => (this.RegisterLastname = ref)}/>
                  <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='이름'
                  type = 'text'
                  name = 'firstname'
                  ref = {ref => (this.RegisterFirstname = ref)}/>
                  <Form.Input
                  fluid icon='mail'
                  iconPosition='left'
                  placeholder='이메일'
                  type = 'text'
                  name = 'email'
                  ref = {ref => (this.RegisterEmail = ref)}/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='비밀번호'
                  type='text'
                  name = 'password'
                  ref = {ref => (this.RegisterPw = ref)}/>
​
                <Button color='green' fluid size='large' type = 'submit' onClick = {this.register}>
                  회원가입
                </Button>
              </Segment>
            </Form>
            <Message>
              환영합니다~<br />
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default Register;
