import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterList from './CharacterList.jsx';
import { CharacterProvider } from '../context/CharacterContext.jsx';

const mockServer = setupServer(
  rest.get(
    'https://futuramaapi.herokuapp.com/api/v2/characters',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            PicUrl: 'something',
            Name: 'Fry',
            Species: 'human',
            Age: '25',
            Profession: 'delivery boy',
          },
          {
            PicUrl: 'something',
            Name: 'Leela',
            Species: 'mutant',
            Age: '28',
            Profession: 'spaceship captain',
          },
          {
            PicUrl: 'something',
            Name: 'Bender',
            Species: 'robot',
            Age: '5',
            Profession: 'bending robot',
          },
        ])
      );
    }
  )
);

beforeAll(() => mockServer.listen());

afterAll(() => mockServer.close());

it('should display a loading message, then display a requested character', async () => {
  const container = render(
    <MemoryRouter initialEntries={['/']}>
      <CharacterProvider>
        <Route path="/">
          <CharacterList />
        </Route>
      </CharacterProvider>
    </MemoryRouter>
  );

  screen.getByText(/loading/i);
  await screen.findAllByText(/Fry/gi);
  await screen.findByText(/Leela/gi);
  await screen.findByText(/Bender/gi);
  expect(container).toMatchSnapshot();
});
