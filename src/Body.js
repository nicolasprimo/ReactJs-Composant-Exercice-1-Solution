import React from 'react';
import './css/body.css';
import Article from './Article'

class Body extends React.Component {
    nombreArticles = "2";
    render() {
        return (
            <section id="body">
                <div className="container">
                    {
                        this.nombreArticles >= 2 &&
                        <div>
                            <Article titre="Les tartines" />
                            <Article titre="Coding School" />
                        </div>
                    }
                    {
                        this.nombreArticles < 2 &&
                        <h1>Il n'y a pas d'articles </h1>
                    }

                </div>
            </section>
        )
    }
}

export default Body;