import "./App.css";
// import MainContainer from './containers/MainContainer';
import { Switch, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Wines from "./screens/Wines";
import WineDetail from "./screens/WineDetail";
import AddWine from './screens/AddWine'
import WineEdit from "./screens/WineEdit";
// import { wines } from '../src/services/wines'

function App(props) {
  const { postWine } = props;
  return (
    <div className="App">
      <Layout></Layout>

      <Route  path="/wines/id">
        <WineDetail />
      </Route>
      
      <Route path='/wines/edit'>
        <WineEdit />
      </Route>

      <Route path='/wines/add-wine'>
        <AddWine postWine={postWine}/>
     </Route>

      <Route exact path="/wines">
        <Wines />
      </Route>

    </div>
  );
}

export default App;
