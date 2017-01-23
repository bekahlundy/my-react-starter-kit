import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';
import './styles';

const App = () => {
  return (
    <div>
      <p>Hello World</p>
    <Header />
    </div>
  );
}

render(<App />, document.querySelector('.application'));
