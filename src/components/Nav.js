import React from 'react';
import { faMusic} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Nav = () => {
    return(
        <nav>
            <h1>Waves</h1>
            <button>Librabry <FontAwesomeIcon icon={faMusic} /> </button>
        </nav>

    )
}

export default Nav;