import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DetailedCharacter from '../components/DetailedCharacter.jsx';
import { useCharacter } from '../context/CharacterContext.jsx';
import { getCharacters } from '../services/GetCharacters.js';

export default function CharacterDetail() {
  const { id } = useParams();
  const { characters, setCharacters } = useCharacter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters()
      .then(setCharacters)
      .finally(() => setLoading(() => false));
  }, []);

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DetailedCharacter {...{ characters, id }} />
      )}
    </div>
  );
}
