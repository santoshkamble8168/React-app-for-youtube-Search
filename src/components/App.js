import React, { Component } from 'react'
import SearchBar from './searchbar/SearchBar';
import Youtube from '../apis/Youtube';
import VideoDetails from '../components/videos/VideoDetails';
import VideoList from '../components/videos/VideoList';

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    textAlign: "center",
    fontFamily: "Roboto"
  }
};

const KEY = '<Youtube API Key>';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  
  //handle search form submit
  onSearchSubmit = async (term) => {
    const response = await Youtube.get('/search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  }

  onVideoSelect = (video) => {
    //console.log('selected video ', video);
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><SearchBar onFormSubmit={this.onSearchSubmit} /></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}><VideoDetails video={this.state.selectedVideo} /></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
