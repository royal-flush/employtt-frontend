import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SignUp from '../SignUp';
import Axios from 'axios';

export default class LoginScreen extends React.Component{
  constructor(){
    super()
    this.state={
      email:'',
      password:'',
      sign_up:false
    }
    this.handleSwitch=this.handleSwitch.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSwitch(){
    this.setState({sign_up: !this.state.sign_up})
  }
  handleSubmit(){
    Axios.post("http://localhost:80/api/login", this.state).then(doc => {
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
              {this.state.sign_up ?(
                <SignUp />
                ):(
                  <form>
                  <TextField
                    id="standard-dense"
                    label="Email"
                    name='email'
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
                onChange={this.handleChange}
                style={{margin:30}}
                margin="dense"
              />
              <br />
              <Button variant='contained' style={{margin:30, backgroundColor: '#ee0000'}} onClick={this.handleSubmit}>Login</Button>
              <Button variant='contained' style={{backgroundColor: '#ee0000'}} onClick={this.handleSwitch}>Register</Button>
              </form>
            )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}
