import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import './css/app.css'

function App(){
   
    return(
        <Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </Fragment>
    )
}


export default App;