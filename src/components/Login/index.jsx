import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import SignUp from '../SignUp';

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
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSwitch(){
    this.setState({sign_up: !this.state.sign_up})
  }
  render(){
    return (
      <Grid container alignItems='center' justify='center'>
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
              <Button variant='contained' color='primary' style={{margin:30}}>Login</Button>
              <Button variant='contained' color='primary' onClick={this.handleSwitch}>Register</Button>
              </form>
            )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}
