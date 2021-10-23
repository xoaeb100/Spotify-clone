export const authEndpoint= "https://accounts.spotify.com/authorize";

const redirectUri = "http://192.168.0.105:3000/";
// redirectUri doesnt work on localhost but will work on home network

const clientId= "1229460b95544cabb88a358867cf2a14";
// const clientId= "b876bf79918845a08dee0a63192da94a"; //nuclearpasta client ID

const scopes= [
    "user-read-currently-playing",
    "user-read-recently-played","user-read-playback-state","user-top-read",
    "user-modify-playback-state"];

export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    // important 👇
    .reduce((initial, item) =>{
        var parts=item.split("=");
        initial[parts[0]] =decodeURIComponent(parts[1]);
        return initial;
        //What it does: the output url contains
        // #access_token=BQCw3oWg&name=shoaib
        // this fn looks for # splits at first & then decodeURIComponent returns the 'BQCw3oWg'
    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
// (join(%20): %20 is the ASCII character for space, scopes.join joins user given scopes in english language form with spaces)