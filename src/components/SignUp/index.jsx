import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

/**
  This component is by job seeker to reister for and account.
*/
export default class SignUp extends React.Component{
  constructor(){
    super()
    this.state={
      fname:'',
      mname:'',
      lname:'',
      email:'',
      v_email:'',
      dob:'',
      password:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(){
    console.log(this.state)
    axios.post("http://localhost:100/api/signup", this.state).then(doc => {
      return doc;
    });
    window.location.reload();
  }
  render(){
    /**
      This render the form the job seeker are required to fillout and reloads the page upon completion.
    */
    return(
      <form>
      <TextField
        id="standard-dense"
        label="First Name"
        type='text'
        name='fname'
        onChange={this.handleChange}
        style={{margin:30}}
        margin="dense"
      />
      <TextField
        id="standard-dense"
        label="Middle Name"
        name='mname'
        onChange={this.handleChange}
        type='text'
        style={{margin:30}}
        margin="dense"
      />
      <TextField
        id="standard-dense"
        label="Last Name"
        type='text'
        name='lname'
        onChange={this.handleChange}
        style={{margin:30}}
        margin="dense"
      />
      <TextField
        id="date"
        label="DOB"
        type="date"
        defaultValue="2017-05-24"
        name='dob'
        onChange={this.handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        style={{margin:30}}

        margin='dense'
      />
      <TextField
        id="standard-dense"
        label="Email"
        type='text'
        name='email'
        onChange={this.handleChange}
        style={{margin:30}}
        margin="dense"
      />
      <TextField
        id="standard-dense"
        label="Verify email"
        type='text'
        name='v_email'
        onChange={this.handleChange}
        style={{margin:30}}
        margin="dense"
      />
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
      <Button fullWidth variant='contained' color='primary' onClick={this.handleSubmit}>Submit</Button>
      </form>
    )
  }
}
