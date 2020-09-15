import React, { Component } from 'react'
import logo from 'image/WEBOARD.jpg';
import axios from 'axios'
import $ from 'jquery'
import {} from 'jquery.cookie'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
axios.defaults.withCredentials = true;
const headers = {withCredentials:true};

class Login extends Component {

  login = () => {
    const send_param = {
      headers,
      email: this.LoginEmail.value,
      password: this.LoginPw.value
    };
    axios
    .post("http://localhost:8080/member/login(서버주소)", send_param)
    .then(returnData => {
      if(returnData.data.message){
        console.log("email: " + returnData.data.email);
        $.cookie("email", returnData.data.email);
        alert(returnData.data.message);
        window.location.reload();
      }else{
        alert("로그인 실패");
      }
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className='login-form'>

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
              <Image src={logo} /> WE:BOARD 로그인
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                fluid icon='mail'
                iconPosition='left'
                placeholder='이메일'
                type = 'text'
                name = 'email'
                ref = {ref => (this.LoginEmail = ref)}/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='비밀번호'
                  type='text'
                  name = 'password'
                  ref = {ref => (this.LoginPW = ref)}/>
​
                <Button color='green' fluid size='large' type = 'submit' onClick = {this.login}>
                  로그인
                </Button>
              </Segment>
            </Form>
            <Message>
              환영합니다~<br />
              <Link to="/signup">회원가입</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default Login;
