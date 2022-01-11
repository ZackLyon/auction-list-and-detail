import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);

  if (context === undefined) {
    throw new Error(
      'useCharacter must be used on a descendant element of the Provider'
    );
  }

  return context;
};
