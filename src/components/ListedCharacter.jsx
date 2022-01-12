import styles from './ListedCharacter.css';

export default function ListedCharacter({ character }) {
  return (
    <div className={styles.listedCharacter}>
      <img src={character.PicUrl} />
      <h3>{character.Name}</h3>
    </div>
  );
}
