import React from 'react';
import './css/body.css';
import Article from './Article'

class Body extends React.Component{
    render(){
        return(
            <section id="body">
                <div className="container">
                   <Article/>
                   <Article/>
                </div>
            </section>
        )
    }
}

export default Body;