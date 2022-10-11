import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(); // Read docs

  //Run code based on a given condition - userEffect()
  useEffect(() => {
    // code
    const hash = getTokenFromResponse();
    window.location.hash = ""; // For security reasons if you dont want access token to be there.
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token);
    }
  }, []);

  return (
    <div className="App">
      {
        token ? <h1>I am Logged in</h1> : <Login/>
      }
    </div>
  );
}

export default App;
