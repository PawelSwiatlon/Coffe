import './Root.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';

function Root() {
  return (
    <BrowserRouter>
      <>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Root;
