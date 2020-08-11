import React from 'react'
import '../Css/Player.css'
import Sidebar from '../Components/Sidebar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'

const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player_body">
                 <Sidebar/>
                 <Body spotify={spotify}/>
            </div>

            <Footer/>
        </div>
    )
}

export default Player
