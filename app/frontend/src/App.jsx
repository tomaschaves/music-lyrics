import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Music from './pages/Music';
import Listmusics from './pages/Listmusics';
import AddMusic from './pages/AddMusic';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Listmusics } />
        <Route exact path="/music/:id" component={ Music } />
        <Route exact path="/add" component={ AddMusic } />
      </Switch>
      
    </BrowserRouter>
  )
}

export default App
