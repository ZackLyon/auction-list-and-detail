import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { CharacterProvider } from '../context/CharacterContext.jsx';
import CharacterDetail from './CharacterDetail.jsx';

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
        ])
      );
    }
  )
);

beforeAll(() => mockServer.listen());

afterAll(() => mockServer.close());

it('should display a loading message, then display a requested character', async () => {
  const container = render(
    <MemoryRouter initialEntries={['/characters/0']}>
      <CharacterProvider>
        <Route path="/characters/:id">
          <CharacterDetail />
        </Route>
      </CharacterProvider>
    </MemoryRouter>
  );

  screen.getByText(/loading/i);
  await screen.findByText(/Fry/i);
  expect(container).toMatchSnapshot();
});
