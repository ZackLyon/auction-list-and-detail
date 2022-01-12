import styles from './DetailedCharacter.css';

export default function DetailedCharacter({ characters, id }) {
  const character = characters[id];
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
          {character.Profession.split('\n').map((fragment, i) => (
            <div key={i}>{fragment}</div>
          ))}
        </section>
      </div>
    </div>
  );
}
