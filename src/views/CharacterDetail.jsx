import { useParams } from 'react-router-dom';
import DetailedCharacter from '../components/DetailedCharacter.jsx';
import { useCharacter } from '../context/CharacterContext.jsx';

export default function CharacterDetail() {
  const { id } = useParams();
  const { characters } = useCharacter();
  const character = characters[id];

  return (
    <div>
      <DetailedCharacter {...{ character }} />
    </div>
  );
}
