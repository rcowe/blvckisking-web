import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/pages/Home'
import OpenLetter from './components/pages/OpenLetter'
import Submit from './components/pages/Submit'
import Contact from './components/pages/Contact'
import References from './components/pages/References'

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/openletter' component={OpenLetter} />
                    <Route path='/submit' component={Submit} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/references' component={References} />
                </Switch>
            </Router>
        </>
    );
}

export default App;