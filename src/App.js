import React, {useEffect} from 'react';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './dataLayer'


const spotify = new SpotifyWebApi();

const App = () => {

  const [{user, token}, dispatch] = useDataLayerValue();
  useEffect( () => {
    const hash = getTokenFromResponse();
    window.location.hash="";
    const temp_token = hash.access_token;
    
    if (temp_token) {
      dispatch({
        type: "SET_TOKEN",
        token: temp_token
      })
      spotify.setAccessToken(temp_token);
      spotify.getMe().then( user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then( ( playlist ) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlist : playlist
        })
      })

      spotify.getPlaylist('37i9dQZF1DXd8cOUiye1o2').then( response => {
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })

    }
  }, [])

  return (
    <div className="App">
      {
        token ? 
          <Player spotify={spotify}/>
        :
          <Login/>
      }
      
    </div>
  );
}

export default App;
