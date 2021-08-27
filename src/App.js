import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
// import Home from "./component/myHome/home";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const ProfileSetting = React.lazy(() => import('./component/myprofile/profileSetting'));
const  InviteUser= React.lazy(() => import('./component/inviteUser/invite'));
const  Logout= React.lazy(() => import('./component/log/logout'));


class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>

              <Route exact path="/" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/profile"  render={props => < ProfileSetting {...props}/>} />
              <Route exact path="/invite"  render={props => <InviteUser {...props}/>} />
              <Route exact path="/logout"  render={props => <Logout {...props}/>} />

              <Route path="/"  name="upload" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
