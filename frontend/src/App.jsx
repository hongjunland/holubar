import React from 'react';
import Nav from 'components/common/Nav';
import Footer from 'components/common/Footer';
import Main from 'components/common/Main';
import Routes from 'routes';
import {BrowserRouter as Router} from "react-router-dom";
import Header from 'components/common/Header';
// import { Header } from 'components/common/Header';

function App() {
  return (
    <div className='app'>
      <Router>
          <Header>
            <Nav/>
          </Header>
        <Main>
          <Routes/>
        </Main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;