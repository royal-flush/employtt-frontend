import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Send from '@material-ui/icons/Send';
import axios from "axios";

const styles = {

};
/**
  This is used to render all the jobs as an individual card.
*/
function Jobs(props){
    var rows = [];
    var position = props.position;
    var ministry = props.ministry;
    var category = props.category;
    var date = props.date;
    for (var i = 0; i < position.length; i++){
        rows.push(
            <Grid container>
              <Card>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2">
                        Position: {position[i]}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Ministry: {ministry[i]}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Description: {category[i]}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Closing Date: {date[i]}
                    </Typography>
                </CardContent>
                <Grid container justify="flex-end" alignItems="center" style={{marginBottom: 10}} >
                    <Button variant="contained" style={{backgroundColor: '#ee0000'}} aria-label="Delete" size="large">
                        Apply <Send></Send>
                    </Button>
                </Grid>
              </Card>
            </Grid>
        )
    }
    return rows;
}

/**
  The components pull all the open job data and populates the states.
*/
class EmployTT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position:["Test"],
            category:["Test"],
            ministry:["Test"],
            date:["Test"],
        };
    }

    componentWillMount(){
        axios.get("http://localhost:80/api/getJobs").then(doc => {
            for(var x = 0; x<doc.data.length; x++){
                this.setState(state => {
                    state.position.push(doc.data[x].position)
                    state.ministry.push(doc.data[x].ministry)
                    state.description.push(doc.data[x].description)
                    state.date.push(doc.data[x].date)
                })
            }
        })
    }

    render(){
        return(
            <Jobs position={this.state.position} category={this.state.position} ministry={this.state.ministry} date={this.state.date}></Jobs>
        )
    }
}

EmployTT.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployTT)
