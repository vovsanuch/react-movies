import React from 'react';
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </React.Fragment>
    );
};

export default App;