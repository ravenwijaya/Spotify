/* eslint-disable no-undef */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Home';
import { server } from '../__mock_data__/server';
import { searchResult } from '../__mock_data__/response';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('The HomePage should fetch the API then return correct response', async () => {
  render(<Home />);

  // fetchAPI
  fetch('https://api.spotify.com/v1/search', { method: 'GET' });
  fetch('https://api.spotify.com/v1/me', { method: 'GET' });
  fetch('https://api.spotify.com/v1/me/playlists', { method: 'GET' });

  await waitFor(() => {
    expect(screen.getAllByTestId('searchData')).toHaveLength(
      searchResult.tracks.items.length
    );
  });
});
