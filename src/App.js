import './App.css'
import Home from '../src/pages/Home'
import DetalleProducto from '../src/components/DetalleProducto'
import Results from './components/Results'
// import { Router, Route, Redirect, Switch } from "react-router-dom"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/items/:id" component={DetalleProducto} exact/>
          <Route path="/items-search=:textSearch" component={Results} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
