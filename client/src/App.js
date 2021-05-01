import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";
import Wines from './screens/Wines/Wines';
import Home from './screens/Home/Home';
import Details from './screens/Details/Details';
import AddWine from './screens/AddWine/AddWine';
import EditWine from './screens/EditWine/EditWine';
import { getAllWines, deleteWine } from './services/wines'
import { getAllUsers } from './services/users'
import {useState, useEffect} from 'react'
// import Layout from './components/Layout/Layout';


function App() {
  const [allWines, setAllWines] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetchWines();
  }, []);

  const fetchWines = async () => {
    const wines = await getAllWines();
    setAllWines(wines);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getAllUsers();
    setAllUsers(users);
  };


  const handleDelete = async (id) => {
    await deleteWine(id)
    const updatedWines = allWines.filter(wine => {
      return wine.id !== id
    })
    setAllWines(updatedWines)
    history.push('/wines')
  };

  return (
    
    <div className="App">
      
      <Switch>
      

        <Route  exact path="/wines/add">
          <AddWine 
            allWines={allWines}
            setAllWines={setAllWines}
            allUsers={allUsers}
          />
        </Route>

        <Route  exact path="/wines/:id/edit">
          <EditWine
            allWines={allWines}
            setAllWines={setAllWines}
          />
        </Route>

        <Route  exact path="/wines/:id">
          <Details handleDelete={handleDelete}/>
        </Route>

        <Route  exact path="/wines">
        <Wines allWines={allWines} />
        </Route>

        <Route  exact path="/">
        <Home />
        </Route>



        </Switch>
        
      </div>
      
  );
}

export default App;
