import React from 'react'
import '../Css/Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from '../dataLayer'

const Sidebar = () => {

    const [{playlist}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="sidebar logo" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library "/>
            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr/>

            { playlist?.items?.map( (lst) => (
                <SidebarOption title={lst.name}/>
            ))}
            
        </div>
    )   
}

export default Sidebar
