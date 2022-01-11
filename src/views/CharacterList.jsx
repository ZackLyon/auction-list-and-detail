import { useEffect, useState } from 'react';
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
          <ListedCharacter key={character.id} {...{ character }} />
        ))
      )}
    </div>
  );
}
