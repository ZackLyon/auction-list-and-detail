import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListedCharacter from '../components/ListedCharacter.jsx';
import { useCharacter } from '../context/CharacterContext.jsx';
import { getCharacters } from '../services/GetCharacters.js';
import styles from './CharacterList.css';

export default function CharacterList() {
  const { characters, setCharacters } = useCharacter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters().then(setCharacters).finally(setLoading(false));
  }, []);

  return (
    <div className={styles.characterContainer}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        characters.map((character) => (
          <Link to={`/characters/${character.id}`}>
            <ListedCharacter key={character.id} {...{ character }} />
          </Link>
        ))
      )}
    </div>
  );
}
