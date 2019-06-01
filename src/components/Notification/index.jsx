import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from "axios";

const styles = {
    root: {
        width: '100%',
    },
    heading: {
        fontSize: 15,
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: 15,
        color: 'secondary',
    },
};

/**
  This function is used to render notifcation infromation a job seeker will receive.
*/
function Notif(props) {
    var rows = [];
    var position = props.position;
    var ministry = props.Ministry;
    var description = props.Description;
    var status = props.Status;
    for (var i = 0; i < position.length; i++){
        rows.push(
        <ExpansionPanel style={{marginBottom: 30}}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Grid container justify="flex-start" alignItems="center">
                <Typography gutterBottom variant="h4" component="h2">
                    Job: {position[i]} at {ministry[i]}
                </Typography>
            </Grid>
            <Grid container justify="flex-end" alignItems="center">
                <Typography variant="h5" component="h2">
                    Status: {status[i]}
                </Typography>
            </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                Job Description: {description[i]}
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        )
    }
    return rows;
}

/**
  The component is used to pull all the notifcations data and populate the states.
*/
class EmployTT extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        position:[],
        ministry:[],
        description:[],
        status: [],
        };
    }

    componentWillMount(){
        axios.get("http://localhost:100/api/notifs").then(doc => {
            for(var x = 0; x<doc.data.length; x++){
                this.setState(state => {
                    state.position.push(doc.data[x].position)
                    state.ministry.push(doc.data[x].ministry)
                    state.description.push(doc.data[x].description)
                    state.status.push(doc.data[x].status)
                })
            }
        })
    }

    render(){
        //const { classes } = this.props;
        return (
            /*
            <Grid>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Job: {this.state.title} at {this.state.ministry}
                        </Typography>
                        <Typography variant="h5" component="h2" align="right">
                            Status: {this.state.status}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>*/
            <Notif position={this.state.position} ministry={this.state.ministry} description={this.state.description} status={this.state.status}></Notif>
        );
    }
}

EmployTT.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployTT)
