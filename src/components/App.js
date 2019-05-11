import React from 'react';
import './App.scss';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import { Switch, Route } from 'react-router-dom';
import GiphyAPI from './GiphyAPI';
import * as ROUTES from '../constants/Routes';
import SignUp from './SignUp';
import {connect} from 'react-redux';
import * as actions from './../actions';

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
        {Object.keys(this.props.messages).map(message => {
            let currentMessage = this.props.messages[message]
            return <h1 key={currentMessage.id}>{currentMessage.original}</h1>
          })}
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.GIPHY_API} component={GiphyAPI} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp}/>
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
