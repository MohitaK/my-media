import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js';
import Posts from './components/Posts.js';
import Photos from './components/Photos.js';
import Favorites from './components/Favorites.js';
import Comments from './components/Comments.js';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Profile}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route exact path="/comments" component={Comments}></Route>
            <Route exact path="/photos" component={Photos}></Route>
            <Route exact path="/favorites" component={Favorites}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
