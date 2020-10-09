import React from 'react';
import './css/navigation.css';
import SearchBar from './SearchBar';

class Navigation extends React.Component{
    render() {
        return(
            <nav>
                <div className="navLeft">
                    <ul>
                        <li>
                            <a>
                                Link 1
                            </a>
                        </li>
                        <li>
                            <a>
                                Link 2
                            </a>
                        </li>
                        <li>
                            <a>
                                Link 3
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="navRight">
                    <SearchBar/>
                </div>
            </nav>
        );
    }
}

export default Navigation;