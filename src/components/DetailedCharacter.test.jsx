import { render, screen } from '@testing-library/react';
import DetailedCharacter from './DetailedCharacter.jsx';

it('should display a detailed character component', async () => {
  const characters = [
    {
      id: 0,
      PicUrl: 'something',
      Name: 'Fry',
      Species: 'human',
      Age: '25',
      Profession: 'delivery boy',
      Planet: 'earth',
    },
  ];

  const id = 0;

  const container = render(<DetailedCharacter {...{ characters, id }} />);

  expect(container).toMatchSnapshot();
});
