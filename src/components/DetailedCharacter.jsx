import styles from './DetailedCharacter.css';
import professionMunger from '../utils/professionMunger.js';

export default function DetailedCharacter({ character }) {
  const profession = professionMunger(character.Profession);

  return (
    <div>
      <div className={styles.detailedCharacter}>
        <img src={character.PicUrl} />
        <h1>{character.Name}</h1>
        <hr />
        <h3>
          {character.Species} from {character.Planet}
        </h3>
        <h4>Age: {character.Age}</h4>
        <section>
          {profession.split('\n').map((fragment) => (
            <div>{fragment}</div>
          ))}
        </section>
      </div>
    </div>
  );
}
