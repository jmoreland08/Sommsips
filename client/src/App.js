import "./App.css";
// import MainContainer from './containers/MainContainer';
import { Switch, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Wines from "./screens/Wines";
import WineDetail from "./screens/WineDetail";
function App() {
  return (
    <div className="App">
      <Layout></Layout>

      <h1>home</h1>

      <Route exact path="/wines">
        <Wines />
      </Route>
      <Route path="/wines/id">
        <WineDetail />
       
      </Route>
    </div>
  );
}

export default App;
