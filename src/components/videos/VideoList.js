import React from 'react';
import VideoItem from './VideoItem';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const VideoList = ({ videos, onVideoSelect }) => {
    const classes = useStyles();
    //onVideoSelect get props from app.js and pass it to the VideoItem component
    const videoList = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect}
        />
    });
    return (
        <Grid item>
            <Paper className={classes.paper}>{videoList}</Paper>
        </Grid>
    );
}

export default VideoList;