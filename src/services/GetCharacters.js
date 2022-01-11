export const getCharacters = async () => {
  try {
    const res = await fetch(
      `https://futuramaapi.herokuapp.com/api/v2/characters`
    );

    const characters = await res.json();
    return characters;
  } catch (error) {
    console.log(error);
    return [];
  }
};
