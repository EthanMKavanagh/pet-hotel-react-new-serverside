import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import OwnersForm from '../OwnersForm/OwnersForm';
import PetsForm from '../PetsForm/PetsForm';
import Owners from '../Owners/Owners';
import OwnersItem from '../OwnersItem/OwnersItem';
import Pets from '../Pets/Pets';
import PetsItem from '../PetsItem/PetsItem';




function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pet Hotel</h1>
        <Route path="/owners" exact>
          <Owners />
        </Route>
        <Route path="/pets" exact>
          <Pets />
        </Route>
      </div>
    </Router>
  );
}

export default App;
