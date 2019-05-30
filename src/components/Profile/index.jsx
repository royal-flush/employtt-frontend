import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import axios from "axios";

const styles = {
  avatar: {
    margin: 10,
    width: 300,
    height: 300,
  },
};
class EmployTT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      email: "",
      number: "",
      photo: "",
      resume: "",
      resumeFields: [],
    };
  }

  componentWillMount() {
    axios.get("http://localhost:80/api/name").then(doc => {
      this.setState({ name: doc.data });
    });
    axios.get("http://localhost:80/api/addr").then(doc => {
    this.setState({ address: doc.data });
    });
    axios.get("http://localhost:80/api/email").then(doc => {
      this.setState({ email: doc.data });
    });
    axios.get("http://localhost:80/api/number").then(doc => {
      this.setState({ number: doc.data });
    });
    axios.get("http://localhost:80/api/photo").then(doc => {
      this.setState({ photo: doc.data });
    });
    axios.get("http://localhost:80/api/resume").then(doc => {
      this.setState({ resume: doc.data });
    });
    axios.get("http://localhost:80/api/rFields").then(doc => {
      this.setState({ resumeFields: doc.data });
    });
  }

  render(){
    const { classes } = this.props;
    
    var resumeLayout= this.state.resumeFields.map(function(resumeField){
      return <Grid container>
              <Card>
                <CardActionArea>     
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                     {resumeField.name}
                    </Typography>              
                      {resumeField.map(function(item){
                        return <Typography variant="body1" component="p">
                            {item}
                        </Typography>
                      })} 
                  </CardContent>           
                </CardActionArea>
              </Card>
            </Grid>
    })

    return (
        <div>
        <Grid container justify="center" alignItems="center">
          <Card>
            <CardActionArea>
              <Avatar alt="Richard Stonebank" src={this.state.photo.Image} className={classes.avatar} />        
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.state.name.Name}
                </Typography>
                <Typography variant="body1" component="p">
                  Email: <a href="mailto:{this.state.email.Email}">{this.state.email.Email}</a>
                </Typography>
                <Typography variant="body1" component="p">
                  Address: {this.state.address.Address}
                </Typography>
                <Typography variant="body1" component="p">
                  Contact Number: {this.state.number.PhoneContact}
                </Typography>
              </CardContent>           
            </CardActionArea>
          </Card>
        </Grid>

        <resumeLayout>
        </resumeLayout>
        </div>
      );
    }
}

EmployTT.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployTT) 
  