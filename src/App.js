import React, {useEffect,useState} from "react";
import './App.css';
import Login from './Login';
import './Login.css'
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player  from "./Player";
import { useDataLayerValue } from "./DataLayer";


// install spotify-web-api-js using 'npm i install spotify-web-api-js' in the terminal
//👇 instanceof spotifywebapi
const spotify= new SpotifyWebApi();


function App() {
  
  // use this [{}] to grab anything from the Datalayer
// '{}' pulls out Information, 'dispatch' 🔫 shoots it!
  const [{user,token}, dispatch] = useDataLayerValue();
  
  

  useEffect(() => {
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      //setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      
      // getting data from Spotify to show playlists 👇
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
        });
      });
      
      // login to spotify search for 'discover weekly' get this id from URL 👇
      spotify.getPlaylist("37i9dQZEVXcFymGrNHZjYp").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      });

    }


    console.log("ive got the token 🎊",token);

    
  }, []);
  
 
  
  return (
    <div className="app">
      {token?(
        <Player spotify={spotify}/>
      ):(
        <Login/>
      )}


      {/* <h1>Welcome to Spotify!!🚀</h1>
      <Login></Login> */}
    </div>
  );
}

export default App;
