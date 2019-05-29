import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
    width: 300,
    height: 300,
  },
};
class EmployTT extends React.Component {
  render(){
    const { classes } = this.props;

    return (
        <div>
        <Grid container justify="center" alignItems="center">
          <Card>
            <CardActionArea>
              <Avatar alt="Richard Stonebank" src="https://image.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-450w-640011838.jpg" className={classes.avatar} />        
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Richard Stonebank
                </Typography>
                <Typography variant="body1" component="p">
                  Address: 99 Stock Street, Couva
                </Typography>
                <Typography variant="body1" component="p">
                  Email: <a href="mailto:Richard.Stonebank@gmail.com">Richard.Stonebank@gmail.com</a>
                </Typography>
                <Typography variant="body1" component="p">
                  Contact Number: +1 929 555 0144
                </Typography>
              </CardContent>           
            </CardActionArea>
          </Card>
        </Grid>

        <Grid container>
          <Card>
            <CardActionArea>     
              <CardContent>

              </CardContent>           
            </CardActionArea>
          </Card>
        </Grid>

        </div>
      );
    }
}

EmployTT.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployTT) 
  