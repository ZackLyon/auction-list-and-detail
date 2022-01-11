import { Switch, Route } from 'react-router-dom';
import CharacterList from './views/CharacterList.jsx';
import './App.css';
import { CharacterProvider } from './context/CharacterContext.jsx';

export default function App() {
  return (
    <Switch>
      <CharacterProvider>
        <Route exact path="/">
          <CharacterList />
        </Route>
      </CharacterProvider>
    </Switch>
  );
}
