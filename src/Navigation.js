import React from 'react';
import './css/navigation.css';
import SearchBar from './SearchBar';

class Navigation extends React.Component {
    changeDirectory = (lien) => {
        console.log(lien)
    }
    render() {
        return (
            <nav>
                <div className="navLeft">
                    <ul>
                        <li>
                            <a onClick={() => this.changeDirectory('Accueil')}>
                                Link 1
                            </a>
                        </li>
                        <li>
                            <a onMouseOver={() => this.changeDirectory('Galerie')}>
                                Link 2
                            </a>
                        </li>
                        <li>
                            <a onDoubleClick={() => this.changeDirectory('Contact')}>
                                Link 3
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="navRight">
                    <SearchBar />
                </div>
            </nav>
        );
    }
}

export default Navigation;