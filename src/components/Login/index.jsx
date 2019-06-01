import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SignUp from '../SignUp';
import AdminSignUp from '../AdminSignUp'
import axios from 'axios';

/**
  This screen is first screen every users see (both job seeker and admins).
  There are options to sign up for both job seekers and admins.
  It will render the page based on their choice.
*/
export default class LoginScreen extends React.Component{
  constructor(){
    super()
    this.state={
      email:'',
      password:'',
      sign_up:false,
      admin_sign_up:false,
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  componentWillMount(){
    const login=JSON.parse(localStorage.getItem('user_credentails'))
    if(login){
      this.setState({
        email: login.email,
        password: login.password
      })
    }
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(){
    localStorage.setItem('user_credentails', JSON.stringify({email:this.state.email, password:this.state.password}))
    axios.post("http://localhost:80/api/login", this.state).then(doc => {
      return doc;
    });
  }
  render(){
    return (
      <Grid id='root' container direction='row' justify='center' alignItems='center'>
        <Grid item>
          <Card style={{maxWidth: 600}}>
            <h1 style={{margin:30}}>EmployTT</h1>
            <CardContent>
              {this.state.sign_up || this.state.admin_sign_up?(
                (this.state.sign_up ?(
                  <SignUp />
                ):(
                  <AdminSignUp />
                ))
              ):(
                <form>
                <TextField
                  id="standard-dense"
                  label="Email"
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  style={{margin:30}}
                  margin="dense"
                />
                <br />
            <TextField
              id="standard-dense"
              label="Password"
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              style={{margin:30}}
              margin="dense"
            />
            <br />
            <Button variant='contained' style={{margin:30}}color='primary' onClick={this.handleSubmit}>Login</Button>
            <Button variant='contained' color='primary' onClick={()=>{this.setState({sign_up: !this.state.sign_up})}} name='sign_up'>Register</Button><br />
            <Button variant='contained' style={{backgroundColor:'#ee0000', color:'#fff'}} onClick={()=>{this.setState({admin_sign_up: !this.state.admin_sign_up})}} name='admin_sign_up' fullWidth>Register As Admin</Button>
            </form>
          )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}
