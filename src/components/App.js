import React from 'react';
import './App.scss';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import { Switch, Route } from 'react-router-dom';
import GiphyAPI from './GiphyApi/GiphyAPI';
import * as ROUTES from '../constants/Routes';
import SignUp from './SignUp';
import {connect} from 'react-redux';
import * as actions from './../actions';
import PokeApi from './PokemonApi/PokeApi';
import HearthstoneApi from './HearthstoneApi/HearthstoneApi';

/* eslint-disable */
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      menu: false,
      menuView: "vertical",
    }
    this.menuToggle = this.menuToggle.bind(this)
    this.menuVerticalView = this.menuVerticalView.bind(this)
    this.menuHorizontalView = this.menuHorizontalView.bind(this)
  }

  componentWillMount(){
    const {dispatch} = this.props;
    const {watchMessages} = actions;
    dispatch(watchMessages())
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
        <Header authUser={this.props.authUser} menuToggle={this.menuToggle} />
        <Menu menu={this.state.menu} closeMenu={this.menuToggle} verticalView={this.menuVerticalView} horizontalView={this.menuHorizontalView} menuRotation={this.state.menuView}/>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.GIPHY_API} component={GiphyAPI} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp}/>
          <Route exact path={ROUTES.POKE_API} component={PokeApi}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState,
  messages: state.firebaseState,
  authUser: state.authState
})

export default connect(mapStateToProps)(App);
/* eslint-enable */
