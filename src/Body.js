import React from 'react';
import './css/body.css';
import Article from './Article'

class Body extends React.Component {
    nombreArticles = (nbrarticle) => {
        console.log(nbrarticle)
    };
    render() {
        return (
            <section id="body">
                <div className="container">
                    <Article titre="Les tartines" giveNombreArticle={(x) => this.nombreArticles(x)} />
                    <Article titre="Coding School" giveNombreArticle={(x) => this.nombreArticles(x)} />
                </div>
            </section>
        )
    }
}

export default Body;