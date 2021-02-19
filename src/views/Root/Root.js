import './Root.module.scss';

import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';

function Root() {
  return (
    <div className="App">
      <Nav/>
      <Home />
    </div>
  );
}

export default Root;
