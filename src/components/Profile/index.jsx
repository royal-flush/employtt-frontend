import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
};
class EmployTT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }
  
  render(){
    const { classes } = this.props;

    return (
        <div>
          <Card>
            <CardActionArea>
              <Grid container justify="center" alignItems="center">
                <Avatar alt="Zachary Orr" src="https://lh3.googleusercontent.com/j0aUONk54i9T5tDzPRVuiHKMyUYkGFbI7vwRKX6b7iDHg8wLrCyldqPMP4hyqb579EjUdEASE3RMMl3wSlx1dvI6uYUB1kJCsVR4x82SJZM8dLSS7fzuu5rBG6XjmLr4o4Ow2Qfga95870Mpby17BT2Onw84tavHat2q674AH2L8fekmUcAxCnLRSdYvJaPgOI1xETNY5ictVBmaE7g0EOzfy8cferRZpuxwQuWuQ_mE6dCmZXL_VIjF_6Y_VrSndD5yMi2iqo2aa67MOODBOgFvYE2NDJsKsNtRJQbVBQZxfaDDZ9ds_LyB5L189sFvvrEpHvF8K_iCBJwnzYl-pGrOrbsrYyEyrdpTuePEKhBBYeqd3g360MkuY3mMeoSGD9iL9I5bTpzqhCMEWi6c9-6CeopSOPSzrnCVryPWqRRuJYWVwI6lypXa5Ju3whf2iVyC7KSOZHqMUy5zF2DYviLFtzicSQL2xaLEfQrAUzi-6KUxY7Tvoxb4bSe5AHml84EW3I4oNE0qY_m66R3nSJpG6evZR9m6In_CcDiwRViFBHnNtTY-5vBBzy6RuJ9ROtY07O7M-u8sbGODpCDtJX5rN50gi1f1HCy2HISShF4kgGegouuAMwVjaAYC7KA6XKtJS1NLaiBQ3KtKOjCoEvayuGIui-jd=w664-h885-no" className={classes.avatar} />        
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Zachary Orr
                </Typography>
                <Typography variant="body1" component="p">
                  Address: 41 Sun Valley Avenue, Malabar, Arima
                </Typography>
                <Typography variant="body1" component="p">
                  Email: <a href="mailto:zachary.orr@gmail.com">zachary.orr@gmail.com</a>
                </Typography>
                <Typography variant="body1" component="p">
                  Contact Number: +1 868 768 6685
                </Typography>
              </CardContent>
              </Grid>
            </CardActionArea>
          </Card>
        </div>
      );
    }
}

EmployTT.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployTT) 
  