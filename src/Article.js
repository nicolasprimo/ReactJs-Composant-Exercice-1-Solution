import React, { Fragment } from 'react';
import './css/article.css';
import toast from './images/toast.jpg'

class Article extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="article">
                    <button onClick={() => console.log(this.props.titre)}>Quel est le titre</button>
                    <div className="d-left">
                        <img src={toast} alt="toast" className="img-fluid" />
                    </div>
                    <div className="d-right">
                        <h1>Mon premier article</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </Fragment >

        )
    }
}

export default Article;