import React from 'react';
import './App.css';
import AccountManager from '../components/AccountManager';

interface IProps { }

export default class App extends React.Component<IProps> {
  public render() {
    return (
      <div className="App">
            <AccountManager />
      </div>
    );
  }
}
