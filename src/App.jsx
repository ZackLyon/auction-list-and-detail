import { Switch, Route } from 'react-router-dom';
import { CharacterProvider } from './context/CharacterContext.jsx';
import CharacterList from './views/CharacterList.jsx';
import CharacterDetail from './views/CharacterDetail.jsx';
import './App.css';

export default function App() {
  return (
    <Switch>
      <CharacterProvider>
        <Route path="/characters/:id">
          <CharacterDetail />
        </Route>
        <Route exact path="/">
          <CharacterList />
        </Route>
      </CharacterProvider>
    </Switch>
  );
}
