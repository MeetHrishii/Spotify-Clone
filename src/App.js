import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
/* lightweight wrapper for the Spotify Web API (
   It includes helper functions for all Spotify's
   endpoints, such as fetching metadata (search 
   and look-up of albums, artists, tracks, 
   playlists, new releases, podcasts) and user's 
   information (follow users, artists and playlists,
   and saved tracks management)
   https://jmperezperez.com/spotify-web-api-js/ => DOCS */
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "./spotify";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(); // Read docs
  const [{ user, token }, dispatch] = useDataLayerValue();
  //Run code based on a given condition - userEffect()
  useEffect(() => {
    // code
    const hash = getTokenFromResponse();
    window.location.hash = ""; // For security reasons if you dont want access token to be there.
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
