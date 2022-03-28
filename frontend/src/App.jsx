import React from 'react';
import { MainNav} from 'components/common/MainNav';
import { Footer } from 'components/common/Footer';
import { Main } from 'components/common/Main';
import Routes from 'Routes';

function App() {
  return (
    <div className='app'>
      <h1>dssd</h1>
      <header>
        <MainNav/>
      </header>
      <Main>
        <Routes/>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;