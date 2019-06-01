import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Edit from '@material-ui/icons/Edit'
import axios from "axios";

const styles = {
  avatar: {
    margin: 10,
    width: 300,
    height: 300,
  },
  fab: {
    margin: 1,
  },
};

/**
  This component is use to pull the users profile info and show it in a readly fashion.
*/
class EmployTT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      Name: "",
      Address: "",
      Email: "",
      PhoneContact: "",
      Photo: "",
      resume: "",
      resumeFields: [],
      editPCard: false,
    };
    this.editProfileCard = this.editProfileCard.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    const login=JSON.parse(localStorage.getItem('user_credentails'))
    console.log(login.UID)
    this.setState({UID: login.UID})
    axios.post("http://localhost:100/api/name", login).then(doc => {
      this.setState({ Name: doc.data.Name });
    });
    axios.post("http://localhost:100/api/addr", login).then(doc => {
    this.setState({ Address: doc.data.Address });
    });
    axios.post("http://localhost:100/api/email", login).then(doc => {
      this.setState({ Email: doc.data.Email });
    });
    axios.post("http://localhost:100/api/number", login).then(doc => {
      this.setState({ PhoneContact: doc.data.PhoneContact });
    });
    axios.get("https://dog.ceo/api/breeds/image/random").then(doc => {
      this.setState({ Photo: doc.data.message });
    });
    axios.get("http://localhost:100/api/resume").then(doc => {
      this.setState({ resume: doc.data });
    });
    axios.get("http://localhost:100/api/rFields").then(doc => {
      this.setState({ resumeFields: doc.data });
    });
  }

  editProfileCard(){
    if (this.state.editPCard){
      axios.post("http://localhost:80/api/pupdate", this.state).then(doc => {
        return doc;
      });
    }
    this.setState({editPCard: !this.state.editPCard})
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    const { classes } = this.props;
    const editPCard = this.state.editPCard;

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
    var mailto = "mailto:" + this.state.Email;
    return (
        <div>
        {!editPCard ? (
        <Grid container justify="center" alignItems="center">
          <Card>
            <Avatar alt="Richard Stonebank" src={this.state.Photo} className={classes.avatar} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Name: {this.state.Name}
              </Typography>
              <Typography variant="body1" component="p">
                Email: <a href={mailto}>{this.state.Email}</a>
              </Typography>
              <Typography variant="body1" component="p">
                Address: {this.state.Address}
              </Typography>
              <Typography variant="body1" component="p">
                Contact Number: {this.state.PhoneContact}
              </Typography>
              <Grid container justify="flex-end" alignItems="center" >
                <Fab color="secondary" aria-label="Edit" className={classes.fab} onClick={this.editProfileCard}>
                  <Edit />
                </Fab>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        ):(
          <Grid container justify="center" alignItems="center">
          <Card>
            <Avatar alt="Richard Stonebank" src={this.state.Photo} className={classes.avatar} />
            <CardContent>
                <form>
                  <label>
                    <h3>
                      Name: <input type="text" value={this.state.Name} name="Name" onChange={this.handleInputChange}/>
                    </h3>
                  </label>
                  <label>
                      Address: <input type="text" value={this.state.Address} name="Address" onChange={this.handleInputChange}/>
                  </label>
                  <br/>
                  <br/>
                  <label>
                      Contact Number: <input type="text" value={this.state.PhoneContact} name="PhoneContact" onChange={this.handleInputChange}/>
                  </label>
                </form>
              <Grid container justify="flex-end" alignItems="center" >
                <Fab color="secondary" aria-label="Edit" className={classes.fab} onClick={this.editProfileCard}>
                  <Edit />
                </Fab>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        )}
        {resumeLayout}
        </div>
      );
    }
}

EmployTT.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployTT)
