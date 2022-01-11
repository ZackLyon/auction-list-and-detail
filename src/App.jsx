import { Switch, Route } from 'react-router-dom';
import CharacterList from './views/CharacterList.jsx';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <CharacterList />
      </Route>
    </Switch>
  );
}
