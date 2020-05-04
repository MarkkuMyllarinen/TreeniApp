import React from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation, Drawer, Content, Icons} from 'react-mdl';
import {Link} from "react-router-dom";
import Main from "./components/Main";
import './App.css'

function App() {

    function hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    return (
        <div className="App">
            <Layout>
                <Header title="Title" scroll>

                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/customers" onClick={() => hideToggle()}>Customers</Link>
                        <Link to="/trainings" onClick={() => hideToggle()}>Trainings</Link>
                        <Link to="/calendar" onClick={() => hideToggle()}>Calendar</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content"/>
                    <Main></Main>
                </Content>
            </Layout>
        </div>
    );
}

export default App;
