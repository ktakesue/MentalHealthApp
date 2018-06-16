import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";
import UserRegistrationForm from "./components/userRegistrationForm";
import SearchBar from "./containers/searchBar";
import SendSms from "./containers/sms";
import NavBar from "./containers/navBar";
import NavDrawer from "./containers/navDrawer";
import ProviderList from "./containers/providerList";
import ProviderDetail from "./components/providerDetail";
import { createStore } from "redux";
import reducer from "./reducers/index";
import SendCall from "./containers/dialer";
import navigatorImg from './styles/static/800x600.jpg'
import streamsImg from './styles/static/ocs_cropped.jpg'

const store = createStore(reducer);
console.log(store.getState());
class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <div className='background'>
        
          <NavBar />
          
          <div className='row align-items-center no-gutters'>
          <div className='col-sm'>
          </div>

          <div className='col-lg' >
<img src={streamsImg} alt='streams'/>
</div>

<div className='row offset-md-1'>
<div className='col-md justify-content-start no-gutters'>
          <Route exact path="/" component={SearchBar} />
          </div>
          </div>
          
          </div>
          <Route exact path="/doctors" component={ProviderList} />
          <Route exact path="/doctors/:id" component={ProviderDetail} />
          <Route path="/register" component={UserRegistrationForm} />
        
          <NavDrawer />
      <img src={navigatorImg} alt='navigator' />
          <Route path="doctors/" component={SendSms} />
       
          <SendCall />
          </div>
       </div>
      </Router>
    );
  }
}

export default App;
