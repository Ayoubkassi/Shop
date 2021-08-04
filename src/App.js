import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsbscribeFromAuth = null

  componentDidMount(){
    this.unsbscribeFromAuth = auth.onAuthStateChanged((user)=>{
      this.setState({currentUser : user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsbscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
