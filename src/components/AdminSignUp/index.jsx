import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/**
  This component is used for administrator to create thrir accounts.
*/
export default class AdminSignUp extends React.Component{
  constructor(){
    super()
    this.state={
      fname:'',
      lname:'',
      email:'',
      v_email:'',
      ministry:'',
      password:'',
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
    window.location.reload();
  }
  render(){
    {/**
      This form is used by admin to register. I takes the their name, emal, they ministry they belong to and password.
      */}
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
        label="Last Name"
        type='text'
        name='lname'
        onChange={this.handleChange}
        style={{margin:30}}
        margin="dense"
      />
      <TextField
        id='standard-dense'
        label='Ministry/Department/Agency'
        type='text'
        name='ministry'
        onChange={this.handleChange}
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
