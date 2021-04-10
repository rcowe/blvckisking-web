import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/pages/Home';
import Submit from './components/pages/Submit';
import Contact from './components/pages/Contact';
import References from './components/pages/References';
import EventShow from './components/pages/EventsShow';
import PeopleShow from './components/pages/PeopleShow';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/submit' component={Submit} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/references' component={References} />
                    <Route path='/events' component={EventShow} />
                    <Route path='/people' component={PeopleShow} />
                </Switch>
            </Router>
        </>
    );
}

export default App;