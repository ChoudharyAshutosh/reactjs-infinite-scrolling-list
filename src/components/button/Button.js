import {Link} from 'react-router-dom'
import './Button.css'
export default function Button({list}){
    //menu button
    return(
        <Link to={list} className='list-link'>
            <button className="menu-button">menu</button>
        </Link>
    )
}