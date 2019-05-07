import React from 'react';
import './App.scss';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import { Switch, Route } from 'react-router-dom';
import GiphyAPI from './GiphyAPI';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/giphyApi' component={GiphyAPI} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
