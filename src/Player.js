import React from 'react';
import Body from './Body';
import Footer from './Footer';
import "./Player.css";
import Sidebar from './Sidebar';


function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar>

                </Sidebar>
                <Body spotify={spotify}/>
                {/* passing spotify into the body 👆 */}

                
                <Footer/>
            </div>
        </div>
    )
}

export default Player
