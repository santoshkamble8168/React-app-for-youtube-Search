import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


const VideoItem = ( {video, onVideoSelect} ) => {
    //received onVideoSelect props from VideoList
    //onVideoSelect its an callback to execute method on App.js
    const classes = useStyles();

    const title = video.snippet.title;
    const image = video.snippet.thumbnails.medium.url;
    const channelTitle = video.snippet.channelTitle;
    const publishTime = new Date(video.snippet.publishTime).toLocaleDateString([]);
    
    //console.log('VideoItem',video);
    return (
    <div className={classes.root} onClick={()=> { onVideoSelect(video) }}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>

          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={title} src={image} />
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>

              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {channelTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {publishTime}
                </Typography>
              </Grid>
              
            </Grid>
          </Grid>

        </Grid>
      </Paper>
    </div>
  );
}

export default VideoItem;