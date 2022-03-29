import React from 'react';
import Routes from './routes';
import { MainBar} from 'components/common/MainBar';
import { Footer } from 'components/common/Footer';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <header>
        <MainBar/>
      </header>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
