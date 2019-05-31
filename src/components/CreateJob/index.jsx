import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Add from '@material-ui/icons/Add'

import axios from 'axios';
export default class CreateJob extends React.Component{

  constructor(props){
    super(props)
    this.state={
      title:'',
      category:'',
      ministry:'',
      date:'',
      new_input:'',
      categories:[],
      ministries:[],
      inputs:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewInput=this.handleNewInput.bind(this)
  }

  handleInputChange(e){
    this.setState({[e.target.name] : e.target.value})
  }
  handleSubmit(){
    console.log(this.state)
    axios.post('http://localhost:80/api',this.state).then(doc=>{
      console.log(doc.data)
    })
  }
  handleNewInput(){
    this.setState(state =>{
      state.inputs.push({'name':state.new_input, 'value':''})
      console.log(state.inputs)
    })
    this.forceUpdate()
  }
  render(){
    const categories=[
      {
        value:'Finance'
      },
      {
        value:'Construction'
      },
    ]
    return(
      <div>
      <h1>Create Job</h1>
      <Grid container direction="column">

        <TextField
          id="standard-password-input"
          label="Job Title"
          type="text"
          margin="normal"
          name='title'
          style={{marginBottom:30}}
          onChange={this.handleInputChange}
        />
        <TextField
        select
        variant="outlined"
        label="Category"
        value={this.state.category}
        name='category'
        style={{marginBottom:30}}
        onChange={this.handleInputChange}
        >
        {categories.map(option => (
          <MenuItem key={option.value} value={option.value}>
           {option.value}
          </MenuItem>
          ))}
        </TextField>
        <TextField
        select
        variant="outlined"
        label="Ministry"
        value={this.state.ministry}
        name='ministry'
        style={{marginBottom:30}}
        onChange={this.handleInputChange}
        >
        {categories.map(option => (
          <MenuItem key={option.value} value={option.value}>
           {option.value}
          </MenuItem>
          ))}
        </TextField>
        <TextField
          id="date"
          label="Closing Date"
          type="date"
          defaultValue="2017-05-24"
          name='date'
          onChange={this.handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
          style={{marginBottom:30}}
        />
        {this.state.inputs.map(input =>(
          <TextField
            id='standard-password-input'
            label={input.name}
            key={input.name}
            name={input.name}
            onChange={(e)=>{input.value=e.target.value}}
          />
        ))}
        <TextField
          id='input-with-icon-textfield'
          label='New Field'
          name='new_input'
          style={{marginBottom: 30}}
          onChange={this.handleInputChange}
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                <Add style={{backgroundColor: "#000000", color:'#fff', cursor:'pointer'}} onClick={this.handleNewInput}/>
                </InputAdornment>
              ),
          }}
        />
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
            Create Job
        </Button>
      </Grid>
      </div>
    )
  }
}
