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
      menu: false,
      menuView: "vertical"
    }
    this.menuToggle = this.menuToggle.bind(this)
    this.menuVerticalView = this.menuVerticalView.bind(this)
    this.menuHorizontalView = this.menuHorizontalView.bind(this)
  }

  menuToggle(){
    this.setState(prevState => ({menu: !prevState.menu}))
  }

  menuVerticalView(){
    this.setState({menuView: "vertical"})
  }

  menuHorizontalView(){
    this.setState({menuView: "horizontal"})
  }
  render(){
    return (
      <div className="App">
        <Header menuToggle={this.menuToggle} />
        <Menu menu={this.state.menu} closeMenu={this.menuToggle} verticalView={this.menuVerticalView} horizontalView={this.menuHorizontalView} menuRotation={this.state.menuView}/>
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
