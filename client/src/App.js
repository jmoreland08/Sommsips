import './App.css';
import { Switch, Route } from "react-router-dom";
import Wines from './screens/Wines/Wines';
import Home from './screens/Home/Home';
import Details from './screens/Details/Details';
import AddWine from './screens/AddWine/AddWine';
import EditWine from './screens/EditWine/EditWine';
import Layout from './components/Layout/Layout';


function App() {
  return (
    
    <div className="App">
      
      <Switch>
      

        <Route  exact path="/wines/add">
        <AddWine />
        </Route>

        <Route  exact path="/wines/edit">
        <EditWine />
        </Route>

        <Route  exact path="/wines/:id">
          <Details />
        </Route>

        <Route  exact path="/wines">
        <Wines />
        </Route>

        <Route  exact path="/">
        <Home />
        </Route>



        </Switch>
        
      </div>
      
  );
}

export default App;
