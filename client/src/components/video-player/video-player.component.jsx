import React, { useContext } from "react";

import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../socket-client';

import './video-player.styles.css';


const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
    },
  }));
  const VideoPlayer = () => {
    const { me,name, callAccepted, CallerVideo, ReceiverVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();
  
    return (
      <Grid container className={classes.gridContainer}>
        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
              <video playsInline muted ref={CallerVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
        {console.log(me)}
        {callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={ReceiverVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
      </Grid>
    );
  };

export default VideoPlayer;