import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import axios from 'axios'

export default class Metrics extends React.Component{
  constructor(){
    super()
    this.state={
      metrics:[]
    }
  }
  componentWillMount(){
    axios.get('').then(doc=>{
      this.setState({metrics: doc.data})
    })
  }

  render(){
    return(
      <div>
      {this.state.metrics.map(job=>(
        <Card>
          <CardContent>
          <Typography variant="h5" component="h2">
            {job.title}
          </Typography>
          <Typography variant="body2" component="p">
            {job.num_persons}
          </Typography>
          <Typography variant="body2" component="p">
            {job.num_cvs}
          </Typography>
          </CardContent>
        </Card>
      ))}
      </div>
    )
  }
}
