import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

class EmployTT extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        title:'Software Engineer',
        ministry:'IGovTT',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        status: 'Awaiting Response',
        };
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
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography gutterBottom variant="h4" component="h2">
                    Job: {this.state.title} at {this.state.ministry}
                </Typography>
                <Typography variant="h5" component="h2" align="right">
                    Status: {this.state.status}
                </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    Job Description: {this.state.description}
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

EmployTT.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployTT)