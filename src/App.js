import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth , createUserProfileDocument } from './firebase';
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
    this.unsbscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      //this.setState({currentUser : user});
      //createUserProfileDocument(user);
      if(userAuth){
        const userRef =await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }

        this.setState({currentUser : userAuth});
    });



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
