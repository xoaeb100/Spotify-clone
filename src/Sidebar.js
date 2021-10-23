import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from './DataLayer';
import logo from './UPBEAT.png';


function Sidebar() {
    const[{playlists}, dispatch]= useDataLayerValue();
    console.log(playlists);
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src= {logo} alt="" />
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>
        {/* ⭐👇 if playlists exist and items inside them exists then map through every single of them and return the name */}
        {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
        ))}
        
        
        </div>
    )
}

export default Sidebar
