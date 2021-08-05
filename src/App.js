import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth , createUserProfileDocument } from './firebase';
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
  // constructor(){
  //   super();
  //
  //   this.state = {
  //     currentUser : null
  //   }
  // }

  unsbscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unsbscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      //this.setState({currentUser : user});
      //createUserProfileDocument(user);
      if(userAuth){
        const userRef =await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {

            setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
          });
        });
      }

        setCurrentUser(userAuth);
    });



  }

  componentWillUnmount(){
    this.unsbscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage /> } />
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
