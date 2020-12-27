import React from 'react'

import Conditions from './Conditions';
import Events from './Events';
import FetchAxios from './FetchAxios';
import Form1 from './Form1';
import Form2 from './Form2';
import HigherOrder from './HigherOrder';
import Home from './Home';
import Hooks from './Hooks';
import HooksReducer from './HooksReducer';
import Lifecycle from './Lifecycle';
import MyContext from './MyContext';
import Portals from './Portals';
import References from './References';
import RenderProps from './RenderProps';
import Suspend from './Suspend';

import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Prompt,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';


const NotFound = (props) => (
  <>
    <h1>404</h1>
    <FetchAxios />
  </>
);

const Btn = (props) => (
  <h2>Lorem</h2>
);


/**
 * Showcase lax, exact and strict routes
 * - Strict: Trailing slash MUST or MUST NOT exist (not possible to use both)
 * - Exact: No substring matches: Be careful as routes might overlap, e.g. all contain '^/...$'
 *   - If not exact, order is important. Here we use it for 404 as last route.
 */
class Navigation extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn : false,
      userName   : 'user'
    };
  }
  
  
  loginUser (event) {
    console.log('loginUser');
    
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    const styleObj = { color: 'red' };

    return (
      <div className='Navigation'>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link> <br />
                <NavLink to='/' activeClassName='active'>Home (active)</NavLink>
              </li>
              <li><Link to='/context'>Context</Link></li>
              <li>
                <Link to='/conditions'>Conditions</Link> <br />
                <Link to='/conditions/'>Conditions (404)</Link>
              </li>
              <li><Link to='/events'>Events</Link></li>
              <li><Link to='/form-1'>Hook-Form</Link></li>
              <li><Link to='/form-2'>Formik</Link></li>
              <li><Link to='/higher-order'>Higher order</Link></li>
              <li>
                <Link to='/hooks'>Hooks</Link> <br />
                <Link to='/hooks-reducer'>Hooks Reducer</Link>
              </li>
              <li><Link to='/lifecycle'>Lifecycle</Link></li>
              <li><Link to='/portals'>Portals</Link></li>
              <li>
                <Link to='/redirect'>Redirect</Link> <br />
                <NavLink to={`/user/${this.state.userName}`}>User</NavLink>
              </li>
              <li><Link to='/references'>References</Link></li>
              <li><Link to='/render-props'>Render Props</Link></li>
              <li><Link to='/suspense'>Suspense</Link></li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path='/context' component={MyContext} /> 
            <Route exact strict path='/conditions' component={Conditions} />
            <Route exact path='/events'>
              <Events scale='c' />
            </Route>
            <Route exact path='/form-1' component={Form1} />
            <Route exact path='/form-2' component={Form2} />
            <Route exact path='/higher-order' component={HigherOrder} />
            <Route exact path='/hooks' component={Hooks} />
            <Route exact path='/hooks-reducer' component={HooksReducer} />
            <Route exact path='/lifecycle'>
              <Lifecycle firstName='John' />
            </Route>
            <Route exact path='/portals'>
              <Portals>
                <h1 style={styleObj}>Portal popup</h1>
              </Portals>
            </Route>
            <Route exact path='/redirect'>
              {this.state.isLoggedIn ?
                <Redirect to='/dashboard' /> : <Redirect to='/' />
              }
            </Route>
            <Route exact strict path='/references'>
              <References watch={Btn} />
            </Route>
            <Route exact path='/render-props'>
              <RenderProps render={data => (
                <h1>Hello {data.text}</h1>
              )} />
            </Route>
            <Route exact path='/suspense' component={Suspend} />

            <Route exact path='/dashboard'>
              <Prompt
                message={({ pathname }) => {
                  console.log(pathname);
                  return this.state.isLoggedIn &&
                    pathname.includes('/user') // /logout
                    ? 'Are you sure you want to logout?'
                    : true
                }}
              />
              <h1>Dashboard</h1>
              <p>Logged in user</p>
            </Route>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>

        <br />
        <br />
        <hr />
        <button onClick={this.loginUser.bind(this)}>Log in</button>
      </div>
    );
  }
}


export default Navigation;

