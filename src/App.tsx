import React, { FC } from 'react';
import './App.less';
import Wallet from './components/Wallet';

const App: FC = () => {
  return (
    <div className="App">
      <Wallet />
    </div>
  );
}

export default App;
