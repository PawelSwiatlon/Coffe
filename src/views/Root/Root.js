import './Root.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';

import HomeView from '../HomeView/HomeView';
import AboutView from '../AboutView/AboutView';
import ContactView from '../ContactView/ContactView';

function Root() {
  return (
    <BrowserRouter>
      <>
        <Nav/>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/about" component={AboutView} />
          <Route path="/contact" component={ContactView} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Root;
