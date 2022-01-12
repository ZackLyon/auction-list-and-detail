import { render } from '@testing-library/react';
import ListedCharacter from './ListedCharacter.jsx';

it('should display a detailed character component', async () => {
  const character = {
    id: 0,
    PicUrl: 'something',
    Name: 'Fry',
    Species: 'human',
    Age: '25',
    Profession: 'delivery boy',
    Planet: 'earth',
  };

  const container = render(<ListedCharacter {...{ character }} />);

  expect(container).toMatchSnapshot();
});
