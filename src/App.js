import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/home/home';
import Favorites from './components/notes/Favorites';
import NoteDetail from './components/notes/NoteDetail';
import EditForm from './components/notes/EditForm';

function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/favorites" component={Favorites}/>
       <Route exact path="/note/:id" component={NoteDetail}/>
       <Route exact path="/editform/:id" component={EditForm}/>
     </Switch>
   </Router>
  );
}

export default App;
