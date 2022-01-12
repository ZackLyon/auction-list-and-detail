import professionMunger from '../utils/professionMunger.js';

export const getCharacters = async () => {
  try {
    const res = await fetch(
      `https://futuramaapi.herokuapp.com/api/v2/characters`
    );

    const results = await res.json();
    const characters = results
      .filter(
        (character) =>
          character.Name !== 'Abner Doubledeal' &&
          character.Name !== 'Mrs. Astor'
      )
      .map((character, i) => ({ ...character, id: i }));

    characters.forEach((character) => {
      let profession = professionMunger(character.Profession);
      character.Profession = profession;
    });

    return characters;
  } catch (error) {
    console.log(error);
    return [];
  }
};
