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

function Notif(props) {
    var rows = [];
    var title = props.title;
    var ministry = props.ministry;
    var description = props.description;
    var status = props.status;
    for (var i = 0; i < title.length; i++){
        rows.push(
        <ExpansionPanel style={{marginBottom: 30}}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Grid container justify="flex-start" alignItems="center">
                <Typography gutterBottom variant="h4" component="h2">
                    Job: {title[i]} at {ministry[i]}
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

class EmployTT extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        title:[],
        ministry:[],
        description:[],
        status: [],
        };
    }
    
    componentWillMount(){
        axios.get("http://localhost:80/api/notifs").then(doc => {
            for(var x = 0; x<doc.data.length; x++){
                this.setState(state => {
                    state.title.push(doc.data[x].title)
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
            <Notif title={this.state.title} ministry={this.state.ministry} description={this.state.description} status={this.state.status}></Notif>
        );
    }
}

EmployTT.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployTT)