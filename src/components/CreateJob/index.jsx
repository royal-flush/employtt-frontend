import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './styles.css'
import Grid from '@material-ui/core/Grid';
export default class CreateJob extends React.Component{

  constructor(props){
    super(props)
    this.state={
      title:'',
      category:'',
      ministry:'',
      description:'',
      location:'',
      type:'',
      experience:'',
      education:'',
      skills:'',
      salary:'',

      categories:[],
      ministries:[],
      locaions:[],
      types:[],
      salary_ranges:[],

    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e){
    this.setState({[e.target.name] : e.target.value})
  }
  handleSubmit(){
    console.log(this.state)
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
          id="standard-multiline-static"
          label="Description"
          multiline
          rows="4"
          placeholder="Description"
          name='description'
          style={{marginBottom:30}}
          onChange={this.handleInputChange}
          />
          <TextField
          select
          variant="outlined"
          label="Job Location"
          value={this.state.location}
          name='location'
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
          label="Job Type"
          value={this.state.type}
          name='type'
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
            id="standard-multiline-static"
            label="Experience"
            multiline
            rows="3"
            placeholder="Experience"
            name='experience'
            onChange={this.handleInputChange}
            style={{marginBottom:30}}
            />
            <TextField
              id="standard-multiline-static"
              label="Education"
              multiline
              rows="3"
              placeholder="Education"
              name='education'
              onChange={this.handleInputChange}
              style={{marginBottom:30}}
              />
              <TextField
                id="standard-multiline-static"
                label="Essentail Skills"
                multiline
                rows="3"
                placeholder="Skills"
                name='skills'
                onChange={this.handleInputChange}
                style={{marginBottom:30}}
                />
              <TextField
              select
              variant="outlined"
              label="Salary Range"
              value={this.state.salary}
              name='salary'
              onChange={this.handleInputChange}
              style={{marginBottom:30}}
              >
              {categories.map(option => (
                <MenuItem key={option.value} value={option.value}>
                 {option.value}
                </MenuItem>
                ))}
              </TextField>
              <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                Create Job
              </Button>
      </Grid>
      </div>
    )
  }
}
